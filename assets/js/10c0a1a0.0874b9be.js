"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={description:"The BIP32 and BIP44 standards define a tree structure as a base for address and key space generation which is represented by a derivation path.",image:"/img/libraries/address_generation.svg",keywords:["explanation","hierarchical deterministic wallet","derivation path","set of addresses","account discovery","accounts"]},s="Address/Key Space",o={unversionedId:"explanations/address_key_space",id:"explanations/address_key_space",title:"Address/Key Space",description:"The BIP32 and BIP44 standards define a tree structure as a base for address and key space generation which is represented by a derivation path.",source:"@site/iota/external/iota.rs/production/documentation/docs/explanations/address_key_space.md",sourceDirName:"explanations",slug:"/explanations/address_key_space",permalink:"/iota.rs/explanations/address_key_space",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/explanations/address_key_space.md",tags:[],version:"current",frontMatter:{description:"The BIP32 and BIP44 standards define a tree structure as a base for address and key space generation which is represented by a derivation path.",image:"/img/libraries/address_generation.svg",keywords:["explanation","hierarchical deterministic wallet","derivation path","set of addresses","account discovery","accounts"]},sidebar:"docs",previous:{title:"Seeds",permalink:"/iota.rs/explanations/seeds"},next:{title:"Messages, Payloads, and Transactions",permalink:"/iota.rs/explanations/messages_payloads_and_transactions"}},d={},l=[{value:"BIP32 - Tree Structure",id:"bip32---tree-structure",level:2},{value:"Related Examples",id:"related-examples",level:2}],p={toc:l};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"addresskey-space"},"Address/Key Space"),(0,r.kt)("h2",{id:"bip32---tree-structure"},"BIP32 - Tree Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP32")," standard describes an approach to\n",(0,r.kt)("em",{parentName:"p"},"Hierarchical Deterministic Wallets"),". The standard was improved\nby ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP44"),"."),(0,r.kt)("p",null,"This standard defines a tree structure as a base for address and key space generation which is represented by a\n",(0,r.kt)("inlineCode",{parentName:"p"},"derivation path"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"m / purpose / coin_type / account / change / address_index\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"m"),": A master node (seed).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"purpose"),": A constant which is {44}.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"coin_type"),": A constant set for each crypto currency. IOTA = 4218, for instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"account"),": Account index. Zero-based increasing ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),". This level splits the address/key space into independent\nbranches (ex. user identities) which each has own set of addresses/keys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"change"),": Change index which is ",(0,r.kt)("inlineCode",{parentName:"p"},"{0, 1}"),", also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet chain"),"."),(0,r.kt)("p",{parentName:"li"},"There are two independent chains of addresses or keys. ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," is reserved for public addresses (to receive coins) and ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is\nreserved for internal addresses (also known as change) to which transaction change is returned. IOTA allows address\nreuse, and so it is, technically speaking, valid to return transaction change to the same originating address. It is\nup to developers whether to leverage it or not. The ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs")," library and its sibling ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," help with either\nscenario.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"address_index"),": Address index. Zero-based increasing ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," that indicates an address index."))),(0,r.kt)("p",null,"As outlined, there is quite a large address/key space that is secured by a single unique seed."),(0,r.kt)("p",null,"And there are few additional interesting notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each level defines a completely different subtree (subspace) of addresses/keys, and those are never mixed up."),(0,r.kt)("li",{parentName:"ul"},'The hierarchy is ready to "absorb" addresses/keys for many coins at the same time (',(0,r.kt)("inlineCode",{parentName:"li"},"coin_type"),"), and all those coins\nare secured by the same seed. This means any BIP32/44-compliant wallet is potentially able to manage any \\\nBIP32/44-compliant coin(s)."),(0,r.kt)("li",{parentName:"ul"},"There may be also other ",(0,r.kt)("inlineCode",{parentName:"li"},"purposes")," in the future. However, consider a single purpose for now. The constant ",(0,r.kt)("inlineCode",{parentName:"li"},"44")," stands\nfor BIP44."),(0,r.kt)("li",{parentName:"ul"},"The standard was agreed upon by different crypto communities, although not all ",(0,r.kt)("inlineCode",{parentName:"li"},"derivation path")," components are always in active use. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"account")," is not always actively leveraged across the crypto space (if this is the case then ",(0,r.kt)("inlineCode",{parentName:"li"},"account=0")," is usually used)."),(0,r.kt)("li",{parentName:"ul"},"Using different ",(0,r.kt)("inlineCode",{parentName:"li"},"accounts")," may be useful to split addresses/keys into some independent spaces, and it is up to\ndevelopers to implement. _Using different ",(0,r.kt)("inlineCode",{parentName:"li"},"accounts")," may have a negative impact on a performance while you are on the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account-discovery"},"account discovery")," phase. If you are\nplanning on using many multiple accounts then you may be interested in our stateful library\n",(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs")," that incorporates all business logic needed to efficiently manage\nindependent accounts.\nOur ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/docs/build/exchange-integration/exchange-integration-guide"},"exchange guide"),"\nprovides some useful tips on how different accounts may be leveraged.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"address_generation",src:a(35303).Z,width:"1280",height:"720"})),(0,r.kt)("p",null,"In case of IOTA, the derivation path of address/key space is ",(0,r.kt)("inlineCode",{parentName:"p"},"[seed]/44/4218/{int}/{0,1}/{int}"),". The levels ",(0,r.kt)("inlineCode",{parentName:"p"},"purpose"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"coin_type")," are given, the rest levels are up to developers to integrate."),(0,r.kt)("h2",{id:"related-examples"},"Related Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/iota.rs/examples/generate_addresses"},"Generate Addresses"))))}c.isMDXComponent=!0},35303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/address_generation-3a86c22395de7ffee579dd158bceccd9.svg"}}]);