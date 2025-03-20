"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[6664],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}},73406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"get-started/build/quickstart/app","title":"Build your app","description":"Build and deploy a frontend app to interact with your contract","source":"@site/docs/get-started/build/quickstart/app.mdx","sourceDirName":"get-started/build/quickstart","slug":"/get-started/build/quickstart/app","permalink":"/web3-feedback/get-started/build/quickstart/app","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/build/quickstart/app.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1742476504000,"sidebarPosition":2,"frontMatter":{"title":"Build your app","description":"Build and deploy a frontend app to interact with your contract","sidebar_position":2,"pagination_next":null,"pagination_prev":"get-started/build/quickstart/deploy","image":"/img/socialCards/build-your-app.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Deploy your contract","permalink":"/web3-feedback/get-started/build/quickstart/deploy"}}');var o=t(74848),i=t(28453);const r={title:"Build your app",description:"Build and deploy a frontend app to interact with your contract",sidebar_position:2,pagination_next:null,pagination_prev:"get-started/build/quickstart/deploy",image:"/img/socialCards/build-your-app.jpg"},s=void 0,c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up a Next.js app using Dynamic",id:"set-up-a-nextjs-app-using-dynamic",level:2},{value:"Setup",id:"setup",level:2},{value:"Add a &quot;Connect wallet&quot; button",id:"add-a-connect-wallet-button",level:3},{value:"Get your environment ID",id:"get-your-environment-id",level:4},{value:"Enable Linea wallet connectors",id:"enable-linea-wallet-connectors",level:4},{value:"Interact with your contract",id:"interact-with-your-contract",level:2},{value:"Display the counter value",id:"display-the-counter-value",level:3},{value:"Configure Wagmi",id:"configure-wagmi",level:4},{value:"Get the ABI",id:"get-the-abi",level:4},{value:"Create counter component",id:"create-counter-component",level:4},{value:"Add counter component your app",id:"add-counter-component-your-app",level:4},{value:"Add a button to increment the counter",id:"add-a-button-to-increment-the-counter",level:3},{value:"Create increment component",id:"create-increment-component",level:3},{value:"Add the increment component to your app",id:"add-the-increment-component-to-your-app",level:3},{value:"Test your app",id:"test-your-app",level:2},{value:"Deploy your app",id:"deploy-your-app",level:2},{value:"Add your repository to GitHub",id:"add-your-repository-to-github",level:3},{value:"Deploy using Vercel",id:"deploy-using-vercel",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Help and resources",id:"help-and-resources",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Now that you've deployed and verified your smart contract in ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/build/quickstart/deploy",children:"part one"}),", the next step\nis to create a frontend app that enables users to connect their wallet and interact with the\nsmart contract."]}),"\n",(0,o.jsx)(n.p,{children:"In this guide, we will:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Set up a Next.js app"}),"\n",(0,o.jsx)(n.li,{children:"Configure our app to connect to Linea Sepolia and your MetaMask wallet"}),"\n",(0,o.jsx)(n.li,{children:"Add buttons to the app to interact with your smart contract."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Estimated time to complete: ~25 minutes."})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["A wallet that can connect to Linea Sepolia. We recommend ",(0,o.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Get some Linea Sepolia ETH by heading to our ",(0,o.jsx)(n.a,{href:"https://discord.gg/linea",children:"Discord server"})," and asking\nin the ",(0,o.jsx)(n.code,{children:"#testnet-faucet"})," channel."]}),"\n",(0,o.jsx)(n.h2,{id:"set-up-a-nextjs-app-using-dynamic",children:"Set up a Next.js app using Dynamic"}),"\n",(0,o.jsxs)(n.p,{children:["There are many frameworks out there for building web apps. We're going to focus on ",(0,o.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"}),",\na React framework."]}),"\n",(0,o.jsxs)(n.p,{children:["Conveniently, ",(0,o.jsx)(n.a,{href:"https://www.dynamic.xyz/",children:"Dynamic"})," have created the ",(0,o.jsx)(n.code,{children:"create-dynamic-app"})," which\nquickly creates a web3-enabled Next.js app which already has important packages like ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/libraries/wagmi",children:"Wagmi"}),"\nand ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/libraries/viem",children:"Viem"})," (which Wagmi depends on) installed."]}),"\n",(0,o.jsx)(n.p,{children:"Run it like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx create-dynamic-app@latest \n"})}),"\n",(0,o.jsx)(n.p,{children:"You'll also be prompted in the terminal to confirm a few project settings. Select Next.js as the\nframework, then make sure to enable Viem and Wagmi\u2014libraries that we'll be using later."}),"\n",(0,o.jsxs)(n.p,{children:["Once you confirm the configuration, the ",(0,o.jsx)(n.code,{children:"create-dynamic-app"})," package will install the necessary\ndependencies and your project will be ready to access in the new directory."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.p,{children:"The app needs a few adjustments before it will run."}),"\n",(0,o.jsxs)(n.p,{children:["Head to your ",(0,o.jsx)(n.code,{children:"package.json"})," and adjust ",(0,o.jsx)(n.code,{children:"react"})," and ",(0,o.jsx)(n.code,{children:"react-dom"})," to ",(0,o.jsx)(n.code,{children:"^18.0.0"}),".\n",(0,o.jsx)(n.code,{children:"create-dynamic-app"})," automatically installs ",(0,o.jsx)(n.code,{children:"react"})," and ",(0,o.jsx)(n.code,{children:"react-dom"})," ",(0,o.jsx)(n.code,{children:"^19.0.0"}),", which are\nincompatible with the Dynamic SDK:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'  "dependencies": {\n    "react": "^18.0.0",\n    "react-dom": "^18.0.0",\n    // other dependencies\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["And also adjust the ",(0,o.jsx)(n.code,{children:"devDependencies"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'  "devDependencies": {\n    "@types/react": "^18",\n    "@types/react-dom": "^18",\n    // other dependencies\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Afterwards, run ",(0,o.jsx)(n.code,{children:"npm install"})," to install the dependencies."]}),"\n",(0,o.jsxs)(n.p,{children:["You can now run ",(0,o.jsx)(n.code,{children:"npm run dev"})," to start the app locally. You can already connect your wallet, but\nyou'll be unable to connect on Linea or Linea Sepolia until we configure our Dynamic dashboard,\nwhich we'll cover in the next step."]}),"\n",(0,o.jsx)(n.h3,{id:"add-a-connect-wallet-button",children:'Add a "Connect wallet" button'}),"\n",(0,o.jsxs)(n.p,{children:["The first step to making the app usable is enabling visitors to connect their wallet. To do so,\nwe're going to use Dynamic's ",(0,o.jsx)(n.code,{children:"DynamicWidget"})," component. Although we're just going to use the\nconventional \"Connect wallet\" usage\u2014connecting an externally owned account (EOA)\u2014the component has\nthe advantage of allowing you to enable other sign-in methods and embedded wallet features with a few\nminor changes on the Dynamic dashboard. This isn't something we're going cover here, but it's\nworth considering for your own app."]}),"\n",(0,o.jsxs)(n.p,{children:["To set up the widget, you'll need to sign up for a free ",(0,o.jsx)(n.a,{href:"https://www.dynamic.xyz/get-started",children:"Dynamic"}),"\naccount, which enables you to access your own Dynamic dashboard. You can sign in with your wallet,\nso you don't have to worry about handing over personal information."]}),"\n",(0,o.jsx)(n.h4,{id:"get-your-environment-id",children:"Get your environment ID"}),"\n",(0,o.jsxs)(n.p,{children:["Now you've signed up and have access to your Dynamic dashboard, we can access an environment ID,\nand then use the dashboard to configure the ",(0,o.jsx)(n.code,{children:"DynamicWidget"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["On the dashboard, copy your ",(0,o.jsx)(n.code,{children:"environmentId"})," from Developers > SDK & API Keys."]}),"\n",(0,o.jsxs)(n.p,{children:["Back in your project directory, head to ",(0,o.jsx)(n.code,{children:"lib/providers"})," and find the ",(0,o.jsx)(n.code,{children:"DynamicContextProvider"}),"\ncomponent. Insert your ",(0,o.jsx)(n.code,{children:"environmentId"})," into the ",(0,o.jsx)(n.code,{children:"settings"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'  return (\n    <DynamicContextProvider\n      theme="auto"\n      settings={{\n        environmentId: "YOUR_ENVIRONMENT_ID", // Add your environment ID here\n           walletConnectors: [EthereumWalletConnectors],\n      }}\n    >\n  )\n'})}),"\n",(0,o.jsx)(n.h4,{id:"enable-linea-wallet-connectors",children:"Enable Linea wallet connectors"}),"\n",(0,o.jsxs)(n.p,{children:["Connecting your local app to the dashboard means you can now configure the behaviour of the\n",(0,o.jsx)(n.code,{children:"DynamicWidget"})," component that is used in ",(0,o.jsx)(n.code,{children:"app/page.tsx"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["On the dashboard, got to Chains & Networks in the sidebar. In the code snippet above, you can see\nthat the ",(0,o.jsx)(n.code,{children:"EthereumWalletConnectors"})," are already enabled; this means you should see the EVM button on\nthis dashboard page. Click it, then scroll and enable Linea and Linea Sepolia:"]}),"\n",(0,o.jsx)("div",{class:"center-container",children:(0,o.jsx)("div",{class:"img-large",children:(0,o.jsx)("img",{src:"/img/get_started/build/quickstart/app/enable_linea_networks.png",alt:"Toggles for the Linea and Linea Sepolia networks"})})}),"\n",(0,o.jsxs)(n.p,{children:["If you now run ",(0,o.jsx)(n.code,{children:"npm run dev"}),", you'll be able to connect your wallet on Linea and Linea Sepolia.\nWe now have the barebones of a web3 app: a frontend web app to which you can connect your wallet."]}),"\n",(0,o.jsx)(n.h2,{id:"interact-with-your-contract",children:"Interact with your contract"}),"\n",(0,o.jsxs)(n.p,{children:["Given the functionality of the contract we deployed in ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/build/quickstart/deploy",children:"part one"}),", we'll need a\nbutton to interact with the contract, prompting a transaction that will call our smart contract's\n",(0,o.jsx)(n.code,{children:"increment()"})," function and increment the counter. It'll also be helpful to display the current\ncounter value in the app."]}),"\n",(0,o.jsx)(n.p,{children:"To implement these features, we'll be using Wagmi hooks:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useReadContract",children:(0,o.jsx)(n.code,{children:"useReadContract"})})," to read the current counter\nvalue, and;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useWriteContract",children:(0,o.jsx)(n.code,{children:"useWriteContract"})})," to call the smart\ncontract's ",(0,o.jsx)(n.code,{children:"increment()"})," function, and increase the counter."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"display-the-counter-value",children:"Display the counter value"}),"\n",(0,o.jsxs)(n.p,{children:["To display the counter value, we'll use the Wagmi ",(0,o.jsx)(n.code,{children:"useReadContract"})," hook to retrieve the value\nfrom the contract and display it in the app."]}),"\n",(0,o.jsx)(n.h4,{id:"configure-wagmi",children:"Configure Wagmi"}),"\n",(0,o.jsxs)(n.p,{children:["To enable Wagmi to interact with Linea Sepolia, head to ",(0,o.jsx)(n.code,{children:"lib/wagmi.ts"})," to find the Wagmi\nconfiguration file. Here, we need to replace ",(0,o.jsx)(n.code,{children:"mainnet"})," with ",(0,o.jsx)(n.code,{children:"lineaSepolia"})," and ",(0,o.jsx)(n.code,{children:"linea"})," in a few\nplaces:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The import statement"}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"chains"})," settings"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"transports"})," settings"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Your Wagmi configuration should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'// lib/wagmi.ts\nimport { http, createConfig } from "wagmi";\nimport { lineaSepolia, linea } from "wagmi/chains"; // Add this\n\nexport const config = createConfig({\n  chains: [lineaSepolia, linea], // Add this\n  multiInjectedProviderDiscovery: false,\n  ssr: true,\n  transports: {\n    [lineaSepolia.id]: http(), // Add this\n    [linea.id]: http(), // and this\n  },\n});\n\ndeclare module "wagmi" {\n  interface Register {\n    config: typeof config;\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"With these changes, Wagmi hooks will now be able to interact with Linea Sepolia."}),"\n",(0,o.jsx)(n.h4,{id:"get-the-abi",children:"Get the ABI"}),"\n",(0,o.jsx)(n.p,{children:"Next, we'll need the smart contract's application binary interface (ABI)\u2014a kind of standardized data\nstructure that defines the inputs and outputs necessary for other programs to interact with the smart\ncontract. This is a necessary step to ensure the Wagmi hooks work."}),"\n",(0,o.jsxs)(n.p,{children:["You can find it by pasting the smart contract address into the ",(0,o.jsx)(n.a,{href:"https://sepolia.lineascan.build/",children:"Linea Sepolia block explorer"}),'.\nFind the "Contract" tab and scroll down to "Contract ABI". Copy the code:']}),"\n",(0,o.jsx)("div",{class:"center-container",children:(0,o.jsx)("div",{class:"img-large",children:(0,o.jsx)("img",{src:"/img/get_started/build/quickstart/app/abi.png",alt:"The ABI of the smart contract"})})}),"\n",(0,o.jsxs)(n.p,{children:["Head back to your project repo and paste the code into a new file in your ",(0,o.jsx)(n.code,{children:"lib"})," directory called\n",(0,o.jsx)(n.code,{children:"abi.ts"}),", adjusting the formatting:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// lib/abi.ts\nexport const abi = [\n    {\n        "inputs":[],\n        "name":"increment",\n        "outputs":[],\n        "stateMutability":"nonpayable",\n        "type":"function"\n    },\n    {\n        "inputs":[],\n        "name":"number",\n        "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],\n        "stateMutability":"view",\n        "type":"function"\n    },\n    {\n        "inputs":[{"internalType":"uint256","name":"newNumber","type":"uint256"}],\n        "name":"setNumber",\n        "outputs":[],\n        "stateMutability":"nonpayable",\n        "type":"function"\n    }\n]\n'})}),"\n",(0,o.jsx)(n.h4,{id:"create-counter-component",children:"Create counter component"}),"\n",(0,o.jsxs)(n.p,{children:["Fetching the counter value from the smart contract and displaying it in the app requires more code\nthan we could neatly place in ",(0,o.jsx)(n.code,{children:"page.tsx"}),". Instead, we'll create a React component in\n",(0,o.jsx)(n.code,{children:"app/components"})," and import it into ",(0,o.jsx)(n.code,{children:"page.tsx"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Head to ",(0,o.jsx)(n.code,{children:"app/components"})," in your project and create a new file, ",(0,o.jsx)(n.code,{children:"Counter.js"}),", and add the below\ncode:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// app/components/Counter.js\nimport { useReadContract } from "wagmi";\nimport { abi } from "@/lib/abi";\n\nexport default function Counter() {\n  const { \n    data: counterValue, \n    error,\n    isPending,\n    refetch \n  } = useReadContract({\n    address: "YOUR_CONTRACT_ADDRESS", // Add your deployed smart contract address here\n    abi: abi,\n    functionName: "number",\n  });\n\n  const statusText = isPending \n    ? "Loading..." \n    : error \n      ? "Error: " + error.shortMessage \n      : `Counter: ${counterValue?.toString() ?? "?"}`;\n\n  return (\n    <button \n      className="docs-button" \n      onClick={() => refetch()}\n    >\n      {statusText} \u2022 Click to refresh\n    </button>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Make sure to insert the address of your deployed smart contract."})}),"\n",(0,o.jsxs)(n.p,{children:["The component imports the ",(0,o.jsx)(n.code,{children:"useReadContract"})," hook and the ABI you added previously. It then calls our\ncontract's ",(0,o.jsx)(n.code,{children:"number()"})," function using ",(0,o.jsx)(n.code,{children:"useReadContract"}),' and displays the result in a button in the\napp. We\'ve also added some logic that displays "Loading..." while the data is being fetched, an\nerror handling message that displays errors that are built into ',(0,o.jsx)(n.code,{children:"useReadContract"}),", and the ability\nto click the button to refresh the data."]}),"\n",(0,o.jsx)(n.h4,{id:"add-counter-component-your-app",children:"Add counter component your app"}),"\n",(0,o.jsxs)(n.p,{children:["Go back to your ",(0,o.jsx)(n.code,{children:"page.tsx"})," and, alongside the existing import statements, add a statement to import\nthe component you just created:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import Counter from './components/Counter.js';\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we can insert the component into the page:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'<div className="modal">\n  <DynamicWidget />\n  <Counter />\n</div>\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The Dynamic template app comes with a ",(0,o.jsx)(n.code,{children:"<DynamicMethods />"})," component. We've removed it so we can\nfocus on the counter functionality, but you can leave it if you prefer."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can test the component works by heading to Lineascan and calling the ",(0,o.jsx)(n.code,{children:"increment()"}),' function on\nthe Contract > Write Contract page. Click the "Connect to Web3" button to connect your wallet, and\nthen "Write" to prompt a transaction from your wallet that will increment the counter. If you head\nback to your app and retrieve new data, you\'ll see that the counter has been incremented by 1.']}),"\n",(0,o.jsx)(n.p,{children:"Here's how it looks:"}),"\n",(0,o.jsx)("div",{class:"center-container",children:(0,o.jsx)("div",{class:"img-small",children:(0,o.jsx)("img",{src:"/img/get_started/build/quickstart/app/counter.png",alt:"The counter component"})})}),"\n",(0,o.jsx)(n.h3,{id:"add-a-button-to-increment-the-counter",children:"Add a button to increment the counter"}),"\n",(0,o.jsxs)(n.p,{children:["Our method for calling the ",(0,o.jsx)(n.code,{children:"increment()"})," function in our smart contract is to use the Wagmi hook\n",(0,o.jsx)(n.code,{children:"useWriteContract"}),". Instead of reading data this time, we're asking the smart contract to do some\ncomputation\u2014incrementing the counter\u2014which means we need to send a transaction with gas to pay for\nthe computation."]}),"\n",(0,o.jsxs)(n.p,{children:["Since we've already configured ",(0,o.jsx)(n.code,{children:"wagmi.ts"})," file and created ",(0,o.jsx)(n.code,{children:"abi.ts"}),", we can move straight to adding\nthe component."]}),"\n",(0,o.jsx)(n.h3,{id:"create-increment-component",children:"Create increment component"}),"\n",(0,o.jsxs)(n.p,{children:["Head to ",(0,o.jsx)(n.code,{children:"app/components"})," and add a new file called ",(0,o.jsx)(n.code,{children:"Increment.js"}),". Paste in this code, making sure\nto replace ",(0,o.jsx)(n.code,{children:"YOUR_CONTRACT_ADDRESS"})," with the address of your deployed smart contract:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { useWriteContract } from "wagmi";\nimport { abi } from "@/lib/abi";\n\nexport default function Increment() {\n  const { writeContract, isPending } = useWriteContract();\n\n  const handleIncrement = () => {\n    writeContract({\n      address: "YOUR_CONTRACT_ADDRESS", // Add your deployed smart contract address here\n      abi: abi,\n      functionName: "increment",\n    });\n  };\n\n  return (\n    <button \n      className="docs-button" \n      onClick={handleIncrement}\n      disabled={isPending}\n    >\n      {isPending ? "Incrementing..." : "Increment Counter"}\n    </button>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"add-the-increment-component-to-your-app",children:"Add the increment component to your app"}),"\n",(0,o.jsxs)(n.p,{children:["Go back to your ",(0,o.jsx)(n.code,{children:"page.tsx"})," and, alongside the existing import statements, add a statement to import\nthe component you just created:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import Increment from './components/Increment.js';\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we can insert the component into the page:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'<div className="modal">\n  <DynamicWidget />\n  <Counter />\n  <Increment />\n</div>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"test-your-app",children:"Test your app"}),"\n",(0,o.jsx)(n.p,{children:"Now that everything is in place, we can test the app."}),"\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"npm run dev"})," to run your app locally."]}),"\n",(0,o.jsx)(n.p,{children:'The counter button should display the counter value already, and you can click to fetch the latest\nvalue at any time without sending a transaction. With your wallet connected and some Linea Sepolia\nETH, you should be able to click the "Increment Counter" button to add +1 to the counter value:'}),"\n",(0,o.jsx)("div",{class:"center-container",children:(0,o.jsx)("div",{class:"img-small",children:(0,o.jsx)("img",{src:"/img/get_started/build/quickstart/app/increment_button.png",alt:"The increment button"})})}),"\n",(0,o.jsx)(n.p,{children:"There you have it! A functioning web3-enabled app that interacts with a smart contract."}),"\n",(0,o.jsx)(n.h2,{id:"deploy-your-app",children:"Deploy your app"}),"\n",(0,o.jsx)(n.p,{children:"Now that you have a working app, you can deploy it to make it publicly accessible. As we've been\nusing Next.js, a framework developed by Vercel, we can easily use Vercel to deploy our app for free."}),"\n",(0,o.jsx)(n.p,{children:"Since we're working on Linea Sepolia, we don't have the usual security concerns we'd need for a\nproduction app, so we can go straight ahead."}),"\n",(0,o.jsx)(n.h3,{id:"add-your-repository-to-github",children:"Add your repository to GitHub"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"create-dynamic-app"})," package we used at the start of this guide automatically created a git\nrepository for your project. This means your changes have been tracked."]}),"\n",(0,o.jsxs)(n.p,{children:["Firstly, run ",(0,o.jsx)(n.code,{children:"npm run build"})," to build the app. This should surface any errors in your code that\nmay prevent it from being deployed. If you need help resolving any, head to the #developer-chat\nchannel in our ",(0,o.jsx)(n.a,{href:"https://discord.gg/linea",children:"Discord server"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["When you're ready, make sure you've staged your changes with ",(0,o.jsx)(n.code,{children:"git add ."})," and then committed them:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'git commit -m "Initial commit"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now you're ready to publish your repository to GitHub. The easiest method is to ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/desktop/adding-and-cloning-repositories/adding-a-repository-from-your-local-computer-to-github-desktop",children:"download and use\nGitHub Desktop"}),",\nthough if you're comfortable with git, you might prefer ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#importing-a-git-repository-with-the-command-line",children:"using the command line"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can set your repository to public or private depending on your preference. You'll be able to\ndeploy it either way."}),"\n",(0,o.jsx)(n.h3,{id:"deploy-using-vercel",children:"Deploy using Vercel"}),"\n",(0,o.jsxs)(n.p,{children:["Now that your repository is on GitHub, you can deploy it using Vercel. ",(0,o.jsx)(n.a,{href:"https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy",children:"See the Vercel guide for\ninstructions"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You'll need to create a Vercel account and link it to your GitHub account. Once you've done that,\nyou can deploy, and manage your app from Vercel."}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(n.p,{children:"Now that you have a grasp of the basics, you can start to experiment and build innovative apps that\nsolve real-world problems and attract users. Here are some ideas for taking your app to the next\nlevel:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Build in ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/account-abstraction/",children:"account abstraction"})," features to make your\napp more accessible and user-friendly. The Dynamic widget that we used in this guide already\nenables you to use some of these features, configurable via the Dynamic dashboard."]}),"\n",(0,o.jsxs)(n.li,{children:["Accelerate development by using audited, reliable ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/contracts-templates/",children:"contract templates"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Leverage an ",(0,o.jsx)(n.a,{href:"/web3-feedback/get-started/tooling/oracles/",children:"oracle"})," to fetch data, such as token prices, and\ndisplay it in your app."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"help-and-resources",children:"Help and resources"}),"\n",(0,o.jsxs)(n.p,{children:["If you get stuck at any point in this guide, head to our ",(0,o.jsx)(n.a,{href:"https://discord.gg/linea",children:"Discord"})," and\nvisit the ",(0,o.jsx)(n.code,{children:"#developer-chat"})," channel."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.dynamic.xyz/introduction/welcome",children:"Dynamic documentation"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://wagmi.sh/",children:"Wagmi documentation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useReadContract",children:(0,o.jsx)(n.code,{children:"useReadContract"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useWriteContract",children:(0,o.jsx)(n.code,{children:"useWriteContract"})})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://sepolia.lineascan.build/",children:"Linea Sepolia block explorer"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);