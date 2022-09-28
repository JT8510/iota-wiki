"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,d=u["".concat(p,".").concat(g)]||u[g]||f[g]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="Interface: LoggerConfig",i={unversionedId:"references/nodejs/interfaces/LoggerConfig",id:"references/nodejs/interfaces/LoggerConfig",title:"Interface: LoggerConfig",description:"Logger output configuration.",source:"@site/next/external/wallet.rs/documentation/docs/references/nodejs/interfaces/LoggerConfig.md",sourceDirName:"references/nodejs/interfaces",slug:"/references/nodejs/interfaces/LoggerConfig",permalink:"/next/wallet.rs/references/nodejs/interfaces/LoggerConfig",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/references/nodejs/interfaces/LoggerConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: LedgerNanoStatus",permalink:"/next/wallet.rs/references/nodejs/interfaces/LedgerNanoStatus"},next:{title:"Interface: MintTokenTransaction",permalink:"/next/wallet.rs/references/nodejs/interfaces/MintTokenTransaction"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"name",id:"name",level:3},{value:"levelFilter",id:"levelfilter",level:3},{value:"targetFilter",id:"targetfilter",level:3},{value:"targetExclusions",id:"targetexclusions",level:3},{value:"colorEnabled",id:"colorenabled",level:3}],c={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-loggerconfig"},"Interface: LoggerConfig"),(0,a.kt)("p",null,"Logger output configuration."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/LoggerConfig#name"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/LoggerConfig#levelfilter"},"levelFilter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/LoggerConfig#targetfilter"},"targetFilter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/LoggerConfig#targetexclusions"},"targetExclusions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/wallet.rs/references/nodejs/interfaces/LoggerConfig#colorenabled"},"colorEnabled"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of an output file, or ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," for standard output."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"levelfilter"},"levelFilter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"levelFilter"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"error"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"off"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"warn"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"info"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"debug"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"trace"')),(0,a.kt)("p",null,"Log level filter of an output."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targetfilter"},"targetFilter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"targetFilter"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Log target filters of an output."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targetexclusions"},"targetExclusions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"targetExclusions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Log target exclusions of an output."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colorenabled"},"colorEnabled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"colorEnabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Color flag of an output."))}f.isMDXComponent=!0}}]);