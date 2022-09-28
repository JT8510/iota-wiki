"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87729],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(t),u=a,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},20368:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},s="Interface: IGenerateAddressesOptions",o={unversionedId:"libraries/nodejs/references/interfaces/IGenerateAddressesOptions",id:"libraries/nodejs/references/interfaces/IGenerateAddressesOptions",title:"Interface: IGenerateAddressesOptions",description:"Input options for GenerateAddresses",source:"@site/shimmer/external/iota.rs/documentation/docs/libraries/nodejs/references/interfaces/IGenerateAddressesOptions.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/IGenerateAddressesOptions",permalink:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IGenerateAddressesOptions",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/libraries/nodejs/references/interfaces/IGenerateAddressesOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: IGenerateAddressMetadata",permalink:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IGenerateAddressMetadata"},next:{title:"Interface: IInputSigningData",permalink:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IInputSigningData"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"internal",id:"internal",level:3},{value:"bech32Hrp",id:"bech32hrp",level:3}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-igenerateaddressesoptions"},"Interface: IGenerateAddressesOptions"),(0,a.kt)("p",null,"Input options for GenerateAddresses"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IGenerateAddressesOptions#internal"},"internal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/iota.rs/libraries/nodejs/references/interfaces/IGenerateAddressesOptions#bech32hrp"},"bech32Hrp"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"internal"},"internal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"internal"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Internal addresses"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bech32hrp"},"bech32Hrp"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"bech32Hrp"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Bech32 human readable part"))}d.isMDXComponent=!0}}]);