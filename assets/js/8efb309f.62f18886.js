"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={description:"The official IOTA Wallet Library Software can be used to integrate an IOTA Wallet into your application.",image:"/img/logo/wallet_light.png",keywords:["requirements","wallet","software","library","rust","python","nodejs","java","reference"]},l="Welcome",i={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"The official IOTA Wallet Library Software can be used to integrate an IOTA Wallet into your application.",source:"@site/iota/external/wallet.rs/production/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/wallet.rs/welcome",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"The official IOTA Wallet Library Software can be used to integrate an IOTA Wallet into your application.",image:"/img/logo/wallet_light.png",keywords:["requirements","wallet","software","library","rust","python","nodejs","java","reference"]},sidebar:"docs",next:{title:"Overview",permalink:"/wallet.rs/overview"}},s={},c=[{value:"wallet.rs",id:"walletrs",level:2},{value:"Stronghold and wallet.rs",id:"stronghold-and-walletrs",level:3},{value:"IOTA 1.5 (Chrysalis) in a Nutshell",id:"iota-15-chrysalis-in-a-nutshell",level:2},{value:"Testnet",id:"testnet",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome"},"Welcome"),(0,n.kt)("p",null,"Welcome to the official IOTA Wallet Library Software documentation. You can use our documentation to help streamline integrating an IOTA Wallet into your applications. If you want to learn more about the IOTA client libraries, you can check out our ",(0,n.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"blog post")," on how they work."),(0,n.kt)("h2",{id:"walletrs"},"wallet.rs"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wallet.rs")," is a general wallet library written in Rust. It is currently utilized by our wallet software, ",(0,n.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Firefly"),", and other software components across the IOTA ecosystem. "),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"wallet.rs")," contains all of the specs to safely build wallets or integrations that require value-based transfers, such as exchanges and pay-as-you-go systems. Additionally, amongst other features, ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet.rs")," includes account state management and backup, account creation, and transferring tokens. ",(0,n.kt)("inlineCode",{parentName:"p"},"wallets.rs")," is also based on our official ",(0,n.kt)("em",{parentName:"p"},"one-source-code-of-truth")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"IOTA Rust library")," and can be integrated with the ",(0,n.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-stronghold-6ce55d311d7c/"},"Stronghold enclave")," to achieve a maximum level of security."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can use Stronghold to store account data of the ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet.rs"),". It integrates the best security practices and is open-source.")),(0,n.kt)("h3",{id:"stronghold-and-walletrs"},"Stronghold and wallet.rs"),(0,n.kt)("p",null,"With the ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, developers no longer need to use a self-generated seed anymore. By default, the security of ",(0,n.kt)("inlineCode",{parentName:"p"},"Stronghold")," creates and stores the encrypted seed, at rest. Additionally, it is not possible to extract the seed from ",(0,n.kt)("inlineCode",{parentName:"p"},"Stronghold")," as a security measure. "),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Stronghold")," also uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots are further secured with a password."),(0,n.kt)("h2",{id:"iota-15-chrysalis-in-a-nutshell"},"IOTA 1.5 (Chrysalis) in a Nutshell"),(0,n.kt)("p",null,"For some background, you can checkout our ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/introduction/what_is_chrysalis"},"Developer Guide to Chrysalis")," which explains all of the main concepts behind the IOTA Chrysalis in detail."),(0,n.kt)("p",null,"You can also read our ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/overview"},"Chrysalis documentation")," to learn the history of versions between IOTA 1.0 and Chrysalis."),(0,n.kt)("h2",{id:"testnet"},"Testnet"),(0,n.kt)("p",null,"To join the Chrysalis public devnet, check out our ",(0,n.kt)("a",{parentName:"p",href:"https://blog.iota.org/chrysalis-phase-2-testnet-out-now/"},"blog post"),". You can also learn more about the different Chrysalis components in our ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/welcome/"},"Chrysalis documentation portal"),"."))}u.isMDXComponent=!0}}]);