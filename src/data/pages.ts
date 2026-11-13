export type ProductPage = {
 path:string;label:string;title:string;description:string;eyebrow:string;heading:string;intro:string;cardTitle:string;cardRows:string[][];cardNote:string;
 sections:{heading:string;nav:string;body:string[];points?:string[]}[];
 example:{eyebrow?:string;title:string;body:string;rows:string[][]};
 faqHeading?:string;faq:string[][];related:string[];relatedDescription?:string;
};
import catalogue from './pages.en.json';
export const pages=catalogue as ProductPage[];
