"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95179],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),i=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=i(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,u=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=i(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||s[f]||u;return r?n.createElement(m,o(o({ref:e},d),{},{components:r})):n.createElement(m,o({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var u=r.length,o=new Array(u);o[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var i=2;i<u;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},68205:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>u,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const u={},o=void 0,p={unversionedId:"reference/java_api/TransferOutput",id:"reference/java_api/TransferOutput",title:"TransferOutput",description:"Transfer output.",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/TransferOutput.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/TransferOutput",permalink:"/wallet.rs/reference/java_api/TransferOutput",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/TransferOutput.mdx",tags:[],version:"current",frontMatter:{}},l={},i=[{value:"TransferOutput(address, amount, output_kind): TransferOutput",id:"transferoutputaddress-amount-output_kind-transferoutput",level:3},{value:"getAmount(): long",id:"getamount-long",level:3},{value:"getAddress(): AddressWrapper",id:"getaddress-addresswrapper",level:3},{value:"getOutputKind(): OutputKind",id:"getoutputkind-outputkind",level:3}],d={toc:i};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Transfer output."),(0,a.kt)("h3",{id:"transferoutputaddress-amount-output_kind-transferoutput"},"TransferOutput(address, amount, output_kind): ",(0,a.kt)("a",{parentName:"h3",href:"#transferoutput"},"TransferOutput")),(0,a.kt)("p",null,"Transfer output"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,a.kt)("td",{parentName:"tr",align:null},"The addres we want to send to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amount"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount we want to send")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"output_kind"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#outputkind"},"OutputKind")),(0,a.kt)("td",{parentName:"tr",align:null},"The kind of output we wish to use. Default used is SIGNATURE_LOCKED_SINGLE")))),(0,a.kt)("h3",{id:"getamount-long"},"getAmount(): long"),(0,a.kt)("p",null,"The output value."),(0,a.kt)("h3",{id:"getaddress-addresswrapper"},"getAddress(): ",(0,a.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,a.kt)("p",null,"The output address."),(0,a.kt)("h3",{id:"getoutputkind-outputkind"},"getOutputKind(): ",(0,a.kt)("a",{parentName:"h3",href:"#outputkind"},"OutputKind")),(0,a.kt)("p",null,"The output type"))}s.isMDXComponent=!0}}]);