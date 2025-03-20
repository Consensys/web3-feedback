"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[746],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},81430:(e,n,t)=>{t.d(n,{W:()=>l});var r=t(96540),i=t(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=t.select(n),s=t.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(t,n,e)}}},82836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"get-started/how-to/run-a-node/index","title":"Run a Linea node","description":"Run a Linea node.","source":"@site/docs/get-started/how-to/run-a-node/index.mdx","sourceDirName":"get-started/how-to/run-a-node","slug":"/get-started/how-to/run-a-node/","permalink":"/web3-feedback/get-started/how-to/run-a-node/","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/how-to/run-a-node/index.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{"description":"Run a Linea node.","image":"/img/socialCards/run-a-linea-node.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Retrieve finalized L2 blocks","permalink":"/web3-feedback/get-started/how-to/finalized-block"},"next":{"title":"Besu","permalink":"/web3-feedback/get-started/how-to/run-a-node/besu"}}');var i=t(74848),s=t(28453),o=t(99563);const a={description:"Run a Linea node.",image:"/img/socialCards/run-a-linea-node.jpg"},c="Run a Linea node",l={},d=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"run-a-linea-node",children:"Run a Linea node"})}),"\n",(0,i.jsx)(n.p,{children:"This section guides you through running a Linea node using various compatible Ethereum clients."}),"\n",(0,i.jsxs)(n.admonition,{title:"important",type:"info",children:[(0,i.jsxs)(n.p,{children:["While Linea supports multiple clients, only Linea Besu currently allows you to access Linea-specific\nfeatures, such as using ",(0,i.jsx)(n.a,{href:"/web3-feedback/api/reference/",children:"Linea methods"})," (for example, ",(0,i.jsx)(n.code,{children:"linea_estimateGas"}),")\nor calling methods using the ",(0,i.jsx)(n.code,{children:"finalized"})," tag."]}),(0,i.jsx)(n.p,{children:"Linea Besu is recommended for infrastructure providers and operators who intend to run a Linea\nnode, whether for offering node services to others or for using Linea with a personal, private RPC endpoint."})]}),"\n",(0,i.jsx)(n.p,{children:'The vanilla Ethereum clients such as Besu, Geth, and Erigon are recommended if you only want to follow the\nLinea chain. They allow you to have a local copy of the Linea blockchain. This view of the state is\n"trusted" until the transaction, or the block that transaction is in, has been finalized on L1.'}),"\n",(0,i.jsx)(n.p,{children:"The following table lists the clients covered in this guide, and whether they provide direct access\nto Linea-specific features."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Runs Linea-specific features?"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/besu",children:"Besu"})}),(0,i.jsx)("td",{children:"An Java-based open-source Ethereum client that can be extended using plugins."}),(0,i.jsx)("td",{children:"\u274c"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/linea-besu",children:"Linea Besu"})}),(0,i.jsxs)("td",{children:["Besu client with plugins that implement Linea-specific features, such as ",(0,i.jsx)(n.a,{href:"/web3-feedback/api/reference/",children:"API methods"})," and a ",(0,i.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/finalized-block",children:"finalized"})," tag."]}),(0,i.jsx)("td",{children:"\u2705"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/erigon",children:"Erigon"})}),(0,i.jsx)("td",{children:"A client implementation focused on performance and saving disk space, written in Go."}),(0,i.jsx)("td",{children:"\u274c"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/geth",children:"Geth"})}),(0,i.jsx)("td",{children:"The most widely used open-source Ethereum client, written in Go."}),(0,i.jsx)("td",{children:"\u274c"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/nethermind",children:"Nethermind"})}),(0,i.jsx)("td",{children:"A highly configurable .NET-based Ethereum client."}),(0,i.jsx)("td",{children:"\u274c"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["There are no financial incentives for running a Linea node, and there is currently no option to\nvote on blocks as part of the consensus mechanism or\n",(0,i.jsx)(n.a,{href:"https://eth2book.info/capella/part3/forkchoice/#whats-a-fork-choice",children:"fork-choice"})," like on Ethereum."]}),"\n",(0,i.jsx)(o.A,{})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},99563:(e,n,t)=>{t.d(n,{A:()=>j});t(96540);var r=t(34164),i=t(93751),s=t(56289),o=t(81430),a=t(22887),c=t(50539),l=t(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=t(74848);function u(e){let{href:n,children:t}=e;return(0,h.jsx)(s.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:i,description:s}=e;return(0,h.jsxs)(u,{href:n,children:[(0,h.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[t," ",i]}),s&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:n}=e;const t=(0,i.Nr)(n),r=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,h.jsx)(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function p(e){let{item:n}=e;const t=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(n.docId??void 0);return(0,h.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,h.jsx)(p,{item:n});case"category":return(0,h.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e;const t=(0,i.$S)();return(0,h.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,h.jsx)(g,{...e});const s=(0,i.d1)(n);return(0,h.jsx)("section",{className:(0,r.A)("row",t),children:s.map(((e,n)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(x,{item:e})},n)))})}}}]);