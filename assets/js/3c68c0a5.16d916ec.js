"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[1696],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},65537:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),a=r(34164),s=r(65627),i=r(56347),l=r(50372),o=r(30604),c=r(11861),d=r(78749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:r,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),j=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=r(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},79329:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},81430:(e,n,r)=>{r.d(n,{W:()=>c});var t=r(96540),a=r(40797);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const a=r.select(n),s=r.pluralForms.indexOf(a);return t[Math.min(s,t.length-1)]}(r,n,e)}}},89854:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"api/reference/index","title":"Use the Linea API","description":"How to make calls to the Linea blockchain using the Linea JSON-RPC APIs","source":"@site/docs/api/reference/index.mdx","sourceDirName":"api/reference","slug":"/api/reference/","permalink":"/web3-feedback/api/reference/","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/reference/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{"title":"Use the Linea API","description":"How to make calls to the Linea blockchain using the Linea JSON-RPC APIs","image":"/img/socialCards/use-the-linea-api.jpg"},"sidebar":"apiSidebar","previous":{"title":"ITokenBridge","permalink":"/web3-feedback/api/linea-smart-contracts/tokenbridge/interfaces/itokenbridge"},"next":{"title":"eth_sendRawTransaction","permalink":"/web3-feedback/api/reference/eth-sendrawtransaction"}}');var a=r(74848),s=r(28453),i=(r(99563),r(65537)),l=r(79329);const o={title:"Use the Linea API",description:"How to make calls to the Linea blockchain using the Linea JSON-RPC APIs",image:"/img/socialCards/use-the-linea-api.jpg"},c=void 0,d={},u=[{value:"Make calls",id:"make-calls",level:2},{value:"curl",id:"curl",level:3},{value:"Node (JavaScript)",id:"node-javascript",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Node Fetch",id:"node-fetch",level:4},{value:"Axios",id:"axios",level:4},{value:"Viem",id:"viem",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Linea supports the standard Ethereum JSON-RPC API methods, meaning the developer experience is\nidentical to building on Ethereum itself. However, some methods differ to Ethereum, and are covered\nin this section."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["View the full list of Linea methods in the\n",(0,a.jsx)(n.a,{href:"https://docs.metamask.io/services/reference/linea/json-rpc-methods/",children:"MetaMask services documentation"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"You must connect to an RPC endpoint when making calls to the Linea blockchain. Use one or more of the\nfollowing options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Run your own node"}),": Either ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/",children:"run your own node by setting it up yourself"}),", or\n",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/node-providers/",children:"use a node provider"}),".\nWe recommend running ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/linea-besu",children:"Linea Besu"})," if you want to run a node yourself and interact with the\nblockchain."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Connect to a private RPC endpoint"}),": ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/node-providers/#private-rpc-endpoints",children:"Connect to a blockchain infrastructure provider"}),"\nsuch as Infura or Alchemy. Multiple providers offer free tier access."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Use a public endpoint"}),": ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/node-providers/#public-rpc-endpoints",children:"Public endpoints"})," are\nfree to use but are rate limited and not suitable for production environments."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"make-calls",children:"Make calls"}),"\n",(0,a.jsx)(n.p,{children:"The following examples call the Linea API methods using an Infura endpoint, however you can substitute\nthe endpoint with whichever endpoint you prefer."}),"\n",(0,a.jsxs)(n.p,{children:["In the examples, replace ",(0,a.jsx)(n.code,{children:"<YOUR-API-KEY>"})," with your actual Infura API key."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["View the ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/node-providers/",children:"list of node providers"})," if you require an endpoint."]})}),"\n",(0,a.jsx)(n.h3,{id:"curl",children:"curl"}),"\n",(0,a.jsxs)(n.p,{children:["Run the ",(0,a.jsx)(n.a,{href:"https://curl.se/",children:(0,a.jsx)(n.code,{children:"curl"})})," command in a terminal:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl https://linea-mainnet.infura.io/v3/<YOUR-API-KEY> \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": 1}\'\n'})}),"\n",(0,a.jsx)(n.h3,{id:"node-javascript",children:"Node (JavaScript)"}),"\n",(0,a.jsx)(n.p,{children:"The following examples use various JavaScript libraries to make calls to the Linea blockchain."}),"\n",(0,a.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"}),"\nor ",(0,a.jsx)(n.a,{href:"https://yarnpkg.com/getting-started/install",children:"yarn"})," as the package manager. Then, in your project\nfolder, initialise your new project:"]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm init -y\n"})})}),(0,a.jsx)(l.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn init -y\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"node-fetch",children:"Node Fetch"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In your project folder, install the ",(0,a.jsx)(n.code,{children:"node-fetch"})," package:"]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i node-fetch\n"})})}),(0,a.jsx)(l.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add node-fetch\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create your JavaScript file and copy the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const fetch = require("node-fetch");\n\nfetch("https://linea-mainnet.infura.io/v3/<YOUR-API-KEY>", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n  },\n  body: JSON.stringify({\n    jsonrpc: "2.0",\n    method: "eth_blockNumber",\n    params: [],\n    id: 1,\n  }),\n})\n  .then((response) => response.json())\n  .then((data) => {\n    console.log(data)\n  })\n  .catch((error) => {\n    console.error(error)\n  })\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"axios",children:"Axios"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In your project folder, install the ",(0,a.jsx)(n.code,{children:"axios"})," package:"]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i axios\n"})})}),(0,a.jsx)(l.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add axios\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create your JavaScript file and copy the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'const axios = require("axios")\n\naxios\n  .post("https://linea-mainnet.infura.io/v3/<YOUR-API-KEY>", {\n    jsonrpc: "2.0",\n    method: "eth_blockNumber",\n    params: [],\n    id: 1,\n  })\n  .then((response) => {\n    console.log(response.data)\n  })\n  .catch((error) => {\n    console.error(error)\n  })\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"viem",children:"Viem"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In your project folder, install the ",(0,a.jsx)(n.code,{children:"viem"})," package:"]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i viem\n"})})}),(0,a.jsx)(l.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add viem\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create your JavaScript file and copy the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"const { createClient, http } = require('viem');\n\nconst client = createClient({\n  transport: http('https://linea-mainnet.infura.io/v3/<YOUR-API-KEY>')\n});\n\nclient.request({\n  method: 'eth_blockNumber',\n  params: []\n})\n.then((blockNumber) => {\n  console.log(parseInt(blockNumber, 16)); // Convert hex to decimal\n})\n.catch((error) => {\n  console.error(error);\n});\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Run the code using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node index.js\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},99563:(e,n,r)=>{r.d(n,{A:()=>g});r(96540);var t=r(34164),a=r(93751),s=r(56289),i=r(81430),l=r(22887),o=r(50539),c=r(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function h(e){let{href:n,children:r}=e;return(0,u.jsx)(s.A,{href:n,className:(0,t.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:n,icon:r,title:a,description:s}=e;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:a,children:[r," ",a]}),s&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:n}=e;const r=(0,a.Nr)(n),t=function(){const{selectMessage:e}=(0,i.W)();return n=>e(n,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function f(e){let{item:n}=e;const r=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,a.cC)(n.docId??void 0);return(0,u.jsx)(p,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(f,{item:n});case"category":return(0,u.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function j(e){let{className:n}=e;const r=(0,a.$S)();return(0,u.jsx)(g,{items:r.items,className:n})}function g(e){const{items:n,className:r}=e;if(!n)return(0,u.jsx)(j,{...e});const s=(0,a.d1)(n);return(0,u.jsx)("section",{className:(0,t.A)("row",r),children:s.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},n)))})}}}]);