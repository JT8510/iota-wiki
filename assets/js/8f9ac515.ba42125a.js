"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42792],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["devnet","load-balanced","HTTP REST API","MQTT","reference"]},c="Devnet",p={unversionedId:"reference/networks/devnet",id:"reference/networks/devnet",title:"Devnet",description:"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.",source:"@site/content/build/introduction-docs/production/docs/reference/networks/devnet.md",sourceDirName:"reference/networks",slug:"/reference/networks/devnet",permalink:"/introduction/reference/networks/devnet",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/content/build/introduction-docs/production/docs/reference/networks/devnet.md",tags:[],version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public devnet endpoints, where MQTT and the HTTP REST API are enabled.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["devnet","load-balanced","HTTP REST API","MQTT","reference"]},sidebar:"mySidebar",previous:{title:"Mainnet",permalink:"/introduction/reference/networks/mainnet"},next:{title:"Resources",permalink:"/introduction/resources"}},s={},d=[{value:"Public Infrastructure",id:"public-infrastructure",level:2},{value:"Developer Tools",id:"developer-tools",level:2}],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"devnet"},"Devnet"),(0,o.kt)("p",null,"Since the Chrysalis update, the ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet")," is now called ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),".  We recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," to develop and test your application.  "),(0,o.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,o.kt)("p",null,"IOTA currently provides a load-balanced public devNet endpoint:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.lb-0.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-0.h.chrysalis-devnet.iota.cafe/"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"},"https://api.lb-1.h.chrysalis-devnet.iota.cafe/"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using the load balancer for most scenarios.")),(0,o.kt)("p",null,"We also provide single node endpoints that expose native ",(0,o.kt)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe"},"https://api.thin-hornet-0.h.chrysalis-devnet.iota.cafe")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe"},"https://api.thin-hornet-1.h.chrysalis-devnet.iota.cafe")),(0,o.kt)("li",{parentName:"ul"},"mqtt.lb-0.h.chrysalis-devnet.iota.cafe:1883"),(0,o.kt)("li",{parentName:"ul"},"mqtt.lb-1.h.chrysalis-devnet.iota.cafe:1883")),(0,o.kt)("p",null,"These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this ",(0,o.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"specification"),") over TLS."),(0,o.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.iota.org/devnet"},"Explorer"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://faucet.chrysalis-devnet.iota.cafe"},"Online Faucet"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"cli-wallet"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/chrysalis-faucet"},"chrysalis-faucet Code (nodejs + svelte)"),".")))}f.isMDXComponent=!0}}]);