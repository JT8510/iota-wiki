"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={description:"IOTA Stronghold is a secure software implementation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks.",image:"/img/Banner/banner_stronghold_overview.png",keywords:["reference","rust","secure","components","release"]},i="Overview",s={unversionedId:"reference/overview",id:"reference/overview",title:"Overview",description:"IOTA Stronghold is a secure software implementation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks.",source:"@site/iota/external/stronghold.rs/develop/documentation/docs/reference/overview.md",sourceDirName:"reference",slug:"/reference/overview",permalink:"/stronghold.rs/reference/overview",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/iota/external/stronghold.rs/develop/documentation/docs/reference/overview.md",tags:[],version:"current",frontMatter:{description:"IOTA Stronghold is a secure software implementation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks.",image:"/img/Banner/banner_stronghold_overview.png",keywords:["reference","rust","secure","components","release"]},sidebar:"mySidebar",previous:{title:"Recover a BIP39 Seed with a Mnemonic and Optional Passphrase",permalink:"/stronghold.rs/how_tos/cli/recover_seed_with_mnemonic"},next:{title:"IOTA Stronghold Structure",permalink:"/stronghold.rs/reference/structure/overview"}},l={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stronghold Overview",src:r(21926).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"IOTA Stronghold is a secure software implementation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks. It uses encrypted snapshots that can be easily backed up and securely shared between devices. Written in stable rust, it has strong guarantees of memory safety and process integrity."),(0,o.kt)("p",null,"There are four main components of Stronghold:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/stronghold.rs/reference/structure/client"},(0,o.kt)("strong",{parentName:"a"},"Client")),": The high-level interface to Stronghold (prefers Riker, functional integration also available)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/stronghold.rs/reference/structure/engine/overview"},(0,o.kt)("strong",{parentName:"a"},"Engine")),": Combines a persistence store (Snapshot) with an in-memory state interface (Vault) and a key:value read/write (Store)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/stronghold.rs/reference/structure/engine/runtime"},(0,o.kt)("strong",{parentName:"a"},"Runtime")),": Is a process fork with limited permissions within which cryptographic operations take place."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/stronghold.rs/reference/structure/p2p"},(0,o.kt)("strong",{parentName:"a"},"P2P Communication")),": Enables Strongholds in different processes or on different devices to communicate with each other securely.")),(0,o.kt)("p",null,"Read more about the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/stronghold-alpha-release/"},"Alpha Release"),"."),(0,o.kt)("p",null,"Read more about the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-stronghold-beta-release/"},"Beta Release"),"."))}u.isMDXComponent=!0},21926:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner_stronghold_overview-fc898418193eca469220cf620b033268.png"}}]);