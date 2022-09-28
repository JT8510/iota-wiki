"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={description:"How to configure the wasp-cli. Requirements and configuration parameters.",image:"/img/logo/WASP_logo_dark.png",keywords:["Wasp-cli","Configuration","Hornet","command line"]},o="Configuring wasp-cli",s={unversionedId:"guide/chains_and_nodes/wasp-cli",id:"guide/chains_and_nodes/wasp-cli",title:"Configuring wasp-cli",description:"How to configure the wasp-cli. Requirements and configuration parameters.",source:"@site/next/external/wasp/documentation/docs/guide/chains_and_nodes/wasp-cli.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/wasp-cli",permalink:"/next/smart-contracts/develop/guide/chains_and_nodes/wasp-cli",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/chains_and_nodes/wasp-cli.md",tags:[],version:"current",frontMatter:{description:"How to configure the wasp-cli. Requirements and configuration parameters.",image:"/img/logo/WASP_logo_dark.png",keywords:["Wasp-cli","Configuration","Hornet","command line"]},sidebar:"tutorialSidebar",previous:{title:"Docker (Standalone)",permalink:"/next/smart-contracts/develop/guide/chains_and_nodes/docker_standalone"},next:{title:"Setting Up a Chain",permalink:"/next/smart-contracts/develop/guide/chains_and_nodes/setting-up-a-chain"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-wasp-cli"},"Configuring wasp-cli"),(0,r.kt)("p",null,"Step-by-step instructions on how to use wasp-cli to interact with Wasp nodes on the Hornet network."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"After going through the instructions on ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/develop/guide/chains_and_nodes/running-a-node"},"Running a node"),", you should have the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," binary\navailable in your system."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You can create a basic default configuration by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init \n")),(0,r.kt)("p",null,"This command will create a configuration file named ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," in the current directory."),(0,r.kt)("p",null,"After this, you will need to tell the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," the location of the Hornet node and the committee of Wasp nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set l1.apiaddress http://localhost:14265\nwasp-cli set l1.faucetaddress http://localhost:8091\n\nwasp-cli set wasp.0.api 127.0.0.1:9090\nwasp-cli set wasp.0.nanomsg 127.0.0.1:5550\nwasp-cli set wasp.0.peering 127.0.0.1:4000\n\n## You can add as many nodes as you like in your committee\nwasp-cli set wasp.1.api 127.0.0.1:9091\nwasp-cli set wasp.1.nanomsg 127.0.0.1:5551\nwasp-cli set wasp.1.peering 127.0.0.1:4001\n\n...shell\n\nwasp-cli set wasp.N.api 127.0.0.1:9091\nwasp-cli set wasp.N.nanomsg 127.0.0.1:5551\nwasp-cli set wasp.N.peering 127.0.0.1:4001\n")),(0,r.kt)("p",null,"Alternatively, you can edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," file and include the desired server locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Hornet api address:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"l1": {\n  "apiaddress": "http://localhost:14265",\n  "faucetaddress": "http://localhost:8091"\n},\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The API/nanomsg/peering address for each Wasp node:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"wasp": {\n    "0": {\n      "api": "127.0.0.1:9090",\n      "nanomsg": "127.0.0.1:5550",\n      "peering": "127.0.0.1:4000"\n    },\n    "1": {\n      ...\n    },\n  }\n')))),(0,r.kt)("p",null,"If you configure the Wasp node to use the experimental ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/develop/guide/chains_and_nodes/node-config#jwt"},"JWT authentication"),", you will need to log in\nafter you save the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli login\n")))}u.isMDXComponent=!0}}]);