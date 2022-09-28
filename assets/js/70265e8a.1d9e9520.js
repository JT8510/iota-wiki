"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(r),u=n,f=v["".concat(s,".").concat(u)]||v[u]||d[u]||o;return r?i.createElement(f,a(a({ref:t},p),{},{components:r})):i.createElement(f,a({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}v.displayName="MDXCreateElement"},64200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const o={title:"Specifications Overview",sidebar_label:"Overview",description:"Provide overview of the specifications",image:"/img/Identity_icon.png",keywords:["specifications"]},a=void 0,c={unversionedId:"specs/overview",id:"specs/overview",title:"Specifications Overview",description:"Provide overview of the specifications",source:"@site/iota/external/identity.rs/develop/documentation/docs/specs/overview.md",sourceDirName:"specs",slug:"/specs/overview",permalink:"/identity.rs/develop/specs/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/iota/external/identity.rs/develop/documentation/docs/specs/overview.md",tags:[],version:"current",frontMatter:{title:"Specifications Overview",sidebar_label:"Overview",description:"Provide overview of the specifications",image:"/img/Identity_icon.png",keywords:["specifications"]},sidebar:"docs",previous:{title:"Digitally Validate a Degree",permalink:"/identity.rs/develop/tutorials/validate_university_degree"},next:{title:"Overview",permalink:"/identity.rs/develop/specs/did/overview"}},s={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While IOTA Identity implements many existing standards, it also adds some additional features we would like to standardize ourselves. This chapter covers these features and how they work in great detail. These are not light reads and can be skipped."),(0,n.kt)("p",null,"The current specifications are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./did/overview"},"IOTA DID"),": The specification for the IOTA DID Method implemented on the Tangle."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./didcomm/overview"},"IOTA DIDComm"),": A collection of DIDComm protocols for common SSI interactions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./revocation_bitmap_2022"},"Revocation Bitmap 2022"),": The specification for an on-Tangle credential revocation mechanism.")))}d.isMDXComponent=!0}}]);