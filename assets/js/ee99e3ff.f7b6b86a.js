"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84590],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(n),f=a,m=g["".concat(l,".").concat(f)]||g[f]||s[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},l=void 0,u={unversionedId:"reference/java_api/AccountBalance",id:"reference/java_api/AccountBalance",title:"AccountBalance",description:"Account balance information.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountBalance.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/AccountBalance",permalink:"/wallet.rs/reference/java_api/AccountBalance",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountBalance.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"getTotal(): long",id:"gettotal-long",level:3},{value:"getAvailable(): long",id:"getavailable-long",level:3},{value:"getIncoming(): long",id:"getincoming-long",level:3},{value:"getOutgoing(): long",id:"getoutgoing-long",level:3}],g={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Account balance information."),(0,o.kt)("h3",{id:"gettotal-long"},"getTotal(): long"),(0,o.kt)("p",null,"Account's total balance."),(0,o.kt)("h3",{id:"getavailable-long"},"getAvailable(): long"),(0,o.kt)("p",null,"For example, if a user with 50i total account balance has made a message spending 20i,\nthe available balance should be (50i-30i) = 20i."),(0,o.kt)("h3",{id:"getincoming-long"},"getIncoming(): long"),(0,o.kt)("p",null,"Balances from message with ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming: true"),".\nNote that this may not be accurate since the node prunes the messags."),(0,o.kt)("h3",{id:"getoutgoing-long"},"getOutgoing(): long"),(0,o.kt)("p",null,"Balances from message with ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming: false"),".\nNote that this may not be accurate since the node prunes the messags."))}f.isMDXComponent=!0}}]);