"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[2966],{28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>l});var n=a(96540);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}},45632:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/linea-smart-contracts/lib/pausemanager","title":"PauseManager","description":"PAUSEALLROLE","source":"@site/docs/api/linea-smart-contracts/lib/pausemanager.mdx","sourceDirName":"api/linea-smart-contracts/lib","slug":"/api/linea-smart-contracts/lib/pausemanager","permalink":"/web3-feedback/api/linea-smart-contracts/lib/pausemanager","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/lib/pausemanager.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Mimc","permalink":"/web3-feedback/api/linea-smart-contracts/lib/mimc"},"next":{"title":"SparseMerkleProof","permalink":"/web3-feedback/api/linea-smart-contracts/lib/sparsemerkleproof"}}');var r=a(74848),i=a(28453);const t={},l="PauseManager",d={},c=[{value:"PAUSE_ALL_ROLE",id:"pause_all_role",level:3},{value:"UNPAUSE_ALL_ROLE",id:"unpause_all_role",level:3},{value:"pauseTypeStatuses",id:"pausetypestatuses",level:3},{value:"whenTypeAndGeneralNotPaused",id:"whentypeandgeneralnotpaused",level:3},{value:"Parameters",id:"parameters",level:4},{value:"whenTypeNotPaused",id:"whentypenotpaused",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"__PauseManager_init",id:"__pausemanager_init",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"_requireTypeAndGeneralNotPaused",id:"_requiretypeandgeneralnotpaused",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"_requireTypeNotPaused",id:"_requiretypenotpaused",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"pauseByType",id:"pausebytype",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"unPauseByType",id:"unpausebytype",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"isPaused",id:"ispaused",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Return Values",id:"return-values",level:4}];function u(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"pausemanager",children:(0,r.jsx)(s.code,{children:"PauseManager"})})}),"\n",(0,r.jsx)(s.h3,{id:"pause_all_role",children:"PAUSE_ALL_ROLE"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"bytes32 PAUSE_ALL_ROLE\n"})}),"\n",(0,r.jsx)(s.p,{children:"This is used to pause all pausable functions."}),"\n",(0,r.jsx)(s.h3,{id:"unpause_all_role",children:"UNPAUSE_ALL_ROLE"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"bytes32 UNPAUSE_ALL_ROLE\n"})}),"\n",(0,r.jsx)(s.p,{children:"This is used to unpause all unpausable functions."}),"\n",(0,r.jsx)(s.h3,{id:"pausetypestatuses",children:"pauseTypeStatuses"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"mapping(bytes32 => bool) pauseTypeStatuses\n"})}),"\n",(0,r.jsx)(s.h3,{id:"whentypeandgeneralnotpaused",children:"whenTypeAndGeneralNotPaused"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"modifier whenTypeAndGeneralNotPaused(enum IPauseManager.PauseType _pauseType)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Modifier to make a function callable only when the specific and general types are not paused."})}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value being checked. Requirements: - The type must not be paused."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"whentypenotpaused",children:"whenTypeNotPaused"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"modifier whenTypeNotPaused(enum IPauseManager.PauseType _pauseType)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Modifier to make a function callable only when the type is not paused."})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value being checked. Requirements: - The type must not be paused."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"__pausemanager_init",children:"__PauseManager_init"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function __PauseManager_init(struct IPauseManager.PauseTypeRole[] _pauseTypeRoleAssignments, struct IPauseManager.PauseTypeRole[] _unpauseTypeRoleAssignments) internal\n"})}),"\n",(0,r.jsx)(s.p,{children:"Initializes the pause manager with the given pause and unpause roles."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"This function is called during contract initialization to set up the pause and unpause roles."})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseTypeRoleAssignments"}),(0,r.jsx)(s.td,{children:"struct IPauseManager.PauseTypeRole[]"}),(0,r.jsx)(s.td,{children:"An array of PauseTypeRole structs defining the pause types and their associated roles."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_unpauseTypeRoleAssignments"}),(0,r.jsx)(s.td,{children:"struct IPauseManager.PauseTypeRole[]"}),(0,r.jsx)(s.td,{children:"An array of PauseTypeRole structs defining the unpause types and their associated roles."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"_requiretypeandgeneralnotpaused",children:"_requireTypeAndGeneralNotPaused"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function _requireTypeAndGeneralNotPaused(enum IPauseManager.PauseType _pauseType) internal view virtual\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Throws if the specific or general types are paused.\nChecks the specific and general pause types."})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value being checked."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"_requiretypenotpaused",children:"_requireTypeNotPaused"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function _requireTypeNotPaused(enum IPauseManager.PauseType _pauseType) internal view virtual\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Throws if the type is paused.\nChecks the specific pause type."})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value being checked."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"pausebytype",children:"pauseByType"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function pauseByType(enum IPauseManager.PauseType _pauseType) external\n"})}),"\n",(0,r.jsx)(s.p,{children:"Pauses functionality by specific type."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["Requires the role mapped in ",(0,r.jsx)(s.code,{children:"_pauseTypeRoles"})," for the pauseType."]})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"unpausebytype",children:"unPauseByType"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function unPauseByType(enum IPauseManager.PauseType _pauseType) external\n"})}),"\n",(0,r.jsx)(s.p,{children:"Unpauses functionality by specific type."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["Requires the role mapped in ",(0,r.jsx)(s.code,{children:"_unPauseTypeRoles"})," for the pauseType."]})}),"\n",(0,r.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value."})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"ispaused",children:"isPaused"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function isPaused(enum IPauseManager.PauseType _pauseType) public view returns (bool pauseTypeIsPaused)\n"})}),"\n",(0,r.jsx)(s.p,{children:"Check if a pause type is enabled."}),"\n",(0,r.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"_pauseType"}),(0,r.jsx)(s.td,{children:"enum IPauseManager.PauseType"}),(0,r.jsx)(s.td,{children:"The pause type value."})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"pauseTypeIsPaused"}),(0,r.jsx)(s.td,{children:"bool"}),(0,r.jsx)(s.td,{children:"Returns true if the pause type if paused, false otherwise."})]})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);