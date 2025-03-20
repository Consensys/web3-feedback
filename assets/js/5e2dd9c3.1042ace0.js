"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[2232],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}},79178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"learn/ecosystem-tutorials/irys/irys-dynamic-nfts","title":"Create a dynamic NFT","description":"Create NFTs that evolve based on user actions.","source":"@site/docs/learn/ecosystem-tutorials/irys/irys-dynamic-nfts.mdx","sourceDirName":"learn/ecosystem-tutorials/irys","slug":"/learn/ecosystem-tutorials/irys/irys-dynamic-nfts","permalink":"/web3-feedback/learn/ecosystem-tutorials/irys/irys-dynamic-nfts","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/learn/ecosystem-tutorials/irys/irys-dynamic-nfts.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{"title":"Create a dynamic NFT","image":"/img/socialCards/create-a-dynamic-nft.jpg","description":"Create NFTs that evolve based on user actions."},"sidebar":"learnSidebar","previous":{"title":"Irys","permalink":"/web3-feedback/learn/ecosystem-tutorials/irys/"},"next":{"title":"Create an NFT","permalink":"/web3-feedback/learn/ecosystem-tutorials/irys/irys-nfts"}}');var s=t(74848),i=t(28453);const r={title:"Create a dynamic NFT",image:"/img/socialCards/create-a-dynamic-nft.jpg",description:"Create NFTs that evolve based on user actions."},o=void 0,l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to create a &quot;mutable&quot; URL",id:"how-to-create-a-mutable-url",level:2},{value:"Deploy your smart contract",id:"deploy-your-smart-contract",level:2},{value:"Upload the images",id:"upload-the-images",level:2},{value:"Upload the metadata",id:"upload-the-metadata",level:2},{value:"Mint the NFT",id:"mint-the-nft",level:2},{value:"Mutate the metadata",id:"mutate-the-metadata",level:2},{value:"Free metadata uploads",id:"free-metadata-uploads",level:2},{value:"Caching",id:"caching",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Data on Irys is permanent and immutable, but you can use\n",(0,s.jsx)(n.a,{href:"https://docs.irys.xyz/build/d/features/mutability",children:"Irys's mutability features"})," to simulate\nmutability and create dynamic NFTs that evolve based on onchain or offchain actions."]}),"\n",(0,s.jsx)(n.p,{children:"A mutable-style URL is a single, static URL that is linked to a series of transactions.\nYou can add a new transaction to the series at any time, and the URL will always resolve to the\nmost recent transaction."}),"\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("div",{class:"img-large",children:(0,s.jsx)("img",{src:"/img/learn/ecosystem-tutorials/irys/irys_dynamic_nfts/mutable-references.png",alt:""})})}),"\n",(0,s.jsx)(n.p,{children:"In this guide, you will create a dynamic NFT using Irys's mutability features. Dynamic NFTs are NFTs whose\nmetadata evolves over time. They are commonly used in:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gaming projects where in-game assets evolve as players progress."}),"\n",(0,s.jsx)(n.li,{children:"Loyalty programs where NFTs evolve as users accumulate points."}),"\n"]}),"\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("div",{class:"img-large",children:(0,s.jsx)("img",{src:"/img/learn/ecosystem-tutorials/irys/irys_dynamic_nfts/all-characters.png",alt:""})})}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial focuses on creating a SuperMon NFT that can evolve during gameplay. The NFT starts with\na basic appearance that can be upgraded twice. We will use the\n",(0,s.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/permanent-data/irys/irys-quickstart#irys-cli",children:"Irys CLI"}),' to "mutate" the\nmetadata, simulating the automatic changes that would occur through player interactions in an actual game.']}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/permanent-data/irys/irys-quickstart#irys-cli",children:"Install the Irys CLI"})," to upload\nyour images and metadata."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-create-a-mutable-url",children:'How to create a "mutable" URL'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a single static URL that is tied to a chain of transactions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const irysUploader = await getIrysUploader();\nconst receiptOne = await irysUploader.upload("First TX");\nconsole.log(`TX 1 uploaded https://gateway.irys.xyz/mutable/${receiptOne.id}`);\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Update the "chain" by posting a second transaction (from the same wallet) tagged with the original transaction\'s ID:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const tags = [{ name: "Root-TX", value: receiptOne.id }];\nconst receiptTwo = await irysUploader.upload("Second TX", { tags });\nconsole.log(`TX 2 uploaded https://gateway.irys.xyz/mutable/${receiptOne.id}`);\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-your-smart-contract",children:"Deploy your smart contract"}),"\n",(0,s.jsx)(n.p,{children:"Deploy your NFT smart contract. The following is a simple example that you can use to mint\nthe NFT that we'll create."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",metastring:'filename="SuperMon.sol"',children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\n// Import OpenZeppelin\'s ERC721 and ERC721URIStorage contracts\n// These URLs are compatible with Remix IDE\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/access/Ownable.sol";\n\ncontract SuperMon is ERC721URIStorage {\n    uint256 private _tokenIdCounter;\n\n    // No arguments in the constructor, the owner will be the contract deployer\n    constructor() ERC721("SuperMon", "SMON") {\n        _tokenIdCounter = 0;\n    }\n\n    // Mint function to create a new NFT\n    function mint(address to, string memory uri) public {\n        uint256 tokenId = _tokenIdCounter;\n        _tokenIdCounter += 1;\n        _safeMint(to, tokenId);\n        _setTokenURI(tokenId, uri);\n    }\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/deploy-smart-contract/remix",children:"Deploy the smart contract using Remix"}),", or\n",(0,s.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/deploy-smart-contract/",children:"any other environment"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"upload-the-images",children:"Upload the images"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Right-click each image and save it on your local drive."}),"\n"]}),"\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("div",{class:"img-large",children:(0,s.jsx)("img",{src:"/img/learn/ecosystem-tutorials/irys/irys_dynamic_nfts/image-level-1-3.png",alt:""})})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fund the Irys Devnet with 0.1 ",(0,s.jsx)(n.a,{href:"https://www.infura.io/faucet/linea",children:"Linea Sepolia ETH"})," to pay\nfor your uploads."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In all of these CLI examples, ensure you replace the value of the ",(0,s.jsx)(n.code,{children:"-w"})," parameter with your own private key."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"irys fund 100000000000000000 \\\n  -n devnet \\\n  -t linea-eth \\\n  -w 6dd5e....54a120201cb6a \\\n  --provider-url https://rpc.sepolia.linea.build\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"fund"})," command accepts a value in atomic units, 0.1 ETH is equal to 100000000000000000 in atomic units."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use the Irys CLI to upload each of the images to the Irys Devnet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"irys upload image-level-1.png \\\n  -n devnet \\\n  -t linea-eth \\\n  -w 6dd5e....54a120201cb6a \\\n  --provider-url https://rpc.sepolia.linea.build\n\nirys upload image-level-2.png \\\n  -n devnet \\\n  -t linea-eth \\\n  -w 6dd5e....54a120201cb6a \\\n  --provider-url https://rpc.sepolia.linea.build\n\nirys upload image-level-3.png \\\n  -n devnet \\\n  -t linea-eth \\\n  -w 6dd5e....54a120201cb6a \\\n  --provider-url https://rpc.sepolia.linea.build\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"upload-the-metadata",children:"Upload the metadata"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create three metadata files similar to the ones below. Make sure to change the value of the image field\nto match the URLs generated in the previous step."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'filename="metadata-level-1.json"',children:'{\n  "name": "SuperMon",\n  "symbol": "SMON",\n  "image": "https://gateway.irys.xyz/A7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x",\n  "description": "Super dooper, changing shapes, changing power",\n  "attributes": [\n    {\n      "trait_type": "supermon-level",\n      "value": "1"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'filename="metadata-level-2.json"',children:'{\n  "name": "SuperMon",\n  "symbol": "SMON",\n  "image": "https://gateway.irys.xyz/A7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x",\n  "description": "Super dooper, changing shapes, changing power",\n  "attributes": [\n    {\n      "trait_type": "supermon-level",\n      "value": "2"\n    }\n  ]\n\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'filename="metadata-level-3.json"',children:'{\n  "name": "SuperMon",\n  "symbol": "SMON",\n  "image": "https://gateway.irys.xyz/A7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x",\n  "description": "Super dooper, changing shapes, changing power",\n  "attributes": [\n    {\n      "trait_type": "supermon-level",\n      "value": "3"\n    }\n  ]\n\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Upload ",(0,s.jsx)(n.strong,{children:"just the first file"})," using the Irys CLI:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"irys upload metadata-level-1.json \\\n  -n devnet \\\n  -t linea-eth \\\n  -w 6dd5e....54a120201cb6a \\\n  --provider-url https://rpc.sepolia.linea.build\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The CLI will return a URL similar to ",(0,s.jsx)(n.code,{children:"https://gateway.irys.xyz/2N9YPwW3KdWcDsCZr4EWzZryZVUxbDN4oKRiutLxKJrF"}),".\nTo convert that to a mutable references URL, interpolate it by adding ",(0,s.jsx)(n.code,{children:"/mutable/"})," after the\ndomain and before the transaction ID."]}),"\n",(0,s.jsxs)(n.p,{children:["Your final URL will be similar to ",(0,s.jsx)(n.code,{children:"https://gateway.irys.xyz/mutable/2N9YPwW3KdWcDsCZr4EWzZryZVUxbDN4oKRiutLxKJrF"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"mint-the-nft",children:"Mint the NFT"}),"\n",(0,s.jsxs)(n.p,{children:["To mint your NFT in ",(0,s.jsx)(n.a,{href:"https://remix.ethereum.org/",children:"Remix"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.strong,{children:"Deployed Contracts"}),", locate your contract and expand it to see its functions."]}),"\n",(0,s.jsxs)(n.li,{children:["Under the ",(0,s.jsx)(n.code,{children:"Mint"})," function, enter the wallet address you want to mint the NFT to and the\nmetadata URL (e.g. ",(0,s.jsx)(n.code,{children:"https://gateway.irys.xyz/mutable/2N9YPwW3KdWcDsCZr4EWzZryZVUxbDN4oKRiutLxKJrF"}),") from\nthe previous step."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Transact"}),"."]}),"\n"]}),"\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("div",{class:"img-large",children:(0,s.jsx)("img",{src:"/img/learn/ecosystem-tutorials/irys/irys_dynamic_nfts/open-sea-mockup.jpg",alt:""})})}),"\n",(0,s.jsxs)(n.p,{children:["You can now view the NFT on the ",(0,s.jsx)(n.a,{href:"https://testnets.opensea.io/account",children:"Opensea Testnet"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"mutate-the-metadata",children:"Mutate the metadata"}),"\n",(0,s.jsxs)(n.p,{children:['To "mutate" the NFT, upload a new version of the metadata tagging it as having a ',(0,s.jsx)(n.code,{children:"Root-TX"}),"\nequal to the transaction ID of your first transaction. In this example, we pass the\nvalue of ",(0,s.jsx)(n.code,{children:"2N9YPwW3KdWcDsCZr4EWzZryZVUxbDN4oKRiutLxKJrF"}),", however make sure to change this to match your\nunique transaction ID."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"irys upload metadata-level-2.json \\\n  -n devnet \\\n  -t linea-eth \\\n  -w 6dd5e....54a120201cb6a \\\n  --tags Root-TX 2N9YPwW3KdWcDsCZr4EWzZryZVUxbDN4oKRiutLxKJrF \\\n  --provider-url https://rpc.sepolia.linea.build\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return to Opensea and request that it refresh your metadata."}),"\n",(0,s.jsx)("div",{class:"center-container",children:(0,s.jsx)("div",{class:"img-large",children:(0,s.jsx)("img",{src:"/img/learn/ecosystem-tutorials/irys/irys_dynamic_nfts/refresh-metadata.png",alt:""})})}),"\n",(0,s.jsx)(n.p,{children:"Give it a few minutes and your updated NFT should be visible."}),"\n",(0,s.jsx)(n.h2,{id:"free-metadata-uploads",children:"Free metadata uploads"}),"\n",(0,s.jsx)(n.p,{children:"This tutorial uses the Irys Devnet where uploads are kept for ~60 days and are paid for with free\nfaucet currencies. When deploying production projects, you'll use Irys's mainnet where uploads are permanent."}),"\n",(0,s.jsx)(n.p,{children:'Uploads of less than 100 KiB are free on Irys, which is more than enough for most metadata files. This\nmeans projects can let users "evolve" their NFTs without having to pay gas fees.'}),"\n",(0,s.jsx)(n.h2,{id:"caching",children:"Caching"}),"\n",(0,s.jsx)(n.p,{children:"Wallets and NFT websites typically cache metadata to optimize performance, this can affect the\nvisibility of updates to dynamic NFTs. While OpenSea offers a feature for users to manually request\nmetadata refreshes, not all platforms provide this level of control. When building dynamic NFT\nprojects, make sure to thoroughly test and understand the implications of caching on your platform."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);