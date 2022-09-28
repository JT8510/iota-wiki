"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[24425],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",image:"/img/logo/goshimmer_light.png",keywords:["port config","pkger","webpack","build","change","npm","yarn"]},i="GoShimmer Analysis Dashboard",l={unversionedId:"teamresources/analysis_dashboard",id:"teamresources/analysis_dashboard",title:"GoShimmer Analysis Dashboard",description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",source:"@site/next/external/goshimmer/documentation/docs/teamresources/analysis_dashboard.md",sourceDirName:"teamresources",slug:"/teamresources/analysis_dashboard",permalink:"/next/goshimmer/teamresources/analysis_dashboard",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/teamresources/analysis_dashboard.md",tags:[],version:"current",frontMatter:{description:"How to use the Dashboard in dev mode and set up hot loading and packaging.",image:"/img/logo/goshimmer_light.png",keywords:["port config","pkger","webpack","build","change","npm","yarn"]},sidebar:"docs",previous:{title:"golangci-lint",permalink:"/next/goshimmer/teamresources/local_development"}},s={},p=[{value:"Dashboard in Dev Mode",id:"dashboard-in-dev-mode",level:3},{value:"Pack Your Changes",id:"pack-your-changes",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"goshimmer-analysis-dashboard"},"GoShimmer Analysis Dashboard"),(0,r.kt)("p",null,"Programmed using modern web technologies."),(0,r.kt)("h3",{id:"dashboard-in-dev-mode"},"Dashboard in Dev Mode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure to set ",(0,r.kt)("inlineCode",{parentName:"li"},"analysis.dashboard.dev")," to true, to enable GoShimmer to serve assets\nfrom the webpack-dev-server."),(0,r.kt)("li",{parentName:"ol"},"Install all needed npm modules via ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn install"),"."),(0,r.kt)("li",{parentName:"ol"},"Run a webpack-dev-server instance by running ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start")," within the ",(0,r.kt)("inlineCode",{parentName:"li"},"frontend")," directory."),(0,r.kt)("li",{parentName:"ol"},"Using default port config, you should now be able to access the analysis dashboard under ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000"))),(0,r.kt)("p",null,"The Analysis Dashboard is hot-reload enabled."),(0,r.kt)("h3",{id:"pack-your-changes"},"Pack Your Changes"),(0,r.kt)("p",null,"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"pkger")," to wrap all built frontend files into Go files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"Install ",(0,r.kt)("inlineCode",{parentName:"a"},"pkger"))," if not already done.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that the correct webpack-cli (version v3.3.11) is installed: "),(0,r.kt)("p",{parentName:"li"},"2.1 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn webpack-cli --version")),(0,r.kt)("p",{parentName:"li"},"2.2 If a newer version is installed use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn remove webpack-cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add webpack-cli@3.3.11")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build Analysis Dashboard by running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the root of the repo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"pkger")," in the root of the repo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pkged.go")," should have been modified.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Done. Now you can build GoShimmer and your Analysis Dashboard changes will be included within the binary."))),(0,r.kt)("p",null,"The above steps can also be done by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/pkger.sh")," script from the root folder."))}m.isMDXComponent=!0}}]);