"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[1973],{10247:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"get-started/tooling/cross-chain/arcana","title":"Arcana","description":"The Arcana Network Chain Abstraction (CA) SDK integrates with any web3 app and enables app users to beat liquidity fragmentation. Users can view a unified balance associated with their EoA and spend it on any chain using any third-party wallet.","source":"@site/docs/get-started/tooling/cross-chain/arcana.mdx","sourceDirName":"get-started/tooling/cross-chain","slug":"/get-started/tooling/cross-chain/arcana","permalink":"/web3-feedback/get-started/tooling/cross-chain/arcana","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/cross-chain/arcana.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{"title":"Arcana","image":"/img/socialCards/arcana.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Cross-chain tooling","permalink":"/web3-feedback/get-started/tooling/cross-chain/"},"next":{"title":"Axelar","permalink":"/web3-feedback/get-started/tooling/cross-chain/axelar"}}');var i=n(74848),t=n(28453);n.p,n.p;const r={title:"Arcana",image:"/img/socialCards/arcana.jpg"},c=void 0,o={},l=[{value:"Linea integration",id:"linea-integration",level:2},{value:"CA SDK demonstration",id:"ca-sdk-demonstration",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Swaps",id:"swaps",level:3},{value:"Bridges",id:"bridges",level:3},{value:"Decentralized exchanges (DEXs)",id:"decentralized-exchanges-dexs",level:3},{value:"Perpetuals trading",id:"perpetuals-trading",level:3},{value:"Prediction markets",id:"prediction-markets",level:3},{value:"Lending",id:"lending",level:3},{value:"Staking/restaking",id:"stakingrestaking",level:3},{value:"Resources",id:"resources",level:2}];function d(e){const a={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.a,{href:"https://arcana.network",children:"Arcana Network"})," ",(0,i.jsx)(a.a,{href:"https://docs.arcana.network/ca/introduction/ca/",children:"Chain Abstraction"})," (CA) SDK integrates with any web3 app and enables app users to beat liquidity fragmentation. Users can view a ",(0,i.jsx)(a.a,{href:"https://docs.arcana.network/concepts/ca/unified-balance/",children:"unified balance"})," associated with their EoA and spend it on any chain using any third-party wallet."]}),"\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("div",{class:"img-large",children:(0,i.jsx)("img",{src:"/img/get_started/tooling/cross_chain/arcana/chain_abstraction.png",alt:"Chain Abstraction with Arcana SDK"})})}),"\n",(0,i.jsxs)(a.p,{children:["Unified balance allows users to spend the consolidated multi-chain balance of supported tokens (for example, ETH, USDC, USDT) within the app context on any ",(0,i.jsx)(a.a,{href:"https://docs.arcana.network/web3-stack/ca_stack#chains",children:"chain"})," including Linea. This allows web3 apps to onboard users from any ecosystem effortlessly."]}),"\n",(0,i.jsx)("div",{class:"center-container",children:(0,i.jsx)("div",{class:"img-large",children:(0,i.jsx)("img",{src:"/img/get_started/tooling/cross_chain/arcana/unified_balance.png",alt:"Unified Balance"})})}),"\n",(0,i.jsx)(a.h2,{id:"linea-integration",children:"Linea integration"}),"\n",(0,i.jsxs)(a.p,{children:["To enable chain abstraction on Linea, web3 apps must install and integrate with the ",(0,i.jsx)(a.a,{href:"https://www.npmjs.com/package/@arcana/ca-sdk",children:"Arcana Chain Abstraction SDK"}),". See the ",(0,i.jsx)(a.a,{href:"https://docs.arcana.network/quick-start/ca-quick-start/",children:"quick start guide"})," and the CA ",(0,i.jsx)(a.a,{href:"https://ca-sdk-ref-guide.netlify.app/",children:"API"})," for details. Check out web3 app ",(0,i.jsx)(a.a,{href:"https://docs.arcana.network/ca/examples/",children:"integration examples"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"ca-sdk-demonstration",children:"CA SDK demonstration"}),"\n",(0,i.jsxs)(a.p,{children:["Try the ",(0,i.jsx)(a.a,{href:"https://sdk.arcana.network/",children:"CA SDK demo app"})," to see how it works for Linea. Use any third-party browser-based wallet and connect to the app."]}),"\n",(0,i.jsx)(a.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,i.jsx)(a.p,{children:"Arcana's Chain Abstraction (CA) is designed to onboard users across a wide range of applications. It is particularly impactful for DeFi applications that depend on deposits in stablecoins like USDC or USDT and native tokens like ETH."}),"\n",(0,i.jsx)(a.p,{children:"Key benefits of using Arcana's Chain Abstraction include:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Removes friction of bridging with a unified multi-chain balance"}),"\n",(0,i.jsx)(a.li,{children:"Allows larger transaction values"}),"\n",(0,i.jsx)(a.li,{children:"Helps launch apps on emerging chains while onboarding users from established ecosystems."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"swaps",children:"Swaps"}),"\n",(0,i.jsx)(a.p,{children:"Allow users to execute token swaps on a single chain DEX while using funds held across multiple chains as a unified balance. For example, a user holding USDC on Ethereum and an L2 can seamlessly swap tokens on Linea without needing to bridge or consolidate assets manually. This removes friction for users, ensuring smoother transactions and higher conversion rates for swap protocols."}),"\n",(0,i.jsx)(a.h3,{id:"bridges",children:"Bridges"}),"\n",(0,i.jsx)(a.p,{children:"Bridges enable users to move funds from Chain A to Chain B, but when users hold assets across multiple chains, they face the challenge of tracking and transferring funds chain by chain. With Arcana's CA, users can bridge their entire multi-chain balance to the desired chain in one step."}),"\n",(0,i.jsx)(a.p,{children:"For example, let us consider a case where a user holds USDC on Ethereum, Polygon, and Optimism and wants to consolidate their funds on Linea. Instead of manually bridging USDC from each chain one at a time, users can bridge their total USDC balance from all three chains to Linea in a single step."}),"\n",(0,i.jsx)(a.h3,{id:"decentralized-exchanges-dexs",children:"Decentralized exchanges (DEXs)"}),"\n",(0,i.jsx)(a.p,{children:"For liquidity providers and traders, fragmented funds across chains often hinder participation in DEXs. With Arcana's CA, users can trade or provide liquidity on a single-chain DEX using their unified balance from multiple chains. This enables more efficient capital utilization, increases trading volumes, and expands access to liquidity for DEX platforms."}),"\n",(0,i.jsx)(a.h3,{id:"perpetuals-trading",children:"Perpetuals trading"}),"\n",(0,i.jsx)(a.p,{children:"Arcana's CA allows users to trade on a perpetual protocol on one chain using a unified balance of funds held on other chains. This is particularly useful for protocols that need users to deposit stable coins to a particular address on a specific chain. Arcana's CA removes the need for manual bridging and ensures traders can respond quickly to market changes without delays in fund transfers."}),"\n",(0,i.jsx)(a.h3,{id:"prediction-markets",children:"Prediction markets"}),"\n",(0,i.jsx)(a.p,{children:"Prediction markets often have strong user bases tied to specific chains. Arcana's CA allows users to stake or wager assets on a prediction market hosted on a single chain using funds held across multiple chains, ensuring greater cross-chain participation and deeper liquidity for these markets."}),"\n",(0,i.jsx)(a.h3,{id:"lending",children:"Lending"}),"\n",(0,i.jsx)(a.p,{children:"Borrowers and lenders often face challenges when their assets are distributed across chains and they want to access new yield products on specific chains. With Arcana's CA, a user can supply liquidity to a lending protocol on one chain, such as Ethereum, using their unified balance aggregated from other chains. This leads to larger deposit and borrow transactions with access to a larger pool of capital."}),"\n",(0,i.jsx)(a.h3,{id:"stakingrestaking",children:"Staking/restaking"}),"\n",(0,i.jsx)(a.p,{children:"Restaking requires users to bring assets or derivatives to specific chains. Arcana CA enables users to stake or restake assets on a protocol running on a single chain by leveraging their unified balance across multiple chains. For instance, a user with ETH on Ethereum and Linea can stake and restake seamlessly on another chain without manual transfers."}),"\n",(0,i.jsx)(a.p,{children:"This allows users from multiple EVM ecosystems to participate in the protocol."}),"\n",(0,i.jsx)(a.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://docs.arcana.network/quick-start/ca-quick-start/",children:"Get Started with Arcana CA SDK"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://sdk.arcana.network/",children:"SDK Demo"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://blog.arcana.network/",children:"Arcana CA Blogs"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var s=n(96540);const i={},t=s.createContext(i);function r(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);