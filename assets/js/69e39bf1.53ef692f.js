"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45442],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="Interface: InputSigningData",p={unversionedId:"libraries/nodejs/references/interfaces/InputSigningData",id:"libraries/nodejs/references/interfaces/InputSigningData",title:"Interface: InputSigningData",description:"Data for transaction inputs for signing and ordering of unlock blocks",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/InputSigningData.md",sourceDirName:"libraries/nodejs/references/interfaces",slug:"/libraries/nodejs/references/interfaces/InputSigningData",permalink:"/wallet.rs/develop/libraries/nodejs/references/interfaces/InputSigningData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/references/interfaces/InputSigningData.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: GenerateAddressMetadata",permalink:"/wallet.rs/develop/libraries/nodejs/references/interfaces/GenerateAddressMetadata"},next:{title:"Interface: LedgerApp",permalink:"/wallet.rs/develop/libraries/nodejs/references/interfaces/LedgerApp"}},u={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"output",id:"output",level:3},{value:"outputMetaData",id:"outputmetadata",level:3},{value:"chain",id:"chain",level:3},{value:"bech32Address",id:"bech32address",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-inputsigningdata"},"Interface: InputSigningData"),(0,i.kt)("p",null,"Data for transaction inputs for signing and ordering of unlock blocks"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/InputSigningData#output"},"output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/InputSigningData#outputmetadata"},"outputMetaData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/InputSigningData#chain"},"chain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/InputSigningData#bech32address"},"bech32Address"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"output"},"output"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"output"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputTypes")),(0,i.kt)("p",null,"The output"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"outputmetadata"},"outputMetaData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"outputMetaData"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"IOutputMetadataResponse")),(0,i.kt)("p",null,"The output metadata"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chain"},"chain"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"chain"),": ",(0,i.kt)("a",{parentName:"p",href:"/wallet.rs/develop/libraries/nodejs/references/interfaces/Segment"},(0,i.kt)("inlineCode",{parentName:"a"},"Segment")),"[]"),(0,i.kt)("p",null,"The chain derived from seed, only for ed25519 addresses"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bech32address"},"bech32Address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"bech32Address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The bech32 encoded address, required because of alias outputs where we have multiple possible unlock\nconditions, because we otherwise don't know which one we need"))}f.isMDXComponent=!0}}]);