"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42431:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),i=(n(67294),n(3905));const a={toc:[]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Password Storage",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Never store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},75945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(42431);const o={title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables"]},s=void 0,l={unversionedId:"getting_started/rust",id:"getting_started/rust",title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Rust library.",source:"@site/shimmer/external/iota.rs/documentation/docs/getting_started/rust.mdx",sourceDirName:"getting_started",slug:"/getting_started/rust",permalink:"/shimmer/iota.rs/getting_started/rust",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/shimmer/external/iota.rs/documentation/docs/getting_started/rust.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables"]},sidebar:"docs",previous:{title:"Getting Started with Python",permalink:"/shimmer/iota.rs/getting_started/python"},next:{title:"Run Code Examples",permalink:"/shimmer/iota.rs/how_tos/run_how_tos"}},u={},c=[{value:"Security",id:"security",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Include the Library in Your <code>Cargo.toml</code>",id:"include-the-library-in-your-cargotoml",level:2},{value:"Use the Library",id:"use-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)(a.ZP,{mdxType:"WarningPasswordStorage"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo"),"."),(0,i.kt)("li",{parentName:"ul"},"(for Linux only) ",(0,i.kt)("inlineCode",{parentName:"li"},"libudev"),". You can install it with ",(0,i.kt)("inlineCode",{parentName:"li"},"apt install libudev-dev"),".")),(0,i.kt)("h2",{id:"include-the-library-in-your-cargotoml"},"Include the Library in Your ",(0,i.kt)("inlineCode",{parentName:"h2"},"Cargo.toml")),(0,i.kt)("p",null,"The only thing you need to do to start using the library is to add it as dependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[dependencies]\niota-client = { git = "https://github.com/iotaledger/iota.rs", branch = "develop" }\ntokio = { version = "1.20.0", features = [ "full" ] }\n')),(0,i.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,i.kt)("p",null,"This example fetches node information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_client::{Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node("https://api.testnet.shimmer.network")?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Get node info.\n    let info = client.get_info().await?;\n\n    // Print node info.\n    println!("{info:#?}");\n\n    Ok(())\n}\n')),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/iota.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/examples"},"code examples"),"."))}p.isMDXComponent=!0}}]);