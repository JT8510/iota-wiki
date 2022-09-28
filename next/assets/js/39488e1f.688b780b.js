"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={description:"INX-Participation is an extension for nodes to enable on-tangle voting.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Participation","IOTA","Shimmer","Node Software","Welcome","explanation"]},a="Welcome to INX-Participation",c={unversionedId:"welcome",id:"welcome",title:"Welcome to INX-Participation",description:"INX-Participation is an extension for nodes to enable on-tangle voting.",source:"@site/next/external/inx-participation/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/next/inx-participation/welcome",draft:!1,editUrl:"https://github.com/iotaledger/inx-participation/edit/develop/documentation/next/external/inx-participation/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"INX-Participation is an extension for nodes to enable on-tangle voting.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Participation","IOTA","Shimmer","Node Software","Welcome","explanation"]},sidebar:"mySidebar",next:{title:"Core Configuration",permalink:"/next/inx-participation/configuration"}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"API",id:"api",level:2},{value:"Source Code",id:"source-code",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-inx-participation"},"Welcome to INX-Participation"),(0,i.kt)("p",null,"INX-Participation is an extension for nodes to enable on-tangle voting.\nThe extensions maintains its own database separate from that of the node and provides means to track events and votes."),(0,i.kt)("p",null,"You can find more information on how participation events work in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iota-community/treasury/blob/main/specifications/hornet-participation-plugin.md"},"HORNET Participation Plugin")," specification."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The recommended setup is to use the provided ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/inx-participation"},"Docker images"),".\nThese images are also used in our ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.iota.org/hornet/develop/how_tos/using_docker"},"HORNET recommended setup using Docker"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The participation extension is configured by default to connect to your HORNET instance."),(0,i.kt)("p",null,"You can find all the configuration options in the ",(0,i.kt)("a",{parentName:"p",href:"/next/inx-participation/configuration"},"configuration section"),"."),(0,i.kt)("h2",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-dashboard"},"INX-Dashboard")," on your node, you can manage events directly from your browser."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"The extension exposes a custom set of REST APIs that can be used by wallets and applications to find active, past and upcoming participation events and query event results."),(0,i.kt)("p",null,"You can find more information about the API in the ",(0,i.kt)("a",{parentName:"p",href:"/next/inx-participation/api_reference"},"API reference section"),"."),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"The source code of the project is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-participation"},"GitHub"),"."))}u.isMDXComponent=!0}}]);