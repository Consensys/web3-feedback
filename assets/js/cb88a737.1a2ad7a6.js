"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[7386],{28074:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"api/linea-sdk","title":"Linea SDK","description":"Installation","source":"@site/docs/api/linea-sdk.mdx","sourceDirName":"api","slug":"/api/linea-sdk","permalink":"/web3-feedback/api/linea-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-sdk.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{"title":"Linea SDK","image":"/img/socialCards/linea-sdk.jpg"},"sidebar":"apiSidebar","previous":{"title":"Token API","permalink":"/web3-feedback/api/token-api/overview"}}');var t=a(74848),i=a(28453),o=a(65537),r=a(79329);const l={title:"Linea SDK",image:"/img/socialCards/linea-sdk.jpg"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"Code examples",id:"code-examples",level:2}];function m(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To install the package you need to run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @consensys/linea-sdk\n"})}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.p,{children:"The SDK focuses on interacting with smart contracts on both Ethereum and Linea networks and provides custom functions to obtain message information. Notable features of the Linea SDK include:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Getting contract instances and addresses"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Getting message information by message hash"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Getting messages by transaction hash"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Getting a message status by message hash"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Claiming messages (use one of the get message methods to grab all the parameters values)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"New Features",type:"info",children:[(0,t.jsx)(n.p,{children:"The updated Linea SDK package enhances the L1 contract interaction and adds support for the new L1 claiming system, which is based on a Merkle tree and requires a Merkle proof for claiming."}),(0,t.jsx)(n.p,{children:"There are three important things to note:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The previous L1 claiming and all functions associated are still supported."}),"\n",(0,t.jsx)(n.li,{children:"The L2 claiming remains unaltered, and all SDK features for interacting with L2 will remain unchanged."}),"\n",(0,t.jsx)(n.li,{children:"The previous L1 claiming function and code samples provided here cater to the transition period where pre-transition messages are claimed without the Merkle proof and post-transition with proof. If this SDK is being used after the transition, using the logic that switches between Merkle and non-Merkle proof claiming is sub-optimal."}),"\n"]}),(0,t.jsx)(n.p,{children:"The updated SDK introduces several new features for L1 interactions:"}),(0,t.jsx)(n.p,{children:"A new L1ClaimingService class that includes the following functions:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"getMessageProof: This function retrieves the message Merkle tree proof required for new message claims on L1."}),"\n",(0,t.jsx)(n.li,{children:"isClaimingNeedingProof: This function determines whether a proof is needed to claim a message."}),"\n",(0,t.jsx)(n.li,{children:"getMessageStatus: This function retrieves a message's status, returning the status of both old and new messages."}),"\n",(0,t.jsx)(n.li,{children:"estimateClaimMessageGas: This function provides an estimate of the gas cost for both old and new claim transactions."}),"\n",(0,t.jsx)(n.li,{children:"claimMessage: This function enables a message to be claimed using either the old or new function."}),"\n"]}),(0,t.jsx)(n.p,{children:"Two new functions in the L1 contract:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"estimateClaimWithProofGas: This function estimates the gas cost for new claim transactions."}),"\n",(0,t.jsx)(n.li,{children:"claimWithProof: This function claims a message using the new claimMessageWithProof function."}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"code-examples",children:"Code examples"}),"\n","\n",(0,t.jsxs)(o.A,{className:"my-tabs",defaultValue:"new",values:[{label:"v0.2.0-rc.1",value:"new"},{label:"v0.1.6",value:"old"}],children:[(0,t.jsx)(r.A,{value:"old",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import * as dotenv from "dotenv";\nimport { LineaSDK } from "@consensys/linea-sdk";\nimport { BigNumber } from "ethers";\n\ndotenv.config();\n\nconst sdk = new LineaSDK({\n  l1RpcUrl: process.env.L1_RPC_URL ?? "", // L1 rpc url\n  l2RpcUrl: process.env.L2_RPC_URL ?? "", // L2 rpc url\n  l1SignerPrivateKey: process.env.L1_SIGNER_PRIVATE_KEY ?? "", // L1 account private key (optional if you use mode = read-only)\n  l2SignerPrivateKey: process.env.L2_SIGNER_PRIVATE_KEY ?? "", // L2 account private key (optional if you use mode = read-only)\n  network: "linea-mainnet", // network you want to interact with (either linea-mainnet or linea-sepolia)\n  mode: "read-write", // contract wrapper class mode (read-only or read-write), read-only: only read contracts state, read-write: read contracts state and claim messages\n});\n\nconst l1Contract = sdk.getL1Contract(); // get the L1 contract wrapper instance\nconst l2Contract = sdk.getL2Contract(); // get the L2 contract wrapper instance\nconst l1ClaimingService = sdk.getL1ClaimingService();\n\nconsole.log(\n  await l2Contract.getMessageStatus(\n    "0x13dd0f5e3611b44c88e80f5206bbe1ce1c6996514cef1e209e9eb06d9f5b9a2d",\n  ),\n); //  returns on-chain message status by message hash\nconsole.log(\n  await l1Contract.getMessageStatus(\n    "0x28e9e11b53d624500f7610377c97877bb1ecb3127a88f7eba84dd7a146891946",\n  ),\n); // returns on-chain message status by message hash\n\nconsole.log(\n  await l2Contract.getMessageByMessageHash(\n    "0x13dd0f5e3611b44c88e80f5206bbe1ce1c6996514cef1e209e9eb06d9f5b9a2d",\n  ),\n); // returns message by message hash\nconsole.log(await l1Contract.getMessageByMessageHash("")); // returns message by message hash\n\nconsole.log(\n  await l2Contract.getMessagesByTransactionHash(\n    "0x4b72c6abacd3e2372a32e2797c41cab08df8d5e6fb2eb453e896e52fe7b70a27",\n  ),\n); // returns message by transaction hash\nconsole.log(await l1Contract.getMessagesByTransactionHash("")); // returns message by transaction hash\n\nconsole.log(\n  await l2Contract.getTransactionReceiptByMessageHash(\n    "0x13dd0f5e3611b44c88e80f5206bbe1ce1c6996514cef1e209e9eb06d9f5b9a2d",\n  ),\n); // returns transaction receipt by message hash\nconsole.log(\n  await l1Contract.getTransactionReceiptByMessageHash(\n    "0x13dd0f5e3611b44c88e80f5206bbe1ce1c6996514cef1e209e9eb06d9f5b9a2d",\n  ),\n); // returns transaction receipt by message hash\n\nclaimMessage = await l2Contract.claim({\n  // claims message by message\n  messageSender: "", // address of message sender\n  messageHash: "", // message hash\n  fee: BigNumber.from(1), // fee\n  destination: "", // destination address of message\n  value: BigNumber.from(2), // value of message\n  calldata: "0x", // call data\n  messageNonce: BigNumber.from(1), // message nonce\n  feeRecipient: "0x", // address that will receive fees. by default it is the message sender\n});\n'})})}),(0,t.jsx)(r.A,{value:"new",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import * as dotenv from "dotenv";\nimport { LineaSDK } from "@consensys/linea-sdk";\nimport { BigNumber } from \'ethers\';\n\n\ndotenv.config();\n\nconst sdk = new LineaSDK({\n    l1RpcUrl: process.env.L1_RPC_URL ?? "",\n    l2RpcUrl: process.env.L2_RPC_URL ?? "",\n    l1SignerPrivateKey: process.env.L1_SIGNER_PRIVATE_KEY ?? "",\n    l2SignerPrivateKey: process.env.L2_SIGNER_PRIVATE_KEY ?? "",\n    network: "linea-mainnet",\n    mode: "read-write",\n  });\n\n  const l1Contract = sdk.getL1Contract();\n  const l2Contract = sdk.getL2Contract();\n  const l1ClaimingService = sdk.getL1ClaimingService();\n\n  /********************* Three approaches to claim on L1 *********************/\n\n  // 1. The L1 Claiming service manages all the necessary logic for you.\n  const message = await l2Contract.getMessageByMessageHash("messageHash");\n\n  const messageStatus = await l1ClaimingService.getMessageStatus("messageHash");\n\n  if (messageStatus == OnChainMessageStatus.CLAIMABLE) {\n    const estimatedGas = await l1ClaimingService.estimateClaimMessageGas(message); // Optional\n    await l1ClaimingService.claimMessage(message);\n  }\n\n  // 2. You can handle the logic on your side\n  const message = await l2Contract.getMessageByMessageHash("messageHash");\n\n  const messageStatus = await l1ClaimingService.getMessageStatus("messageHash");\n\n  if (messageStatus == OnChainMessageStatus.CLAIMABLE) {\n    const isProofNeeded = await l1ClaimingService.isClaimingNeedingProof("messageHash");\n    if (!isProofNeeded) {\n      const estimatedGas = await l1Contract.estimateClaimGas(message) // Optional\n      await l1Contract.claim(message);\n    } else {\n      const proofInfo = await l1ClaimingService.getMessageProof("messageHash");\n      const estimatedGas = await l1Contract.estimateClaimWithProofGas({\n        ...message,\n        proof: proofInfo.proof,\n        leafIndex: proofInfo.leafIndex,\n        merkleRoot: proofInfo.root,\n      }); // Optional\n\n      await l1Contract.claimWithProof({\n        ...message,\n        proof: proofInfo.proof,\n        leafIndex: proofInfo.leafIndex,\n        merkleRoot: proofInfo.root,\n      });\n    }\n  }\n\n  // 3. You can implement your own logic to get a merkle proof\n  const message = await l2Contract.getMessageByMessageHash("messageHash");\n\n  const messageStatus = await l1ClaimingService.getMessageStatus("messageHash");\n\n  if (messageStatus == OnChainMessageStatus.CLAIMABLE) {\n    const isProofNeeded = await l1ClaimingService.isClaimingNeedingProof("messageHash");\n    if (!isProofNeeded) {\n      const estimatedGas = await l1Contract.estimateClaimGas(message) // Optional\n      await l1Contract.claim(message);\n    } else {\n      const proofInfo = // Implement your own function to get a merkle proof\n        // The L1ClaimingService exposes some utility functions to assist you: getFinalizationMessagingInfo, getL2MessageHashesInBlockRange, getMessageSiblings\n\n        // Follow these steps:\n        // 1. Retrieve the MessageSent event on L2 by messageHash\n        // 2. Retrieve the L2MessagingBlockAnchored event on L1 using the MessageSent.blockNumber you acquired in step 1. This is used to get the finalization transaction hash where the L2 block number associated to your message has been finalized.\n        // 3. Invoke the getFinalizationMessagingInfo function using the L2MessagingBlockAnchored.transactionHash you obtained in step 2.\n        // This will return all merkle roots anchored during this finalization transaction, the depth of trees, the first and the last L2 block containing messages finalized on L1 in this transaction.\n        // 4. Invoke the getL2MessageHashesInBlockRange function using the first and last L2 block number that you obtained in step 3. This will return all l2 messages hashes in this L2 block range.\n        // 5. Invoke the getMessageSiblings function to obtain all message siblings\n        // 6. Construct a SparseMerkleTree, add all message siblings you obtained at step 5 to the tree and return a merkle proof\n\n        // NOTE: You can create your own functions that encompass all steps. Utility functions are merely provided as a helper.\n\n        const estimatedGas = await l1Contract.estimateClaimWithProofGas({\n          ...message,\n          proof: proofInfo.proof,\n          leafIndex: proofInfo.leafIndex,\n          merkleRoot: proofInfo.root,\n        }); // Optional\n        await l1Contract.claimWithProof({\n          ...message,\n          proof: proofInfo.proof,\n          leafIndex: proofInfo.leafIndex,\n          merkleRoot: proofInfo.root,\n        });\n    }\n  }\n\n\n'})})})]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},65537:(e,n,a)=>{a.d(n,{A:()=>C});var s=a(96540),t=a(34164),i=a(65627),o=a(56347),r=a(50372),l=a(30604),c=a(11861),u=a(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:t}}=e;return{value:n,label:a,attributes:s,default:t}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=m(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,d]=h({queryString:a,groupId:t}),[f,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,u.Dv)(a);return[t,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),b=(()=>{const e=c??f;return g({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,i]),tabValues:i}}var p=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function w(e){let{className:n,block:a,selectedValue:s,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),t=r[a].value;t!==s&&(c(n),o(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:r.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...i,className:(0,t.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:i}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function C(e){const n=(0,p.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},79329:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var s=a(34164);const t={tabItem:"tabItem_Ymn6"};var i=a(74848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:a,children:n})}}}]);