"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[2086],{28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}},81430:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(96540),o=r(40797);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},91699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"get-started/tooling/oracles/index","title":"Oracles","description":"","source":"@site/docs/get-started/tooling/oracles/index.mdx","sourceDirName":"get-started/tooling/oracles","slug":"/get-started/tooling/oracles/","permalink":"/web3-feedback/get-started/tooling/oracles/","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/oracles/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1742476504000,"frontMatter":{"title":"Oracles","image":"/img/socialCards/oracles.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"eRPC","permalink":"/web3-feedback/get-started/tooling/node-providers/erpc"},"next":{"title":"API3","permalink":"/web3-feedback/get-started/tooling/oracles/api3"}}');var o=r(74848),s=r(28453),c=r(99563);const i={title:"Oracles",image:"/img/socialCards/oracles.jpg"},l=void 0,a={},d=[];function u(e){return(0,o.jsx)(c.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},99563:(e,t,r)=>{r.d(t,{A:()=>b});r(96540);var n=r(34164),o=r(93751),s=r(56289),c=r(81430),i=r(22887),l=r(50539),a=r(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function m(e){let{href:t,children:r}=e;return(0,u.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,u.jsx)(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}}}]);