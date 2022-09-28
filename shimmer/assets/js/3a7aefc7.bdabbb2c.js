"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78163],{80850:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),s=(a(67294),a(3905));const o={toc:[]};function r(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}r.isMDXComponent=!0},99599:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),s=(a(67294),a(3905));const o={toc:[]};function r(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,s.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}r.isMDXComponent=!0},529:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),s=(a(67294),a(3905));const o={toc:[]};function r(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Dotenv",type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}r.isMDXComponent=!0},14465:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>_,default:()=>y,frontMatter:()=>f,metadata:()=>k,toc:()=>g});var n=a(87462),s=(a(67294),a(3905)),o=a(34259),r=a(18679),l=a(80850),u=a(69319);var i=a(529);const d={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.ZP,{mdxType:"DotEnvWarning"}),(0,s.kt)(u.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example get_funds --release\n// In this example we request funds from the faucet to our address\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_client::request_funds_from_faucet;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let address = account.addresses().await?;\n\n    let faucet_response =\n        request_funds_from_faucet(&env::var("FAUCET_URL").unwrap(), &address[0].address().to_bech32()).await?;\n\n    println!("{}", faucet_response);\n\n    Ok(())\n}\n'),(0,s.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,s.kt)("p",null,"Run the example by running the following command:"),(0,s.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example get_funds --release"))}c.isMDXComponent=!0;const m={toc:[]};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'{\n  "address": "tst1qpllaj0pyveqfkwxmnngz2c488hfdtmfrj3wfkgxtk4gtyrax0jax7rgxyj",\n  "waitingRequests": 1\n}\n')))}p.isMDXComponent=!0;var h=a(99599);const f={title:"Request Funds",description:"How to programmatically request testnet funds.",image:"/img/logo/iota_mark_light.png",keywords:["how to","faucet","testnet","test funds","nodejs","python","rust"]},_=void 0,k={unversionedId:"how_tos/accounts_and_addresses/request_funds",id:"how_tos/accounts_and_addresses/request_funds",title:"Request Funds",description:"How to programmatically request testnet funds.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/03_request_funds.mdx",sourceDirName:"how_tos/accounts_and_addresses",slug:"/how_tos/accounts_and_addresses/request_funds",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/request_funds",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/accounts_and_addresses/03_request_funds.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Request Funds",description:"How to programmatically request testnet funds.",image:"/img/logo/iota_mark_light.png",keywords:["how to","faucet","testnet","test funds","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Generate an Address",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/generate_address"},next:{title:"Check Balance",permalink:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/check_balance"}},w={},g=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],v={toc:g};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once you have ",(0,s.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created your account"),",\nyou can start using wallet.rs for value transactions. Since these examples target the testnet, you can request funds\nusing the ",(0,s.kt)("inlineCode",{parentName:"p"},"request_funds_from_faucet")," function."),(0,s.kt)(h.ZP,{mdxType:"TipFaucet"}),(0,s.kt)("h2",{id:"code-example"},"Code Example"),(0,s.kt)("p",null,"The following example will:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create an account manager."),(0,s.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,s.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,s.kt)("li",{parentName:"ol"},"Retrieve an ",(0,s.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/generate_address"},"address")," related to Alice's account."),(0,s.kt)("li",{parentName:"ol"},"Request funds to the ",(0,s.kt)("inlineCode",{parentName:"li"},"FAUCET_URL")," you defined in the ",(0,s.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,s.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(c,{mdxType:"RustCode"})),(0,s.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(l.ZP,{mdxType:"NodejsCode"})),(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(l.ZP,{mdxType:"PythonCode"}))),(0,s.kt)("h2",{id:"expected-output"},"Expected Output"),(0,s.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(p,{mdxType:"RustOutput"})),(0,s.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(l.ZP,{mdxType:"NodejsOutput"})),(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(l.ZP,{mdxType:"PythonOutput"}))))}y.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,r),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),s=a(67294),o=a(86010),r=a(51048),l=a(33609),u=a(1943),i=a(72957);const d="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:r,defaultValue:m,values:p,groupId:h,className:f}=e,_=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??_.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,l.l)(k,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=_.find((e=>e.props.default)))?void 0:t.props.value)??_[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,u.U)(),[x,b]=(0,s.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&k.some((t=>t.value===e))&&b(e)}const Z=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==x&&(N(t),b(n),null!=h&&y(h,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,s.cloneElement)(_.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},_.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,r.Z)();return s.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);