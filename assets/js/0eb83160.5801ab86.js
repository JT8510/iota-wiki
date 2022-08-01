"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11637],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(o,".").concat(f)]||u[f]||p[f]||s;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<s;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],i={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},o="Class: Ed25519Address",d={unversionedId:"references/client/classes/Ed25519Address",id:"references/client/classes/Ed25519Address",title:"Class: Ed25519Address",description:"iota.js API reference",source:"@site/content/build/iota.js/develop/documentation/docs/references/client/classes/Ed25519Address.md",sourceDirName:"references/client/classes",slug:"/references/client/classes/Ed25519Address",permalink:"/iotajs/references/client/classes/Ed25519Address",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/references/client/classes/Ed25519Address.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: ClientError",permalink:"/iotajs/references/client/classes/ClientError"},next:{title:"Class: Ed25519Seed",permalink:"/iotajs/references/client/classes/Ed25519Seed"}},c={},p=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Methods",id:"methods-1",level:2},{value:"toAddress",id:"toaddress",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"verify",id:"verify",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"class-ed25519address"},"Class: Ed25519Address"),(0,s.kt)("p",null,"Class to help with Ed25519 Signature scheme."),(0,s.kt)("h2",{id:"implements"},"Implements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IAddress"},(0,s.kt)("inlineCode",{parentName:"a"},"IAddress")))),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"constructors"},"Constructors"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/Ed25519Address#constructor"},"constructor"))),(0,s.kt)("h3",{id:"methods"},"Methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/Ed25519Address#toaddress"},"toAddress")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/Ed25519Address#verify"},"verify"))),(0,s.kt)("h2",{id:"constructors-1"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"new Ed25519Address"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"publicKey"),")"),(0,s.kt)("p",null,"Create a new instance of Ed25519Address."),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The public key for the address.")))),(0,s.kt)("h2",{id:"methods-1"},"Methods"),(0,s.kt)("h3",{id:"toaddress"},"toAddress"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"toAddress"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,s.kt)("p",null,"Convert the public key to an address."),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,s.kt)("p",null,"The address."),(0,s.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/IAddress"},"IAddress"),".",(0,s.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/IAddress#toaddress"},"toAddress")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"verify"},"verify"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"verify"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Use the public key to validate the address."),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"address")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The address to verify.")))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"True if the data and address is verified."),(0,s.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/IAddress"},"IAddress"),".",(0,s.kt)("a",{parentName:"p",href:"/iotajs/references/client/interfaces/IAddress#verify"},"verify")))}f.isMDXComponent=!0}}]);