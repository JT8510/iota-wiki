"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99276],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(t),m=a,g=h["".concat(c,".").concat(m)]||h[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={description:"Branches can be defined as any sequential grouping of messages that are linked to the announcement message",image:"/img/overview/layered_overview.svg",keywords:["explanation","branches","branching","single branch","multi branch"]},i="Branching",s={unversionedId:"explanations/channels_protocol/branching",id:"explanations/channels_protocol/branching",title:"Branching",description:"Branches can be defined as any sequential grouping of messages that are linked to the announcement message",source:"@site/iota/external/streams/develop/documentation/docs/explanations/channels_protocol/branching.md",sourceDirName:"explanations/channels_protocol",slug:"/explanations/channels_protocol/branching",permalink:"/streams/explanations/channels_protocol/branching",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/iota/external/streams/develop/documentation/docs/explanations/channels_protocol/branching.md",tags:[],version:"current",frontMatter:{description:"Branches can be defined as any sequential grouping of messages that are linked to the announcement message",image:"/img/overview/layered_overview.svg",keywords:["explanation","branches","branching","single branch","multi branch"]},sidebar:"docs",previous:{title:"Subscribers",permalink:"/streams/explanations/channels_protocol/subscribers"},next:{title:"Keyloads",permalink:"/streams/explanations/channels_protocol/keyloads"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"branching"},"Branching"),(0,a.kt)("p",null,"Branches can be defined as any sequential grouping of messages that are linked to the announcement\nmessage. These branches will typically be generated with either a signed packet message or a keyload message for\npublic and private streaming respectively. A channel can assume two different forms: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single branch: a linear sequencing of messages (similar to a MAM stream) with each message linked to\nthe previous one."),(0,a.kt)("li",{parentName:"ul"},"Multi branch: a sequencing of messages that does not rely on sequential linking of messages.")),(0,a.kt)("p",null,"When generating a channel, the author will decide whether the channel will use single branching or multi-\nbranching, this will inform the Streams instance in which way it should perform sequencing. subscribers will\nalso be informed as they process the announcement message, so their instances know the appropriate\nsequencing order as well."))}u.isMDXComponent=!0}}]);