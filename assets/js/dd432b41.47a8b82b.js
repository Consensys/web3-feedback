"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8353],{22515:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/linea-smart-contracts/messageservice/l1/l1messageservice","title":"L1MessageService","description":"systemMigrationBlock","source":"@site/docs/api/linea-smart-contracts/messageservice/l1/l1messageservice.mdx","sourceDirName":"api/linea-smart-contracts/messageservice/l1","slug":"/api/linea-smart-contracts/messageservice/l1/l1messageservice","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l1/l1messageservice","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/messageservice/l1/l1messageservice.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"L1MessageManager","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l1/l1messagemanager"},"next":{"title":"L1MessageManagerV1","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l1/v1/l1messagemanagerv1"}}');var n=i(74848),t=i(28453);const a={},d="L1MessageService",l={},c=[{value:"systemMigrationBlock",id:"systemmigrationblock",level:3},{value:"__MessageService_init",id:"__messageservice_init",level:3},{value:"Parameters",id:"parameters",level:4},{value:"sendMessage",id:"sendmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"claimMessageWithProof",id:"claimmessagewithproof",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"sender",id:"sender",level:3},{value:"Return Values",id:"return-values",level:4}];function h(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"l1messageservice",children:(0,n.jsx)(s.code,{children:"L1MessageService"})})}),"\n",(0,n.jsx)(s.h3,{id:"systemmigrationblock",children:"systemMigrationBlock"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"uint256 systemMigrationBlock\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"This is currently not in use, but is reserved for future upgrades."})}),"\n",(0,n.jsx)(s.h3,{id:"__messageservice_init",children:"__MessageService_init"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function __MessageService_init(uint256 _rateLimitPeriod, uint256 _rateLimitAmount) internal\n"})}),"\n",(0,n.jsx)(s.p,{children:"Initialises underlying message service dependencies."}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_rateLimitPeriod"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The period to rate limit against."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_rateLimitAmount"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The limit allowed for withdrawing the period."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"sendmessage",children:"sendMessage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function sendMessage(address _to, uint256 _fee, bytes _calldata) external payable\n"})}),"\n",(0,n.jsx)(s.p,{children:"Adds a message for sending cross-chain and emits MessageSent."}),"\n",(0,n.jsxs)(s.p,{children:["_The message number is preset (nextMessageNumber) and only incremented at the end if successful for the next caller.\nThis function should be called with a msg.value = _value + ",(0,n.jsx)(s.em,{children:"fee. The fee will be paid on the destination chain."})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_to"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The address the message is intended for."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_fee"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The fee being paid for the message delivery."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_calldata"}),(0,n.jsx)(s.td,{children:"bytes"}),(0,n.jsx)(s.td,{children:"The calldata to pass to the recipient."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"claimmessagewithproof",children:"claimMessageWithProof"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function claimMessageWithProof(struct IL1MessageService.ClaimMessageWithProofParams _params) external\n"})}),"\n",(0,n.jsx)(s.p,{children:"Claims and delivers a cross-chain message using a Merkle proof."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"if tree depth is empty, it will revert with L2MerkleRootDoesNotExist.\nif tree depth is different than proof size, it will revert with ProofLengthDifferentThanMerkleDepth."})}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_params"}),(0,n.jsx)(s.td,{children:"struct IL1MessageService.ClaimMessageWithProofParams"}),(0,n.jsx)(s.td,{children:"Collection of claim data with proof and supporting data."})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"sender",children:"sender"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function sender() external view returns (address originalSender)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Claims and delivers a cross-chain message."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"The message sender address is set temporarily in the transient storage when claiming."})}),"\n",(0,n.jsx)(s.h4,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"originalSender"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The message sender address that is stored temporarily in the transient storage when claiming."})]})})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>d});var r=i(96540);const n={},t=r.createContext(n);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);