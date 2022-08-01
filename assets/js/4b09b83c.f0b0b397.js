"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[32885],{33961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={description:"Getting started with the official IOTA Client Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},p="Getting Started with IOTA Client Python Binding",s={unversionedId:"libraries/python/getting_started",id:"libraries/python/getting_started",title:"Getting Started with IOTA Client Python Binding",description:"Getting started with the official IOTA Client Library Python binding.",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/python/getting_started.md",sourceDirName:"libraries/python",slug:"/libraries/python/getting_started",permalink:"/iota.rs/develop/libraries/python/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/python/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},sidebar:"docs",previous:{title:"Interface: StrongholdSecretManager",permalink:"/iota.rs/develop/libraries/nodejs/references/interfaces/StrongholdSecretManager"},next:{title:"IOTA Client Python Library",permalink:"/iota.rs/develop/libraries/python/api_reference"}},c={},u=[{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-iota-client-python-binding"},"Getting Started with IOTA Client Python Binding"),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"In a production setup, do not store passwords in the host's environment variables or in the source code. See our ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/backup_security"},"backup and security recommendations")," for production setups.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Easiest way how to get python binding up and running is to leverage pre-built python libraries for linux/macos/windows that can be installed to your python environment (3.6+) via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),". The binding is automagically generated using github ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/actions/workflows/python_binding_publish.yml"},"actions"),"."),(0,a.kt)("p",null,"The latest artifacts for major python versions can be also grabbed using ",(0,a.kt)("a",{parentName:"p",href:"https://nightly.link/iotaledger/iota.rs/workflows/python_binding_publish/dev"},"nighly.link service"),". Download zip file for the given os and pyversion, unpack wheel file (",(0,a.kt)("inlineCode",{parentName:"p"},".whl"),") and install it via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <wheel_file>\n")),(0,a.kt)("p",null,"Once it has been properly installed you can double check it using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip list\n")),(0,a.kt)("p",null,"You should see the similar output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Package                    Version\n-------------------------- -------\niota-client-python           0.2.0a3\n")),(0,a.kt)("p",null,"Once installed in the given python environment you are all set and can start hacking using python binding!"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import iota_client\nprint(iota_client.__doc__)\nprint(dir(iota_client))\n")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);