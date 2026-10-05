create extension if not exists vector with schema extensions;
create table public.sources(id uuid primary key default gen_random_uuid(), title text not null, category text not null, content text not null, public_url text not null, approved boolean not null default false, public_allowed boolean not null default false, review_note text not null, reviewed_by uuid, created_at timestamptz default now(), updated_at timestamptz default now(), check(not approved or public_allowed));
create table public.chunks(id uuid primary key default gen_random_uuid(),source_id uuid references public.sources on delete cascade,content text not null,locator text not null,embedding extensions.vector(1536) not null);
create index chunks_embedding_idx on public.chunks using hnsw (embedding extensions.vector_cosine_ops);
create table public.coefficients(id uuid primary key default gen_random_uuid(),name text not null,feedstock text not null,country text not null,source_id uuid references public.sources not null,approved boolean default false,currency text not null,min_tonnes numeric not null,max_tonnes numeric not null,min_moisture numeric not null,max_moisture numeric not null,assumptions text not null,"values" jsonb not null,reviewed_by uuid,created_at timestamptz default now(),updated_at timestamptz default now());
create table public.faqs(id uuid primary key default gen_random_uuid(),question text not null,answer text not null,source_id uuid references public.sources not null,embedding extensions.vector(1536),approved boolean default false,reviewed_by uuid,created_at timestamptz default now(),updated_at timestamptz default now());
create table public.expert_modes(id uuid primary key default gen_random_uuid(),name text unique not null,prompt text not null,enabled boolean default true,reviewed_by uuid,created_at timestamptz default now(),updated_at timestamptz default now());
insert into public.expert_modes(name,prompt) values ('Technology','Explain plasma gasification, digital chemistry and product pathways. Distinguish arc, reactor and process temperatures.'),('Feedstock','Explain evidence needed for feedstock suitability. Never assume all waste is compatible without characterisation.'),('Sustainability','Explain lifecycle boundaries, baselines, energy inputs and measurement requirements. Do not assert zero emissions or green certification without evidence.'),('Commercial','Distinguish forecasts from realised results. Explain assumptions and avoid investment recommendations.');
create table public.leads(id uuid primary key default gen_random_uuid(),name text not null,company text not null,email text not null,country text not null,waste_type text not null,annual_tonnes numeric not null check(annual_tonnes>0),consent boolean not null check(consent),consent_at timestamptz not null,session_id uuid not null,created_at timestamptz default now(),updated_at timestamptz default now());
create table public.audit_log(id uuid primary key default gen_random_uuid(),actor uuid not null,entity text not null,entity_id uuid not null,action text not null,created_at timestamptz default now());
create table public.rate_limits(bucket text not null,window_start timestamptz not null,requests integer default 1,primary key(bucket,window_start));
alter table public.sources enable row level security;
alter table public.chunks enable row level security;
alter table public.coefficients enable row level security;
alter table public.faqs enable row level security;
alter table public.expert_modes enable row level security;
alter table public.leads enable row level security;
alter table public.audit_log enable row level security;
alter table public.rate_limits enable row level security;
-- No browser policies: all database access passes through authenticated server routes.
create function public.match_chunks(query_embedding extensions.vector(1536),match_count integer,threshold float) returns table(id uuid,content text,locator text,title text,public_url text,similarity float) language sql stable security invoker set search_path=public,extensions as $$
select * from (
select c.id,c.content,c.locator,s.title,s.public_url,1-(c.embedding <=> query_embedding) as similarity from public.chunks c join public.sources s on s.id=c.source_id where s.approved and s.public_allowed
union all
select f.id,f.question||E'\n'||f.answer,'Approved FAQ',s.title,s.public_url,1-(f.embedding <=> query_embedding) from public.faqs f join public.sources s on s.id=f.source_id where f.approved and f.embedding is not null and s.approved and s.public_allowed
) evidence where similarity>=threshold order by similarity desc limit least(match_count,8);
$$;
create function public.replace_source_chunks(source_uuid uuid,new_chunks jsonb) returns void language plpgsql security invoker set search_path=public,extensions as $$
begin delete from public.chunks where source_id=source_uuid;insert into public.chunks(source_id,content,locator,embedding) select source_uuid,x->>'content',x->>'locator',(x->>'embedding')::vector from jsonb_array_elements(new_chunks) x;end;
$$;
create function public.consume_rate_limit(bucket text,max_requests integer) returns boolean language plpgsql security invoker set search_path=public as $$
declare n integer;w timestamptz:=date_trunc('minute',now());begin insert into rate_limits(bucket,window_start) values(consume_rate_limit.bucket,w) on conflict on constraint rate_limits_pkey do update set requests=rate_limits.requests+1 returning requests into n;delete from rate_limits where window_start<now()-interval '1 day';return n<=max_requests;end;
$$;
revoke all on public.sources,public.chunks,public.coefficients,public.faqs,public.expert_modes,public.leads,public.audit_log,public.rate_limits from anon,authenticated;
revoke execute on function public.match_chunks(extensions.vector,integer,float) from public,anon,authenticated;
revoke execute on function public.replace_source_chunks(uuid,jsonb) from public,anon,authenticated;
revoke execute on function public.consume_rate_limit(text,integer) from public,anon,authenticated;
grant all on public.sources,public.chunks,public.coefficients,public.faqs,public.expert_modes,public.leads,public.audit_log,public.rate_limits to service_role;
grant execute on function public.match_chunks(extensions.vector,integer,float),public.replace_source_chunks(uuid,jsonb),public.consume_rate_limit(text,integer) to service_role;
-- Revoking source approval automatically removes dependent calculation/FAQ approvals.
create function public.revoke_dependents() returns trigger language plpgsql set search_path=public as $$begin if not new.approved or not new.public_allowed or new.content is distinct from old.content or new.public_url is distinct from old.public_url then update coefficients set approved=false where source_id=new.id;update faqs set approved=false where source_id=new.id;end if;return new;end;$$;
create trigger revoke_dependents after update on public.sources for each row execute function public.revoke_dependents();

revoke execute on function public.revoke_dependents() from public,anon,authenticated;
