"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[7238],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},53653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"get-started/tooling/data-indexers/thegraph","title":"The Graph Network","description":"Getting historical data on smart contracts can be frustrating when building a","source":"@site/docs/get-started/tooling/data-indexers/thegraph.mdx","sourceDirName":"get-started/tooling/data-indexers","slug":"/get-started/tooling/data-indexers/thegraph","permalink":"/web3-feedback/get-started/tooling/data-indexers/thegraph","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/tooling/data-indexers/thegraph.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{"title":"The Graph Network","image":"/img/socialCards/the-graph-network.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Scopescan","permalink":"/web3-feedback/get-started/tooling/data-indexers/scopescan"},"next":{"title":"Gas","permalink":"/web3-feedback/get-started/tooling/gas/"}}');var a=r(74848),s=r(28453);const i={title:"The Graph Network",image:"/img/socialCards/the-graph-network.jpg"},o="The Graph",h={},l=[{value:"Quickstart",id:"quickstart",level:2},{value:"1. Initialize your subgraph",id:"1-initialize-your-subgraph",level:2},{value:"Create a subgraph in subgraph studio",id:"create-a-subgraph-in-subgraph-studio",level:3},{value:"Install the Graph CLI\u2060",id:"install-the-graph-cli",level:3},{value:"Initialize your subgraph\u2060",id:"initialize-your-subgraph",level:3},{value:"2. Deploy and publish",id:"2-deploy-and-publish",level:2},{value:"Deploy to Subgraph Studio",id:"deploy-to-subgraph-studio",level:3},{value:"Test your subgraph",id:"test-your-subgraph",level:3},{value:"Publish your subgraph to The Graph&#39;s decentralized network",id:"publish-your-subgraph-to-the-graphs-decentralized-network",level:3},{value:"3. Query your subgraph",id:"3-query-your-subgraph",level:2},{value:"Get your own API key",id:"get-your-own-api-key",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Sample query",id:"sample-query",level:3},{value:"Sample code",id:"sample-code",level:3},{value:"Additional resources",id:"additional-resources",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"the-graph",children:"The Graph"})}),"\n",(0,a.jsxs)(n.p,{children:["Getting historical data on smart contracts can be frustrating when building a\ndapp. ",(0,a.jsx)(n.a,{href:"https://thegraph.com/",children:"The Graph"})," offers a powerful way to query smart\ncontract data with open APIs known as subgraphs. Anyone can create or query\nsubgraphs, making the data available to the entire ecosystem. The Graph is\npowered by hundreds of independent Indexers, enabling your dapp to become truly\ndecentralized."]}),"\n",(0,a.jsx)(n.p,{children:"Developers can use 100,000 free queries per month by using The Graph Network."}),"\n",(0,a.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,a.jsx)(n.p,{children:"Subgraphs index emitted events by default, but additional functionality can be\nadded later. A subgraph can be created in just a few minutes by following these\nsteps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Initialize your subgraph"}),"\n",(0,a.jsx)(n.li,{children:"Publish your subgraph to The Graph Network"}),"\n",(0,a.jsx)(n.li,{children:"Query from your dapp with your unique API key"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here is a step-by-step walkthrough:"}),"\n",(0,a.jsx)(n.h2,{id:"1-initialize-your-subgraph",children:"1. Initialize your subgraph"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-subgraph-in-subgraph-studio",children:"Create a subgraph in subgraph studio"}),"\n",(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.a,{href:"https://thegraph.com/studio/",children:"Subgraph Studio"}),' and connect your\nwallet. Once your wallet is connected, you can begin by clicking "Create a\nSubgraph". When choosing a name, it\'s recommended to use Title Case, including\nthe subgraph and chain name, e.g., "MyDapp Subgraph Linea".']}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/create-a-subgraph.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.p,{children:"Then, you will land on your subgraph's page. All the CLI commands you need will\nbe visible on the right side of the page:"}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/cli-commands.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.h3,{id:"install-the-graph-cli",children:"Install the Graph CLI\u2060"}),"\n",(0,a.jsx)(n.p,{children:"On your local machine, run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm install -g @graphprotocol/graph-cli\n"})}),"\n",(0,a.jsx)(n.h3,{id:"initialize-your-subgraph",children:"Initialize your subgraph\u2060"}),"\n",(0,a.jsx)(n.p,{children:"You can copy this directly from your subgraph page to include your specific\nsubgraph slug:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"graph init <SUBGRAPH_SLUG>\n"})}),"\n",(0,a.jsx)(n.p,{children:"You'll be prompted to provide some info on your subgraph like this:"}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/cli-example.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.p,{children:"Simply verify your contract on the block explorer, and the CLI will\nautomatically obtain the ABI and set up your subgraph. The default settings will\ngenerate an entity for each event."}),"\n",(0,a.jsx)(n.h2,{id:"2-deploy-and-publish",children:"2. Deploy and publish"}),"\n",(0,a.jsx)(n.h3,{id:"deploy-to-subgraph-studio",children:"Deploy to Subgraph Studio"}),"\n",(0,a.jsx)(n.p,{children:"First, run these commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ graph codegen\n$ graph build\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, run these to authenticate and deploy your subgraph. You can copy these\ncommands directly from your subgraph's page in Studio to include your specific\ndeploy key and subgraph slug:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ graph auth <DEPLOY_KEY>\n$ graph deploy <SUBGRAPH_SLUG>\n"})}),"\n",(0,a.jsx)(n.p,{children:"You will be asked for a version label. You can enter something like v0.0.1, but\nyou're free to choose the format."}),"\n",(0,a.jsx)(n.h3,{id:"test-your-subgraph",children:"Test your subgraph"}),"\n",(0,a.jsx)(n.p,{children:"You can test your subgraph by making a sample query in the playground section.\nThe Details tab will show you an API endpoint. You can use that endpoint to test\nfrom your dapp."}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/playground.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.h3,{id:"publish-your-subgraph-to-the-graphs-decentralized-network",children:"Publish your subgraph to The Graph's decentralized network"}),"\n",(0,a.jsx)(n.p,{children:"Once your subgraph is ready to be put into production, you can publish it to the\ndecentralized network. On your subgraph's page in Subgraph Studio, click on the\nPublish button:"}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/publish-button.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.p,{children:"Before you can query your subgraph, Indexers need to begin serving queries on\nit. In order to streamline this process, you can curate your own subgraph using\nGRT."}),"\n",(0,a.jsx)(n.p,{children:"When publishing, you'll see the option to curate your subgraph. As of May 2024,\nit is recommended that you curate your own subgraph with at least 3,000 GRT to\nensure that it is indexed and available for querying as soon as possible."}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/publish-screen.png",alt:"alt text here"})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," The Graph's smart contracts are all on Arbitrum One, even though\nyour subgraph is indexing data from Ethereum, BSC or any other\n",(0,a.jsx)(n.a,{href:"https://thegraph.com/docs/en/developing/supported-networks/",children:"supported chain"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"3-query-your-subgraph",children:"3. Query your subgraph"}),"\n",(0,a.jsx)(n.p,{children:"Congratulations! You can now query your subgraph on the decentralized network!"}),"\n",(0,a.jsx)(n.p,{children:"To query any subgraph on the decentralized network, pass a GraphQL query into\nthe subgraph's query URL, which can be found at the top of its Explorer page."}),"\n",(0,a.jsxs)(n.p,{children:["Here's an example from the\n",(0,a.jsx)(n.a,{href:"https://thegraph.com/explorer/subgraphs/HdVdERFUe8h61vm2fDyycHgxjsde5PbB832NHgJfZNqK",children:"CryptoPunks Ethereum subgraph"}),"\nby Messari:"]}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/query-url.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.p,{children:"The query URL for this subgraph is:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"https://gateway-arbitrum.network.thegraph.com/api/"}),(0,a.jsx)(n.strong,{children:"[api-key]"}),(0,a.jsx)(n.code,{children:"/subgraphs/id/HdVdERFUe8h61vm2fDyycgxjsde5PbB832NHgJfZNqK"})]}),"\n",(0,a.jsx)(n.p,{children:"Now, you simply need to fill in your own API Key to start sending GraphQL\nqueries to this endpoint."}),"\n",(0,a.jsx)(n.h3,{id:"get-your-own-api-key",children:"Get your own API key"}),"\n",(0,a.jsx)(n.p,{children:'In Subgraph Studio, you\'ll see the "API Keys" menu at the top of the page. Here,\nyou can create API Keys.'}),"\n",(0,a.jsx)("div",{class:"center-container",children:(0,a.jsx)("div",{class:"img-large",children:(0,a.jsx)("img",{src:"/img/get_started/tooling/data_indexers/the-graph/api-keys.png",alt:"alt text here"})})}),"\n",(0,a.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,a.jsx)(n.h3,{id:"sample-query",children:"Sample query"}),"\n",(0,a.jsx)(n.p,{children:"This query shows the most expensive CryptoPunks sold."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  trades(orderBy: priceETH, orderDirection: desc) {\n    priceETH\n    tokenId\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Passing this into the query URL returns this result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n  "data": {\n    "trades": [\n      {\n        "priceETH": "124457.067524886018255505",\n        "tokenId": "9998"\n      },\n      {\n        "priceETH": "8000",\n        "tokenId": "5822"\n      },\n//      ...\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample-code",children:"Sample code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'const axios = require("axios");\n\nconst graphqlQuery = `{\n  trades(orderBy: priceETH, orderDirection: desc) {\n    priceETH\n    tokenId\n  }\n}`;\nconst queryUrl =\n  "https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/HdVdERFUe8h61vm2fDyycHgxjsde5PbB832NHgJfZNqK";\n\nconst graphQLRequest = {\n  method: "post",\n  url: queryUrl,\n  data: {\n    query: graphqlQuery,\n  },\n};\n\n// Send the GraphQL query\naxios(graphQLRequest)\n  .then((response) => {\n    // Handle the response here\n    const data = response.data.data;\n    console.log(data);\n  })\n  .catch((error) => {\n    // Handle any errors\n    console.error(error);\n  });\n'})}),"\n",(0,a.jsx)(n.h3,{id:"additional-resources",children:"Additional resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["To explore all the ways you can optimize and customize your subgraph for better\nperformance, read more about\n",(0,a.jsx)(n.a,{href:"https://thegraph.com/docs/en/developing/creating-a-subgraph/",children:"creating a subgraph here"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["To learn more about\n",(0,a.jsx)(n.a,{href:"https://thegraph.com/docs/en/querying/querying-the-graph/",children:"querying data from your subgraph"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://thegraph.com/studio/",children:"Subgraph Studio"}),"."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);