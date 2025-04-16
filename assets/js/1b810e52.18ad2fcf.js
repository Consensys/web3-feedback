"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[3723],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}},65537:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(34164),i=t(65627),s=t(56347),o=t(50372),l=t(30604),d=t(11861),c=t(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=d??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(d(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:c,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},79329:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},86198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"get-started/how-to/run-a-node/nethermind","title":"Nethermind","description":"Install the Nethermind client to run a Linea node.","source":"@site/docs/get-started/how-to/run-a-node/nethermind.mdx","sourceDirName":"get-started/how-to/run-a-node","slug":"/get-started/how-to/run-a-node/nethermind","permalink":"/web3-feedback/get-started/how-to/run-a-node/nethermind","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/get-started/how-to/run-a-node/nethermind.mdx","tags":[],"version":"current","lastUpdatedBy":"Joel Willmore","lastUpdatedAt":1744797916000,"frontMatter":{"title":"Nethermind","description":"Install the Nethermind client to run a Linea node.","image":"/img/socialCards/nethermind.jpg"},"sidebar":"getStartedSidebar","previous":{"title":"Linea Besu","permalink":"/web3-feedback/get-started/how-to/run-a-node/linea-besu"},"next":{"title":"Bootnodes","permalink":"/web3-feedback/get-started/how-to/run-a-node/bootnodes"}}');var a=t(74848),i=t(28453),s=t(65537),o=t(79329);const l={title:"Nethermind",description:"Install the Nethermind client to run a Linea node.",image:"/img/socialCards/nethermind.jpg"},d=void 0,c={},u=[{value:"Run using the binary distribution",id:"run-using-the-binary-distribution",level:2},{value:"Step 1. Install Nethermind",id:"step-1-install-nethermind",level:3},{value:"Step 2. Start the Nethermind client",id:"step-2-start-the-nethermind-client",level:3},{value:"Run using Docker",id:"run-using-docker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1. Download Docker image",id:"step-1-download-docker-image",level:3},{value:"Step 2. Start the Nethermind node",id:"step-2-start-the-nethermind-node",level:3},{value:"Confirm the node is running",id:"confirm-the-node-is-running",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Nethermind is a high-performance Ethereum client written in C# that supports various networks, including Linea."}),"\n",(0,a.jsx)(n.admonition,{title:"important",type:"info",children:(0,a.jsxs)(n.p,{children:["Install and run a Nethermind client if you want to follow the Linea network by\nmaintaining a local copy of the blockchain. However, if you want to interact with the network and use\nLinea-specific methods and features, you should ",(0,a.jsx)(n.a,{href:"/web3-feedback/get-started/how-to/run-a-node/linea-besu",children:"install Linea Besu"})," instead."]})}),"\n",(0,a.jsx)(n.h2,{id:"run-using-the-binary-distribution",children:"Run using the binary distribution"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["Ensure you review ",(0,a.jsx)(n.a,{href:"https://docs.nethermind.io/get-started/installing-nethermind",children:"Nethermind's installation Guidelines"}),"\nbefore installing the Nethermind client."]}),(0,a.jsxs)(n.p,{children:["If you're not comfortable with installing the binary distribution, consider using ",(0,a.jsx)(n.a,{href:"#run-using-docker",children:"Docker"}),"\ninstead."]})]}),"\n",(0,a.jsx)(n.h3,{id:"step-1-install-nethermind",children:"Step 1. Install Nethermind"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.nethermind.io/get-started/installing-nethermind/#standalone-downloads",children:"Download and install the Nethermind client"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"step-2-start-the-nethermind-client",children:"Step 2. Start the Nethermind client"}),"\n",(0,a.jsx)(n.p,{children:"Start the node using the following command:"}),"\n",(0,a.jsxs)(s.A,{groupId:"networks",className:"my-tabs",children:[(0,a.jsx)(o.A,{value:"mainnet",label:"Mainnet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n--datadir ./nethermind-data \\\n--config linea-mainnet \\\n--JsonRpc.Enabled=true \\\n--JsonRpc.Host=0.0.0.0 \\\n--JsonRpc.Port=8545 \\\n--Metrics.Enabled=true \\\n--Metrics.ExposePort=8008\n"})})}),(0,a.jsx)(o.A,{value:"Linea Sepolia",label:"Linea Sepolia",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nethermind \\\n--datadir ./nethermind-data \\\n--config linea-sepolia \\\n--JsonRpc.Enabled=true \\\n--JsonRpc.Host=0.0.0.0 \\\n--JsonRpc.Port=8545 \\\n--Metrics.Enabled=true \\\n--Metrics.ExposePort=8008\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The Nethermind node will attempt to find peers to begin synchronizing and to download the world\nstate."}),"\n",(0,a.jsx)(n.h2,{id:"run-using-docker",children:"Run using Docker"}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["Download and install ",(0,a.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker"})," and ensure it is\nrunning throughout."]}),"\n",(0,a.jsx)(n.h3,{id:"step-1-download-docker-image",children:"Step 1. Download Docker image"}),"\n",(0,a.jsx)(n.p,{children:"Download the Nethermind docker image:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"docker pull nethermind/nethermind:latest\n"})}),"\n",(0,a.jsx)(n.h3,{id:"step-2-start-the-nethermind-node",children:"Step 2. Start the Nethermind node"}),"\n",(0,a.jsxs)(s.A,{groupId:"networks",className:"my-tabs",children:[(0,a.jsx)(o.A,{value:"mainnet",label:"Mainnet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -it \\\n-v nethermind_data:/nethermind/nethermind_db \\\n-p 8545:8545 \\\n-p 8008:8008 \\\nnethermind/nethermind \\\n--datadir /nethermind/nethermind_db \\\n--config linea-mainnet \\\n--JsonRpc.Enabled=true \\\n--JsonRpc.Host=0.0.0.0 \\\n--JsonRpc.Port=8545 \\\n--Metrics.Enabled=true \\\n--Metrics.ExposePort=8008\n"})})}),(0,a.jsx)(o.A,{value:"Linea Sepolia",label:"Linea Sepolia",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -it \\\n-v nethermind_data:/nethermind/nethermind_db \\\n-p 8545:8545 \\\n-p 8008:8008 \\\nnethermind/nethermind \\\n--datadir /nethermind/nethermind_db \\\n--config linea-sepolia \\\n--JsonRpc.Enabled=true \\\n--JsonRpc.Host=0.0.0.0 \\\n--JsonRpc.Port=8545 \\\n--Metrics.Enabled=true \\\n--Metrics.ExposePort=8008\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Ensure that you correctly configure the Docker volume to persist data between container restarts.\nWithout proper volume setup, data will be lost when the container is stopped.\nAdditionally, make sure to expose the necessary ports (e.g., 8545 for JSON-RPC and 8008 for metrics)\nto enable external access to these services."})}),"\n",(0,a.jsx)(n.h2,{id:"confirm-the-node-is-running",children:"Confirm the node is running"}),"\n",(0,a.jsxs)(n.p,{children:["You can call the JSON-RPC API methods to confirm the node is running. For example, call\n",(0,a.jsx)(n.code,{children:"eth_syncing"})," to return the synchronization status.\nFor example the starting, current, and highest block, or ",(0,a.jsx)(n.code,{children:"false"})," if not synchronizing (or if the head of the chain has been reached)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n        -X POST \\\n        -H "Content-Type: application/json" \\\n        -d \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"You should get a result similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "startingBlock": "0x0",\n    "currentBlock": "0x5d228",\n    "highestBlock": "0x3cedec"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);