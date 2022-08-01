"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13057],{21293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"IOTA DIDComm Specification",sidebar_label:"Overview"},c=void 0,l={unversionedId:"specs/didcomm/overview",id:"specs/didcomm/overview",title:"IOTA DIDComm Specification",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/content/build/identity.rs/develop/documentation/docs/specs/didcomm/overview.md",sourceDirName:"specs/didcomm",slug:"/specs/didcomm/overview",permalink:"/identity.rs/develop/specs/didcomm/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/specs/didcomm/overview.md",tags:[],version:"current",frontMatter:{title:"IOTA DIDComm Specification",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"DID Method",permalink:"/identity.rs/develop/specs/did/iota_did_method_spec"},next:{title:"Connection",permalink:"/identity.rs/develop/specs/didcomm/protocols/connection"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Conformance",id:"conformance",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Protocols",id:"protocols",level:2},{value:"External Protocols",id:"external-protocols",level:2},{value:"Resources",id:"resources",level:2},{value:"Diagrams",id:"diagrams",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Future Work",id:"future-work",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,o.kt)("li",{parentName:"ul"},"Status: ",(0,o.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,o.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The IOTA DIDComm Specification standardizes how Self-Sovereign Identities (SSIs) can interact with each other and exchange information. Any applications that implement this standard will naturally be interoperable with each other. This reduces fragmentation in the ecosystem and therefore it is highly recommended to use this for any application built on top of the IOTA Identity framework. The specification defines several ",(0,o.kt)("a",{parentName:"p",href:"#protocols"},"protocols"),", that can be used for common interactions like ",(0,o.kt)("a",{parentName:"p",href:"./protocols/issuance"},"issuing")," and ",(0,o.kt)("a",{parentName:"p",href:"./protocols/presentation"},"presenting")," verifiable credentials as well as supporting functions, such as ",(0,o.kt)("a",{parentName:"p",href:"./protocols/connection"},"connection")," establishment and ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/develop/specs/didcomm/protocols/authentication"},"authentication"),". Cross-cutting concerns like ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/develop/specs/didcomm/resources/problem-reports"},"error handling")," and ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/develop/specs/didcomm/resources/credential-info"},"credential negotiation")," are discussed in the ",(0,o.kt)("a",{parentName:"p",href:"#resources"},"resources")," section."),(0,o.kt)("p",null,"The IOTA DIDComm Specification builds on the ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm Messaging Specification")," developed by the ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"Decentralized Identity Foundation (DIF)")," and utilises ",(0,o.kt)("a",{parentName:"p",href:"#external-protocols"},"external protocols")," from the messaging specification for well-established interactions like feature discovery."),(0,o.kt)("p",null,"This specification is meant to be a complete solution for common use cases and therefore contains protocols for common SSI interactions. It is possible to extend the specification with custom protocols and custom methods in existing protocols to support application-specific requirements. "),(0,o.kt)("p",null,"The specification itself is technology agnostic. Much like the ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm Messaging Specification")," there are no restrictions on transport layers and a concrete implementation can be done with many different technologies."),(0,o.kt)("h2",{id:"conformance"},"Conformance"),(0,o.kt)("p",null,'The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL\nNOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and\n"OPTIONAL" in this specification are to be interpreted as described in\n',(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/info/bcp14"},"BCP 14"),(0,o.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2119.txt"},"[RFC 2119]"),"."),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Protocols follow ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning 2.0")," conventions."),(0,o.kt)("h2",{id:"protocols"},"Protocols"),(0,o.kt)("p",null,"The specification defines several ",(0,o.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#protocols"},"DIDComm protocols")," that can be used for common SSI interactions:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/connection"},"Connection")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Establishes a ",(0,o.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#connections"},"DIDComm connection")," between two parties.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/authentication"},"Authentication")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows two parties to mutually authenticate, verifying the DID of each other.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/presentation"},"Presentation")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows presentation of verifiable credentials that are issued to a holder and uniquely presented to a third-party verifier.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/issuance"},"Issuance")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows the exchange of a verifiable credential between an issuer and a holder.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/signing"},"Signing")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows a trusted-party to request the signing of an unsigned verifiable credential by an issuer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/revocation"},"Revocation")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows to request revocation of an issued credential, either by the holder or a trusted-party.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/revocation-options"},"Revocation Options")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows discovery of available ",(0,o.kt)("a",{parentName:"td",href:"./protocols/revocation#RevocationInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"RevocationInfo"))," types for use with the ",(0,o.kt)("a",{parentName:"td",href:"./protocols/revocation"},"revocation")," protocol.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/post"},"Post")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allows the sending of a single message with arbitrary data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/protocols/termination"},"Termination")),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Indicates the graceful termination of a connection.")))),(0,o.kt)("h2",{id:"external-protocols"},"External Protocols"),(0,o.kt)("p",null,"In addition to the protocols defined in this specification, we RECOMMEND implementors use the following well-known protocols:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/ef997c9d3cd1cd24eb182ffa2930a095d3b856a9/docs/spec-files/feature_discovery.md"},"Discover Features")),(0,o.kt)("td",{parentName:"tr",align:"center"},"2.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Describes how agents can query one another to discover which features they support, and to what extent.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/9039564e143380a0085a788b6dfd20e63873b9ca/docs/spec-files/trustping.md"},"Trust Ping")),(0,o.kt)("td",{parentName:"tr",align:"center"},"1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A standard way for agents to test connectivity, responsiveness, and security of a DIDComm channel.")))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Additionally, general guidelines on concerns across protocols are provided:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/resources/problem-reports"},"Problem Reports")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Definitions of expected problem reports and guidance on global handling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/identity.rs/develop/specs/didcomm/resources/credential-info"},"Credential Info")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Definition of methods to negotiate a specific kind of verifiable credential.")))),(0,o.kt)("h2",{id:"diagrams"},"Diagrams"),(0,o.kt)("p",null,"The diagrams in this specification follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.omg.org/spec/BPMN/2.0/"},"BPMN 2.0")," notation. The diagrams are created with ",(0,o.kt)("a",{parentName:"p",href:"https://www.diagrams.net"},"https://www.diagrams.net"),", the source is embedded in the ",(0,o.kt)("inlineCode",{parentName:"p"},".svg")," files."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./CHANGELOG"},"CHANGELOG"),"."),(0,o.kt)("h2",{id:"future-work"},"Future Work"),(0,o.kt)("p",null,"\u25c8 If necessary, discuss ways for some agent to request the start of an interaction. This has narrow use cases, but might be interesting in the long run.\n\u25c8 Add section or article on anonymous encryption, sender authenticated encryption, signed messages. Include a table of comparisons with guarantees? E.g. authentication, eavesdropping protection, integrity etc."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,u=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);