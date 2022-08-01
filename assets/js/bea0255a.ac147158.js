"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96035],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],l={},i=void 0,p={unversionedId:"reference/java_api/SignatureLockedDustAllowanceOutput",id:"reference/java_api/SignatureLockedDustAllowanceOutput",title:"SignatureLockedDustAllowanceOutput",description:"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/SignatureLockedDustAllowanceOutput.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/SignatureLockedDustAllowanceOutput",permalink:"/wallet.rs/reference/java_api/SignatureLockedDustAllowanceOutput",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/SignatureLockedDustAllowanceOutput.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"from(address, amount): SignatureLockedDustAllowanceOutput",id:"fromaddress-amount-signaturelockeddustallowanceoutput",level:3},{value:"amount(): long",id:"amount-long",level:3},{value:"address(): AddressWrapper",id:"address-addresswrapper",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a\nregular SigLockedSingleOutput."),(0,o.kt)("h3",{id:"fromaddress-amount-signaturelockeddustallowanceoutput"},"from(address, amount): ",(0,o.kt)("a",{parentName:"h3",href:"#signaturelockeddustallowanceoutput"},"SignatureLockedDustAllowanceOutput")),(0,o.kt)("p",null,"Creates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,o.kt)("td",{parentName:"tr",align:null},"The address to set")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount"),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount to set")))),(0,o.kt)("h3",{id:"amount-long"},"amount(): long"),(0,o.kt)("p",null,"Returns the amount of a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."),(0,o.kt)("h3",{id:"address-addresswrapper"},"address(): ",(0,o.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,o.kt)("p",null,"Returns the address of a ",(0,o.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."))}m.isMDXComponent=!0}}]);