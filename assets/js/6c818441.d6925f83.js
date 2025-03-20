"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8610],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}},69910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"get-started/tooling/data-indexers/envio","title":"Envio","description":"Envio is a customizable, real-time indexing solution that","source":"@site/docs/get-started/tooling/data-indexers/envio.mdx","sourceDirName":"get-started/tooling/data-indexers","slug":"/get-started/tooling/data-indexers/envio","permalink":"/web3-feedback/get-started/tooling/data-indexers/envio","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/data-indexers/envio.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{"title":"Envio","image":"/img/socialCards/envio.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Dune","permalink":"/web3-feedback/get-started/tooling/data-indexers/dune"},"next":{"title":"Etherscan","permalink":"/web3-feedback/get-started/tooling/data-indexers/etherscan"}}');var r=t(74848),s=t(28453);const a={title:"Envio",image:"/img/socialCards/envio.jpg"},o=void 0,l={},d=[{value:"Envio HyperSync",id:"envio-hypersync",level:2},{value:"Other features",id:"other-features",level:2},{value:"Get started",id:"get-started",level:2},{value:"Get help",id:"get-help",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://envio.dev/",children:"Envio"})," is a customizable, real-time indexing solution that\nprovides developers with a seamless, efficient way to index and aggregate\nblockchain data. The indexed data is accessible through GraphQL queries,\nproviding developers with the ability to flexibly retrieve specific information."]}),"\n",(0,r.jsx)(n.p,{children:"Envio offers native support for Linea (both testnet and mainnet) and has been\ndesigned to support high-throughput blockchain applications that rely on\nreal-time data for their business requirements."}),"\n",(0,r.jsx)(n.p,{children:"Designed to optimize the user experience, Envio offers automatic code\ngeneration, flexible language support, quickstart templates, and a reliable,\ncost-effective hosted service."}),"\n",(0,r.jsx)(n.p,{children:"Indexers on Envio can be written in JavaScript, TypeScript, or ReScript."}),"\n",(0,r.jsx)(n.h2,{id:"envio-hypersync",children:"Envio HyperSync"}),"\n",(0,r.jsxs)(n.p,{children:["Envio offers support for ",(0,r.jsx)(n.a,{href:"https://docs.envio.dev/docs/hypersync",children:"HyperSync"})," on\nLinea Mainnet."]}),"\n",(0,r.jsx)(n.p,{children:"HyperSync is an indexed layer of the Linea blockchain, providing accelerated\nAPIs (JSON-RPC bypass) for fast historical data syncing. Developers do not need\nto worry about RPC URLs, rate-limited APIs, or managing infrastructure, and can\nsync large datasets in a few minutes, something that would usually take 20x\nlonger via JSON-RPC."}),"\n",(0,r.jsx)(n.h2,{id:"other-features",children:"Other features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fully customizable to meet your unique data needs."}),"\n",(0,r.jsx)(n.li,{children:"Aggregate data from multi-chain/cross-chain deployments into a unified GraphQL\nAPI (or REST API)."}),"\n",(0,r.jsx)(n.li,{children:"Detailed logging and error messaging for effective troubleshooting and\ndebugging."}),"\n",(0,r.jsx)(n.li,{children:"Quickstart templates with pre-defined indexing logic for popular OpenZeppelin\ncontracts (ERC-20, ERC-721, ERC-1155, etc.)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,r.jsx)(n.p,{children:"The following files are required from the user to run the Envio indexer:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration (defaults to ",(0,r.jsx)(n.code,{children:"config.yaml"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["GraphQL Schema (defaults to ",(0,r.jsx)(n.code,{children:"schema.graphql"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Event Handlers (defaults to ",(0,r.jsx)(n.code,{children:"src/EventHandlers.*"})," depending on the language\nchosen)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These files are auto-generated according to the template and language chosen by\nrunning the ",(0,r.jsx)(n.code,{children:"envio init"})," command."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.a,{href:"https://docs.envio.dev/docs/quickstart",children:["See our ",(0,r.jsx)(n.strong,{children:"quickstart guide"}),"."]})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'? Would you like to start from a template or migrate from a subgraph?\n> "Template"\n  "SubgraphMigration"\n[\u2191\u2193 to move, enter to select, type to filter]\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then choose a template out of the possible options:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'? Which template would you like to use?\n> "Blank"\n  "Greeter"\n  "ERC-20"\n[\u2191\u2193 to move, enter to select, type to filter]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then choose a language from ",(0,r.jsx)(n.strong,{children:"Javascript"}),", ",(0,r.jsx)(n.strong,{children:"Typescript"}),", or ",(0,r.jsx)(n.strong,{children:"Rescript"})," to\nwrite the event handlers file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'? Which language would you like to use?\n> "Javascript"\n  "Typescript"\n  "Rescript"\n[\u2191\u2193 to move, enter to select, type to filter]\n'})}),"\n",(0,r.jsx)(n.p,{children:"This will create the config, schema and event handlers files according to the\ntemplate and language chosen."}),"\n",(0,r.jsx)(n.h2,{id:"get-help",children:"Get help"}),"\n",(0,r.jsx)(n.p,{children:"Indexing can be a rollercoaster, especially for more complex use cases. Our\nengineers are available to help you with your data availability needs."}),"\n",(0,r.jsxs)(n.p,{children:["You can schedule an ",(0,r.jsx)(n.a,{href:"https://calendly.com/sven-float-shipping/envio",children:"intro call"}),"\nto talk about your use case and where Envio can provide value."]}),"\n",(0,r.jsx)(n.p,{children:"Join our growing community of elite builders, and find peace of mind with Envio."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://discord.gg/mZHNWgNCAc",children:"Discord"})}),"\n",(0,r.jsxs)(n.li,{children:["Email: ",(0,r.jsx)(n.a,{href:"mailto:hello@envio.dev",children:"hello@envio.dev"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);