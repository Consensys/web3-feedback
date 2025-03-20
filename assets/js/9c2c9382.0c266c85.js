"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[3112],{28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>i});var a=n(96540);const r={},t=a.createContext(r);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:s},e.children)}},75449:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/linea-smart-contracts/messageservice/l2/l2messagemanager","title":"L2MessageManager","description":"L1L2MESSAGESETTERROLE","source":"@site/docs/api/linea-smart-contracts/messageservice/l2/l2messagemanager.mdx","sourceDirName":"api/linea-smart-contracts/messageservice/l2","slug":"/api/linea-smart-contracts/messageservice/l2/l2messagemanager","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l2/l2messagemanager","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/messageservice/l2/l2messagemanager.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"L1MessageServiceV1","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l1/v1/l1messageservicev1"},"next":{"title":"L2MessageService","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l2/l2messageservice"}}');var r=n(74848),t=n(28453);const l={},i="L2MessageManager",c={},d=[{value:"L1_L2_MESSAGE_SETTER_ROLE",id:"l1_l2_message_setter_role",level:3},{value:"lastAnchoredL1MessageNumber",id:"lastanchoredl1messagenumber",level:3},{value:"l1RollingHashes",id:"l1rollinghashes",level:3},{value:"anchorL1L2MessageHashes",id:"anchorl1l2messagehashes",level:3},{value:"Parameters",id:"parameters",level:4}];function h(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"l2messagemanager",children:(0,r.jsx)(s.code,{children:"L2MessageManager"})})}),"\n",(0,r.jsx)(s.h3,{id:"l1_l2_message_setter_role",children:"L1_L2_MESSAGE_SETTER_ROLE"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"bytes32 L1_L2_MESSAGE_SETTER_ROLE\n"})}),"\n",(0,r.jsx)(s.p,{children:"The role required to anchor L1 to L2 message hashes."}),"\n",(0,r.jsx)(s.h3,{id:"lastanchoredl1messagenumber",children:"lastAnchoredL1MessageNumber"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"uint256 lastAnchoredL1MessageNumber\n"})}),"\n",(0,r.jsx)(s.p,{children:"Contains the last L1 message number anchored on L2."}),"\n",(0,r.jsx)(s.h3,{id:"l1rollinghashes",children:"l1RollingHashes"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"mapping(uint256 => bytes32) l1RollingHashes\n"})}),"\n",(0,r.jsx)(s.p,{children:"Contains the L1 to L2 messaging rolling hashes mapped to message number computed on L2."}),"\n",(0,r.jsx)(s.h3,{id:"anchorl1l2messagehashes",children:"anchorL1L2MessageHashes"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function anchorL1L2MessageHashes(bytes32[] _messageHashes, uint256 _startingMessageNumber, uint256 _finalMessageNumber, bytes32 _finalRollingHash) external\n"})}),"\n",(0,r.jsx)(s.p,{children:"Add cross-chain L1->L2 message hashes in storage."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Only address that has the role 'L1_L2_MESSAGE_SETTER_ROLE' are allowed to call this function.\nNB: In the unlikely event of a duplicate anchoring, the lastAnchoredL1MessageNumber MUST NOT be incremented.\nand the rolling hash not calculated, else synchronisation will break.\nIf starting number is zero, an underflow error is expected."})}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_messageHashes"}),(0,r.jsx)(s.td,{children:"bytes32[]"}),(0,r.jsx)(s.td,{children:"New message hashes to anchor on L2."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_startingMessageNumber"}),(0,r.jsx)(s.td,{children:"uint256"}),(0,r.jsx)(s.td,{children:"The expected L1 message number to start when anchoring."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_finalMessageNumber"}),(0,r.jsx)(s.td,{children:"uint256"}),(0,r.jsx)(s.td,{children:"The expected L1 message number to end on when anchoring."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_finalRollingHash"}),(0,r.jsx)(s.td,{children:"bytes32"}),(0,r.jsx)(s.td,{children:"The expected L1 rolling hash to end on when anchoring."})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);