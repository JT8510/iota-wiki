"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"The iota.rs library is designed to simplify how you connect and interact with [nodes](https://wiki.iota.org/chrysalis-docs/node_software) in the IOTA network. ",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","value transactions","explanation"]},i="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"The iota.rs library is designed to simplify how you connect and interact with [nodes](https://wiki.iota.org/chrysalis-docs/node_software) in the IOTA network. ",source:"@site/next/external/iota.rs/documentation/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/next/iota.rs/overview",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/overview.md",tags:[],version:"current",frontMatter:{description:"The iota.rs library is designed to simplify how you connect and interact with [nodes](https://wiki.iota.org/chrysalis-docs/node_software) in the IOTA network. ",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","value transactions","explanation"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/next/iota.rs/welcome"},next:{title:"Getting Started",permalink:"/next/iota.rs/getting_started/"}},l={},p=[{value:"Supported Languages",id:"supported-languages",level:2},{value:"Your Application In the IOTA Network",id:"your-application-in-the-iota-network",level:2},{value:"API Design",id:"api-design",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IOTA Client Library Overview",src:n(78965).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"The iota.rs library is designed to simplify how you connect and interact\nwith ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/node_software"},"nodes")," in the IOTA network. You can use it to generate\naddresses, send messages, sign and send transactions, and more."),(0,o.kt)("p",null,"Beyond establishing the initial connection to a node, iota.rs has no state. Operations use only the data you pass during\na call and have no effect on your software beyond returning a value. You are in complete control of the data flow in\nyour application."),(0,o.kt)("p",null,"This stateless approach makes iota.rs easy to use and understand. But since you are in full control of data management,\nyou are also fully responsible for it, which could feel overwhelming if you handle complex or sensitive data. If you\nplan on managing funds in your application, take a look at\nour ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs library")," instead."),(0,o.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,o.kt)("p",null,"We implemented the iota.rs library in ",(0,o.kt)("a",{parentName:"p",href:"/next/iota.rs/getting_started/rust"},"Rust")," and prepared bindings\nfor ",(0,o.kt)("a",{parentName:"p",href:"/next/iota.rs/getting_started/nodejs"},"JavaScript"),", ",(0,o.kt)("a",{parentName:"p",href:"/next/iota.rs/getting_started/python"},"Python"),",\nand ",(0,o.kt)("a",{parentName:"p",href:"/next/iota.rs/getting_started/java"},"Java"),". Every binding is adjusted for the language's conventions and best\npractices. For example, Python developers avoid the Builder programming pattern, so our\nPython binding uses named constructor arguments. However, we never change the meaning behind our API, which is equally\npowerful no matter which language you choose."),(0,o.kt)("h2",{id:"your-application-in-the-iota-network"},"Your Application In the IOTA Network"),(0,o.kt)("p",null,"Your application communicates with iota.rs either directly in Rust or through one of the language bindings. The iota.rs\nlibrary turns your requests into REST API calls and sends them to a node through the Internet. The node, in turn,\ninteracts with the rest of an IOTA network, which could be\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/reference/networks/mainnet"},"main operational network (mainnet)")," or\na ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/reference/networks/devnet"},"network for testing purposes (devnet)"),"."),(0,o.kt)("p",null,"Different nodes can run on different software, but they always expose the same interface to clients. For example, one\nnode could be a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/develop/welcome"},"Hornet")," node, and the other could be\na ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/bee/welcome"},"Bee")," node, and they both would appear the same for any client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A diagram that illustrates the text above. It has three layers: the application layer that includes iota.rs and its bindings, communication layer (the Internet network), and IOTA network layer with nodes that operate on one of the IOTA networks.",src:n(48029).Z,title:"An overview of IOTA layers.",width:"862",height:"452"})),(0,o.kt)("h2",{id:"api-design"},"API Design"),(0,o.kt)("p",null,"The iota.rs library exposes operations of two types. Clients interact with nodes by calling their REST API, and the\nfirst group of operations mirrors the available calls. When your program invokes such an operation, it directly\ntranslates it into a REST call to a node. See\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml"},"node's REST API reference"),"\nfor a complete list of available endpoints."),(0,o.kt)("p",null,"Operations from the first group tend to be too atomic and basic to use conveniently. The second group provides you with\nhigher-level helper functions. These functions represent an actual task and combine multiple basic operations\ninternally."))}d.isMDXComponent=!0},78965:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner_client_lib_overview-9072388b495cad60b6265c5ce10625d0.png"},48029:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/layered_overview-301744b3b835f4f09ae40dfa09ac564f.svg"}}]);