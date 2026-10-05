import 'server-only';
import {createClient} from '@supabase/supabase-js';
import {NextRequest,NextResponse} from 'next/server';
export function db(){if(!process.env.SUPABASE_URL||!process.env.SUPABASE_SERVICE_ROLE_KEY)throw new Error('Database setup is pending.');return createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY,{auth:{persistSession:false}})}
export async function admin(req:NextRequest){const token=req.headers.get('authorization')?.replace(/^Bearer /,'');if(!token)throw new Error('Unauthorized');const {data,error}=await db().auth.getUser(token);if(error||!data.user||!process.env.ADMIN_USER_IDS?.split(',').includes(data.user.id))throw new Error('Unauthorized');return data.user.id;}
export function failure(e:unknown){const message=e instanceof Error?e.message:'Request failed';return NextResponse.json({error:message==='Unauthorized'?message:message==='Database setup is pending.'?message:'Unable to complete this request. Please try again or contact NZP.'},{status:message==='Unauthorized'?401:message==='Database setup is pending.'?503:400});}
export async function rateLimit(key:string){const {data,error}=await db().rpc('consume_rate_limit',{bucket:key,max_requests:20});if(error||!data)throw new Error('Request limit reached');}
export function clientKey(req:NextRequest){return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';}
