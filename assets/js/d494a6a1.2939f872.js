"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25952],{56648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the IOTA network.",image:"/img/iota-wiki.png",keywords:["explanation"]},c="The Coordinator",l={unversionedId:"about-iota/coordinator",id:"about-iota/coordinator",title:"The Coordinator",description:"What is the Coordinator in the IOTA network.",source:"@site/internal/learn/about-iota/coordinator.md",sourceDirName:"about-iota",slug:"/about-iota/coordinator",permalink:"/learn/about-iota/coordinator",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/about-iota/coordinator.md",tags:[],version:"current",lastUpdatedAt:1658188502,formattedLastUpdatedAt:"Jul 18, 2022",frontMatter:{id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the IOTA network.",image:"/img/iota-wiki.png",keywords:["explanation"]},sidebar:"learn",previous:{title:"Why is IOTA Feeless?",permalink:"/learn/about-iota/why-is-iota-feeless"},next:{title:"Roadmap to Decentralization",permalink:"/learn/about-iota/roadmap-to-decentralization"}},d={},u=[],p={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-coordinator"},"The Coordinator"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Coordinator is a temporary solution. IOTA will remove the Coordinator in the future ",(0,i.kt)("a",{parentName:"p",href:"/learn/about-iota/roadmap-to-decentralization"},"IOTA 2.0 update"),".")),(0,i.kt)("p",null,"The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated."),(0,i.kt)("p",null,"To allow the nodes to recognize valid milestones, all IOTA nodes on the same network are configured with the signatures of a coordinator node which they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them."),(0,i.kt)("p",null,"To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check if they are synchronized with the rest of the network."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"An artist&#39;s depiction of Coordinator.",src:n(79591).Z,title:"Click to see the full-sized image.",width:"743",height:"500"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The Coordinator")))}h.isMDXComponent=!0},79591:function(e,t,n){t.Z=n.p+"assets/images/milestones-ca3479a44644b9ab2414b07e1e62d6ac.gif"},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);