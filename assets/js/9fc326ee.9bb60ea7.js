"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9601],{94976:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s=void 0,p={unversionedId:"libraries/java/api/MilestonePayload",id:"libraries/java/api/MilestonePayload",title:"MilestonePayload",description:"A payload which defines the inclusion set of other messages in the Tangle.",source:"@site/external/iota.rs/documentation/docs/libraries/java/api/MilestonePayload.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MilestonePayload",permalink:"/iota.rs/libraries/java/api/MilestonePayload",editUrl:"https://github.com/iotaledger/iota.rs/edit/mainnet/external/iota.rs/documentation/docs/libraries/java/api/MilestonePayload.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"essence(): MilestonePayloadEssence",id:"essence-milestonepayloadessence",level:3},{value:"signatures(): MilestoneSignature[]",id:"signatures-milestonesignature",level:3},{value:"validate(applicable_public_keys, min_threshold): void",id:"validateapplicable_public_keys-min_threshold-void",level:3},{value:"id(): String",id:"id-string",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A payload which defines the inclusion set of other messages in the Tangle."),(0,i.kt)("h3",{id:"essence-milestonepayloadessence"},"essence(): ",(0,i.kt)("a",{parentName:"h3",href:"#milestonepayloadessence"},"MilestonePayloadEssence")),(0,i.kt)("p",null,"Returns the essence of a ",(0,i.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."),(0,i.kt)("h3",{id:"signatures-milestonesignature"},"signatures(): ",(0,i.kt)("a",{parentName:"h3",href:"#milestonesignature"},"MilestoneSignature[]")),(0,i.kt)("p",null,"Returns the signatures of a ",(0,i.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."),(0,i.kt)("h3",{id:"validateapplicable_public_keys-min_threshold-void"},"validate(applicable_public_keys, min_threshold): void"),(0,i.kt)("p",null,"Semantically validate a ",(0,i.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"applicable_public_keys"),(0,i.kt)("td",{parentName:"tr",align:null},"String[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The public keys to use to validate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min_threshold"),(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"THe minimum threshold for this to succeed (0...100)")))),(0,i.kt)("h3",{id:"id-string"},"id(): String"),(0,i.kt)("p",null,"Computes the identifier of a ",(0,i.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);