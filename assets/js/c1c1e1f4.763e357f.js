"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[5659],{28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>a});var n=r(96540);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}},70788:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/linea-smart-contracts/messageservice/messageservicebase","title":"MessageServiceBase","description":"messageService","source":"@site/docs/api/linea-smart-contracts/messageservice/messageservicebase.mdx","sourceDirName":"api/linea-smart-contracts/messageservice","slug":"/api/linea-smart-contracts/messageservice/messageservicebase","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/messageservicebase","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/messageservice/messageservicebase.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Utils","permalink":"/web3-feedback/api/linea-smart-contracts/lib/utils"},"next":{"title":"L1MessageManager","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/l1/l1messagemanager"}}');var i=r(74848),t=r(28453);const d={},a="MessageServiceBase",c={},l=[{value:"messageService",id:"messageservice",level:3},{value:"remoteSender",id:"remotesender",level:3},{value:"RemoteSenderSet",id:"remotesenderset",level:3},{value:"Parameters",id:"parameters",level:4},{value:"CallerIsNotMessageService",id:"callerisnotmessageservice",level:3},{value:"SenderNotAuthorized",id:"sendernotauthorized",level:3},{value:"onlyMessagingService",id:"onlymessagingservice",level:3},{value:"onlyAuthorizedRemoteSender",id:"onlyauthorizedremotesender",level:3},{value:"__MessageServiceBase_init",id:"__messageservicebase_init",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"_setRemoteSender",id:"_setremotesender",level:3},{value:"Parameters",id:"parameters-2",level:4}];function h(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"messageservicebase",children:(0,i.jsx)(s.code,{children:"MessageServiceBase"})})}),"\n",(0,i.jsx)(s.h3,{id:"messageservice",children:"messageService"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"contract IMessageService messageService\n"})}),"\n",(0,i.jsx)(s.p,{children:"The message service address on the current chain."}),"\n",(0,i.jsx)(s.h3,{id:"remotesender",children:"remoteSender"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"address remoteSender\n"})}),"\n",(0,i.jsx)(s.p,{children:"The token bridge on the alternate/remote chain."}),"\n",(0,i.jsx)(s.h3,{id:"remotesenderset",children:"RemoteSenderSet"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"event RemoteSenderSet(address remoteSender, address setter)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Event emitted when the remote sender is set."})}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"remoteSender"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The address of the new remote sender."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"setter"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The address of the account that set the remote sender."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"callerisnotmessageservice",children:"CallerIsNotMessageService"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error CallerIsNotMessageService()\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Thrown when the caller address is not the message service address"})}),"\n",(0,i.jsx)(s.h3,{id:"sendernotauthorized",children:"SenderNotAuthorized"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"error SenderNotAuthorized()\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Thrown when remote sender address is not authorized."})}),"\n",(0,i.jsx)(s.h3,{id:"onlymessagingservice",children:"onlyMessagingService"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"modifier onlyMessagingService()\n"})}),"\n",(0,i.jsx)(s.p,{children:"_Modifier to make sure the caller is the known message service."}),"\n",(0,i.jsx)(s.p,{children:"Requirements:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The msg.sender must be the message service._"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"onlyauthorizedremotesender",children:"onlyAuthorizedRemoteSender"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"modifier onlyAuthorizedRemoteSender()\n"})}),"\n",(0,i.jsx)(s.p,{children:"_Modifier to make sure the original sender is allowed."}),"\n",(0,i.jsx)(s.p,{children:"Requirements:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The original message sender via the message service must be a known sender._"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"__messageservicebase_init",children:"__MessageServiceBase_init"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function __MessageServiceBase_init(address _messageService) internal\n"})}),"\n",(0,i.jsx)(s.p,{children:"Initializes the message service"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"Must be initialized in the initialize function of the main contract or constructor."})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_messageService"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The message service address, cannot be empty."})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"_setremotesender",children:"_setRemoteSender"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-solidity",children:"function _setRemoteSender(address _remoteSender) internal\n"})}),"\n",(0,i.jsx)(s.p,{children:"Sets the remote sender"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"This function sets the remote sender address and emits the RemoteSenderSet event."})}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"_remoteSender"}),(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The authorized remote sender address, cannot be empty."})]})})]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);