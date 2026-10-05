import {build} from 'esbuild';
import {mkdir,readFile,writeFile,rm} from 'node:fs/promises';
import path from 'node:path';
await build({entryPoints:['src/prerender.jsx'],outfile:'.prerender/render.mjs',bundle:true,format:'esm',platform:'node',packages:'external',jsx:'automatic',logLevel:'silent'});
const {render,routes}=await import('../.prerender/render.mjs');
const template=await readFile('dist/index.html','utf8');
const origin='https://nzptechnology.vercel.app';
for(const [route,title,description] of routes){
 const html=template.replace('<div id="root"></div>',`<div id="root">${render(route)}</div>`).replace(/<title>.*?<\/title>/,`<title>${title.replaceAll('&','&amp;')} | Net Zero Platforms</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${description.replaceAll('&','&amp;').replaceAll('"','&quot;')}"><link rel="canonical" href="${origin}${route}"><meta property="og:title" content="${title.replaceAll('"','&quot;')} | Net Zero Platforms"><meta property="og:description" content="${description.replaceAll('"','&quot;')}"><meta property="og:type" content="website"><meta property="og:url" content="${origin}${route}">`);
 const dir=route==='/'?'dist':path.join('dist',route.slice(1));await mkdir(dir,{recursive:true});await writeFile(path.join(dir,'index.html'),html);
}
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(([r])=>`<url><loc>${origin}${r}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await rm('.prerender',{recursive:true,force:true});console.log(`Prerendered ${routes.length} routes with page titles, descriptions and sitemap.`);
