"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[6190],{28453:(e,d,n)=>{n.d(d,{R:()=>t,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function t(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:d},e.children)}},89148:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"api/linea-smart-contracts/tokenbridge/interfaces/itokenbridge","title":"ITokenBridge","description":"InitializationData","source":"@site/docs/api/linea-smart-contracts/tokenbridge/interfaces/itokenbridge.mdx","sourceDirName":"api/linea-smart-contracts/tokenbridge/interfaces","slug":"/api/linea-smart-contracts/tokenbridge/interfaces/itokenbridge","permalink":"/web3-feedback/api/linea-smart-contracts/tokenbridge/interfaces/itokenbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/tokenbridge/interfaces/itokenbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"TokenBridge","permalink":"/web3-feedback/api/linea-smart-contracts/tokenbridge/"},"next":{"title":"Use the Linea API","permalink":"/web3-feedback/api/reference/"}}');var s=n(74848),i=n(28453);const t={},l="ITokenBridge",a={},h=[{value:"InitializationData",id:"initializationdata",level:3},{value:"TokenReserved",id:"tokenreserved",level:3},{value:"Parameters",id:"parameters",level:4},{value:"ReservationRemoved",id:"reservationremoved",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"CustomContractSet",id:"customcontractset",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"BridgingInitiated",id:"bridginginitiated",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"BridgingInitiatedV2",id:"bridginginitiatedv2",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"BridgingFinalized",id:"bridgingfinalized",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"BridgingFinalizedV2",id:"bridgingfinalizedv2",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"NewToken",id:"newtoken",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"NewTokenDeployed",id:"newtokendeployed",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"RemoteTokenBridgeSet",id:"remotetokenbridgeset",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"TokenDeployed",id:"tokendeployed",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"DeploymentConfirmed",id:"deploymentconfirmed",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"MessageServiceUpdated",id:"messageserviceupdated",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"ReservedToken",id:"reservedtoken",level:3},{value:"RemoteTokenBridgeAlreadySet",id:"remotetokenbridgealreadyset",level:3},{value:"AlreadyBridgedToken",id:"alreadybridgedtoken",level:3},{value:"InvalidPermitData",id:"invalidpermitdata",level:3},{value:"PermitNotFromSender",id:"permitnotfromsender",level:3},{value:"PermitNotAllowingBridge",id:"permitnotallowingbridge",level:3},{value:"ZeroAmountNotAllowed",id:"zeroamountnotallowed",level:3},{value:"NotReserved",id:"notreserved",level:3},{value:"TokenNotDeployed",id:"tokennotdeployed",level:3},{value:"AlreadyBrigedToNativeTokenSet",id:"alreadybrigedtonativetokenset",level:3},{value:"NativeToBridgedTokenAlreadySet",id:"nativetobridgedtokenalreadyset",level:3},{value:"StatusAddressNotAllowed",id:"statusaddressnotallowed",level:3},{value:"DecimalsAreUnknown",id:"decimalsareunknown",level:3},{value:"TokenListEmpty",id:"tokenlistempty",level:3},{value:"bridgeTokenWithPermit",id:"bridgetokenwithpermit",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"completeBridging",id:"completebridging",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"confirmDeployment",id:"confirmdeployment",level:3},{value:"Parameters",id:"parameters-15",level:4},{value:"setMessageService",id:"setmessageservice",level:3},{value:"Parameters",id:"parameters-16",level:4},{value:"setDeployed",id:"setdeployed",level:3},{value:"Parameters",id:"parameters-17",level:4},{value:"setReserved",id:"setreserved",level:3},{value:"Parameters",id:"parameters-18",level:4},{value:"setRemoteTokenBridge",id:"setremotetokenbridge",level:3},{value:"Parameters",id:"parameters-19",level:4},{value:"removeReserved",id:"removereserved",level:3},{value:"Parameters",id:"parameters-20",level:4},{value:"setCustomContract",id:"setcustomcontract",level:3},{value:"Parameters",id:"parameters-21",level:4}];function c(e){const d={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.header,{children:(0,s.jsx)(d.h1,{id:"itokenbridge",children:(0,s.jsx)(d.code,{children:"ITokenBridge"})})}),"\n",(0,s.jsx)(d.h3,{id:"initializationdata",children:"InitializationData"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"struct InitializationData {\n  address defaultAdmin;\n  address messageService;\n  address tokenBeacon;\n  uint256 sourceChainId;\n  uint256 targetChainId;\n  address[] reservedTokens;\n  struct IPermissionsManager.RoleAddress[] roleAddresses;\n  struct IPauseManager.PauseTypeRole[] pauseTypeRoles;\n  struct IPauseManager.PauseTypeRole[] unpauseTypeRoles;\n}\n"})}),"\n",(0,s.jsx)(d.h3,{id:"tokenreserved",children:"TokenReserved"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event TokenReserved(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the token address is reserved."}),"\n",(0,s.jsx)(d.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed token address."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"reservationremoved",children:"ReservationRemoved"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event ReservationRemoved(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the token address reservation is removed."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed token address."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"customcontractset",children:"CustomContractSet"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event CustomContractSet(address nativeToken, address customContract, address setBy)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the custom token address is set."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"nativeToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed nativeToken token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"customContract"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed custom contract address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"setBy"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed address of who set the custom contract."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"bridginginitiated",children:"BridgingInitiated"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event BridgingInitiated(address sender, address recipient, address token, uint256 amount)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when token bridging is initiated."}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"DEPRECATED in favor of BridgingInitiatedV2."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sender"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed sender address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"recipient"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The recipient address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"amount"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The indexed token amount."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"bridginginitiatedv2",children:"BridgingInitiatedV2"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event BridgingInitiatedV2(address sender, address recipient, address token, uint256 amount)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when token bridging is initiated."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sender"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed sender address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"recipient"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed recipient address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"amount"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The token amount."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"bridgingfinalized",children:"BridgingFinalized"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event BridgingFinalized(address nativeToken, address bridgedToken, uint256 amount, address recipient)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when token bridging is finalized."}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"DEPRECATED in favor of BridgingFinalizedV2."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"nativeToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed native token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"bridgedToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed bridged token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"amount"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The indexed token amount."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"recipient"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The recipient address."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"bridgingfinalizedv2",children:"BridgingFinalizedV2"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event BridgingFinalizedV2(address nativeToken, address bridgedToken, uint256 amount, address recipient)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when token bridging is finalized."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"nativeToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed native token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"bridgedToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed bridged token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"amount"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The token amount."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"recipient"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed recipient address."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"newtoken",children:"NewToken"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event NewToken(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when a new token is seen being bridged on the origin chain for the first time."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed token address."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"newtokendeployed",children:"NewTokenDeployed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event NewTokenDeployed(address bridgedToken, address nativeToken)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when a new token is deployed."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"bridgedToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed bridged token address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"nativeToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed native token address."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"remotetokenbridgeset",children:"RemoteTokenBridgeSet"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event RemoteTokenBridgeSet(address remoteTokenBridge, address setBy)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the remote token bridge is set."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"remoteTokenBridge"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed remote token bridge address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"setBy"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed address that set the remote token bridge."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"tokendeployed",children:"TokenDeployed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event TokenDeployed(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the token is set as deployed."}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"This can be triggered by anyone calling confirmDeployment on the alternate chain."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed token address."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"deploymentconfirmed",children:"DeploymentConfirmed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event DeploymentConfirmed(address[] tokens, address confirmedBy)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the token deployment is confirmed."}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"This can be triggered by anyone provided there is correctly mapped token data."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"tokens"}),(0,s.jsx)(d.td,{children:"address[]"}),(0,s.jsx)(d.td,{children:"The token address list."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"confirmedBy"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed address confirming deployment."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"messageserviceupdated",children:"MessageServiceUpdated"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"event MessageServiceUpdated(address newMessageService, address oldMessageService, address setBy)\n"})}),"\n",(0,s.jsx)(d.p,{children:"Emitted when the message service address is set."}),"\n",(0,s.jsx)(d.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"newMessageService"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed new message service address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"oldMessageService"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed old message service address."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"setBy"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The indexed address setting the new message service address."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"reservedtoken",children:"ReservedToken"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error ReservedToken(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when attempting to bridge a reserved token."})}),"\n",(0,s.jsx)(d.h3,{id:"remotetokenbridgealreadyset",children:"RemoteTokenBridgeAlreadySet"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error RemoteTokenBridgeAlreadySet(address remoteTokenBridge)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the remote token bridge is already set."})}),"\n",(0,s.jsx)(d.h3,{id:"alreadybridgedtoken",children:"AlreadyBridgedToken"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error AlreadyBridgedToken(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when attempting to reserve an already bridged token."})}),"\n",(0,s.jsx)(d.h3,{id:"invalidpermitdata",children:"InvalidPermitData"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error InvalidPermitData(bytes4 permitData, bytes4 permitSelector)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the permit data is invalid."})}),"\n",(0,s.jsx)(d.h3,{id:"permitnotfromsender",children:"PermitNotFromSender"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error PermitNotFromSender(address owner)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the permit is not from the sender."})}),"\n",(0,s.jsx)(d.h3,{id:"permitnotallowingbridge",children:"PermitNotAllowingBridge"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error PermitNotAllowingBridge(address spender)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the permit does not grant spending to the bridge."})}),"\n",(0,s.jsx)(d.h3,{id:"zeroamountnotallowed",children:"ZeroAmountNotAllowed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error ZeroAmountNotAllowed(uint256 amount)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the amount being bridged is zero."})}),"\n",(0,s.jsx)(d.h3,{id:"notreserved",children:"NotReserved"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error NotReserved(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when trying to unreserve a non-reserved token."})}),"\n",(0,s.jsx)(d.h3,{id:"tokennotdeployed",children:"TokenNotDeployed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error TokenNotDeployed(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when trying to confirm deployment of a non-deployed token."})}),"\n",(0,s.jsx)(d.h3,{id:"alreadybrigedtonativetokenset",children:"AlreadyBrigedToNativeTokenSet"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error AlreadyBrigedToNativeTokenSet(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when trying to set a custom contract on a bridged token."})}),"\n",(0,s.jsx)(d.h3,{id:"nativetobridgedtokenalreadyset",children:"NativeToBridgedTokenAlreadySet"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error NativeToBridgedTokenAlreadySet(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when trying to set a custom contract on an already set token."})}),"\n",(0,s.jsx)(d.h3,{id:"statusaddressnotallowed",children:"StatusAddressNotAllowed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error StatusAddressNotAllowed(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when trying to set a token that is already either native, deployed or reserved."})}),"\n",(0,s.jsx)(d.h3,{id:"decimalsareunknown",children:"DecimalsAreUnknown"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error DecimalsAreUnknown(address token)\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the decimals for a token cannot be determined."})}),"\n",(0,s.jsx)(d.h3,{id:"tokenlistempty",children:"TokenListEmpty"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"error TokenListEmpty()\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Thrown when the token list is empty."})}),"\n",(0,s.jsx)(d.h3,{id:"bridgetokenwithpermit",children:"bridgeTokenWithPermit"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function bridgeTokenWithPermit(address _token, uint256 _amount, address _recipient, bytes _permitData) external payable\n"})}),"\n",(0,s.jsxs)(d.p,{children:["Similar to ",(0,s.jsx)(d.code,{children:"bridgeToken"})," function but allows to pass additional\npermit data to do the ERC20 approval in a single transaction."]}),"\n",(0,s.jsx)(d.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address of the token to be bridged."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_amount"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The amount of the token to be bridged."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_recipient"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address that will receive the tokens on the other chain."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_permitData"}),(0,s.jsx)(d.td,{children:"bytes"}),(0,s.jsx)(d.td,{children:"The permit data for the token, if applicable."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"completebridging",children:"completeBridging"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function completeBridging(address _nativeToken, uint256 _amount, address _recipient, uint256 _chainId, bytes _tokenMetadata) external\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsxs)(d.em,{children:["It can only be called from the Message Service. To finalize the bridging\nprocess, a user or postmen needs to use the ",(0,s.jsx)(d.code,{children:"claimMessage"})," function of the\nMessage Service to trigger the transaction."]})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-14",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_nativeToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address of the token on its native chain."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_amount"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The amount of the token to be received."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_recipient"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address that will receive the tokens."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_chainId"}),(0,s.jsx)(d.td,{children:"uint256"}),(0,s.jsx)(d.td,{children:"The source chainId or target chaindId for this token"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_tokenMetadata"}),(0,s.jsx)(d.td,{children:"bytes"}),(0,s.jsx)(d.td,{children:"Additional data used to deploy the bridged token if it   doesn't exist already."})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"confirmdeployment",children:"confirmDeployment"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function confirmDeployment(address[] _tokens) external payable\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Change the status to DEPLOYED to the tokens passed in parameter\nWill call the method setDeployed on the other chain using the message Service"})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-15",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_tokens"}),(0,s.jsx)(d.td,{children:"address[]"}),(0,s.jsx)(d.td,{children:"Array of bridged tokens that have been deployed."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"setmessageservice",children:"setMessageService"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function setMessageService(address _messageService) external\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Change the address of the Message Service."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-16",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_messageService"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address of the new Message Service."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"setdeployed",children:"setDeployed"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function setDeployed(address[] _nativeTokens) external\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsxs)(d.em,{children:["It can only be called from the Message Service. To change the status of\nthe native tokens to DEPLOYED meaning they have been deployed on the other chain\na user or postman needs to use the ",(0,s.jsx)(d.code,{children:"claimMessage"})," function of the\nMessage Service to trigger the transaction."]})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-17",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_nativeTokens"}),(0,s.jsx)(d.td,{children:"address[]"}),(0,s.jsx)(d.td,{children:"The addresses of the native tokens."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"setreserved",children:"setReserved"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function setReserved(address _token) external\n"})}),"\n",(0,s.jsx)(d.p,{children:"Make sure that _token is native to the current chain\nwhere you are calling this function from"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Linea can reserve tokens. In this case, the token cannot be bridged.\nLinea can only reserve tokens that have not been bridged before."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-18",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address of the token to be set as reserved."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"setremotetokenbridge",children:"setRemoteTokenBridge"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function setRemoteTokenBridge(address _remoteTokenBridge) external\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Sets the address of the remote token bridge. Can only be called once."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-19",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_remoteTokenBridge"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address of the remote token bridge to be set."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"removereserved",children:"removeReserved"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function removeReserved(address _token) external\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Removes a token from the reserved list."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-20",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_token"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"The address of the token to be removed from the reserved list."})]})})]}),"\n",(0,s.jsx)(d.h3,{id:"setcustomcontract",children:"setCustomContract"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-solidity",children:"function setCustomContract(address _nativeToken, address _targetContract) external\n"})}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.em,{children:"Linea can set a custom ERC20 contract for specific ERC20.\nFor security purpose, Linea can only call this function if the token has\nnot been bridged yet."})}),"\n",(0,s.jsx)(d.h4,{id:"parameters-21",children:"Parameters"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_nativeToken"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"address of the token on the source chain."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"_targetContract"}),(0,s.jsx)(d.td,{children:"address"}),(0,s.jsx)(d.td,{children:"address of the custom contract."})]})]})]})]})}function o(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);