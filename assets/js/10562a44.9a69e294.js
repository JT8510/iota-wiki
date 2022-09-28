"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Post",sidebar_label:"Post"},i=void 0,s={unversionedId:"specs/didcomm/protocols/post",id:"specs/didcomm/protocols/post",title:"Post",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/iota/external/identity.rs/develop/documentation/docs/specs/didcomm/protocols/post.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/post",permalink:"/identity.rs/develop/specs/didcomm/protocols/post",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/iota/external/identity.rs/develop/documentation/docs/specs/didcomm/protocols/post.md",tags:[],version:"current",frontMatter:{title:"Post",sidebar_label:"Post"},sidebar:"docs",previous:{title:"Revocation Options",permalink:"/identity.rs/develop/specs/didcomm/protocols/revocation-options"},next:{title:"Termination",permalink:"/identity.rs/develop/specs/didcomm/protocols/termination"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. post",id:"post-message",level:3},{value:"Structure",id:"structure",level:4},{value:"Examples",id:"examples",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Related Work",id:"related-work",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Allows the sending of a single message with arbitrary data. Multiple ",(0,r.kt)("a",{parentName:"p",href:"#post-message"},"post")," messages MAY be chained together in the same ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#threads"},"DIDComm thread")," to achieve bi-directional communication."),(0,r.kt)("h3",{id:"relationships"},"Relationships"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./authentication"},"Authentication"),": can be used to authenticate both parties and establish ",(0,r.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption"),".")),(0,r.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instant messaging between two parties, where the text payload is displayed in a chat."),(0,r.kt)("li",{parentName:"ul"},"IoT devices transmit sensor data to be aggregated in a central hub for processing.")),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sender: sends the message."),(0,r.kt)("li",{parentName:"ul"},"Receiver: receives the message.")),(0,r.kt)("h3",{id:"interaction"},"Interaction"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PostDiagram",src:a(90816).Z,width:"842",height:"512"})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("sub",null,"For guidance on diagrams see the ",(0,r.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"post-message"},"1. post"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/post/0.1/post")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"sender"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"sender")," transmits a JSON ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," to the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"receiver"),". This MAY take advantage of ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," or be a ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message")," or both."),(0,r.kt)("h4",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": JSON // REQUIRED\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any valid ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc7159"},"JSON")," text."),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send a single string:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": "Hello, world"\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Send a single number:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": 42\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Send a JSON object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": {\n    "status_code": 100,\n    "status": "Okay",\n  }\n}\n')),(0,r.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,r.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,r.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,r.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.post.reject-post")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#post-message"},"post")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#roles"},"Receiver")," rejects a ",(0,r.kt)("a",{parentName:"td",href:"#post-message"},"post")," message for any reason.")))),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," JSON structure is unrestricted, a ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"sender")," cannot make assumptions about ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"receivers")," being able to understand the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," in any meaningful way unless both parties have a shared implementation or pre-negotiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," structure."),(0,r.kt)("p",null,"If complex and repeatable behaviour between parties is needed, implementors SHOULD define their own protocols with well-defined messages and interactions rather than using generic ",(0,r.kt)("a",{parentName:"p",href:"#post-message"},"post")," messages."),(0,r.kt)("h2",{id:"related-work"},"Related Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/blob/main/features/0095-basic-message/README.md"},"https://github.com/hyperledger/aries-rfcs/blob/main/features/0095-basic-message/README.md"))))}m.isMDXComponent=!0},90816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/post.drawio-75447f81a7eb494d41dd228ecf91baf5.svg"}}]);