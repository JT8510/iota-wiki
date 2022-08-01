"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60777],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,u(u({ref:e},c),{},{components:n})):r.createElement(m,u({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:o,u[1]=a;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4816:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],a={},p=void 0,s={unversionedId:"libraries/java/api/OutputResponse",id:"libraries/java/api/OutputResponse",title:"OutputResponse",description:"Response of GET /api/v1/outputs/.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/OutputResponse.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/OutputResponse",permalink:"/iota.rs/libraries/java/api/OutputResponse",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/OutputResponse.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"messageId(): String",id:"messageid-string",level:3},{value:"transactionId(): String",id:"transactionid-string",level:3},{value:"outputIndex(): int",id:"outputindex-int",level:3},{value:"isSpent(): boolean",id:"isspent-boolean",level:3},{value:"output(): OutputDto",id:"output-outputdto",level:3}],d={toc:l};function f(t){var e=t.components,n=(0,o.Z)(t,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Response of GET /api/v1/outputs/{output_id}.\nReturns all information about a specific output."),(0,i.kt)("h3",{id:"messageid-string"},"messageId(): String"),(0,i.kt)("p",null,"The message id this output is related to"),(0,i.kt)("h3",{id:"transactionid-string"},"transactionId(): String"),(0,i.kt)("p",null,"The transaction id this output is related to"),(0,i.kt)("h3",{id:"outputindex-int"},"outputIndex(): int"),(0,i.kt)("p",null,"The output index"),(0,i.kt)("h3",{id:"isspent-boolean"},"isSpent(): boolean"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," if this output was spent. Otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h3",{id:"output-outputdto"},"output(): ",(0,i.kt)("a",{parentName:"h3",href:"#outputdto"},"OutputDto")),(0,i.kt)("p",null,"Get the output object which can be turned into its specific output type"))}f.isMDXComponent=!0}}]);