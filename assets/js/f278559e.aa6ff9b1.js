"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8506],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},59876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"get-started/how-to/poh-api","title":"Check Proof of Humanity","description":"Use the Linea Proof of Humanity API to verify the authenticity of your users.","source":"@site/docs/get-started/how-to/poh-api.mdx","sourceDirName":"get-started/how-to","slug":"/get-started/how-to/poh-api","permalink":"/web3-feedback/get-started/how-to/poh-api","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/how-to/poh-api.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1742476504000,"frontMatter":{"title":"Check Proof of Humanity","description":"Use the Linea Proof of Humanity API to verify the authenticity of your users.","image":"/img/socialCards/check-proof-of-humanity.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Bootnodes","permalink":"/web3-feedback/get-started/how-to/run-a-node/bootnodes"},"next":{"title":"Account abstraction","permalink":"/web3-feedback/get-started/tooling/account-abstraction/"}}');var s=n(74848),a=n(28453);n(65537),n(79329);const i={title:"Check Proof of Humanity",description:"Use the Linea Proof of Humanity API to verify the authenticity of your users.",image:"/img/socialCards/check-proof-of-humanity.jpg"},o=void 0,l={},c=[{value:"Offchain verification",id:"offchain-verification",level:2},{value:"Usage",id:"usage",level:3},{value:"Rate limiting",id:"rate-limiting",level:3},{value:"Response",id:"response",level:3},{value:"Reference",id:"reference",level:3},{value:"Signed onchain verification",id:"signed-onchain-verification",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Get signed PoH status",id:"get-signed-poh-status",level:4},{value:"Call <code>PohVerifier.sol</code>",id:"call-pohverifiersol",level:4}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Proof of Humanity was originally created to verify community members taking part in the Linea Voyage.\nIt aggregates many attestation providers, giving users many options (onchain transaction history,\nbiometrics, zero-knowledge KYC, etc.) to demonstrate their personhood, using the ",(0,s.jsx)(t.a,{href:"https://www.ver.ax/",children:"Verax Attestation Registry"}),"\nunder the hood."]}),"\n",(0,s.jsx)(t.p,{children:"Even though PoH was originally created for our own needs, the API is publicly available to the\ncommunity. This enables projects to check and verify if an address is owned by a genuine user. It\ncan be used to gate access to rewards or special services onchain (for example, to register a Linea\nName)."}),"\n",(0,s.jsxs)(t.p,{children:["To check and secure PoH status, visit the ",(0,s.jsx)(t.a,{href:"https://poh.linea.build/",children:"Linea PoH page"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"offchain-verification",children:"Offchain verification"}),"\n",(0,s.jsxs)(t.p,{children:["The API endpoint for the service is: ",(0,s.jsx)(t.code,{children:"https://linea-xp-poh-api.linea.build/"})]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.p,{children:"Call the endpoint with the format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://linea-xp-poh-api.linea.build/poh/{address}\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://linea-xp-poh-api.linea.build/poh/0xc5fd29cC1a1b76ba52873fF943FEDFDD36cF46C6"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,s.jsxs)(t.p,{children:["The API is rate-limited to 5 requests per second.",(0,s.jsx)(t.br,{}),"\n","Exceeding this limit will result in a 429 error."]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(t.p,{children:["The main focus of the response is the ",(0,s.jsx)(t.code,{children:"poh"})," field:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"false"})," = address does not have PoH status."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"true"})," = address has PoH status."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Response schema:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "poh": boolean,  // Proof of Humanity status\n    "isFlagged": boolean,  // Indicates PoH status\n    "attestations": [\n        {\n        "validated": boolean,  // Whether the attestation is verified\n        "issuerName": string,  // Attestation provider name\n        "issuerSlugName": string,  // Unique identifier for the issuer\n        "issuerDescription": string,  // Description of the attestation\n        "issuerWebsiteUrl": string,  // URL to the issuer\u2019s website\n        "issuerLogoUrl": string,  // Logo URL of the issuer\n        "group": integer  // Category of the attestation\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://linea-xp-poh-api.linea.build/#/PoH/PohController_getOnePOH",children:"Swagger UI"})," for more\ninformation."]}),"\n",(0,s.jsx)(t.h2,{id:"signed-onchain-verification",children:"Signed onchain verification"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://lineascan.build/address/0xBf14cFAFD7B83f6de881ae6dc10796ddD7220831",children:"PohVerifier.sol contract"}),"\ncan be used together with a trusted source of PoH status data."]}),"\n",(0,s.jsx)(t.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(t.h4,{id:"get-signed-poh-status",children:"Get signed PoH status"}),"\n",(0,s.jsxs)(t.p,{children:["Call the signer endpoint ",(0,s.jsx)(t.code,{children:"https://linea-poh-signer-api.linea.build/"})," in the format:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://linea-poh-signer-api.linea.build/poh/{address}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This is the ",(0,s.jsx)(t.em,{children:"trusted source"})," of PoH status data."]}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -X GET https://linea-poh-signer-api.linea.build/poh/0xc5fd29cC1a1b76ba52873fF943FEDFDD36cF46C6\n"})}),"\n",(0,s.jsx)(t.p,{children:"This returns a signed message that contains the PoH status of the provided address. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"0xa11a6c92fa0027d9de2a0c8ab363b1af083497da57f871c93aeb9efcd32ffaeb677fafb2c005e8165181713220b8a1da2f70ed31d7820b8fa086a8e7361dbf121c\n"})}),"\n",(0,s.jsxs)(t.h4,{id:"call-pohverifiersol",children:["Call ",(0,s.jsx)(t.code,{children:"PohVerifier.sol"})]}),"\n",(0,s.jsxs)(t.p,{children:["Call the ",(0,s.jsx)(t.code,{children:"PohVerifier.sol"})," smart contract's ",(0,s.jsx)(t.code,{children:"verify()"})," function with the signed message and the\naddress of the account being queried. The contract confirms that the signed message provided in the\nprevious step was signed by the signer defined in the contract, and returns a boolean demonstrating\nwhether the address has PoH status."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"verify(bytes memory signature, address human)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Parameters:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"signature"}),": The signed message from the previous step."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"address"}),": The address of the account being queried."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"verify()"})," returns a boolean:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"true"}),": The account has PoH status."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"false"}),": The account does not have PoH status."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),a=n(65627),i=n(56347),o=n(50372),l=n(30604),c=n(11861),d=n(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:s}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}}}]);