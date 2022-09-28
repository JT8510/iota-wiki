"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,g=c["".concat(d,".").concat(u)]||c[u]||l[u]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Problem Reports",sidebar_label:"Problem Reports"},i=void 0,s={unversionedId:"specs/didcomm/resources/problem-reports",id:"specs/didcomm/resources/problem-reports",title:"Problem Reports",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/iota/external/identity.rs/v0.6.0/documentation/docs/specs/didcomm/resources/problem-reports.md",sourceDirName:"specs/didcomm/resources",slug:"/specs/didcomm/resources/problem-reports",permalink:"/identity.rs/specs/didcomm/resources/problem-reports",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/iota/external/identity.rs/v0.6.0/documentation/docs/specs/didcomm/resources/problem-reports.md",tags:[],version:"current",frontMatter:{title:"Problem Reports",sidebar_label:"Problem Reports"},sidebar:"docs",previous:{title:"CredentialInfo",permalink:"/identity.rs/specs/didcomm/resources/credential-info"},next:{title:"Changelog",permalink:"/identity.rs/specs/didcomm/CHANGELOG"}},d={},p=[{value:"Example",id:"example",level:2},{value:"IOTA Problem Codes",id:"iota-problem-codes",level:2},{value:"Unresolved Questions",id:"unresolved-questions",level:2},{value:"Further Reading",id:"further-reading",level:2}],m={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: ",(0,a.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,a.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#problem-reports"},"Problem reports")," are a standard ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/"},"DIDComm")," feature for reporting errors or warnings between parties. Using this mechanism is not a general requirement but it is a best practice for relaying informative errors and may improve human experience."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A problem report is a standard DIDComm message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https://didcomm.org/report-problem/2.0/problem-report",\n  "id": "7c9de639-c51c-4d60-ab95-103fa613c805",\n  "pthid": "1e513ad4-48c9-444e-9e7e-5b8b45c5e325",\n  "body": {\n    "code": "e.p.xfer.cant-use-endpoint",\n    "comment": "Unable to use the {1} endpoint for {2}.",\n    "args": [\n      "https://agents.r.us/inbox",\n      "did:sov:C805sNYhMrjHiqZDTUASHg"\n    ],\n    "escalate_to": "mailto:admin@foo.org"\n  }\n}\n')),(0,a.kt)("p",null,"Note that problem reports may still use ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," or even be ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm messages"),"."),(0,a.kt)("h2",{id:"iota-problem-codes"},"IOTA Problem Codes"),(0,a.kt)("p",null,"We follow the notation for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/84e5a7c66c87440d39e93df81e4440855273f987/docs/spec-files/problems.md#problem-codes"},"problem codes defined by the DIDComm specification"),". In general, we use the error sorter ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," and protocol scope ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," to indicate that problem reports result in the abandonment of a protocol. "),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/decentralized-identity/didcomm-messaging/blob/84e5a7c66c87440d39e93df81e4440855273f987/docs/spec-files/problems.md#descriptors"},"problem report descriptors in the DIDComm specification"),", we define the following non-exhaustive list of general problem report codes that may be sent during the course of any protocol:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.invalid-message")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The message is malformed or fails field constraints validation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.unsupported-message")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The message type is unrecognised or unsupported by the recipient.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.invalid-state")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The recipient is unable to handle the type of message in its current state. Typically when an unexpected message is received in the middle of a protocol on the same thread.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-authenticated")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The sender is required to authenticate to perform the requested action.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-authorised")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The sender is authenticated but lacks sufficient permissions to perform the requested action.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-sender-authenticated")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The recipient requires the message to use ",(0,a.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-encrypted")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The recipient requires the message to use ",(0,a.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#anonymous-encryption"},"anonymous encryption"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.not-signed")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The recipient requires a ",(0,a.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.msg.trust.crypto")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any general cryptography-related error. E.g. the signature in a message payload or on a ",(0,a.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," fails validation, or ",(0,a.kt)("a",{parentName:"td",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," fails.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"e.p.req.time")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The party has timed out waiting for a response.")))),(0,a.kt)("p",null,"These messages may be raised during or between protocols to inform the other party that something went wrong. A problem report with the error sorter ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," and protocol scope ",(0,a.kt)("inlineCode",{parentName:"p"},"p")," terminates the protocol on the current thread and MAY be followed by a connection ",(0,a.kt)("a",{parentName:"p",href:"../protocols/termination"},"termination"),"."),(0,a.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Should we support the message scope ",(0,a.kt)("inlineCode",{parentName:"li"},"m")," to allow resending / retrying individual messages?")),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#problem-reports"},"DIDComm Problem Reports"))))}l.isMDXComponent=!0}}]);