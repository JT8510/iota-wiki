"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13658],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42935:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={title:"Libraries Overview",sidebar_label:"Overview",description:"Provide overview of the libraries",image:"/img/Identity_icon.png",keywords:["libraries"]},s=void 0,l={unversionedId:"libraries/overview",id:"libraries/overview",title:"Libraries Overview",description:"Provide overview of the libraries",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/libraries/overview.md",sourceDirName:"libraries",slug:"/libraries/overview",permalink:"/identity.rs/0.5/libraries/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/libraries/overview.md",tags:[],version:"current",frontMatter:{title:"Libraries Overview",sidebar_label:"Overview",description:"Provide overview of the libraries",image:"/img/Identity_icon.png",keywords:["libraries"]},sidebar:"docs",previous:{title:"Storage Interface",permalink:"/identity.rs/0.5/concepts/advanced/storage_interface"},next:{title:"Getting Started",permalink:"/identity.rs/0.5/libraries/rust/getting_started"}},u={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'While the framework itself is developed in the Rust programming language, we also provide bindings, or "Foreign Function Interfaces" (FFI), to other languages.'),(0,o.kt)("p",null,"For the Rust implementation see the ",(0,o.kt)("a",{parentName:"p",href:"./rust/getting_started"},"Rust Getting Started"),"."),(0,o.kt)("p",null,"For the Wasm bindings see the ",(0,o.kt)("a",{parentName:"p",href:"./wasm/getting_started"},"Wasm Getting Started"),"."))}f.isMDXComponent=!0}}]);