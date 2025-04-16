"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[1556],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},90057:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"api/linea-smart-contracts/linearollup","title":"LineaRollup","description":"CONTRACT_VERSION","source":"@site/docs/api/linea-smart-contracts/linearollup.mdx","sourceDirName":"api/linea-smart-contracts","slug":"/api/linea-smart-contracts/linearollup","permalink":"/web3-feedback/api/linea-smart-contracts/linearollup","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/linearollup.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{},"sidebar":"apiSidebar","next":{"title":"ZkEvmV2","permalink":"/web3-feedback/api/linea-smart-contracts/zkevmv2"}}');var t=s(74848),r=s(28453);const l={},a="LineaRollup",d={},c=[{value:"CONTRACT_VERSION",id:"contract_version",level:3},{value:"VERIFIER_SETTER_ROLE",id:"verifier_setter_role",level:3},{value:"VERIFIER_UNSETTER_ROLE",id:"verifier_unsetter_role",level:3},{value:"GENESIS_SHNARF",id:"genesis_shnarf",level:3},{value:"SHNARF_EXISTS_DEFAULT_VALUE",id:"shnarf_exists_default_value",level:3},{value:"EMPTY_HASH",id:"empty_hash",level:3},{value:"BLS_CURVE_MODULUS",id:"bls_curve_modulus",level:3},{value:"POINT_EVALUATION_PRECOMPILE_ADDRESS",id:"point_evaluation_precompile_address",level:3},{value:"POINT_EVALUATION_RETURN_DATA_LENGTH",id:"point_evaluation_return_data_length",level:3},{value:"POINT_EVALUATION_FIELD_ELEMENTS_LENGTH",id:"point_evaluation_field_elements_length",level:3},{value:"SIX_MONTHS_IN_SECONDS",id:"six_months_in_seconds",level:3},{value:"dataFinalStateRootHashes",id:"datafinalstateroothashes",level:3},{value:"dataParents",id:"dataparents",level:3},{value:"dataShnarfHashes",id:"datashnarfhashes",level:3},{value:"dataStartingBlock",id:"datastartingblock",level:3},{value:"dataEndingBlock",id:"dataendingblock",level:3},{value:"currentL2StoredL1MessageNumber",id:"currentl2storedl1messagenumber",level:3},{value:"currentL2StoredL1RollingHash",id:"currentl2storedl1rollinghash",level:3},{value:"currentFinalizedShnarf",id:"currentfinalizedshnarf",level:3},{value:"blobShnarfExists",id:"blobshnarfexists",level:3},{value:"currentFinalizedState",id:"currentfinalizedstate",level:3},{value:"fallbackOperator",id:"fallbackoperator",level:3},{value:"constructor",id:"constructor",level:3},{value:"initialize",id:"initialize",level:3},{value:"Parameters",id:"parameters",level:4},{value:"reinitializeLineaRollupV6",id:"reinitializelinearollupv6",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"renounceRole",id:"renouncerole",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"setVerifierAddress",id:"setverifieraddress",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"setFallbackOperator",id:"setfallbackoperator",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"unsetVerifierAddress",id:"unsetverifieraddress",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"submitBlobs",id:"submitblobs",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"submitDataAsCalldata",id:"submitdataascalldata",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"_computeLastFinalizedState",id:"_computelastfinalizedstate",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"_computeShnarf",id:"_computeshnarf",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"_verifyPointEvaluation",id:"_verifypointevaluation",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"finalizeBlocks",id:"finalizeblocks",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"_finalizeBlocks",id:"_finalizeblocks",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Return Values",id:"return-values",level:4},{value:"_validateL2ComputedRollingHash",id:"_validatel2computedrollinghash",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"_calculateY",id:"_calculatey",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"Return Values",id:"return-values-1",level:4}];function h(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"linearollup",children:(0,t.jsx)(n.code,{children:"LineaRollup"})})}),"\n",(0,t.jsx)(n.h3,{id:"contract_version",children:"CONTRACT_VERSION"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"string CONTRACT_VERSION\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is the ABI version and not the reinitialize version."}),"\n",(0,t.jsx)(n.h3,{id:"verifier_setter_role",children:"VERIFIER_SETTER_ROLE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 VERIFIER_SETTER_ROLE\n"})}),"\n",(0,t.jsx)(n.p,{children:"The role required to set/add  proof verifiers by type."}),"\n",(0,t.jsx)(n.h3,{id:"verifier_unsetter_role",children:"VERIFIER_UNSETTER_ROLE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 VERIFIER_UNSETTER_ROLE\n"})}),"\n",(0,t.jsx)(n.p,{children:"The role required to set/remove  proof verifiers by type."}),"\n",(0,t.jsx)(n.h3,{id:"genesis_shnarf",children:"GENESIS_SHNARF"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 GENESIS_SHNARF\n"})}),"\n",(0,t.jsx)(n.p,{children:"The default genesis shnarf using empty/default hashes and a default state."}),"\n",(0,t.jsx)(n.h3,{id:"shnarf_exists_default_value",children:"SHNARF_EXISTS_DEFAULT_VALUE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 SHNARF_EXISTS_DEFAULT_VALUE\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Value indicating a shnarf exists."})}),"\n",(0,t.jsx)(n.h3,{id:"empty_hash",children:"EMPTY_HASH"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 EMPTY_HASH\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The default hash value."})}),"\n",(0,t.jsx)(n.h3,{id:"bls_curve_modulus",children:"BLS_CURVE_MODULUS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 BLS_CURVE_MODULUS\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The BLS Curve modulus value used."})}),"\n",(0,t.jsx)(n.h3,{id:"point_evaluation_precompile_address",children:"POINT_EVALUATION_PRECOMPILE_ADDRESS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"address POINT_EVALUATION_PRECOMPILE_ADDRESS\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The well-known precompile address for point evaluation."})}),"\n",(0,t.jsx)(n.h3,{id:"point_evaluation_return_data_length",children:"POINT_EVALUATION_RETURN_DATA_LENGTH"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 POINT_EVALUATION_RETURN_DATA_LENGTH\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The expected point evaluation return data length."})}),"\n",(0,t.jsx)(n.h3,{id:"point_evaluation_field_elements_length",children:"POINT_EVALUATION_FIELD_ELEMENTS_LENGTH"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 POINT_EVALUATION_FIELD_ELEMENTS_LENGTH\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The expected point evaluation field element length returned."})}),"\n",(0,t.jsx)(n.h3,{id:"six_months_in_seconds",children:"SIX_MONTHS_IN_SECONDS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 SIX_MONTHS_IN_SECONDS\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"In practice, when used, this is expected to be a close approximation to 6 months, and is intentional."})}),"\n",(0,t.jsx)(n.h3,{id:"datafinalstateroothashes",children:"dataFinalStateRootHashes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(bytes32 => bytes32) dataFinalStateRootHashes\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of the single blobShnarfExists mapping."})}),"\n",(0,t.jsx)(n.h3,{id:"dataparents",children:"dataParents"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(bytes32 => bytes32) dataParents\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of the single blobShnarfExists mapping."})}),"\n",(0,t.jsx)(n.h3,{id:"datashnarfhashes",children:"dataShnarfHashes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(bytes32 => bytes32) dataShnarfHashes\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of the single blobShnarfExists mapping."})}),"\n",(0,t.jsx)(n.h3,{id:"datastartingblock",children:"dataStartingBlock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(bytes32 => uint256) dataStartingBlock\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of the single blobShnarfExists mapping."})}),"\n",(0,t.jsx)(n.h3,{id:"dataendingblock",children:"dataEndingBlock"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(bytes32 => uint256) dataEndingBlock\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of the single blobShnarfExists mapping."})}),"\n",(0,t.jsx)(n.h3,{id:"currentl2storedl1messagenumber",children:"currentL2StoredL1MessageNumber"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"uint256 currentL2StoredL1MessageNumber\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of currentFinalizedState hash."})}),"\n",(0,t.jsx)(n.h3,{id:"currentl2storedl1rollinghash",children:"currentL2StoredL1RollingHash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 currentL2StoredL1RollingHash\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEPRECATED in favor of currentFinalizedState hash."})}),"\n",(0,t.jsx)(n.h3,{id:"currentfinalizedshnarf",children:"currentFinalizedShnarf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 currentFinalizedShnarf\n"})}),"\n",(0,t.jsx)(n.p,{children:"Contains the most recent finalized shnarf."}),"\n",(0,t.jsx)(n.h3,{id:"blobshnarfexists",children:"blobShnarfExists"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"mapping(bytes32 => uint256) blobShnarfExists\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"NB: THIS IS THE ONLY MAPPING BEING USED FOR DATA SUBMISSION TRACKING.\nNB: This was shnarfFinalBlockNumbers and is replaced to indicate only that a shnarf exists with a value of 1."})}),"\n",(0,t.jsx)(n.h3,{id:"currentfinalizedstate",children:"currentFinalizedState"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"bytes32 currentFinalizedState\n"})}),"\n",(0,t.jsx)(n.p,{children:"Hash of the L2 computed L1 message number, rolling hash and finalized timestamp."}),"\n",(0,t.jsx)(n.h3,{id:"fallbackoperator",children:"fallbackOperator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"address fallbackOperator\n"})}),"\n",(0,t.jsx)(n.p,{children:"The address of the fallback operator."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This address is granted the OPERATOR_ROLE after six months of finalization inactivity by the current operators."})}),"\n",(0,t.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"constructor() public\n"})}),"\n",(0,t.jsx)(n.h3,{id:"initialize",children:"initialize"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function initialize(struct ILineaRollup.InitializationData _initializationData) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initializes LineaRollup and underlying service dependencies - used for new networks only."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DEFAULT_ADMIN_ROLE is set for the security council.\nOPERATOR_ROLE is set for operators.\nNote: This is used for new testnets and local/CI testing, and will not replace existing proxy based contracts."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_initializationData"}),(0,t.jsx)(n.td,{children:"struct ILineaRollup.InitializationData"}),(0,t.jsx)(n.td,{children:"The initial data used for proof verification."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"reinitializelinearollupv6",children:"reinitializeLineaRollupV6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function reinitializeLineaRollupV6(struct IPermissionsManager.RoleAddress[] _roleAddresses, struct IPauseManager.PauseTypeRole[] _pauseTypeRoles, struct IPauseManager.PauseTypeRole[] _unpauseTypeRoles, address _fallbackOperator) external\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sets permissions for a list of addresses and their roles as well as initialises the PauseManager pauseType",":role"," mappings and fallback operator."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This function is a reinitializer and can only be called once per version. Should be called using an upgradeAndCall transaction to the ProxyAdmin."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_roleAddresses"}),(0,t.jsx)(n.td,{children:"struct IPermissionsManager.RoleAddress[]"}),(0,t.jsx)(n.td,{children:"The list of addresses and roles to assign permissions to."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_pauseTypeRoles"}),(0,t.jsx)(n.td,{children:"struct IPauseManager.PauseTypeRole[]"}),(0,t.jsx)(n.td,{children:"The list of pause types to associate with roles."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_unpauseTypeRoles"}),(0,t.jsx)(n.td,{children:"struct IPauseManager.PauseTypeRole[]"}),(0,t.jsx)(n.td,{children:"The list of unpause types to associate with roles."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_fallbackOperator"}),(0,t.jsx)(n.td,{children:"address"}),(0,t.jsx)(n.td,{children:"The address of the fallback operator."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"renouncerole",children:"renounceRole"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function renounceRole(bytes32 _role, address _account) public\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Revokes ",(0,t.jsx)(n.code,{children:"role"})," from the calling account."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Fallback operator cannot renounce role. Reverts with OnlyNonFallbackOperator."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_role"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The role to renounce."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_account"}),(0,t.jsx)(n.td,{children:"address"}),(0,t.jsx)(n.td,{children:"The account to renounce - can only be the _msgSender()."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"setverifieraddress",children:"setVerifierAddress"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setVerifierAddress(address _newVerifierAddress, uint256 _proofType) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Adds or updates the verifier contract address for a proof type."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"VERIFIER_SETTER_ROLE is required to execute."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_newVerifierAddress"}),(0,t.jsx)(n.td,{children:"address"}),(0,t.jsx)(n.td,{children:"The address for the verifier contract."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_proofType"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The proof type being set/updated."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"setfallbackoperator",children:"setFallbackOperator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function setFallbackOperator(uint256 _messageNumber, bytes32 _rollingHash, uint256 _lastFinalizedTimestamp) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the fallback operator role to the specified address if six months have passed since the last finalization."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Reverts if six months have not passed since the last finalization."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_messageNumber"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"Last finalized L1 message number as part of the feedback loop."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_rollingHash"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"Last finalized L1 rolling hash as part of the feedback loop."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_lastFinalizedTimestamp"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"Last finalized L2 block timestamp."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"unsetverifieraddress",children:"unsetVerifierAddress"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function unsetVerifierAddress(uint256 _proofType) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Unset the verifier contract address for a proof type."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"VERIFIER_UNSETTER_ROLE is required to execute."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_proofType"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The proof type being set/updated."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"submitblobs",children:"submitBlobs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function submitBlobs(struct ILineaRollup.BlobSubmission[] _blobSubmissions, bytes32 _parentShnarf, bytes32 _finalBlobShnarf) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Submit one or more EIP-4844 blobs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"OPERATOR_ROLE is required to execute.\nThis should be a blob carrying transaction."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_blobSubmissions"}),(0,t.jsx)(n.td,{children:"struct ILineaRollup.BlobSubmission[]"}),(0,t.jsx)(n.td,{children:"The data for blob submission including proofs and required polynomials."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_parentShnarf"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The parent shnarf used in continuity checks as it includes the parentStateRootHash in its computation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_finalBlobShnarf"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The expected final shnarf post computation of all the blob shnarfs."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"submitdataascalldata",children:"submitDataAsCalldata"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function submitDataAsCalldata(struct ILineaRollup.CompressedCalldataSubmission _submission, bytes32 _parentShnarf, bytes32 _expectedShnarf) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Submit blobs using compressed data via calldata."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"OPERATOR_ROLE is required to execute."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_submission"}),(0,t.jsx)(n.td,{children:"struct ILineaRollup.CompressedCalldataSubmission"}),(0,t.jsx)(n.td,{children:"The supporting data for compressed data submission including compressed data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_parentShnarf"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The parent shnarf used in continuity checks as it includes the parentStateRootHash in its computation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_expectedShnarf"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The expected shnarf post computation of all the submission."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"_computelastfinalizedstate",children:"_computeLastFinalizedState"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _computeLastFinalizedState(uint256 _messageNumber, bytes32 _rollingHash, uint256 _timestamp) internal pure returns (bytes32 hashedFinalizationState)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Internal function to compute and save the finalization state."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Using assembly this way is cheaper gas wise."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_messageNumber"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"Is the last L2 computed L1 message number in the finalization."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_rollingHash"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"Is the last L2 computed L1 rolling hash in the finalization."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_timestamp"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The final timestamp in the finalization."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"_computeshnarf",children:"_computeShnarf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _computeShnarf(bytes32 _parentShnarf, bytes32 _snarkHash, bytes32 _finalStateRootHash, bytes32 _dataEvaluationPoint, bytes32 _dataEvaluationClaim) internal pure returns (bytes32 shnarf)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Internal function to compute the shnarf more efficiently."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Using assembly this way is cheaper gas wise."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_parentShnarf"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The shnarf of the parent data item."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_snarkHash"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"Is the computed hash for compressed data (using a SNARK-friendly hash function) that aggregates per data submission to be used in public input."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_finalStateRootHash"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The final state root hash of the data being submitted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_dataEvaluationPoint"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The data evaluation point."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_dataEvaluationClaim"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The data evaluation claim."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"_verifypointevaluation",children:"_verifyPointEvaluation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _verifyPointEvaluation(bytes32 _currentDataHash, uint256 _dataEvaluationPoint, uint256 _dataEvaluationClaim, bytes _kzgCommitment, bytes _kzgProof) internal view\n"})}),"\n",(0,t.jsx)(n.p,{children:"Performs point evaluation for the compressed blob."}),"\n",(0,t.jsxs)(n.p,{children:["_",(0,t.jsx)(n.em,{children:"dataEvaluationPoint is modular reduced to be lower than the BLS_CURVE_MODULUS for precompile checks."})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_currentDataHash"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The current blob versioned hash."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_dataEvaluationPoint"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The data evaluation point."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_dataEvaluationClaim"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The data evaluation claim."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_kzgCommitment"}),(0,t.jsx)(n.td,{children:"bytes"}),(0,t.jsx)(n.td,{children:"The blob KZG commitment."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_kzgProof"}),(0,t.jsx)(n.td,{children:"bytes"}),(0,t.jsx)(n.td,{children:"The blob KZG point proof."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"finalizeblocks",children:"finalizeBlocks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function finalizeBlocks(bytes _aggregatedProof, uint256 _proofType, struct ILineaRollup.FinalizationDataV3 _finalizationData) external\n"})}),"\n",(0,t.jsx)(n.p,{children:"Finalize compressed blocks with proof."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"OPERATOR_ROLE is required to execute."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_aggregatedProof"}),(0,t.jsx)(n.td,{children:"bytes"}),(0,t.jsx)(n.td,{children:"The aggregated proof."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_proofType"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The proof type."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_finalizationData"}),(0,t.jsx)(n.td,{children:"struct ILineaRollup.FinalizationDataV3"}),(0,t.jsx)(n.td,{children:"The full finalization data."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"_finalizeblocks",children:"_finalizeBlocks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _finalizeBlocks(struct ILineaRollup.FinalizationDataV3 _finalizationData, uint256 _lastFinalizedBlock) internal returns (bytes32 finalShnarf)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Internal function to finalize compressed blocks."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_finalizationData"}),(0,t.jsx)(n.td,{children:"struct ILineaRollup.FinalizationDataV3"}),(0,t.jsx)(n.td,{children:"The full finalization data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_lastFinalizedBlock"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"The last finalized block."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"return-values",children:"Return Values"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"finalShnarf"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The final computed shnarf in finalizing."})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"_validatel2computedrollinghash",children:"_validateL2ComputedRollingHash"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _validateL2ComputedRollingHash(uint256 _rollingHashMessageNumber, bytes32 _rollingHash) internal view\n"})}),"\n",(0,t.jsx)(n.p,{children:"Internal function to validate l1 rolling hash."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-13",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_rollingHashMessageNumber"}),(0,t.jsx)(n.td,{children:"uint256"}),(0,t.jsx)(n.td,{children:"Message number associated with the rolling hash as computed on L2."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_rollingHash"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"L1 rolling hash as computed on L2."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"_calculatey",children:"_calculateY"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:"function _calculateY(bytes _data, bytes32 _dataEvaluationPoint) internal pure returns (bytes32 compressedDataComputedY)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Internal function to calculate Y for public input generation."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Each chunk of 32 bytes must start with a 0 byte.\nThe dataEvaluationPoint value is modulo-ed down during the computation and scalar field checking is not needed.\nThere is a hard constraint in the circuit to enforce the polynomial degree limit (4096), which will also be enforced with EIP-4844."})}),"\n",(0,t.jsx)(n.h4,{id:"parameters-14",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_data"}),(0,t.jsx)(n.td,{children:"bytes"}),(0,t.jsx)(n.td,{children:"Compressed data from submission data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_dataEvaluationPoint"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The data evaluation point."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"compressedDataComputedY"}),(0,t.jsx)(n.td,{children:"bytes32"}),(0,t.jsx)(n.td,{children:"The Y calculated value using the Horner method."})]})})]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);