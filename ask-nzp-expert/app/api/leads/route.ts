import {NextRequest,NextResponse} from 'next/server';
import {z} from 'zod';
import {db,failure,rateLimit,clientKey} from '@/lib/server';
const schema=z.object({name:z.string().min(2).max(150),company:z.string().min(2).max(150),email:z.email(),country:z.string().min(2).max(100),waste_type:z.string().min(2).max(100),annual_tonnes:z.coerce.number().positive().max(100000000),consent:z.literal(true),session_id:z.string().uuid()});
export async function POST(req:NextRequest){try{const lead=schema.parse(await req.json());await rateLimit('lead:'+clientKey(req));const {error}=await db().from('leads').insert({...lead,consent_at:new Date().toISOString()});if(error)throw error;return NextResponse.json({saved:true});}catch(e){return failure(e)}}
