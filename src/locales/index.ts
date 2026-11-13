import enPages from '../data/pages.en.json';
import frPages from '../data/pages.fr.json';
import enManual from '../data/manual-chapters.json';
import frManual from '../data/manual-chapters.fr.json';
import en from './en.json';
import fr from './fr.json';
export const locales={en:{label:'English',prefix:'',strings:en,pages:enPages,manual:enManual},fr:{label:'Français',prefix:'/fr',strings:fr,pages:frPages,manual:frManual}};
export type Locale=keyof typeof locales;
export const languages=Object.keys(locales) as Locale[];
const paths:Record<Locale,Record<string,string>>={en:{home:'',features:'features','student-billing':'student-billing','receipts-and-payments':'receipts-and-payments',debtors:'debtors','multi-currency':'multi-currency',institutions:'institutions','institutions/schools':'institutions/schools','institutions/colleges-and-training':'institutions/colleges-and-training',about:'about',contact:'contact',help:'help',privacy:'privacy',terms:'terms','404':'404'},fr:{home:'',features:'fonctionnalites','student-billing':'facturation-apprenants','receipts-and-payments':'recus-et-paiements',debtors:'suivi-impayes','multi-currency':'multi-devises',institutions:'etablissements','institutions/schools':'etablissements/ecoles','institutions/colleges-and-training':'etablissements/enseignement-superieur-et-formation',about:'a-propos',contact:'contact',help:'help',privacy:'confidentialite',terms:'conditions','404':'404'}};
export function pageUrl(id:string,locale:Locale):string {
 if(id.startsWith('guide:')){const slug=id.slice(6);if(!locales[locale].manual.chapters.some(c=>c.slug===slug))throw new Error('Missing guide '+locale+'/'+slug);return locales[locale].prefix+'/help/'+slug+'/';}
 const path=paths[locale][id];if(path===undefined)throw new Error('Missing route '+locale+'/'+id);
 return locales[locale].prefix+'/'+(path?path+'/':'');
}
export const appUrl='https://app.bursara.com';
export function ui(locale:Locale){return locales[locale].strings;}
export function manual(locale:Locale){return locales[locale].manual;}
export function products(locale:Locale){return locales[locale].pages;}
export const productIds=enPages.map(p=>p.path);
export const publicIds=['home','contact','help','privacy','terms',...productIds,...enManual.chapters.map(c=>'guide:'+c.slug)];
for(const locale of languages){
 if(JSON.stringify(locales[locale].pages.map(p=>p.path))!==JSON.stringify(productIds))throw new Error('Product catalogue mismatch '+locale);
 if(JSON.stringify(locales[locale].manual.chapters.map(c=>c.slug))!==JSON.stringify(enManual.chapters.map(c=>c.slug)))throw new Error('Guide catalogue mismatch '+locale);
}
