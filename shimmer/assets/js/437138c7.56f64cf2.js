"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={description:"How to configure and use EVM support in IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","Ethereum","Solidity","deploy","hardhat","metamask","JSON","RPC","how to"]},i="How to use EVM in IOTA Smart Contracts",s={unversionedId:"guide/evm/using",id:"guide/evm/using",title:"How to use EVM in IOTA Smart Contracts",description:"How to configure and use EVM support in IOTA Smart Contracts.",source:"@site/shimmer/external/wasp/documentation/docs/guide/evm/using.md",sourceDirName:"guide/evm",slug:"/guide/evm/using",permalink:"/shimmer/smart-contracts/guide/evm/using",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/evm/using.md",tags:[],version:"current",frontMatter:{description:"How to configure and use EVM support in IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","Ethereum","Solidity","deploy","hardhat","metamask","JSON","RPC","how to"]},sidebar:"tutorialSidebar",previous:{title:"EVM compatibility in IOTA Smart Contracts",permalink:"/shimmer/smart-contracts/guide/evm/compatibility"},next:{title:"The ISC Magic Contract",permalink:"/shimmer/smart-contracts/guide/evm/magic"}},c={},l=[{value:"1. Deploy an IOTA Smart Contracts chain",id:"1-deploy-an-iota-smart-contracts-chain",level:2},{value:"2. Fund an Ethereum account on your IOTA Smart Contracts chain",id:"2-fund-an-ethereum-account-on-your-iota-smart-contracts-chain",level:2},{value:"3. Connect to the JSON-RPC service",id:"3-connect-to-the-json-rpc-service",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-evm-in-iota-smart-contracts"},"How to use EVM in IOTA Smart Contracts"),(0,o.kt)("h2",{id:"1-deploy-an-iota-smart-contracts-chain"},"1. Deploy an IOTA Smart Contracts chain"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/chains_and_nodes/setting-up-a-chain"},"deploying an IOTA Smart Contracts chain"),", EVM support is automatically added with the default configuration. The ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli chain deploy")," command accepts some EVM-specific options, listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--evm-chainid <n>"),": EVM chain ID (default: 1074)."),(0,o.kt)("admonition",{parentName:"li",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended, and can be a security risk. For any serious usage make sure you register a unique Chain ID on ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default. ",(0,o.kt)("strong",{parentName:"p"},"It is not possible to change the EVM chain ID after deployment.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--evm-block-keep-amount <n>"),": Amount of blocks to keep in storage (default: keep all blocks).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--evm-gas-limit <n>"),": Block gas limit (default: 15000000).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--evm-gas-ratio <a>:<b>"),": ISC gas : EVM gas ratio (default 1:1). The gas ratio can be changed after deployment by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"setGasRatio")," function of the ",(0,o.kt)("inlineCode",{parentName:"p"},"evm")," core contract."))),(0,o.kt)("p",null,'You can verify that the EVM support is enabled by visiting the Wasp dashboard and checking the "EVM" section in your ISC chain page. You should see the EVM chain ID and the JSON-RPC endpoint.'),(0,o.kt)("h2",{id:"2-fund-an-ethereum-account-on-your-iota-smart-contracts-chain"},"2. Fund an Ethereum account on your IOTA Smart Contracts chain"),(0,o.kt)("p",null,"In order to send EVM transactions, you need to have an Ethereum address that owns tokens on the ISC chain (L2). These tokens will be used to cover gas fees."),(0,o.kt)("p",null,"The most intuitive way to do this is by using ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"Metamask"),". In MetaMask,  you can create a wallet (it does not matter what chain it is connected to). Once a wallet is generated, you will see a wallet address under its name. You can copy this to your clipboard. This is the address that will receive the full supply of tokens on that chain."),(0,o.kt)("p",null,"Assuming that you also have an IOTA account with some L1 funds, you can deposit some of those funds into the Ethereum address' L2 account (IOTA is referenced as ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," here, given it's the base token of the chain):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain deposit 0xa1b2c3d4... base:1000000\n")),(0,o.kt)("h2",{id:"3-connect-to-the-json-rpc-service"},"3. Connect to the JSON-RPC service"),(0,o.kt)("p",null,"You can point any Ethereum tool like MetaMask or Hardhat to the JSON-RPC endpoint that is displayed on the ISC chain dashboard page (Wasp dashboard / Chains / your chain). Once connected, you should be able to use your tool as if it was connected to any other EVM based chain."))}p.isMDXComponent=!0}}]);