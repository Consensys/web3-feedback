"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[6340],{27906:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/linea-smart-contracts/lib/sparsemerkleproof","title":"SparseMerkleProof","description":"Account","source":"@site/docs/api/linea-smart-contracts/lib/sparsemerkleproof.mdx","sourceDirName":"api/linea-smart-contracts/lib","slug":"/api/linea-smart-contracts/lib/sparsemerkleproof","permalink":"/web3-feedback/api/linea-smart-contracts/lib/sparsemerkleproof","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/lib/sparsemerkleproof.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1742476504000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"PauseManager","permalink":"/web3-feedback/api/linea-smart-contracts/lib/pausemanager"},"next":{"title":"TokenBridgePauseManager","permalink":"/web3-feedback/api/linea-smart-contracts/lib/tokenbridgepausemanager"}}');var s=r(74848),l=r(28453);const d={},a="SparseMerkleProof",i={},c=[{value:"Account",id:"account",level:3},{value:"Leaf",id:"leaf",level:3},{value:"WrongBytesLength",id:"wrongbyteslength",level:3},{value:"LengthNotMod32",id:"lengthnotmod32",level:3},{value:"MaxTreeLeafIndexExceed",id:"maxtreeleafindexexceed",level:3},{value:"WrongProofLength",id:"wrongprooflength",level:3},{value:"TREE_DEPTH",id:"tree_depth",level:3},{value:"UNFORMATTED_PROOF_LENGTH",id:"unformatted_proof_length",level:3},{value:"ZERO_HASH",id:"zero_hash",level:3},{value:"MAX_TREE_LEAF_INDEX",id:"max_tree_leaf_index",level:3},{value:"verifyProof",id:"verifyproof",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values",level:4},{value:"mimcHash",id:"mimchash",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"getLeaf",id:"getleaf",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"getAccount",id:"getaccount",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"hashAccountValue",id:"hashaccountvalue",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-4",level:4},{value:"hashStorageValue",id:"hashstoragevalue",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Return Values",id:"return-values-5",level:4}];function h(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sparsemerkleproof",children:(0,s.jsx)(n.code,{children:"SparseMerkleProof"})})}),"\n",(0,s.jsx)(n.h3,{id:"account",children:"Account"}),"\n",(0,s.jsx)(n.p,{children:"The Account struct represents the state of the account including the storage root, nonce, balance and codesize"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This is mapped directly to the output of the storage proof"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"struct Account {\n  uint64 nonce;\n  uint256 balance;\n  bytes32 storageRoot;\n  bytes32 mimcCodeHash;\n  bytes32 keccakCodeHash;\n  uint64 codeSize;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"leaf",children:"Leaf"}),"\n",(0,s.jsx)(n.p,{children:"Represents the leaf structure in both account and storage tries"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This is mapped directly to the output of the storage proof"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"struct Leaf {\n  uint256 prev;\n  uint256 next;\n  bytes32 hKey;\n  bytes32 hValue;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"wrongbyteslength",children:"WrongBytesLength"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"error WrongBytesLength(uint256 expectedLength, uint256 bytesLength)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Thrown when expected bytes length is incorrect"}),"\n",(0,s.jsx)(n.h3,{id:"lengthnotmod32",children:"LengthNotMod32"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"error LengthNotMod32()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Thrown when the length of bytes is not in exactly 32 byte chunks"}),"\n",(0,s.jsx)(n.h3,{id:"maxtreeleafindexexceed",children:"MaxTreeLeafIndexExceed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"error MaxTreeLeafIndexExceed()\n"})}),"\n",(0,s.jsx)(n.p,{children:"Thrown when the leaf index is higher than the tree depth"}),"\n",(0,s.jsx)(n.h3,{id:"wrongprooflength",children:"WrongProofLength"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"error WrongProofLength(uint256 expectedLength, uint256 actualLength)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Thrown when the length of the unformatted proof is not provided exactly as expected (UNFORMATTED_PROOF_LENGTH)"}),"\n",(0,s.jsx)(n.h3,{id:"tree_depth",children:"TREE_DEPTH"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint256 TREE_DEPTH\n"})}),"\n",(0,s.jsx)(n.h3,{id:"unformatted_proof_length",children:"UNFORMATTED_PROOF_LENGTH"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint256 UNFORMATTED_PROOF_LENGTH\n"})}),"\n",(0,s.jsx)(n.h3,{id:"zero_hash",children:"ZERO_HASH"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"bytes32 ZERO_HASH\n"})}),"\n",(0,s.jsx)(n.h3,{id:"max_tree_leaf_index",children:"MAX_TREE_LEAF_INDEX"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"uint256 MAX_TREE_LEAF_INDEX\n"})}),"\n",(0,s.jsx)(n.h3,{id:"verifyproof",children:"verifyProof"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function verifyProof(bytes[] _rawProof, uint256 _leafIndex, bytes32 _root) external pure returns (bool)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Formats input, computes root and returns true if it matches the provided merkle root"}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_rawProof"}),(0,s.jsx)(n.td,{children:"bytes[]"}),(0,s.jsx)(n.td,{children:"Raw sparse merkle tree proof"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_leafIndex"}),(0,s.jsx)(n.td,{children:"uint256"}),(0,s.jsx)(n.td,{children:"Index of the leaf"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_root"}),(0,s.jsx)(n.td,{children:"bytes32"}),(0,s.jsx)(n.td,{children:"Sparse merkle root"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[0]"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"If the computed merkle root matches the provided one"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"mimchash",children:"mimcHash"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function mimcHash(bytes _input) external pure returns (bytes32)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hash a value using MIMC hash"}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_input"}),(0,s.jsx)(n.td,{children:"bytes"}),(0,s.jsx)(n.td,{children:"Value to hash"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[0]"}),(0,s.jsx)(n.td,{children:"bytes32"}),(0,s.jsx)(n.td,{children:"bytes32 Mimc hash"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"getleaf",children:"getLeaf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function getLeaf(bytes _encodedLeaf) external pure returns (struct SparseMerkleProof.Leaf)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get leaf"}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_encodedLeaf"}),(0,s.jsx)(n.td,{children:"bytes"}),(0,s.jsx)(n.td,{children:"Encoded leaf bytes (prev, next, hKey, hValue)"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[0]"}),(0,s.jsx)(n.td,{children:"struct SparseMerkleProof.Leaf"}),(0,s.jsx)(n.td,{children:"Leaf Formatted leaf struct"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"getaccount",children:"getAccount"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function getAccount(bytes _encodedAccountValue) external pure returns (struct SparseMerkleProof.Account)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get account"}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_encodedAccountValue"}),(0,s.jsx)(n.td,{children:"bytes"}),(0,s.jsx)(n.td,{children:"Encoded account value bytes (nonce, balance, storageRoot, mimcCodeHash, keccakCodeHash, codeSize)"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[0]"}),(0,s.jsx)(n.td,{children:"struct SparseMerkleProof.Account"}),(0,s.jsx)(n.td,{children:"Account Formatted account struct"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"hashaccountvalue",children:"hashAccountValue"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function hashAccountValue(bytes _value) external pure returns (bytes32)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hash account value"}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_value"}),(0,s.jsx)(n.td,{children:"bytes"}),(0,s.jsx)(n.td,{children:"Encoded account value bytes (nonce, balance, storageRoot, mimcCodeHash, keccakCodeHash, codeSize)"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[0]"}),(0,s.jsx)(n.td,{children:"bytes32"}),(0,s.jsx)(n.td,{children:"bytes32 Account value hash"})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"hashstoragevalue",children:"hashStorageValue"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"function hashStorageValue(bytes32 _value) external pure returns (bytes32)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hash storage value"}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"_value"}),(0,s.jsx)(n.td,{children:"bytes32"}),(0,s.jsx)(n.td,{children:"Encoded storage value bytes"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"return-values-5",children:"Return Values"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[0]"}),(0,s.jsx)(n.td,{children:"bytes32"}),(0,s.jsx)(n.td,{children:"bytes32 Storage value hash"})]})})]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(96540);const s={},l=t.createContext(s);function d(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);