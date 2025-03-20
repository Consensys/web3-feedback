"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[453],{28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var r=n(96540);const i={},d=r.createContext(i);function t(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}},77085:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/linea-smart-contracts/messageservice/l2/v1/l2messageservicev1","title":"L2MessageServiceV1","description":"MINIMUMFEESETTER_ROLE","source":"@site/docs/api/linea-smart-contracts/messageservice/l2/v1/l2messageservicev1.mdx","sourceDirName":"api/linea-smart-contracts/messageservice/l2/v1","slug":"/api/linea-smart-contracts/messageservice/l2/v1/l2messageservicev1","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l2/v1/l2messageservicev1","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/messageservice/l2/v1/l2messageservicev1.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"L2MessageManagerV1","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l2/v1/l2messagemanagerv1"},"next":{"title":"MessageHashing","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/lib/messagehashing"}}');var i=n(74848),d=n(28453);const t={},a="L2MessageServiceV1",l={},c=[{value:"MINIMUM_FEE_SETTER_ROLE",id:"minimum_fee_setter_role",level:3},{value:"_messageSender",id:"_messagesender",level:3},{value:"nextMessageNumber",id:"nextmessagenumber",level:3},{value:"minimumFeeInWei",id:"minimumfeeinwei",level:3},{value:"REFUND_OVERHEAD_IN_GAS",id:"refund_overhead_in_gas",level:3},{value:"DEFAULT_SENDER_ADDRESS",id:"default_sender_address",level:3},{value:"constructor",id:"constructor",level:3},{value:"sendMessage",id:"sendmessage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"claimMessage",id:"claimmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setMinimumFee",id:"setminimumfee",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"sender",id:"sender",level:3},{value:"Return Values",id:"return-values",level:4},{value:"distributeFees",id:"distributefees",level:3},{value:"Parameters",id:"parameters-3",level:4}];function h(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"l2messageservicev1",children:(0,i.jsx)(s.code,{children:"L2MessageServiceV1"})})}),"\n",(0,i.jsx)(s.h3,{id:"minimum_fee_setter_role",children:"MINIMUM_FEE_SETTER_ROLE"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"bytes32 MINIMUM_FEE_SETTER_ROLE\n"})}),"\n",(0,i.jsx)(s.p,{children:"The role required to set the minimum DDOS fee."}),"\n",(0,i.jsx)(s.h3,{id:"_messagesender",children:"_messageSender"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"address _messageSender\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"The temporary message sender set when claiming a message."})}),"\n",(0,i.jsx)(s.h3,{id:"nextmessagenumber",children:"nextMessageNumber"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"uint256 nextMessageNumber\n"})}),"\n",(0,i.jsx)(s.h3,{id:"minimumfeeinwei",children:"minimumFeeInWei"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"uint256 minimumFeeInWei\n"})}),"\n",(0,i.jsx)(s.h3,{id:"refund_overhead_in_gas",children:"REFUND_OVERHEAD_IN_GAS"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"uint256 REFUND_OVERHEAD_IN_GAS\n"})}),"\n",(0,i.jsx)(s.h3,{id:"default_sender_address",children:"DEFAULT_SENDER_ADDRESS"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"address DEFAULT_SENDER_ADDRESS\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"The default message sender address reset after claiming a message."})}),"\n",(0,i.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"constructor() internal\n"})}),"\n",(0,i.jsx)(s.h3,{id:"sendmessage",children:"sendMessage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function sendMessage(address _to, uint256 _fee, bytes _calldata) external payable\n"})}),"\n",(0,i.jsx)(s.p,{children:"Adds a message for sending cross-chain and emits a relevant event."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"The message number is preset and only incremented at the end if successful for the next caller."})}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_to"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The address the message is intended for."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_fee"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The fee being paid for the message delivery."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_calldata"}),(0,i.jsx)(s.td,{children:"bytes"}),(0,i.jsx)(s.td,{children:"The calldata to pass to the recipient."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"claimmessage",children:"claimMessage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function claimMessage(address _from, address _to, uint256 _fee, uint256 _value, address payable _feeRecipient, bytes _calldata, uint256 _nonce) external\n"})}),"\n",(0,i.jsx)(s.p,{children:"Claims and delivers a cross-chain message."}),"\n",(0,i.jsxs)(s.p,{children:["_",(0,i.jsx)(s.em,{children:"feeRecipient Can be set to address(0) to receive as msg.sender.\nmessageSender Is set temporarily when claiming and reset post."})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_from"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The address of the original sender."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_to"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The address the message is intended for."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_fee"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The fee being paid for the message delivery."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_value"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The value to be transferred to the destination address."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_feeRecipient"}),(0,i.jsx)(s.td,{children:"address payable"}),(0,i.jsx)(s.td,{children:"The recipient for the fee."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_calldata"}),(0,i.jsx)(s.td,{children:"bytes"}),(0,i.jsx)(s.td,{children:"The calldata to pass to the recipient."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_nonce"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The unique auto generated message number used when sending the message."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"setminimumfee",children:"setMinimumFee"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function setMinimumFee(uint256 _feeInWei) external\n"})}),"\n",(0,i.jsx)(s.p,{children:"The Fee Manager sets a minimum fee to address DOS protection."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"MINIMUM_FEE_SETTER_ROLE is required to set the minimum fee."})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_feeInWei"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"New minimum fee in Wei."})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"sender",children:"sender"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function sender() external view returns (address originalSender)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["_The ",(0,i.jsx)(s.em,{children:"messageSender address is set temporarily when claiming."})]}),"\n",(0,i.jsx)(s.h4,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"originalSender"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The original sender stored temporarily at the _messageSender address in storage."})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"distributefees",children:"distributeFees"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"modifier distributeFees(uint256 _feeInWei, address _to, bytes _calldata, address _feeRecipient)\n"})}),"\n",(0,i.jsx)(s.p,{children:"The unspent fee is refunded if applicable."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_feeInWei"}),(0,i.jsx)(s.td,{children:"uint256"}),(0,i.jsx)(s.td,{children:"The fee paid for delivery in Wei."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_to"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The recipient of the message and gas refund."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_calldata"}),(0,i.jsx)(s.td,{children:"bytes"}),(0,i.jsx)(s.td,{children:"The calldata of the message."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_feeRecipient"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{})]})]})]})]})}function m(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);