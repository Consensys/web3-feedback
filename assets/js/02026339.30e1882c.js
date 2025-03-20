"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[6574],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},35985:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"get-started/tooling/data-indexers/flair","title":"Flair","description":"Real-time and historical custom data indexing for any evm chain.","source":"@site/docs/get-started/tooling/data-indexers/flair.mdx","sourceDirName":"get-started/tooling/data-indexers","slug":"/get-started/tooling/data-indexers/flair","permalink":"/web3-feedback/get-started/tooling/data-indexers/flair","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/data-indexers/flair.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1742476504000,"frontMatter":{"title":"Flair","image":"/img/socialCards/flair.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Etherscan","permalink":"/web3-feedback/get-started/tooling/data-indexers/etherscan"},"next":{"title":"Overview","permalink":"/web3-feedback/get-started/tooling/data-indexers/goldsky/overview"}}');var a=t(74848),s=t(28453);const r={title:"Flair",image:"/img/socialCards/flair.jpg"},l=void 0,o={},d=[{value:"Why Flair?",id:"why-flair",level:2},{value:"Features",id:"features",level:2},{value:"Get started",id:"get-started",level:2},{value:"Examples",id:"examples",level:2},{value:"DeFi",id:"defi",level:3},{value:"NFT",id:"nft",level:3},{value:"Need help?",id:"need-help",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Real-time and historical custom data indexing for any evm chain."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://flair.dev",children:"Flair"})," offers reusable ",(0,a.jsx)(n.strong,{children:"indexing primitives"})," (such as\nfault-tolerant RPC ingestors, custom processors, re-org aware database\nintegrations) for receiving, transforming, storing, and accessing your onchain\ndata."]}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("a",{href:"https://docs.flair.dev/",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/flair/Linea_Flair_1.png",alt:"Flair architecture"})})})}),"\n",(0,a.jsx)(n.h2,{id:"why-flair",children:"Why Flair?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\ud83d\ude80 A ",(0,a.jsx)(n.strong,{children:"parallel and distributed processing paradigm"}),", rather than constrained\nsequential processing, supports your indexing stack's scalability and\nresiliency."]}),"\n",(0,a.jsxs)(n.li,{children:["\ud83e\udde9 Focused on ",(0,a.jsx)(n.strong,{children:"primitives"}),", which means on the left you plug in an RPC and\non the right you output the data to any destination database."]}),"\n",(0,a.jsxs)(n.li,{children:["\ud83d\ude84 Native ",(0,a.jsx)(n.strong,{children:"real-time stream processing"})," for certain data workloads (such as\naggregations, rollups) for things like total volume per pool, or total\nportfolio per user wallet."]}),"\n",(0,a.jsxs)(n.li,{children:["\u2601\ufe0f ",(0,a.jsx)(n.strong,{children:"Managed"})," cloud services avoid DevOps and irrelevant engineering costs\nfor dapp developers."]}),"\n",(0,a.jsxs)(n.li,{children:["\ud83e\uddd1\u200d\ud83d\udcbb Avoid decentralization ",(0,a.jsx)(n.strong,{children:"overhead"})," (consensus, network hops, etc.). We\nbelieve the best UX for dapps reading data must be as close to the developers\nas possible."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u2705 Listen to ",(0,a.jsx)(n.strong,{children:"any EVM chain"})," with just an RPC URL.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Free managed RPC URLs for 8+ popular chains already included."}),"\n",(0,a.jsx)(n.li,{children:"Works with both websocket and https-only RPCs."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\u2705 Track and ingest ",(0,a.jsx)(n.strong,{children:"any contract"})," for ",(0,a.jsx)(n.strong,{children:"any event topic."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Auto-track new contracts deployed from factory contracts."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\u2705 ",(0,a.jsx)(n.strong,{children:"Custom processor scripts"})," with Javascript runtime (with ",(0,a.jsx)(n.strong,{children:"Typescript"}),"\nsupport)","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Make external API or Webhook calls to third-party or your backend."}),"\n",(0,a.jsx)(n.li,{children:"Get current or historical USD value of any ERC-20 token amount of any\ncontract address on any chain."}),"\n",(0,a.jsx)(n.li,{children:"Use any external NPM library."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\u2705 ",(0,a.jsx)(n.strong,{children:"Stream"})," any stored data to your destination database (Postgres, MongoDB,\nMySQL, Kafka, Elasticsearch, Timescale, etc)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Clone the ",(0,a.jsx)(n.a,{href:"https://github.com/flair-sdk/starter-boilerplate",children:"starter boilerplate"}),"\ntemplate and follow the instructions:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/flair-sdk/starter-boilerplate.git\n# ... follow instructions in README.md\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Boilerplate instructions will create a ",(0,a.jsx)(n.strong,{children:"new cluster"}),", generate ",(0,a.jsx)(n.strong,{children:"an API Key"}),",\nand set up a ",(0,a.jsx)(n.code,{children:"manifest.yml"})," to index your ",(0,a.jsx)(n.strong,{children:"first contract"})," with ",(0,a.jsx)(n.strong,{children:"sample\ncustom processor"})," scripts."]}),(0,a.jsxs)(n.p,{children:["Learn more about the ",(0,a.jsxs)(n.a,{href:"https://docs.flair.dev/reference/manifest.yml",children:["structure of ",(0,a.jsx)(n.code,{children:"manifest.yml"})]}),"."]})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Configure Linea RPC nodes. Set a unique namespace, Linea ",(0,a.jsx)(n.code,{children:"chainId"})," and RPC\nendpoint in your ",(0,a.jsx)(n.code,{children:"config"}),". Remember that you can add up to 10 RPC endpoints\nfor resiliency."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'{\n  "cluster": "dev",\n  "namespace": "my-awesome-linea-indexing-dev",\n  "indexers":\n    [\n      {\n        "chainId": 59140,\n        "enabled": true,\n        "ingestionFilterGroup": "default",\n        "processingFilterGroup": "default",\n        "sources": [\n            # Having at least 1 websocket endpoint is highly recommended\n            "wss://linea-mainnet.infura.io/v3/xxxxxxxxxx",\n            "https://linea-mainnet.infura.io/v3/xxxxxxxxxx",\n            # You can add multiple endpoints for failover\n            "https://rpc.linea.build",\n          ],\n      },\n    ],\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Sync some historical data using the ",(0,a.jsxs)(n.a,{href:"https://docs.flair.dev/reference/backfilling",children:[(0,a.jsx)(n.code,{children:"backfill"})," command"]}),".\nRemember that the ",(0,a.jsx)(n.code,{children:"enabled: true"})," flag in your ",(0,a.jsx)(n.code,{children:"config"})," already enables your\nindexer to capture data in real-time."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# backfill certain contracts or block ranges\npnpm flair backfill --chain 59140 --address 0x0872ec4426103482a50f26ffc32acefcec61b3c9 -d backward --max-blocks 10000\n# backfill for a specific block number, if you have certain events you wanna test with\npnpm flair backfill --chain 59140 -b 409652\n# backfill for the recent data in the last X minute\npnpm flair backfill --chain 59140 --min-timestamp="30 mins ago" -d backward\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.flair.dev/#getting-started",children:"Query"})," your custom indexed data."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Stream the data to your ",(0,a.jsx)(n.a,{href:"https://docs.flair.dev/reference/database#your-own-database",children:"own database"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.p,{children:"Explore real-world usage of Flair indexing primitives for various use cases."}),"\n",(0,a.jsx)(n.h3,{id:"defi",children:"DeFi"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/aggregate-protocol-fees-in-usd",children:"Aggregate protocol fees in USD across multiple chains"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/health-factor-with-factory-tracking",children:'Calculate "Health Factor" of positions with contract factory tracking'})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/uniswap-v2-events-from-all-contracts-with-usd-price",children:"Index Uniswap v2 swaps with USD price for all addresses"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"nft",children:"NFT"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/erc721-and-erc1155-nft-indexing",children:"Index ERC-721 and ERC-1155 NFTs on any EVM chain with an RPC URL"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"need-help",children:"Need help?"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.flair.dev/talk-to-an-engineer",children:"Our engineers"})," are available to\nhelp you at any stage."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);