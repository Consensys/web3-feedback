"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8401],{19561:(e,t,a)=>{a.d(t,{A:()=>S});var s=a(96540),n=a(34164),o=a(86682),i=a(17081),r=a(81130),c=a(15833),l=a(55730),d=a(91386),h=a(27521),u=a(91990),m=a(38294),b=a(57519),f=a(28467);const p={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ",feedbackContainer:"feedbackContainer_C8Ks",feedbackPrompt:"feedbackPrompt_UaEh",feedbackButtons:"feedbackButtons_X7j4",feedbackButton:"feedbackButton_ht6A",thumbsUp:"thumbsUp_trTO",thumbsDown:"thumbsDown_spKh",thankYouMessage:"thankYouMessage_dh1N",fadeIn:"fadeIn_JNKh",loadingIndicator:"loadingIndicator_oi1c",errorMessage:"errorMessage_ZFST","fade-in":"fade-in_eJfq"};var g=a(56347),x=a(52362),j=a(74848);function k(){return(0,g.zy)().pathname.includes("/tooling")?(0,j.jsx)("div",{style:{marginTop:"2rem"},children:(0,j.jsxs)(x.A,{type:"info",title:"Want to be featured here?",children:["Have you built a tool for Linea? Contribute to the docs to add it here! See our"," ",(0,j.jsxs)("a",{href:"https://github.com/Consensys/doc.linea?tab=readme-ov-file#contribute",children:[" ","guide to contributing"]}),"."]})}):null}function y(){return(0,g.zy)().pathname.includes("/api/linea-smart-contracts")?(0,j.jsx)("div",{style:{marginTop:"2rem"},children:(0,j.jsxs)(x.A,{type:"warning",title:"Contributions not accepted",children:["These reference pages are automatically generated based on Linea's"," ",(0,j.jsx)("a",{href:"https://github.com/Consensys/linea-monorepo/tree/main/contracts/src",children:"smart contracts"}),". To ensure they accurately match the deployed smart contracts, we cannot accept any contributions that edit these pages."]})}):null}var v=a(8532),w=a(73622),I=a(54433),C=a(16954);const _="0xF494B93E9661333d0e7Ca1B880B9Aaf79Cb84697",A="0xb3cb018b837f70fa9cbb59bcfc59049fb529151399345845bae3d380b81c4120",N=["function attest(tuple(bytes32 schemaId, uint64 expirationDate, bytes subject, bytes attestationData) attestationPayload, bytes[] validationPayload) public payable"],M=()=>{const{colorMode:e}=(0,v.G)(),[t,a]=(0,s.useState)(e),[n,o]=(0,s.useState)(!1),[i,r]=(0,s.useState)(!1),[c,l]=(0,s.useState)(null),[d,h]=(0,s.useState)(""),[u,m]=(0,s.useState)(null),{metaMaskAccount:b,metaMaskWalletIdConnectHandler:f,metaMaskProvider:g,sdk:x}=(0,s.useContext)(C.y);(0,s.useEffect)((()=>{a(e)}),[e]),(0,s.useEffect)((()=>{"undefined"!=typeof window&&h(window.location.href)}),[]);const k=async e=>{if(console.log(`Preparing to submit ${e?"positive":"negative"} feedback for ${d}`),!b)return console.log("No wallet connected. Opening MetaMask..."),void f();r(!0),l(null),m(null);try{console.log("Connected wallet address:",b);const a=g;if(!a)throw new Error("MetaMask provider not available");console.log("Getting chain ID...");const s=await a.request({method:"eth_chainId"}),n=parseInt(s,16);if(console.log("Current chain ID:",n),59141!==n){console.log("Switching to Linea Sepolia...");try{await a.request({method:"wallet_switchEthereumChain",params:[{chainId:"0xe707"}]})}catch(t){if(4902!==t.code)throw t;await a.request({method:"wallet_addEthereumChain",params:[{chainId:"0xe707",chainName:"Linea Sepolia",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://rpc.sepolia.linea.build"],blockExplorerUrls:["https://sepolia.lineascan.build/"]}]})}}const i=new w.KA(N),r=new I.y,c=r.encode(["bool","string","address"],[e,d,b]),l=r.encode(["address"],[b]),h={schemaId:A,expirationDate:0,subject:l,attestationData:c},u=i.encodeFunctionData("attest",[h,[]]);console.log("Getting gas price...");const f=await a.request({method:"eth_gasPrice"}),p=parseInt(f,16),x=Math.floor(1.2*p).toString(16);console.log("Gas price:",f,"With premium:","0x"+x),console.log("Estimating gas...");const j=await a.request({method:"eth_estimateGas",params:[{to:_,from:b,data:u}]}),k=parseInt(j,16),y=Math.floor(1.2*k).toString(16);console.log("Gas estimate:",j,"With buffer:","0x"+y);const v={chainId:n,address:b,portalAddress:_,schemaId:A,gasPrice:parseInt(f,16),gasPriceWithPremium:parseInt("0x"+x,16),gasEstimate:parseInt(j,16),gasEstimateWithBuffer:parseInt("0x"+y,16)};console.log("Debug data:",v),m(v);const C={to:_,from:b,data:u,chainId:"0xe707",gasPrice:"0x"+x,gas:"0x"+y};console.log("Transaction parameters:",C),console.log("Sending transaction...");const M=await a.request({method:"eth_sendTransaction",params:[C]});console.log("Transaction sent! Hash:",M),o(!0),setTimeout((()=>{o(!1),m(null)}),5e3)}catch(c){console.error("Error submitting feedback:",c),l(`Failed to submit feedback: ${c.message}`)}finally{r(!1)}};return(0,j.jsxs)("div",{className:p.feedbackContainer,children:[(0,j.jsx)("div",{className:p.feedbackPrompt,children:n?(0,j.jsx)("div",{className:p.thankYouMessage,children:"Thank you for your feedback!"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{children:"Was this page helpful?"}),(0,j.jsxs)("div",{className:p.feedbackButtons,children:[(0,j.jsx)("button",{className:`${p.feedbackButton} ${p.thumbsUp}`,onClick:()=>k(!0),disabled:i,"aria-label":"Thumbs up",children:"\ud83d\udc4d"}),(0,j.jsx)("button",{className:`${p.feedbackButton} ${p.thumbsDown}`,onClick:()=>k(!1),disabled:i,"aria-label":"Thumbs down",children:"\ud83d\udc4e"})]})]})}),i&&(0,j.jsx)("div",{className:p.loadingIndicator,children:"Submitting feedback..."}),c&&(0,j.jsxs)("div",{className:p.errorMessage,children:[c,!b&&(0,j.jsx)("button",{onClick:f,className:p.connectButton,style:{marginLeft:"10px",padding:"4px 8px",fontSize:"0.8rem"},children:"Connect MetaMask"})]}),b&&(0,j.jsxs)("div",{className:p.walletInfo,style:{fontSize:"0.7rem",marginTop:"0.5rem",color:"var(--ifm-color-emphasis-600)"},children:["Connected: ",b.substring(0,6),"...",b.substring(38)]}),u&&(0,j.jsx)("div",{className:p.debugInfo,style:{fontSize:"0.8rem",marginTop:"1rem",color:"var(--ifm-color-emphasis-600)",textAlign:"left"},children:(0,j.jsxs)("details",{children:[(0,j.jsx)("summary",{children:"Debug Information"}),(0,j.jsx)("pre",{children:JSON.stringify(u,null,2)})]})})]})};function S(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=(0,i.u)(),a=(0,o.l)(),s=e.hide_table_of_contents,n=!s&&t.length>0;return{hidden:s,mobile:n?(0,j.jsx)(h.A,{}):void 0,desktop:!n||"desktop"!==a&&"ssr"!==a?void 0:(0,j.jsx)(u.A,{})}}(),{metadata:s}=(0,i.u)();return(0,j.jsxs)("div",{className:"row",children:[(0,j.jsxs)("div",{className:(0,n.A)("col",!a.hidden&&p.docItemCol),children:[(0,j.jsx)(f.A,{metadata:s}),(0,j.jsx)(c.A,{}),(0,j.jsxs)("div",{className:p.docItemContainer,children:[(0,j.jsxs)("article",{children:[(0,j.jsx)(b.A,{}),(0,j.jsx)(l.A,{}),a.mobile,(0,j.jsx)(m.A,{children:t}),(0,j.jsx)(k,{}),(0,j.jsx)(y,{}),(0,j.jsx)(M,{}),(0,j.jsx)(d.A,{})]}),(0,j.jsx)(r.A,{})]})]}),a.desktop&&(0,j.jsx)("div",{className:"col col--3",children:a.desktop})]})}},57660:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(96540);var s=a(55920),n=a(27143),o=a(74848);const i=function(e){const{content:t}=e,{metadata:a}=t,{image:i}=a,r=i?`${i}`:void 0;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{children:r&&(0,o.jsx)("meta",{property:"og:image",content:r})}),(0,o.jsx)(s.A,{...e})]})}}}]);