"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62282],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,f=m["".concat(d,".").concat(y)]||m[y]||c[y]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},d=void 0,p={unversionedId:"reference/java_api/IndexationPayload",id:"reference/java_api/IndexationPayload",title:"IndexationPayload",description:"fromBytes(index, data): IndexationPayload",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/IndexationPayload.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/IndexationPayload",permalink:"/wallet.rs/reference/java_api/IndexationPayload",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/IndexationPayload.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"fromBytes(index, data): IndexationPayload",id:"frombytesindex-data-indexationpayload",level:3},{value:"fromStrings(index, data): IndexationPayload",id:"fromstringsindex-data-indexationpayload",level:3},{value:"index(): byte[]",id:"index-byte",level:3},{value:"data(): byte[]",id:"data-byte",level:3}],m={toc:c};function y(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"frombytesindex-data-indexationpayload"},"fromBytes(index, data): ",(0,i.kt)("a",{parentName:"h3",href:"#indexationpayload"},"IndexationPayload")),(0,i.kt)("p",null,"Creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The data linked ot this index")))),(0,i.kt)("h3",{id:"fromstringsindex-data-indexationpayload"},"fromStrings(index, data): ",(0,i.kt)("a",{parentName:"h3",href:"#indexationpayload"},"IndexationPayload")),(0,i.kt)("p",null,"Creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," from strings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The data linked ot this indexMilestoneSignature")))),(0,i.kt)("h3",{id:"index-byte"},"index(): byte[]"),(0,i.kt)("p",null,"Returns the index of an ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."),(0,i.kt)("h3",{id:"data-byte"},"data(): byte[]"),(0,i.kt)("p",null,"Returns the data of an ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),"."))}y.isMDXComponent=!0}}]);