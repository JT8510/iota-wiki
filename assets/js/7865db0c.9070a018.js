"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[30509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={image:"/img/integration-services/architecture-integration.png",description:"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.",keywords:["explanation","subscribe to channel","ecommerce","immutable data channel","subscriber","Identity"]},o="Ecommerce-Audit Trail Gateway (GW)",c={unversionedId:"explanations/services/audit-trail-gateway/introduction",id:"explanations/services/audit-trail-gateway/introduction",title:"Ecommerce-Audit Trail Gateway (GW)",description:"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.",source:"@site/iota/external/integration-services/production/documentation/docs/explanations/services/audit-trail-gateway/introduction.md",sourceDirName:"explanations/services/audit-trail-gateway",slug:"/explanations/services/audit-trail-gateway/introduction",permalink:"/integration-services/explanations/services/audit-trail-gateway/introduction",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/explanations/services/audit-trail-gateway/introduction.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/architecture-integration.png",description:"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on the IOTA Tangle.",keywords:["explanation","subscribe to channel","ecommerce","immutable data channel","subscriber","Identity"]},sidebar:"docs",previous:{title:"Concept",permalink:"/integration-services/explanations/authentication"},next:{title:"Software Architecture and APIs Definition",permalink:"/integration-services/explanations/services/audit-trail-gateway/API-definition"}},s={},l=[],u={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ecommerce-audit-trail-gateway-gw"},"Ecommerce-Audit Trail Gateway (GW)"),(0,r.kt)("p",null,"The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel\u2019s data on\nthe IOTA Tangle. A channel is implemented as an IOTA Stream and can handle multiple different types of ",(0,r.kt)("strong",{parentName:"p"},"Subscribers"),".\nWhen you request ",(0,r.kt)("inlineCode",{parentName:"p"},"Read"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Write"),"or ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadAndWrite")," access to a channel, you become a channel Subscriber. However, it is\nup to the channel\u2019s creator (",(0,r.kt)("strong",{parentName:"p"},"Author"),") to authorize these requests. In addition to authorized subscribers, the author\ncan always read and write messages in the channel."),(0,r.kt)("admonition",{title:"Important ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Audit Trail GW currently integrates the ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/explanations/services/SSI-bridge/introduction"},"SSI Bridge"),"\nto identify and authorize subscribers. This means anyone interacting with the audit trail must create their\nown ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/explanations/identity"},"Identity")," beforehand."),(0,r.kt)("p",{parentName:"admonition"},"In the future, you will be able to remove this dependency and deploy the Audit Trail and Gateway in the presence of\nother (centralized) Accounting, Authentication, and Authorization (AAA) systems.")),(0,r.kt)("p",null,"The figure below shows a logic architecture with the integration of both IOTA Integration Services."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IOTA-Tools-Architecture",src:n(5777).Z,width:"960",height:"540"})))}d.isMDXComponent=!0},5777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-integration-808a9bd5eca8712894d46b172d7feeb0.png"}}]);