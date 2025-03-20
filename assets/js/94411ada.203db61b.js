"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[8438],{12923:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"learn/ecosystem-tutorials/irys/irys-nfts","title":"Create an NFT","description":"Build permanent NFTs using Irys and Linea.","source":"@site/docs/learn/ecosystem-tutorials/irys/irys-nfts.mdx","sourceDirName":"learn/ecosystem-tutorials/irys","slug":"/learn/ecosystem-tutorials/irys/irys-nfts","permalink":"/web3-feedback/learn/ecosystem-tutorials/irys/irys-nfts","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/learn/ecosystem-tutorials/irys/irys-nfts.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1742476504000,"frontMatter":{"title":"Create an NFT","image":"/img/socialCards/create-an-nft.jpg","description":"Build permanent NFTs using Irys and Linea."},"sidebar":"learnSidebar","previous":{"title":"Create a dynamic NFT","permalink":"/web3-feedback/learn/ecosystem-tutorials/irys/irys-dynamic-nfts"}}');var a=s(74848),r=s(28453);const i={title:"Create an NFT",image:"/img/socialCards/create-an-nft.jpg",description:"Build permanent NFTs using Irys and Linea."},o=void 0,l={},d=[{value:"Deploy your smart contract",id:"deploy-your-smart-contract",level:2},{value:"Store your assets on Irys",id:"store-your-assets-on-irys",level:2},{value:"Store your visual assets",id:"store-your-visual-assets",level:3},{value:"Install the Irys CLI",id:"install-the-irys-cli",level:4},{value:"Upload single assets",id:"upload-single-assets",level:4},{value:"Upload multiple assets",id:"upload-multiple-assets",level:4},{value:"Store your metadata",id:"store-your-metadata",level:3},{value:"Create metadata",id:"create-metadata",level:4},{value:"Upload metadata",id:"upload-metadata",level:4},{value:"Mint the NFTs",id:"mint-the-nfts",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/permanent-data/irys/overview",children:"Irys"})," to  create an NFT on Linea in three steps:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Deploy your smart contract on Linea"}),"\n",(0,a.jsx)(n.li,{children:"Permanently store your NFT assets on Irys"}),"\n",(0,a.jsx)(n.li,{children:"Mint your NFTs using metadata stored on Irys"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"When you upload NFTs to Irys, you make a one-time payment for and your data is guaranteed to be retrievable forever. Creators and\ncollectors benefit from the assurance that their NFTs are preserved indefinitely. NFT metadata and\nimages stored on Irys are permanent and immutable."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can also use Irys to create ",(0,a.jsx)(n.a,{href:"/web3-feedback/learn/ecosystem-tutorials/irys/irys-dynamic-nfts",children:"dynamic NFTs"})," that evolve based on onchain or\noffchain actions."]})}),"\n",(0,a.jsx)(n.h2,{id:"deploy-your-smart-contract",children:"Deploy your smart contract"}),"\n",(0,a.jsxs)(n.p,{children:["If you're new to NFTs and smart contract development, consider deploying\none of ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/deploy-smart-contract/thirdweb",children:"the audited ThirdWeb contracts"})," to learn more."]}),"\n",(0,a.jsxs)(n.p,{children:["You can also ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/deploy-smart-contract/remix",children:"deploy this minimal contract using Remix"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\n// Compatible with OpenZeppelin Contracts ^5.0.0\npragma solidity ^0.8.20;\n\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/access/Ownable.sol";\n\ncontract IrysLineaNFT is ERC721, ERC721URIStorage, Ownable {\n    uint256 private _nextTokenId;\n\n    constructor(address initialOwner)\n        ERC721("IrysLineaNFT", "ILNFT")\n        Ownable(initialOwner)\n    {}\n\n    function safeMint(address to, string memory uri) public onlyOwner {\n        uint256 tokenId = _nextTokenId++;\n        _safeMint(to, tokenId);\n        _setTokenURI(tokenId, uri);\n    }\n\n    // The following functions are overrides required by Solidity.\n    function tokenURI(uint256 tokenId)\n        public\n        view\n        override(ERC721, ERC721URIStorage)\n        returns (string memory)\n    {\n        return super.tokenURI(tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC721, ERC721URIStorage)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"store-your-assets-on-irys",children:"Store your assets on Irys"}),"\n",(0,a.jsx)(n.p,{children:"Uploads to Irys are fully unconstrained; you can upload files of any size and use Irys to make\nimages, videos, music, or interactive NFTs."}),"\n",(0,a.jsxs)(n.p,{children:["This guide covers using the ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/permanent-data/irys/irys-quickstart#irys-cli",children:"Irys CLI"}),"\nto upload your assets to Irys. You can also do the same using the ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/permanent-data/irys/irys-quickstart#irys-sdk",children:"Irys SDK"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"store-your-visual-assets",children:"Store your visual assets"}),"\n",(0,a.jsx)(n.h4,{id:"install-the-irys-cli",children:"Install the Irys CLI"}),"\n",(0,a.jsxs)(n.p,{children:["Install the CLI globally using the ",(0,a.jsx)(n.code,{children:"-g"})," flag. Depending on your setup, you may or may not need to use ",(0,a.jsx)(n.code,{children:"sudo"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm i -g @irys/cli\n"})}),"\n",(0,a.jsx)(n.p,{children:"Depending on your setup, you may need to use the sudo command."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo npm i -g @irys/cli\n"})}),"\n",(0,a.jsx)(n.h4,{id:"upload-single-assets",children:"Upload single assets"}),"\n",(0,a.jsxs)(n.p,{children:["To upload a single file, use the command ",(0,a.jsx)(n.code,{children:"irys upload"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"irys upload myNFT.png \\\n  -t linea-eth \\\n  -w bf20......c9885307\n"})}),"\n",(0,a.jsx)(n.p,{children:"The CLI will output the link to download the file from the Irys gateway."}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Uploaded to https://gateway.irys.xyz/A7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x\n"})}),"\n",(0,a.jsx)(n.h4,{id:"upload-multiple-assets",children:"Upload multiple assets"}),"\n",(0,a.jsxs)(n.p,{children:["To upload a folder of files, use the command ",(0,a.jsx)(n.code,{children:"irys upload-dir"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"irys upload-dir myNFTs \\\n  -t linea-eth \\\n  -w bf20......c9885307\n"})}),"\n",(0,a.jsx)(n.p,{children:"The CLI outputs a link to the manifest for the upload:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"https://gateway.irys.xyz/A7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiG8CM6Yv1f\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The CLI also produces a ",(0,a.jsx)(n.code,{children:".json"})," file containing the transaction IDs of each upload:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "manifest": "irys/paths",\n  "version": "0.1.0",\n  "paths": {\n    "nft1.png": { "id": "B7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x" },\n    "nft2.png": { "id": "C7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x" },\n    "nft3.png": { "id": "D7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x" },\n    "nft4.png": { "id": "E7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x" },\n    "nft5.png": { "id": "F7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x" }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can download files by using the transaction ID directly, or by creating a URL using the manifest\nID combined with the original file name. For example, ",(0,a.jsx)(n.code,{children:"nft1.png"})," can be downloaded with either of these URLs:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://gateway.irys.xyz/gF7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://gateway.irys.xyz/F7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x/nft1.png"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"store-your-metadata",children:"Store your metadata"}),"\n",(0,a.jsx)(n.h4,{id:"create-metadata",children:"Create metadata"}),"\n",(0,a.jsx)(n.p,{children:"Create unique metadata files, one for each NFT."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Irys & Linea Forever",\n  "description": "Irys & Linea NFTs #42",\n  "image": "https://gateway.irys.xyz/F7CXNp4WqwkY73TRxKR2o3gfSCw3ghhZZXiP8CM6Yv1x",\n  "background_color": "FEF4EE"\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"upload-metadata",children:"Upload metadata"}),"\n",(0,a.jsx)(n.p,{children:"Upload the metadata to Irys"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"irys upload metadata.json \\\n  -t linea-eth \\\n  -w bf20......c9885307\n"})}),"\n",(0,a.jsx)(n.h2,{id:"mint-the-nfts",children:"Mint the NFTs"}),"\n",(0,a.jsxs)(n.p,{children:["Now use your metadata URLs (in the format ",(0,a.jsx)(n.code,{children:"https://gateway.irys.xyz/:txId"}),") to mint the NFTs\nusing ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/deploy-smart-contract/",children:"the contract you deployed on Linea"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);