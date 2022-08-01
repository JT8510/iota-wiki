"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98773],{53529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={description:"Getting started with the official IOTA Wallet Library Software Node.js binding.",image:"/img/logo/wallet_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security"]},s="Getting Started with Node.js",c={unversionedId:"libraries/nodejs/getting_started",id:"libraries/nodejs/getting_started",title:"Getting Started with Node.js",description:"Getting started with the official IOTA Wallet Library Software Node.js binding.",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/getting_started.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/getting_started",permalink:"/wallet.rs/develop/libraries/nodejs/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/nodejs/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Wallet Library Software Node.js binding.",image:"/img/logo/wallet_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/wallet.rs/develop/libraries/rust/api_reference"},next:{title:"How To Create An Account",permalink:"/wallet.rs/develop/libraries/nodejs/how_to/create_account"}},p={},u=[{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started with Node.js"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/wallet"},"IOTA Wallet Node.js binding")," is published on ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com"),"."),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"In a production setup, do not store passwords in the host's environment variables or in the source code.  See our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security recommendations")," for production setups.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The package is published in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@iota/wallet"},"npmjs"),". We also use ",(0,o.kt)("em",{parentName:"p"},"dotenv")," for password management in the examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install with NPM, you can run the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install @iota/wallet dotenv\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To install with yarn, you can run the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn install @iota/wallet dotenv\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"You can find more information on using the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library's node.js binding in the ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/develop/libraries/nodejs/how_to/create_account"},"how tos section"),"."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);