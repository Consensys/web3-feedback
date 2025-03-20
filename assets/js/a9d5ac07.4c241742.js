"use strict";(self.webpackChunkweb3_feedback=self.webpackChunkweb3_feedback||[]).push([[2667],{28453:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>l});var n=t(96540);const r={},s=n.createContext(r);function d(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:i},e.children)}},58771:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/linea-smart-contracts/messageservice/lib/ratelimiter","title":"RateLimiter","description":"You can use this control numeric limits over a period using timestamp.","source":"@site/docs/api/linea-smart-contracts/messageservice/lib/ratelimiter.mdx","sourceDirName":"api/linea-smart-contracts/messageservice/lib","slug":"/api/linea-smart-contracts/messageservice/lib/ratelimiter","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/lib/ratelimiter","draft":false,"unlisted":false,"editUrl":"https://github.com/Consensys/doc.linea/tree/main/docs/api/linea-smart-contracts/messageservice/lib/ratelimiter.mdx","tags":[],"version":"current","lastUpdatedBy":"oliver renwick","lastUpdatedAt":1742484500000,"frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"MessageHashing","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/lib/messagehashing"},"next":{"title":"SparseMerkleTreeVerifier","permalink":"/web3-feedback/api/linea-smart-contracts/messageservice/lib/sparsemerkletreeverifier"}}');var r=t(74848),s=t(28453);const d={},l="RateLimiter",a={},c=[{value:"RATE_LIMIT_SETTER_ROLE",id:"rate_limit_setter_role",level:3},{value:"USED_RATE_LIMIT_RESETTER_ROLE",id:"used_rate_limit_resetter_role",level:3},{value:"periodInSeconds",id:"periodinseconds",level:3},{value:"limitInWei",id:"limitinwei",level:3},{value:"currentPeriodEnd",id:"currentperiodend",level:3},{value:"currentPeriodAmountInWei",id:"currentperiodamountinwei",level:3},{value:"__RateLimiter_init",id:"__ratelimiter_init",level:3},{value:"Parameters",id:"parameters",level:4},{value:"_addUsedAmount",id:"_addusedamount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"resetRateLimitAmount",id:"resetratelimitamount",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"resetAmountUsedInPeriod",id:"resetamountusedinperiod",level:3}];function o(e){const i={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"ratelimiter",children:(0,r.jsx)(i.code,{children:"RateLimiter"})})}),"\n",(0,r.jsx)(i.p,{children:"You can use this control numeric limits over a period using timestamp."}),"\n",(0,r.jsx)(i.h3,{id:"rate_limit_setter_role",children:"RATE_LIMIT_SETTER_ROLE"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"bytes32 RATE_LIMIT_SETTER_ROLE\n"})}),"\n",(0,r.jsx)(i.h3,{id:"used_rate_limit_resetter_role",children:"USED_RATE_LIMIT_RESETTER_ROLE"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"bytes32 USED_RATE_LIMIT_RESETTER_ROLE\n"})}),"\n",(0,r.jsx)(i.h3,{id:"periodinseconds",children:"periodInSeconds"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"uint256 periodInSeconds\n"})}),"\n",(0,r.jsx)(i.h3,{id:"limitinwei",children:"limitInWei"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"uint256 limitInWei\n"})}),"\n",(0,r.jsx)(i.h3,{id:"currentperiodend",children:"currentPeriodEnd"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"uint256 currentPeriodEnd\n"})}),"\n",(0,r.jsx)(i.p,{children:"The time at which the current period ends at."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Public for ease of consumption."})}),"\n",(0,r.jsx)(i.h3,{id:"currentperiodamountinwei",children:"currentPeriodAmountInWei"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"uint256 currentPeriodAmountInWei\n"})}),"\n",(0,r.jsx)(i.p,{children:"Amounts already withdrawn this period."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Public for ease of consumption."})}),"\n",(0,r.jsx)(i.h3,{id:"__ratelimiter_init",children:"__RateLimiter_init"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"function __RateLimiter_init(uint256 _periodInSeconds, uint256 _limitInWei) internal\n"})}),"\n",(0,r.jsx)(i.p,{children:"Initialises the limits and period for the rate limiter."}),"\n",(0,r.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_periodInSeconds"}),(0,r.jsx)(i.td,{children:"uint256"}),(0,r.jsx)(i.td,{children:"The length of the period in seconds."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_limitInWei"}),(0,r.jsx)(i.td,{children:"uint256"}),(0,r.jsx)(i.td,{children:"The limit allowed in the period in Wei."})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"_addusedamount",children:"_addUsedAmount"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"function _addUsedAmount(uint256 _usedAmount) internal\n"})}),"\n",(0,r.jsx)(i.p,{children:"Increments the amount used in the period."}),"\n",(0,r.jsxs)(i.p,{children:["_The amount determining logic is external to this (e.g. fees are included when calling here).\nIgnores the calculation if ",(0,r.jsx)(i.em,{children:"usedAmount is zero.\nReverts if the limit is breached."})]}),"\n",(0,r.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_usedAmount"}),(0,r.jsx)(i.td,{children:"uint256"}),(0,r.jsx)(i.td,{children:"The amount used to be added."})]})})]}),"\n",(0,r.jsx)(i.h3,{id:"resetratelimitamount",children:"resetRateLimitAmount"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"function resetRateLimitAmount(uint256 _amount) external\n"})}),"\n",(0,r.jsx)(i.p,{children:"Resets the rate limit amount."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"If the used amount is higher, it is set to the limit to avoid confusion/issues.\nOnly the RATE_LIMIT_SETTER_ROLE is allowed to execute this function.\nEmits the LimitAmountChanged event.\nusedLimitAmountToSet will use the default value of zero if period has expired."})}),"\n",(0,r.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"_amount"}),(0,r.jsx)(i.td,{children:"uint256"}),(0,r.jsx)(i.td,{children:"The amount to reset the limit to."})]})})]}),"\n",(0,r.jsx)(i.h3,{id:"resetamountusedinperiod",children:"resetAmountUsedInPeriod"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-solidity",children:"function resetAmountUsedInPeriod() external\n"})}),"\n",(0,r.jsx)(i.p,{children:"Resets the amount used to zero."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.em,{children:"Only the USED_RATE_LIMIT_RESETTER_ROLE is allowed to execute this function.\nEmits the AmountUsedInPeriodReset event."})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);