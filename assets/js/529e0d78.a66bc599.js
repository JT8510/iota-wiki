"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"libraries/java/api/GetAddressBuilder",id:"libraries/java/api/GetAddressBuilder",title:"GetAddressBuilder",description:"Builder of GET /api/v1/address/ endpoint",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/GetAddressBuilder.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/GetAddressBuilder",permalink:"/iota.rs/libraries/java/api/GetAddressBuilder",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/GetAddressBuilder.mdx",tags:[],version:"current",frontMatter:{}},i={},d=[{value:"balance(address): BalanceAddressResponse",id:"balanceaddress-balanceaddressresponse",level:3},{value:"outputs(address, options): UtxoInput[]",id:"outputsaddress-options-utxoinput",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Builder of GET /api/v1/address/{address} endpoint"),(0,n.kt)("h3",{id:"balanceaddress-balanceaddressresponse"},"balance(address): ",(0,n.kt)("a",{parentName:"h3",href:"#balanceaddressresponse"},"BalanceAddressResponse")),(0,n.kt)("p",null,"Consume the builder and get the balance of a given Bech32 encoded address.\nIf count equals maxResults, then there might be more outputs available but those were skipped for performance\nreasons. User should sweep the address to reduce the amount of outputs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The address to get the balance for")))),(0,n.kt)("h3",{id:"outputsaddress-options-utxoinput"},"outputs(address, options): ",(0,n.kt)("a",{parentName:"h3",href:"#utxoinput"},"UtxoInput[]")),(0,n.kt)("p",null,"Consume the builder and get all outputs that use a given address.\nIf count equals maxResults, then there might be more outputs available but those were skipped for performance\nreasons. User should sweep the address to reduce the amount of outputs."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The address to get the balance for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#outputsoptions"},"OutputsOptions")),(0,n.kt)("td",{parentName:"tr",align:null},"The options for finding outputs")))))}u.isMDXComponent=!0}}]);