"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74361],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={description:"The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},c="The `evm` Contract",s={unversionedId:"guide/core_concepts/core_contracts/evm",id:"guide/core_concepts/core_contracts/evm",title:"The `evm` Contract",description:"The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/evm.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/evm",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/evm",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/evm.md",tags:[],version:"current",frontMatter:{description:"The evm core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `errors` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/errors"},next:{title:"How Accounts Work",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-accounts-work"}},p={},u=[{value:"Entry Points",id:"entry-points",level:2},{value:"<code>init()</code>",id:"init",level:3},{value:"<code>setGasRatio</code>",id:"setgasratio",level:3},{value:"Views",id:"views",level:2},{value:"<code>getGasRatio</code>",id:"getgasratio",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>GenesisAlloc</code>",id:"genesisalloc",level:3},{value:"<code>GasRatio</code>",id:"gasratio",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-evm-contract"},"The ",(0,r.kt)("inlineCode",{parentName:"h1"},"evm")," Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," contract is one of the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/overview"},"core contracts")," on each IOTA Smart Contracts chain."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract provides the necessary infrastructure to accept Ethereum transactions and execute EVM code."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more information about how ISC supports EVM contracts, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/evm/introduction"},"EVM")," section.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"Most entry points of the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract are meant to be accessed through the JSON-RPC service provided automatically by the Wasp node, so that end users can use standard EVM tools like ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),".\nWe only list here the entry points that are not exposed through the JSON-RPC interface."),(0,r.kt)("h3",{id:"init"},(0,r.kt)("inlineCode",{parentName:"h3"},"init()")),(0,r.kt)("p",null,"Called automatically when the ISC is being deployed."),(0,r.kt)("p",null,"Some parameters of the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," contract can be specified by passing them to the\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/root#init"},(0,r.kt)("inlineCode",{parentName:"a"},"root")," contract ",(0,r.kt)("inlineCode",{parentName:"a"},"init")," entry point"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmg")," (optional ",(0,r.kt)("a",{parentName:"p",href:"#genesisalloc"},(0,r.kt)("inlineCode",{parentName:"a"},"GenesisAlloc")),") The genesis allocation. The balance of all accounts must be 0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmgl")," (optional ",(0,r.kt)("inlineCode",{parentName:"p"},"uint64")," - default: 15000000) The EVM block gas limit (EVM gas units)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmbk")," (optional ",(0,r.kt)("inlineCode",{parentName:"p"},"int32")," - default: keep all) Amount of EVM blocks to keep in the state.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmchid")," (optional ",(0,r.kt)("inlineCode",{parentName:"p"},"uint16")," - default: 1074) EVM chain iD"),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended, and can be a security risk. For any serious usage make sure you register a unique Chain ID on ",(0,r.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default. ",(0,r.kt)("strong",{parentName:"p"},"It is not possible to change the EVM chain ID after deployment.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"evmw")," (optional ",(0,r.kt)("a",{parentName:"p",href:"#gasratio"},(0,r.kt)("inlineCode",{parentName:"a"},"GasRatio"))," - default: ",(0,r.kt)("inlineCode",{parentName:"p"},"1:1"),") The ISC : EVM gas ratio."))),(0,r.kt)("h3",{id:"setgasratio"},(0,r.kt)("inlineCode",{parentName:"h3"},"setGasRatio")),(0,r.kt)("p",null,"Changes the ISC : EVM gas ratio."),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w")," (",(0,r.kt)("a",{parentName:"li",href:"#gasratio"},(0,r.kt)("inlineCode",{parentName:"a"},"GasRatio")),") The ISC : EVM gas ratio.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"views"},"Views"),(0,r.kt)("h3",{id:"getgasratio"},(0,r.kt)("inlineCode",{parentName:"h3"},"getGasRatio")),(0,r.kt)("p",null,"Returns the ISC : EVM gas ratio."),(0,r.kt)("p",null,"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"r")," (",(0,r.kt)("a",{parentName:"li",href:"#gasratio"},(0,r.kt)("inlineCode",{parentName:"a"},"GasRatio")),") The ISC : EVM gas ratio.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"genesisalloc"},(0,r.kt)("inlineCode",{parentName:"h3"},"GenesisAlloc")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GenesisAlloc")," is encoded as the concatenation of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),") Amount of accounts ",(0,r.kt)("inlineCode",{parentName:"li"},"n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," times:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size) Ethereum address"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size) Account code"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"uint32"),") Amount of storage key/value pairs ",(0,r.kt)("inlineCode",{parentName:"li"},"m")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," times:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size) Key"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size) Value"))),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"uint32")," size) Account balance (must be 0)"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),") Account nonce"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"uint64"),") Account private key (may be used for tests)")))),(0,r.kt)("h3",{id:"gasratio"},(0,r.kt)("inlineCode",{parentName:"h3"},"GasRatio")),(0,r.kt)("p",null,"ISC : EVM gas ratio is expressed as an ",(0,r.kt)("inlineCode",{parentName:"p"},"a : b")," ratio, where ",(0,r.kt)("inlineCode",{parentName:"p"},"<ISC gas> = <EVM gas> * <a> / <b>"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GasRatio")," is encoded as the concatenation of the two ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32")," values ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."))}d.isMDXComponent=!0}}]);