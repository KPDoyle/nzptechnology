import type { NextConfig } from 'next';
const config: NextConfig = {async headers(){return [{source:'/:path*',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Content-Security-Policy',value:`frame-ancestors 'self' ${process.env.EMBED_ORIGINS || 'https://www.nzp.technology https://nzp.technology'}`}]},{source:'/api/:path*',headers:[{key:'Cache-Control',value:'no-store'}]}]}};
export default config;
