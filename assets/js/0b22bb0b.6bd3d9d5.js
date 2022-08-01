"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[99921],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},p="Class: UnitsHelper",s={unversionedId:"references/client/classes/UnitsHelper",id:"references/client/classes/UnitsHelper",title:"Class: UnitsHelper",description:"iota.js API reference",source:"@site/content/build/iota.js/develop/documentation/docs/references/client/classes/UnitsHelper.md",sourceDirName:"references/client/classes",slug:"/references/client/classes/UnitsHelper",permalink:"/iotajs/references/client/classes/UnitsHelper",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/references/client/classes/UnitsHelper.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: TransactionHelper",permalink:"/iotajs/references/client/classes/TransactionHelper"},next:{title:"Enumeration: ConflictReason",permalink:"/iotajs/references/client/enums/ConflictReason"}},m={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties-1",level:2},{value:"MAGNITUDE_MAP",id:"magnitude_map",level:3},{value:"Methods",id:"methods-1",level:2},{value:"formatBest",id:"formatbest",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"formatUnits",id:"formatunits",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"calculateBest",id:"calculatebest",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"convertUnits",id:"convertunits",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-unitshelper"},"Class: UnitsHelper"),(0,l.kt)("p",null,"Class to help with units formatting."),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/UnitsHelper#magnitude_map"},"MAGNITUDE","_","MAP"))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/UnitsHelper#formatbest"},"formatBest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/UnitsHelper#formatunits"},"formatUnits")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/UnitsHelper#calculatebest"},"calculateBest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/UnitsHelper#convertunits"},"convertUnits"))),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/iotajs/references/client/classes/UnitsHelper#constructor"},"constructor"))),(0,l.kt)("h2",{id:"properties-1"},"Properties"),(0,l.kt)("h3",{id:"magnitude_map"},"MAGNITUDE","_","MAP"),(0,l.kt)("p",null,"\u25aa ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"MAGNITUDE","_","MAP"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")),(0,l.kt)("p",null,"Map units."),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"formatbest"},"formatBest"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"formatBest"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"decimalPlaces?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Format the value in the best units."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decimalPlaces")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of decimal places to display.")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The formated value."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"formatunits"},"formatUnits"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"formatUnits"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"magnitude"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"decimalPlaces?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Format the value in the best units."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"magnitude")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/iotajs/references/client/api_ref#magnitudes"},(0,l.kt)("inlineCode",{parentName:"a"},"Magnitudes"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The magnitude to format with.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"decimalPlaces")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of decimal places to display.")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The formated value."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calculatebest"},"calculateBest"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"calculateBest"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,l.kt)("a",{parentName:"p",href:"/iotajs/references/client/api_ref#magnitudes"},(0,l.kt)("inlineCode",{parentName:"a"},"Magnitudes"))),(0,l.kt)("p",null,"Format the value in the best units."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to format.")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/iotajs/references/client/api_ref#magnitudes"},(0,l.kt)("inlineCode",{parentName:"a"},"Magnitudes"))),(0,l.kt)("p",null,"The best units for the value."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"convertunits"},"convertUnits"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"convertUnits"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"to"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Convert the value to different units."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value to convert.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/iotajs/references/client/api_ref#magnitudes"},(0,l.kt)("inlineCode",{parentName:"a"},"Magnitudes"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The from magnitude.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/iotajs/references/client/api_ref#magnitudes"},(0,l.kt)("inlineCode",{parentName:"a"},"Magnitudes"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The to magnitude.")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The formatted unit."),(0,l.kt)("h2",{id:"constructors-1"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new UnitsHelper"),"()"))}c.isMDXComponent=!0}}]);