"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8696],{6205:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"api/linea-smart-contracts/messageservice/lib/messagehashing","title":"MessageHashing","description":"_hashMessage","source":"@site/docs/api/linea-smart-contracts/messageservice/lib/messagehashing.mdx","sourceDirName":"api/linea-smart-contracts/messageservice/lib","slug":"/api/linea-smart-contracts/messageservice/lib/messagehashing","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/lib/messagehashing","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/messageservice/lib/messagehashing.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"L2MessageServiceV1","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l2/v1/l2messageservicev1"},"next":{"title":"RateLimiter","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/lib/ratelimiter"}}');var n=t(74848),r=t(28453);const i={},d="MessageHashing",c={},l=[{value:"_hashMessage",id:"_hashmessage",level:3},{value:"Parameters",id:"parameters",level:4}];function h(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"messagehashing",children:(0,n.jsx)(s.code,{children:"MessageHashing"})})}),"\n",(0,n.jsx)(s.h3,{id:"_hashmessage",children:"_hashMessage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-solidity",children:"function _hashMessage(address _from, address _to, uint256 _fee, uint256 _valueSent, uint256 _messageNumber, bytes _calldata) internal pure returns (bytes32 messageHash)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Hashes messages using assembly for efficiency."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Adding 0xc0 is to indicate the calldata offset relative to the memory being added to.\nIf the calldata is not modulus 32, the extra bit needs to be added on at the end else the hash is wrong."})}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_from"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The from address."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_to"}),(0,n.jsx)(s.td,{children:"address"}),(0,n.jsx)(s.td,{children:"The to address."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_fee"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The fee paid for delivery."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_valueSent"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The value to be sent when delivering."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_messageNumber"}),(0,n.jsx)(s.td,{children:"uint256"}),(0,n.jsx)(s.td,{children:"The unique message number."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"_calldata"}),(0,n.jsx)(s.td,{children:"bytes"}),(0,n.jsx)(s.td,{children:"The calldata to be passed to the destination address."})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var a=t(96540);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);