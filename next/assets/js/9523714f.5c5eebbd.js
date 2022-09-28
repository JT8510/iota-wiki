"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[88646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},l="Class: Sha1",o={unversionedId:"references/crypto/classes/Sha1",id:"references/crypto/classes/Sha1",title:"Class: Sha1",description:"iota.js API reference",source:"@site/next/external/iota.js/documentation/docs/references/crypto/classes/Sha1.md",sourceDirName:"references/crypto/classes",slug:"/references/crypto/classes/Sha1",permalink:"/next/iotajs/references/crypto/classes/Sha1",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/references/crypto/classes/Sha1.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: Poly1305",permalink:"/next/iotajs/references/crypto/classes/Poly1305"},next:{title:"Class: Sha256",permalink:"/next/iotajs/references/crypto/classes/Sha256"}},i={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods-1",level:2},{value:"sum",id:"sum",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"digest",id:"digest",level:3},{value:"Returns",id:"returns-2",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-sha1"},"Class: Sha1"),(0,n.kt)("p",null,"Class to help with Sha1 scheme.\nTypeScript conversion from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/emn178/js-sha1"},"https://github.com/emn178/js-sha1"),".\nAlthough this algorithm should not be use in most cases, it is the\ndefault and most widely support for generating TOTP/HOTP codes."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha1#constructor"},"constructor"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha1#sum"},"sum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha1#update"},"update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next/iotajs/references/crypto/classes/Sha1#digest"},"digest"))),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new Sha1"),"()"),(0,n.kt)("p",null,"Create a new instance of Sha1."),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"sum"},"sum"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"sum"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"Perform Sum on the data."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to operate on.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"The sum of the data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"update"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.kt)("a",{parentName:"p",href:"/next/iotajs/references/crypto/classes/Sha1"},(0,n.kt)("inlineCode",{parentName:"a"},"Sha1"))),(0,n.kt)("p",null,"Update the hash with the data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if the hash has already been finalized."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"message")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to update the hash with.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/next/iotajs/references/crypto/classes/Sha1"},(0,n.kt)("inlineCode",{parentName:"a"},"Sha1"))),(0,n.kt)("p",null,"The instance for chaining."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"digest"},"digest"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"digest"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"Get the digest."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"The digest."))}u.isMDXComponent=!0}}]);