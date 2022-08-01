"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76158],{22927:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],l={title:"Revocation Options",sidebar_label:"Revocation Options"},s=void 0,p={unversionedId:"specs/didcomm/protocols/revocation-options",id:"specs/didcomm/protocols/revocation-options",title:"Revocation Options",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/specs/didcomm/protocols/revocation-options.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/revocation-options",permalink:"/identity.rs/0.5/specs/didcomm/protocols/revocation-options",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/specs/didcomm/protocols/revocation-options.md",tags:[],version:"current",frontMatter:{title:"Revocation Options",sidebar_label:"Revocation Options"},sidebar:"docs",previous:{title:"Revocation",permalink:"/identity.rs/0.5/specs/didcomm/protocols/revocation"},next:{title:"Post",permalink:"/identity.rs/0.5/specs/didcomm/protocols/post"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. revocation-options-request",id:"revocation-options-request",level:3},{value:"Structure",id:"structure",level:4},{value:"2. revocation-options",id:"revocation-options",level:3},{value:"Structure",id:"structure-1",level:4},{value:"Examples",id:"examples",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Unresolved Questions",id:"unresolved-questions",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,a.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Allows discovery of available ",(0,a.kt)("a",{parentName:"p",href:"./revocation#RevocationInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"RevocationInfo"))," types for use with the ",(0,a.kt)("a",{parentName:"p",href:"./revocation"},"revocation")," protocol."),(0,a.kt)("h3",{id:"relationships"},"Relationships"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./revocation"},"revocation"),": this protocol is used to discover the ",(0,a.kt)("inlineCode",{parentName:"li"},"revocationInfoType")," options available to a ",(0,a.kt)("a",{parentName:"li",href:"#roles"},"trusted-party")," for use in a ",(0,a.kt)("a",{parentName:"li",href:"./revocation#revocation-request"},"revocation-request"),".")),(0,a.kt)("h3",{id:"roles"},"Roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trusted-Party: requests supported methods of revocation."),(0,a.kt)("li",{parentName:"ul"},"Revoker: offers supported methods of revocation.")),(0,a.kt)("h3",{id:"interaction"},"Interaction"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"RevocationOptionsDiagram",src:o(81395).Z,width:"842",height:"583"})),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("sub",null,"For guidance on diagrams see the ",(0,a.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,a.kt)("h2",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"revocation-options-request"},"1. revocation-options-request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"iota/revocation-options/0.1/revocation-options-request")),(0,a.kt)("li",{parentName:"ul"},"Role: ",(0,a.kt)("a",{parentName:"li",href:"#roles"},"trusted-party"))),(0,a.kt)("p",null,"Empty message requesting all available ",(0,a.kt)("a",{parentName:"p",href:"./revocation#RevocationInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"RevocationInfo"))," types."),(0,a.kt)("h4",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,a.kt)("h3",{id:"revocation-options"},"2. revocation-options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"iota/revocation-options/0.1/revocation-options")),(0,a.kt)("li",{parentName:"ul"},"Role: ",(0,a.kt)("a",{parentName:"li",href:"#roles"},"revoker"))),(0,a.kt)("p",null,"Response including all available ",(0,a.kt)("a",{parentName:"p",href:"./revocation#RevocationInfo"},"RevocationInfo")," types supported by the ",(0,a.kt)("a",{parentName:"p",href:"#roles"},"revoker"),"."),(0,a.kt)("h4",{id:"structure-1"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoTypes": [string], // REQUIRED\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"revocationInfoTypes")),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of supported ",(0,a.kt)("a",{parentName:"td",href:"./revocation#RevocationInfo"},"RevocationInfo")," types.",(0,a.kt)("sup",{parentName:"td",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,a.kt)("p",null,(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The actual list of supported types may be vague or exact depending on how much the ",(0,a.kt)("a",{parentName:"p",href:"#roles"},"revoker")," trusts the requester. The supported types may also differ per requester."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Response including multiple ",(0,a.kt)("a",{parentName:"li",href:"./revocation#RevocationInfo"},"RevocationInfo")," types:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoTypes": ["KeyRevocation2021", "CredentialRevocation2021", "CredentialStatusRevocation2021"]\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Response including a single ",(0,a.kt)("a",{parentName:"li",href:"./revocation#RevocationInfo"},"RevocationInfo")," type:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "revocationInfoTypes": ["CredentialRevocation2021"]\n}\n')),(0,a.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,a.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,a.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,a.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.revocation-options.reject-request")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#revocation-options"},"revocation-options")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("a",{parentName:"td",href:"#roles"},"revoker")," rejects a request for any reason.")))),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"This section is non-normative."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Privacy"),": similar to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/9039564e143380a0085a788b6dfd20e63873b9ca/docs/spec-files/feature_discovery.md"},"discover features"),", this protocol could be used to fingerprint a party partially or reveal its capabilities. If privacy is a concern, implementors should take care to accept requests only from parties authorized to perform ",(0,a.kt)("a",{parentName:"li",href:"./revocation"},"revocation")," or return a subset/superset of its actual supported options.")),(0,a.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Should revocation-options include the credential status sub-types for ",(0,a.kt)("inlineCode",{parentName:"li"},"CredentialStatusRevocation2021"),"?")))}m.isMDXComponent=!0},81395:function(e,t,o){t.Z=o.p+"assets/images/revocation-options.drawio-d85dd12a34bbdfb3649eb3b9affc6816.svg"},3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(v,i(i({ref:t},c),{},{components:o})):n.createElement(v,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);