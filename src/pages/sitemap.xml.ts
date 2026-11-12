import {pages} from '../data/pages';
import manual from '../data/manual-chapters.json';
export const prerender=true;
export function GET(){
 const paths=['','contact','help','privacy','terms',...pages.map(page=>page.path),...manual.chapters.map(chapter=>'help/'+chapter.slug)];
 return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(path=>'<url><loc>https://bursara.com/'+(path?path+'/':'')+'</loc></url>').join('')+'</urlset>',{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
