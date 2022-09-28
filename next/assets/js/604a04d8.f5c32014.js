"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[65717],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:e},p),{},{components:n})):o.createElement(h,a({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51866:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={slug:"An introduction to DLT Concepts",title:"An introduction to DLT concepts and why I think IOTAs Tangle is superior to Blockchains",authors:"jehnle",tags:["Community","DLT","Tangle","Introduction"],url:"https://medium.com/p/an-introduction-to-dlt-concepts-and-why-i-think-iotas-tangle-is-superior-to-blockchains-550b69ec86d6"},a=void 0,c={permalink:"/next/blog/An introduction to DLT Concepts",source:"@site/blog/2021-06-26_An_introduction_to_DLT_concepts_and_why_I_think_IOTAs_Tangle_is_superior_to_Blockchains.md",title:"An introduction to DLT concepts and why I think IOTAs Tangle is superior to Blockchains",description:"Blockchain vs Tangle",date:"2021-06-26T00:00:00.000Z",formattedDate:"June 26, 2021",tags:[{label:"Community",permalink:"/next/blog/tags/community"},{label:"DLT",permalink:"/next/blog/tags/dlt"},{label:"Tangle",permalink:"/next/blog/tags/tangle"},{label:"Introduction",permalink:"/next/blog/tags/introduction"}],hasTruncateMarker:!1,authors:[{name:"Jonas Ehnle",title:"X-Team Member",url:"https://medium.com/@jonas-ehnle",imageURL:"https://miro.medium.com/fit/c/216/216/1*dfwiTGHgymD8usNf_6D3eQ.jpeg",key:"jehnle"}],frontMatter:{slug:"An introduction to DLT Concepts",title:"An introduction to DLT concepts and why I think IOTAs Tangle is superior to Blockchains",authors:"jehnle",tags:["Community","DLT","Tangle","Introduction"],url:"https://medium.com/p/an-introduction-to-dlt-concepts-and-why-i-think-iotas-tangle-is-superior-to-blockchains-550b69ec86d6"},prevItem:{title:"Layer One\u2014Part 3: Metamoney",permalink:"/next/blog/layer_one_3"},nextItem:{title:"My take on IOTA\u2019s Community Treasury",permalink:"/next/blog/my-take-community-treasury"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://medium.com/p/an-introduction-to-dlt-concepts-and-why-i-think-iotas-tangle-is-superior-to-blockchains-550b69ec86d6",alt:"Blockchain vs Tangle"})),(0,r.kt)("p",null,"The goal of this article is to help newcomers in the cryptocurrency space or anyone unfamiliar with the technology behind it to understand what Distributed Ledger Technologies (DLTs) are and why we need them. Therefore, I will try not to go too deep into the technical details of DLTs, but rather give an overview of the principles used. I know this is a long article, but I wanted to explain everything in one document so you don\u2019t have to look in different places if you want to get a basic understanding. Feel free to skip parts you already know. It\u2019s important to note, that I won\u2019t discuss all possible attack vectors or every detail of the tech. This article should only be an introduction to the topic and the first stepping stone to dig deeper if it sparks your interest."),(0,r.kt)("p",null,"Read the article on:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/p/an-introduction-to-dlt-concepts-and-why-i-think-iotas-tangle-is-superior-to-blockchains-550b69ec86d6"},"Medium")))}u.isMDXComponent=!0}}]);