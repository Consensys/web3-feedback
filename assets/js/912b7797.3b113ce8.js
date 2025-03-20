"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8595],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}},35542:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"get-started/tooling/cross-chain/layerzero","title":"LayerZero Omnichain Messaging","description":"Omnichain interoperability protocol enabling secure cross-chain communication for Linea applications. Connect to 100+ blockchains, send messages, and deploy omnichain tokens.","source":"@site/docs/get-started/tooling/cross-chain/layerzero.mdx","sourceDirName":"get-started/tooling/cross-chain","slug":"/get-started/tooling/cross-chain/layerzero","permalink":"/web3-feedback/get-started/tooling/cross-chain/layerzero","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/cross-chain/layerzero.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{"title":"LayerZero Omnichain Messaging","image":"/img/socialCards/layerzero-omnichain-messaging.jpg","description":"Omnichain interoperability protocol enabling secure cross-chain communication for Linea applications. Connect to 100+ blockchains, send messages, and deploy omnichain tokens."},"sidebar":"getStartedSidebar","previous":{"title":"CCIP Read","permalink":"/web3-feedback/get-started/tooling/cross-chain/ccip-read"},"next":{"title":"Onthis Shortcuts","permalink":"/web3-feedback/get-started/tooling/cross-chain/shortcuts"}}');var r=s(74848),t=s(28453);const a={title:"LayerZero Omnichain Messaging",image:"/img/socialCards/layerzero-omnichain-messaging.jpg",description:"Omnichain interoperability protocol enabling secure cross-chain communication for Linea applications. Connect to 100+ blockchains, send messages, and deploy omnichain tokens."},o=void 0,c={},l=[{value:"Key features",id:"key-features",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Linea integration",id:"linea-integration",level:2},{value:"Contract addresses",id:"contract-addresses",level:3},{value:"Get started",id:"get-started",level:2},{value:"Example use cases",id:"example-use-cases",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://layerzero.network",children:"LayerZero"})," is an ",(0,r.jsx)(n.strong,{children:"omnichain interoperability protocol"})," that enables smart contracts to seamlessly communicate between different blockchain networks. With LayerZero V2, applications deployed on Linea can connect and interact with 100+ supported blockchains through secure, configurable messaging channels."]}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key features"}),"\n",(0,r.jsx)(n.p,{children:"LayerZero enables powerful cross-chain capabilities for builders on Linea:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-chain messaging"})," - Send arbitrary messages and data between contracts on different chains"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Omnichain tokens"})," - Deploy tokens (fungible ",(0,r.jsx)(n.code,{children:"OFT"})," and non-fungible ",(0,r.jsx)(n.code,{children:"ONFT"}),") that work seamlessly across multiple chains"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"External chain data access"})," (",(0,r.jsx)(n.code,{children:"lzRead"}),") - Fetch and compute onchain state from other networks"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Composed messages"})," - Chain multiple cross-chain operations together"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DVNs"})," (Decentralized Verifier Networks) independently verify that a message is valid, waiting for a configured number of block confirmations on the source chain."]}),"\n",(0,r.jsxs)(n.li,{children:["When the message is verified, ",(0,r.jsx)(n.strong,{children:"executors"})," on the destination chain deliver the message to the target contract, paying for the destination gas automatically in the background. The user only pays for gas on the source chain."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Because each application can configure its own DVN sets, your security is not locked into a single aggregator or middlechain. For more details, check out the ",(0,r.jsx)(n.a,{href:"https://docs.layerzero.network/",children:"LayerZero docs"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To run your own DVN as part of your security set, check out the ",(0,r.jsx)(n.a,{href:"https://docs.layerzero.network/v2/developers/evm/off-chain/build-dvns",children:"DVN docs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"linea-integration",children:"Linea integration"}),"\n",(0,r.jsx)(n.p,{children:"When integrating with LayerZero, there are two key aspects to understand:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://docs.layerzero.network/v2/home/protocol/layerzero-endpoint",children:"LayerZero Endpoint"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Immutable smart contract that serves as the entry and exit point for messages"}),"\n",(0,r.jsx)(n.li,{children:"Allows applications to configure security and execution parameters"}),"\n",(0,r.jsx)(n.li,{children:"Provides interfaces for sending, receiving and reading cross-chain data"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.layerzero.network/v2/home/modular-security/security-stack-dvns",children:"Security Stack"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configurable set of Decentralized Verifier Networks (DVNs) that validate messages"}),"\n",(0,r.jsx)(n.li,{children:"Allows applications to customize security and cost tradeoffs"}),"\n",(0,r.jsx)(n.li,{children:"Ensures message integrity across chains"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"contract-addresses",children:"Contract addresses"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Chain"}),(0,r.jsx)("th",{children:"Chain Id"}),(0,r.jsx)("th",{children:"Endpoint Id"}),(0,r.jsx)("th",{children:"Endpoint address"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Linea Mainnet"}),(0,r.jsx)("td",{children:"59144"}),(0,r.jsx)("td",{children:"30183"}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://layerzeroscan.com/api/explorer/linea/address/0x1a44076050125825900e736c501f859c50fE728c",children:(0,r.jsx)(n.p,{children:"0x1a44076050125825900e736c501f859c50fE728c"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Linea Sepolia Testnet"}),(0,r.jsx)("td",{children:"59141"}),(0,r.jsx)("td",{children:"40287"}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"https://layerzeroscan.com/api/explorer/lineasep-testnet/address/0x6EDCE65403992e310A62460808c4b910D972f10f",children:(0,r.jsx)(n.p,{children:"0x6EDCE65403992e310A62460808c4b910D972f10f"})})})]})]})}),"\n",(0,r.jsxs)(n.p,{children:["Once a transaction is submitted, you can trace it on ",(0,r.jsx)(n.a,{href:"https://layerzeroscan.com/",children:"LayerZero Scan"}),", which shows cross-chain message flow from source to destination in real time."]}),"\n",(0,r.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,r.jsx)(n.p,{children:"Developers should:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Deploy contracts on each chain: ",(0,r.jsx)(n.a,{href:"https://docs.layerzero.network/v2/developers/evm/create-lz-oapp/start",children:"Quickstart - Create Your First Omnichain App"})]}),"\n",(0,r.jsx)(n.li,{children:"Configure a Security Stack by selecting DVNs and block confirmations (optional)."}),"\n",(0,r.jsx)(n.li,{children:"Optionally configure an executor or use defaults to deliver messages."}),"\n",(0,r.jsx)(n.li,{children:"Send messages, send tokens (OFT, ONFT), or read state on any chain, using LayerZero."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-use-cases",children:"Example use cases"}),"\n",(0,r.jsx)(n.p,{children:"LayerZero powers various cross-chain applications across different categories:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Omnichain tokens (OFTs)"})," (e.g., ",(0,r.jsx)(n.a,{href:"https://ethena.fi/",children:"Ethena's USDe"}),", Wrapped Bitcoin)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Unified token supply across chains"}),"\n",(0,r.jsx)(n.li,{children:"Native bridging without intermediary tokens"}),"\n",(0,r.jsx)(n.li,{children:"Real-world examples include USDe, sUSDe, ENA tokens, and WBTC"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-chain DEXs"})," (e.g., ",(0,r.jsx)(n.a,{href:"https://traderjoexyz.com/",children:"Trader Joe"}),")","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Unified liquidity pools across chains"}),"\n",(0,r.jsx)(n.li,{children:"Cross-chain swaps and trading"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Omnichain lending"})," (e.g., ",(0,r.jsx)(n.a,{href:"https://radiant.capital/",children:"Radiant Capital"}),")","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Supply assets on any chain"}),"\n",(0,r.jsx)(n.li,{children:"Borrow against cross-chain collateral"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-chain governance"})," (e.g., ",(0,r.jsx)(n.a,{href:"https://stargate.finance/",children:"Stargate DAO"}),")","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Vote on one chain, execute on many"}),"\n",(0,r.jsx)(n.li,{children:"Unified governance across deployments"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Chain data oracles"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read and verify external chain state"}),"\n",(0,r.jsx)(n.li,{children:"Make decisions based on cross-chain data"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.layerzero.network/v2",children:"LayerZero Developer Documentation"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://layerzeroscan.com/",children:"LayerZero Scan"})," - Message explorer and debugging"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://discord.gg/layerzero",children:"Discord Community"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/LayerZero-Labs/",children:"GitHub"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);