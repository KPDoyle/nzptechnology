import {readFileSync} from 'node:fs';
import {createClient} from '@supabase/supabase-js';
if(!process.env.SUPABASE_URL||!process.env.SUPABASE_SERVICE_ROLE_KEY)throw new Error('Configure Supabase before importing');
const db=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY);
const rows=JSON.parse(readFileSync(process.argv[2]||'private-imports/review-pack.json','utf8'));
for(const row of rows){const {data}=await db.from('sources').select('id').eq('title',row.title).limit(1);if(data?.length)continue;const {error}=await db.from('sources').insert({...row,approved:false,public_allowed:false});if(error)throw error;console.log('Imported for review:',row.title)}
