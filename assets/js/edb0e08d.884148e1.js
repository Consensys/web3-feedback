"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[4333],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},92259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"technology/prover/prover-limits","title":"Module limits","description":"How module limits ensure the prover can generate proofs.","source":"@site/docs/technology/prover/prover-limits.mdx","sourceDirName":"technology/prover","slug":"/technology/prover/prover-limits","permalink":"/web3-feedback/technology/prover/prover-limits","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/technology/prover/prover-limits.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"sidebarPosition":3,"frontMatter":{"title":"Module limits","description":"How module limits ensure the prover can generate proofs.","sidebar_position":3,"image":"/img/socialCards/module-limits.jpg"},"sidebar":"technologySidebar","previous":{"title":"Proving: Circuit building","permalink":"/web3-feedback/technology/prover/trace-expansion"}}');var o=t(74848),r=t(28453);const s={title:"Module limits",description:"How module limits ensure the prover can generate proofs.",sidebar_position:3,image:"/img/socialCards/module-limits.jpg"},a=void 0,c={},l=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Linea uses module limits to keep proof complexity manageable and ensure that the prover can\ngenerate proofs efficiently without overwhelming the infrastructure."}),"\n",(0,o.jsx)(n.p,{children:"Linea's arithmetization specification is divided into modules, and each module represents a collection\nof EVM or Linea zkEVM operations (opcodes). Modules can:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Process transaction data."}),"\n",(0,o.jsx)(n.li,{children:"Manage zkEVM memory."}),"\n",(0,o.jsx)(n.li,{children:"Coordinate interactions between modules."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Each module has a specific limit on the number of lines of data its operations can generate,\nregardless of its purpose. You can view these limits in the\n",(0,o.jsx)(n.a,{href:"https://github.com/Consensys/linea-monorepo/blob/main/config/common/traces-limits-besu-v2.toml",children:"Linea source code"}),".\nAdditional lines are generated each time unique instructions are provided to a module's operations,\nbut repeat calls with the same arguments do not generate new lines."]}),"\n",(0,o.jsxs)(n.p,{children:["High-complexity transactions that repeatedly use a large volume of operations may generate too many\nlines of data and exceed a module's limit. Transactions that reach this point are rejected by the\n",(0,o.jsx)(n.a,{href:"/web3-feedback/technology/sequencer/",children:"sequencer"})," to ensure that the trace data passed to the prover is of a\nmanageable scope, and that a proof can be generated."]}),"\n",(0,o.jsx)(n.p,{children:"Transactions rejected for exceeding module limits can be identified through the following\nmethods, which return an error:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/web3-feedback/api/reference/linea-estimategas",children:(0,o.jsx)(n.code,{children:"linea_estimateGas"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/web3-feedback/api/reference/eth-sendrawtransaction",children:(0,o.jsx)(n.code,{children:"eth_sendRawTransaction"})})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"/web3-feedback/api/reference/linea-gettransactionexclusionstatusv1",children:(0,o.jsx)(n.code,{children:"linea_getTransactionExclusionStatusV1"})}),"\nto get the rejection status of a transaction hash, if it was sent and didn't get rejected directly,\nnor included in a block."]}),"\n",(0,o.jsxs)(n.p,{children:["This API method can be used to query the reason for transaction rejection in edge cases where\n",(0,o.jsx)(n.code,{children:"linea_estimateGas"})," or ",(0,o.jsx)(n.code,{children:"eth_sendRawTransaction"})," did not return an error. It's intended to be used\nonly in cases the transaction execution differs between an RPC node and the sequencer."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);