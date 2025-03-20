"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[1193],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}},55829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"technology/sequencer/index","title":"Sequencer","description":"The sequencer","source":"@site/docs/technology/sequencer/index.mdx","sourceDirName":"technology/sequencer","slug":"/technology/sequencer/","permalink":"/web3-feedback/technology/sequencer/","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/technology/sequencer/index.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"sidebarPosition":3,"frontMatter":{"title":"Sequencer","sidebar_position":3,"image":"/img/socialCards/sequencer.jpg"},"sidebar":"technologySidebar","previous":{"title":"Coordinator","permalink":"/web3-feedback/technology/coordinator"},"next":{"title":"Conflation","permalink":"/web3-feedback/technology/sequencer/conflation"}}');var i=n(74848),s=n(28453);const r={title:"Sequencer",sidebar_position:3,image:"/img/socialCards/sequencer.jpg"},a=void 0,c={},l=[{value:"The sequencer",id:"the-sequencer",level:2},{value:"What is it?",id:"what-is-it",level:3},{value:"What does it do?",id:"what-does-it-do",level:3},{value:"How does it do it?",id:"how-does-it-do-it",level:3}];function h(e){const t={em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"the-sequencer",children:"The sequencer"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-it",children:"What is it?"}),"\n",(0,i.jsxs)(t.p,{children:["The sequencer is the heart of Linea\u2019s execution client, responsible for ",(0,i.jsx)(t.strong,{children:"ordering, building, and executing blocks"})," in a way that allows the subsequent zero-knowledge proof to be made."]}),"\n",(0,i.jsx)(t.h3,{id:"what-does-it-do",children:"What does it do?"}),"\n",(0,i.jsxs)(t.p,{children:["The sequencer does a number of things: - Determines the order\u2013the ",(0,i.jsx)(t.em,{children:"sequence"}),"\u2013in which transactions will be executed - Builds blocks from them - Executes those blocks - Prepares certain data relating to the ",(0,i.jsx)(t.em,{children:"traces"})," of that execution for the zero-knowledge prover."]}),"\n",(0,i.jsx)(t.h3,{id:"how-does-it-do-it",children:"How does it do it?"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, Linea\u2019s execution client is zkGeth, a version of geth that has been modified to work with zk-proving technology. However, Linea is building ",(0,i.jsx)(t.strong,{children:"linea-besu"}),": leveraging the full power of the Consensys stack by using the same Besu client software that is used to execute blocks on Ethereum coupled with a plugin system. Linea-besu will help the Linea stack with compatibility, reliability, ease of maintenance, and of course will help the Linea team ensure compatibility, stability, ease of maintenance in their client, and of course helps them get their network launched much faster than building from scratch."]}),"\n",(0,i.jsx)(t.p,{children:"Linea's sequencer takes transactions from the Linea memory pool, and builds them into blocks, just like Besu does on mainnet Ethereum. However, on Linea, it also does a bit of extra work, and communication, with the Coordinator, to ensure that blocks are made in such a way that they can be proven by the zero-knowledge prover, and that they are as compact as possible\u2013doubly important in a situation where all data has to be written in tiny, costly pieces on Ethereum Mainnet. This is done specifically by subsystems within the Sequencer: the Traces Generator and Conflator."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);