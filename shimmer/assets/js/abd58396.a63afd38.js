"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73569],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60068:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const i={description:"The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/preview.png",keywords:["shimmer","MQTT","REST API","HTTP","Explorer","reference"]},a="Shimmer",c={unversionedId:"reference/networks/shimmer",id:"reference/networks/shimmer",title:"Shimmer",description:"The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.",source:"@site/shimmer/external/introduction-docs/docs/reference/networks/shimmer.md",sourceDirName:"reference/networks",slug:"/reference/networks/shimmer",permalink:"/shimmer/introduction/reference/networks/shimmer",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/reference/networks/shimmer.md",tags:[],version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public Shimmer endpoints where MQTT and the HTTP REST API are enabled.",image:"/img/logo/preview.png",keywords:["shimmer","MQTT","REST API","HTTP","Explorer","reference"]},sidebar:"mySidebar",previous:{title:"Shimmer Beta",permalink:"/shimmer/introduction/reference/networks/betanet"},next:{title:"Resources",permalink:"/shimmer/introduction/resources"}},l={},s=[{value:"Public Infrastructure",id:"public-infrastructure",level:2},{value:"Developer Tools",id:"developer-tools",level:2}],p={toc:s};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shimmer"},"Shimmer"),(0,o.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,o.kt)("p",null,"IOTA currently provides two load-balanced public Shimmer endpoints:"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"TODO: Add a list of public Shimmer endpoints.")),(0,o.kt)("p",null,"These endpoints have MQTT (via WebSockets) exposed and offer the HTTP REST API (according to this ",(0,o.kt)("a",{parentName:"p",href:"https://studio.asyncapi.com/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-event-api/tips/TIP-0028/event-api.yml"},"specification"),")\nover TLS."),(0,o.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.iota.org/shimmer"},"Explorer"),".")))}m.isMDXComponent=!0}}]);