"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Derive",id:"derive",level:2},{value:"GuardDebug",id:"guarddebug",level:4},{value:"Example:",id:"example",level:5},{value:"RequestPermissions",id:"requestpermissions",level:4}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"derive"},"Derive"),(0,o.kt)("p",null,"This crate contains procedural macros for Stronghold.  "),(0,o.kt)("h4",{id:"guarddebug"},"GuardDebug"),(0,o.kt)("p",null,"The GuardDebug macro is used to block inspection of a data structure.  It implements the Debug trait and explicitly blocks the reading of the internal data on the structure its derived on. Instead, the data will be returned out as a ",(0,o.kt)("inlineCode",{parentName:"p"},"(guarded)")," string."),(0,o.kt)("h5",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(GuardDebug)]\nstruct Foo {\n    some_data: String\n}\n...\n\nlet foo = Foo { some_data: "Some data"};\n\nprintln!("{:?}", foo);\n...\n\n> Foo(guarded)\n')),(0,o.kt)("h4",{id:"requestpermissions"},"RequestPermissions"),(0,o.kt)("p",null,"Implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"VariantPermission")," for struct/unions with PermissionValue(1). For enums, it implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ToPermissionVariants"),", which creates an according new enum ",(0,o.kt)("inlineCode",{parentName:"p"},"<Ident>Permission")," with Unit variants, and implements ",(0,o.kt)("inlineCode",{parentName:"p"},"VariantPermission")," by assigning different ",(0,o.kt)("inlineCode",{parentName:"p"},"PermissionValue"),' for each variant. The permission value is the "index" in the enum as exponent for the power of 2, thus from top to bottom 1, 2, 4, 8...'))}a.isMDXComponent=!0;const s={description:"The Derive crate contains procedural macros for Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","GuardDebug","VariantPermission"]},u="Structure: Derive",c={unversionedId:"reference/structure/derive",id:"reference/structure/derive",title:"Structure: Derive",description:"The Derive crate contains procedural macros for Stronghold.",source:"@site/next/external/stronghold.rs/develop/documentation/docs/reference/structure/derive.md",sourceDirName:"reference/structure",slug:"/reference/structure/derive",permalink:"/next/stronghold.rs/reference/structure/derive",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/next/external/stronghold.rs/develop/documentation/docs/reference/structure/derive.md",tags:[],version:"current",frontMatter:{description:"The Derive crate contains procedural macros for Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","GuardDebug","VariantPermission"]},sidebar:"mySidebar",previous:{title:"Structure: Communication",permalink:"/next/stronghold.rs/reference/structure/p2p"},next:{title:"Structure: Utils",permalink:"/next/stronghold.rs/reference/structure/utils"}},l={},d=[],p={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-derive"},"Structure: Derive"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/derive"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold-p2p"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-derive"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-derive.svg",alt:null}))),(0,o.kt)(a,{mdxType:"Derive"}))}m.isMDXComponent=!0}}]);