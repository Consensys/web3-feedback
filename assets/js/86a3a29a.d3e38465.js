"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[7634],{28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}},62419:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"get-started/tooling/cross-chain/axelar","title":"Axelar","description":"Axelar is a blockchain of blockchains that allows","source":"@site/docs/get-started/tooling/cross-chain/axelar.mdx","sourceDirName":"get-started/tooling/cross-chain","slug":"/get-started/tooling/cross-chain/axelar","permalink":"/web3-feedback/get-started/tooling/cross-chain/axelar","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/cross-chain/axelar.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{"title":"Axelar","image":"/img/socialCards/axelar.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Arcana","permalink":"/web3-feedback/get-started/tooling/cross-chain/arcana"},"next":{"title":"Chainlink CCIP","permalink":"/web3-feedback/get-started/tooling/cross-chain/ccip"}}');var s=a(74848),i=a(28453);const r={title:"Axelar",image:"/img/socialCards/axelar.jpg"},c=void 0,l={},o=[{value:"Functionality",id:"functionality",level:2},{value:"Linea integration",id:"linea-integration",level:2},{value:"Contract addresses",id:"contract-addresses",level:3},{value:"Linea-Axelar example",id:"linea-axelar-example",level:2},{value:"Axelar use cases",id:"axelar-use-cases",level:2},{value:"Get involved",id:"get-involved",level:2}];function h(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.axelar.dev/",children:"Axelar"})," is a blockchain of blockchains that allows\nfor universal web3 interoperability. By integrating with Axelar, your\nLinea-based application now has access to the ",(0,s.jsx)(n.a,{href:"https://axelarscan.io/",children:"45+ chains"}),"\nthat are also connected via Axelar. As Axelar is a blockchain of blockchains, it\novercomes many of the challenges of more centralized interoperability solutions;\ntransactions that go through the Axelar network cannot be censored by any oracle,\nrelayer, or sequencer."]}),"\n",(0,s.jsx)(n.h2,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsx)(n.p,{children:"Axelar enables interchain features for builders on Linea:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.axelar.dev/dev/send-tokens/overview",children:"Send tokens"})," across\nblockchains"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.axelar.dev/dev/general-message-passing/overview",children:"Send general messages"}),"\nacross blockchains"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"linea-integration",children:"Linea integration"}),"\n",(0,s.jsx)(n.p,{children:"When integrating with Axelar there are two key contracts you must use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.axelar.dev/learn#gateway-smart-contracts",children:"Axelar Gateway"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On the source chain, this contract exposes the functions which you will use\nto initiate an interchain transaction."}),"\n",(0,s.jsx)(n.li,{children:"On the destination chain, this contract enables messages to be executed\nautomatically to complete the interchain transaction."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.axelar.dev/dev/general-message-passing/gas-services/intro",children:"Axelar Gas Service"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This contract is the entrypoint into Axelar's gas service, which handles\ngas payment for your transaction on both the Axelar network and the\ndestination chain. You, as the caller, now only need to cover gas on the\nsource chain."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contract-addresses",children:"Contract addresses"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Contract"}),(0,s.jsx)("th",{children:"Network"}),(0,s.jsx)("th",{children:"Address"}),(0,s.jsx)("th",{children:"networkId"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Gateway"}),(0,s.jsx)("td",{children:"Mainnet"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://lineascan.build/address/0xe432150cce91c13a887f7D836923d5597adD8E31",children:"0xe432150cce91c13a887f7D836923d5597adD8E31"})}),(0,s.jsx)("td",{children:"59144"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Gateway"}),(0,s.jsx)("td",{children:"Testnet"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://sepolia.lineascan.build/address/0xe432150cce91c13a887f7D836923d5597adD8E31",children:"0xe432150cce91c13a887f7D836923d5597adD8E31"})}),(0,s.jsx)("td",{children:"59141"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Gas Service"}),(0,s.jsx)("td",{children:"Mainnet"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://lineascan.build/address/0x2d5d7d31F671F86C782533cc367F14109a082712",children:"0x2d5d7d31F671F86C782533cc367F14109a082712"})}),(0,s.jsx)("td",{children:"59144"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Gas Service"}),(0,s.jsx)("td",{children:"Testnet"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://sepolia.lineascan.build/address/0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",children:"0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"})}),(0,s.jsx)("td",{children:"59141"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Once you have submitted your transaction, you can view it on the ",(0,s.jsx)(n.a,{href:"https://axelarscan.io/",children:"Axelarscan\nblock explorer"}),". The Axelarscan explorer is specifically\ntailored to show your interchain transaction step-by-step as it passes from the\nsource chain, via the Axelar network, to the destination chain."]}),"\n",(0,s.jsx)(n.h2,{id:"linea-axelar-example",children:"Linea-Axelar example"}),"\n",(0,s.jsxs)(n.p,{children:["For a full end-to-end example of a Linea-Axelar integration, check out our\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=-KgJZmq8Umc&t=1s",children:"video walkthrough"})," of the\nprocess. The complementary code can be found ",(0,s.jsx)(n.a,{href:"https://github.com/Olanetsoft/linea-interchain-workshop-with-axelar",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"axelar-use-cases",children:"Axelar use cases"}),"\n",(0,s.jsx)(n.p,{children:"For inspiration, here are some live use cases demonstrating the kind of\ninterchain applications that can be built on top of Axelar:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Interchain token swaps (e.g. ",(0,s.jsx)(n.a,{href:"https://app.squidrouter.com/",children:"Squid"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Squid is a new protocol built on top of Axelar that allows users to swap\ntokens with a Uniswap-like experience, leveraging Axelar for swaps between\ntokens across different blockchains. Squid reduces the need to revert to\ncentralized exchanges or multiple different exchanges to swap tokens across\nchains."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Interchain lending (e.g. ",(0,s.jsx)(n.a,{href:"https://www.primeprotocol.xyz/",children:"Prime Protocol"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A chain-agnostic prime brokerage that allows users to deposit assets from\nany connected chain and use their aggregate value as collateral for loans on\nany other connected chain. Prime offers the ability to build interchain\napplications that connect from any blockchain to any other blockchain, rather\nthan just connecting a series of blockchains to Ethereum. This interchain\ndesign allows for a variety of new DeFi use cases, including cross-chain\nmargining."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Interchain gaming (e.g. ",(0,s.jsx)(n.a,{href:"https://junkyard.wtf/",children:"Junkyard"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Web3 gaming is heavily reliant on NFTs, and enabling NFTs to be passed\nbetween blockchains is a critical next step for NFT-based games. Junkyard\nleverages Axelar for interchain NFTs: players can deposit their NFTs to the\nJunkyard contract. The NFT can come from any chain connected to the Axelar\necosystem, including Linea."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"get-involved",children:"Get involved"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Meet the community on ",(0,s.jsx)(n.a,{href:"http://discord.gg/axelar",children:"Discord"})]}),"\n",(0,s.jsxs)(n.li,{children:["Dive into the data on the ",(0,s.jsx)(n.a,{href:"http://axelarscan.io",children:"Axelarscan block explorer"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);