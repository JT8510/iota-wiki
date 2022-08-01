"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Seed Mnemonics/Phrases",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"In modern wallet implementations such as the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs library")," and the\n",(0,s.kt)("a",{parentName:"p",href:"https://blog.iota.org/firefly-beta-release/"},"firefly wallet"),", the seed is usually generated from a ",(0,s.kt)("inlineCode",{parentName:"p"},"seed mnemonic"),"\n(",(0,s.kt)("inlineCode",{parentName:"p"},"seed phrase"),"), using ",(0,s.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0039"},"BIP39 standard"),", to be better memorized/stored by humans.\nIt is based on a randomly generated list of english words and later used to generate the seed. The seed is a root for\nall generated private keys and addresses.")))}d.isMDXComponent=!0;var l=["components"],c={description:"IOTA uses the `Ed25519` signature scheme and addresses are usually represented by Bech32 (checksummed base32) format string of 64 characters.",image:"/img/libraries/messages_in_tangle.svg",keywords:["explanation","seeds","ED2519","signature scheme","random seed","seed generator","private key"]},p="Seeds",u={unversionedId:"explanations/seeds",id:"explanations/seeds",title:"Seeds",description:"IOTA uses the `Ed25519` signature scheme and addresses are usually represented by Bech32 (checksummed base32) format string of 64 characters.",source:"@site/content/build/iota.rs/production/documentation/docs/explanations/seeds.mdx",sourceDirName:"explanations",slug:"/explanations/seeds",permalink:"/iota.rs/explanations/seeds",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/explanations/seeds.mdx",tags:[],version:"current",frontMatter:{description:"IOTA uses the `Ed25519` signature scheme and addresses are usually represented by Bech32 (checksummed base32) format string of 64 characters.",image:"/img/libraries/messages_in_tangle.svg",keywords:["explanation","seeds","ED2519","signature scheme","random seed","seed generator","private key"]},sidebar:"docs",previous:{title:"Getting Started with Wasm",permalink:"/iota.rs/getting_started/wasm"},next:{title:"Address/Key Space",permalink:"/iota.rs/explanations/address_key_space"}},m={},f=[{value:"Related Examples",id:"related-examples",level:2}],y={toc:f};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"seeds"},"Seeds"),(0,s.kt)("p",null,"Since the IOTA network is permission-less, anybody is able to use it and interact with it. No central authority is\nrequired at any stage. So anybody is able to generate their own ",(0,s.kt)("inlineCode",{parentName:"p"},"seed")," and then deterministically generate the\nrespective private keys/addresses."),(0,s.kt)("p",null,"IOTA uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"Ed25519")," signature scheme and addresses are usually represented by Bech32 (checksummed base32) format\nstring of 64 characters."),(0,s.kt)("p",null,"A root of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Ed25519")," signature scheme is basically a ",(0,s.kt)("inlineCode",{parentName:"p"},"32-byte (256-bit)")," uniformly randomly generated seed on which\nall private keys and corresponding addresses are generated. In the examples below, the seed is represented by a string\nof 64 characters using the ",(0,s.kt)("inlineCode",{parentName:"p"},"[0-9a-f]")," alphabet (32 bytes encoded in hexadecimal)."),(0,s.kt)(d,{mdxType:"SeedMnemonics"}),(0,s.kt)("h2",{id:"related-examples"},"Related Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/iota.rs/examples/generate_seed"},"Generate Seed"))))}h.isMDXComponent=!0}}]);