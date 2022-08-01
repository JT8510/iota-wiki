"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71757],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,f=m["".concat(u,".").concat(c)]||m[c]||s[c]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},u=void 0,p={unversionedId:"reference/java_api/MigrationBundleOptions",id:"reference/java_api/MigrationBundleOptions",title:"MigrationBundleOptions",description:"Finds account data for the migration from legacy network.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/MigrationBundleOptions.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/MigrationBundleOptions",permalink:"/wallet.rs/reference/java_api/MigrationBundleOptions",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/MigrationBundleOptions.mdx",tags:[],version:"current",frontMatter:{}},d={},s=[{value:"MigrationBundleOptions(): MigrationBundleOptions",id:"migrationbundleoptions-migrationbundleoptions",level:3},{value:"setMine(node): void",id:"setminenode-void",level:3},{value:"mine(): boolean",id:"mine-boolean",level:3},{value:"setTimeouts(secs): void",id:"settimeoutssecs-void",level:3},{value:"timeouts(): long",id:"timeouts-long",level:3},{value:"setOffset(offset): void",id:"setoffsetoffset-void",level:3},{value:"offset(): OptionalLong",id:"offset-optionallong",level:3},{value:"setLogFileName(log_file_name): void",id:"setlogfilenamelog_file_name-void",level:3},{value:"logFileName(): Optional&lt;String&gt;",id:"logfilename-optionalstring",level:3}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Finds account data for the migration from legacy network."),(0,o.kt)("h3",{id:"migrationbundleoptions-migrationbundleoptions"},"MigrationBundleOptions(): ",(0,o.kt)("a",{parentName:"h3",href:"#migrationbundleoptions"},"MigrationBundleOptions")),(0,o.kt)("h3",{id:"setminenode-void"},"setMine(node): void"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"node"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"mine-boolean"},"mine(): boolean"),(0,o.kt)("h3",{id:"settimeoutssecs-void"},"setTimeouts(secs): void"),(0,o.kt)("p",null,"Sets the timeout in seconds, negative to set default"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"secs"),(0,o.kt)("td",{parentName:"tr",align:null},"long"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"timeouts-long"},"timeouts(): long"),(0,o.kt)("p",null,"Returns the set timeout, defaults to 10 minutes"),(0,o.kt)("h3",{id:"setoffsetoffset-void"},"setOffset(offset): void"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"offset"),(0,o.kt)("td",{parentName:"tr",align:null},"Long"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"offset-optionallong"},"offset(): OptionalLong"),(0,o.kt)("h3",{id:"setlogfilenamelog_file_name-void"},"setLogFileName(log_file_name): void"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"log_file_name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"logfilename-optionalstring"},"logFileName(): Optional","<","String",">"))}c.isMDXComponent=!0}}]);