"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={description:"Stronghold peer to peer communication",image:"/img/logo/Stronghold_icon.png",keywords:["p2p","networking","explanation"]},a="Peer to Peer Communication in Stronghold",s={unversionedId:"explanations/p2p",id:"explanations/p2p",title:"Peer to Peer Communication in Stronghold",description:"Stronghold peer to peer communication",source:"@site/shimmer/external/stronghold.rs/develop/documentation/docs/explanations/p2p.md",sourceDirName:"explanations",slug:"/explanations/p2p",permalink:"/shimmer/stronghold.rs/explanations/p2p",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/shimmer/external/stronghold.rs/develop/documentation/docs/explanations/p2p.md",tags:[],version:"current",frontMatter:{description:"Stronghold peer to peer communication",image:"/img/logo/Stronghold_icon.png",keywords:["p2p","networking","explanation"]},sidebar:"mySidebar",previous:{title:"Non-Contiguous Data Types and Handling Secrets at Runtime",permalink:"/shimmer/stronghold.rs/explanations/non-contiguous-data-types"},next:{title:"Cryptographic Procedures",permalink:"/shimmer/stronghold.rs/explanations/procedures"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"peer-to-peer-communication-in-stronghold"},"Peer to Peer Communication in Stronghold"),(0,r.kt)("p",null,"Stronghold includes extensive communication features. At surface level, there are two modes of operations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can run Stronghold as a server to provide services on sensitive data like remote procedure execution"),(0,r.kt)("li",{parentName:"ol"},"You can run Stronghold as a relay, some intermediary to connect peers. If not peer to peer connection is directly possible.")),(0,r.kt)("p",null,"At the time of writing, all peer to peer connections are currently routed through the relay, but this restriction will be lifted in the future."),(0,r.kt)("p",null,"If you need some kind of server-client setup, you should use the first mode. Think of a remote security module where you can sign messages, export public keys, etc. You should use the second mode to synchronize data between two Strongholds."),(0,r.kt)("p",null,"The peer to peer capabilities are built on top of libp2p, the foundation of IPFS. Communication between two Strongholds is secured by the underlying implementation of the NOISE protocol. In short, in the beginning, two Strongholds exchange handshake messages. Each participant generates a key pair (e.g., Ed25519), exchanges ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie-Helman")," public keys, operates on ephemeral keys and hashes the results into a shared secret. The shared secret is later used to send encrypted transport messages."),(0,r.kt)("p",null,"Stronghold uses static and ephemeral keys for the handshake protocol and encrypted transport. The handshake pattern used for secret exchange is designed as XX. The first X describes the static key transmitted to the responder, while the second describes the static key for the responder sent by the initiator."),(0,r.kt)("admonition",{title:"Noise Protocol",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can find a detailed explanation of how the NOISE protocol works on the official ",(0,r.kt)("a",{parentName:"p",href:"http://www.noiseprotocol.org/"},"NOISE Protocol website"),".")),(0,r.kt)("p",null,"A simple application level firewall secures each incoming connection. You can define rules for each peer trying to access certain parts of a Stronghold. For example, you can configure the firewall so only certain paths are available to a remote peer."),(0,r.kt)("p",null,"Remote instances of Stronghold are being addressed with the ",(0,r.kt)("a",{parentName:"p",href:"https://multiformats.io/multiaddr/"},"multiaddr format"),"."))}d.isMDXComponent=!0}}]);