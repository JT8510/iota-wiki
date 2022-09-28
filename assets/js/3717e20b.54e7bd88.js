"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12569],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),y=r,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={description:"A keyload message is an access restriction and control message that allows the author to specify who should be able to decrypt any messages that are attached following it.",image:"/img/overview/layered_overview.svg",keywords:["explanation","keyloads","public keys","pre","access restrictions","message"]},s="Keyloads",i={unversionedId:"explanations/channels_protocol/keyloads",id:"explanations/channels_protocol/keyloads",title:"Keyloads",description:"A keyload message is an access restriction and control message that allows the author to specify who should be able to decrypt any messages that are attached following it.",source:"@site/iota/external/streams/develop/documentation/docs/explanations/channels_protocol/keyloads.md",sourceDirName:"explanations/channels_protocol",slug:"/explanations/channels_protocol/keyloads",permalink:"/streams/explanations/channels_protocol/keyloads",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/iota/external/streams/develop/documentation/docs/explanations/channels_protocol/keyloads.md",tags:[],version:"current",frontMatter:{description:"A keyload message is an access restriction and control message that allows the author to specify who should be able to decrypt any messages that are attached following it.",image:"/img/overview/layered_overview.svg",keywords:["explanation","keyloads","public keys","pre","access restrictions","message"]},sidebar:"docs",previous:{title:"Branching",permalink:"/streams/explanations/channels_protocol/branching"},next:{title:"Sequencing",permalink:"/streams/explanations/channels_protocol/sequencing"}},l={},c=[{value:"Public Keys",id:"public-keys",level:3},{value:"Pre-Shared Keys",id:"pre-shared-keys",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyloads"},"Keyloads"),(0,r.kt)("p",null,"A keyload message is an access restriction and control message that allows the author to specify who should be\nable to decrypt any messages that are attached following it. There are two ways to specify access when generating\na keyload message:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subscriber public keys"),(0,r.kt)("li",{parentName:"ul"},"Pre-shared keys")),(0,r.kt)("h3",{id:"public-keys"},"Public Keys"),(0,r.kt)("p",null,"During the processing of subscription messages, public keys are masked and provided to the author to be stored on\ntheir instance. That author can then specify which of these users will be able to access subsequent messages by\nincluding that public key in the keyload message."),(0,r.kt)("h3",{id:"pre-shared-keys"},"Pre-Shared Keys"),(0,r.kt)("p",null,"A predefined key shared amongst users by other means than the subscription process above. These keys can be used to provide access restrictions to a stream\nwithout the need for a subscription process."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The security and transportation of these pre-shared keys must be ensured by the user implementations.")))}d.isMDXComponent=!0}}]);