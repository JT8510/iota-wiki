"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33857],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(i),m=n,f=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return i?r.createElement(f,s(s({ref:t},p),{},{components:i})):r.createElement(f,s({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},57583:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={title:"Verifiable Credentials Overview",sidebar_label:"Overview",description:"Verifiable Credentials are statements about the holder. They can be verified online or in person, and the holder decides who to share them with.",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","person"]},s=void 0,o={unversionedId:"concepts/verifiable_credentials/overview",id:"concepts/verifiable_credentials/overview",title:"Verifiable Credentials Overview",description:"Verifiable Credentials are statements about the holder. They can be verified online or in person, and the holder decides who to share them with.",source:"@site/iota/external/identity.rs/v0.6.0/documentation/docs/concepts/verifiable_credentials/overview.md",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/overview",permalink:"/identity.rs/concepts/verifiable_credentials/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/iota/external/identity.rs/v0.6.0/documentation/docs/concepts/verifiable_credentials/overview.md",tags:[],version:"current",frontMatter:{title:"Verifiable Credentials Overview",sidebar_label:"Overview",description:"Verifiable Credentials are statements about the holder. They can be verified online or in person, and the holder decides who to share them with.",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","person"]},sidebar:"docs",previous:{title:"Create a DID on a Private Tangle",permalink:"/identity.rs/concepts/decentralized_identifiers/private_tangle"},next:{title:"Create and Sign",permalink:"/identity.rs/concepts/verifiable_credentials/create"}},l={},c=[{value:"Verifiable Credentials in IOTA",id:"verifiable-credentials-in-iota",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Credentials are statements about an entity, such as properties that the entity possesses or capabilities that they have (like drivers licences, passports, or a person's age). Verifiable Credentials (VCs) are statements (eg. Alice has a drivers licence) that can be cryptographically verified by a third party, either online or in person. Additionally, the holder of the VC decides what is shared and who it is shared with."),(0,n.kt)("p",null,"There are several types of actors that play different roles in a verifiable credential system. We'll start with a common example of how things work in the world today using physical credentials and centralized databases, and outline the roles that various entities play in the Verifiable Credential system."),(0,n.kt)("admonition",{title:"Example - Passport Issuance",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A government (the ",(0,n.kt)("em",{parentName:"p"},"Issuer"),") issues a passport asserting citizenship (the ",(0,n.kt)("em",{parentName:"p"},"Verifiable Credential"),") to Alice (the ",(0,n.kt)("em",{parentName:"p"},"Subject")," and ",(0,n.kt)("em",{parentName:"p"},"Holder"),"), and writes the information to a database (the ",(0,n.kt)("em",{parentName:"p"},"Verifiable Data Registry"),"). When crossing the border, Alice (the ",(0,n.kt)("em",{parentName:"p"},"Holder"),") presents her passport to a border agent (the ",(0,n.kt)("em",{parentName:"p"},"Verifier"),") who can verify that Alice (the ",(0,n.kt)("em",{parentName:"p"},"Subject"),") is indeed a citizen.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Subject:")," An entity about which claims are made \u2013 Alice (the ",(0,n.kt)("em",{parentName:"p"},"Subject"),") is a citizen of this country."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Holder:")," An entity which possesses verifiable credentials \u2013 Alice (the ",(0,n.kt)("em",{parentName:"p"},"Holder"),") possesses the passport (the ",(0,n.kt)("em",{parentName:"p"},"VC"),")."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Issuer:")," An entity which asserts claims about a subject \u2013 The governing body (the ",(0,n.kt)("em",{parentName:"p"},"Issuer"),"), which is trusted, issues Alice a passport."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Verifier:")," An entity which check's if the VC a holder presents is legitimate \u2013 The border agent (the ",(0,n.kt)("em",{parentName:"p"},"Verifier"),") trusts the government (the ",(0,n.kt)("em",{parentName:"p"},"Issuer"),") which issued Alice her passport, and validates that Alice (the ",(0,n.kt)("em",{parentName:"p"},"Subject"),") is a citizen."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"See the ",(0,n.kt)("a",{parentName:"p",href:"https://w3c.github.io/vc-data-model/"},"Verifiable Credentials Data Model 1.0 Specification")," for more information.")),(0,n.kt)("h3",{id:"verifiable-credentials-in-iota"},"Verifiable Credentials in IOTA"),(0,n.kt)("p",null,"In the IOTA Identity framework, instead of a physical passport being given to Alice with the passport information being written into a centralized database owned by the government, Alice receives a digital verifiable credential, and the information required for verification in the future is written to the Tangle."),(0,n.kt)("p",null,"At a high level, the creation and verification of a VC on IOTA works as follows:"),(0,n.kt)("p",null,"The first step is to create a verifiable credential which requires the subject (Alice) and issuer (the government) to have DIDs published to the Tangle, and a set of statements being asserted (that Alice has a passport). The issuer signs the credential with their private key and publishes the public key to the Tangle."),(0,n.kt)("p",null,"Once the issuer is confident that the credential satisfies its expectation (after validating the credential's properties), the credential is stored and transmitted to the subject in a secure manner (off-chain)."),(0,n.kt)("p",null,"Validation is performed by looking up the issuer's public key on the Tangle, the holder proving ownership of their DID to the verifier (evidence), and validating that the credential has indeed been signed by the issuing party."),(0,n.kt)("p",null,"The remaining chapters in this section explore creation, verification, and revocation of VCs in more detail."))}d.isMDXComponent=!0}}]);