"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78481],{80850:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}s.isMDXComponent=!0},99599:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}s.isMDXComponent=!0},529:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}s.isMDXComponent=!0},27261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>N,frontMatter:()=>w,metadata:()=>g,toc:()=>x});var a=n(87462),o=(n(67294),n(3905)),i=n(34259),s=n(18679),r=n(69319);const l={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example mints native tokens\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // First create an alias output, this needs to be done only once, because an alias can have many foundry outputs.\n        let tx = await account.createAliasOutput()\n        console.log('Transaction ID: ', tx.transactionId);\n\n        // Wait for transaction inclusion\n        await new Promise(resolve => setTimeout(resolve, 5000));\n\n        await account.sync();\n\n        // If we omit the AccountAddress field the first address of the account is used by default\n        const nativeTokenOptions = {\n            // Hello in bytes\n            foundryMetadata: '0x48656c6c6f',\n            circulatingSupply: '0x64',\n            maximumSupply: '0x64',\n        };\n\n        let { transaction } = await account.mintNativeToken(\n            nativeTokenOptions,\n        );\n        console.log('Transaction ID: ', transaction.transactionId);\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 22-mint-native-tokens.js"))}c.isMDXComponent=!0;const u={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Transaction ID:  0x4cd9cca67165b3ae5160e5b3bad5a677d93140e3692c378ed5c661160e37ce09\n")))}p.isMDXComponent=!0;var m=n(80850);var d=n(529);const k={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example mint_native_token --release\n// In this example we will mint a native token\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, NativeTokenOptions, Result, U256};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    account.sync(None).await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // First create an alias output, this needs to be done only once, because an alias can have many foundry outputs\n    let transaction = account.create_alias_output(None, None).await?;\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    // Wait for transaction to get included\n    account\n        .retry_until_included(&transaction.block_id.expect("no block created yet"), None, None)\n        .await?;\n\n    account.sync(None).await?;\n\n    let native_token_options = NativeTokenOptions {\n        alias_id: None,\n        circulating_supply: U256::from(100),\n        maximum_supply: U256::from(100),\n        foundry_metadata: None,\n    };\n\n    let transaction = account.mint_native_token(native_token_options, None).await?;\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.transaction.block_id.expect("no block created yet")\n    );\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example mint_native_token --release"))}h.isMDXComponent=!0;const v={toc:[]};function _(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0xaa9737fb4007e8b0f4c181d6923b0e3547ae178c23c25233985bb22f61c84de7 \nBlock sent: http://localhost:14265/api/core/v2/blocks/0x807dbdde107008dcc9acae29a0e32c261590bef13e5f5d8d3bb60949e633abd8\n")))}_.isMDXComponent=!0;var y=n(99599);const w={title:"Mint Native Tokens",sidebar_label:"Mint",description:"How to mint native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","mint native tokens","mint","nodejs","python","rust"]},b=void 0,g={unversionedId:"how_tos/native_tokens/mint_native_token",id:"how_tos/native_tokens/mint_native_token",title:"Mint Native Tokens",description:"How to mint native tokens using wallet.rs.",source:"@site/shimmer/external/wallet.rs/documentation/docs/how_tos/native_tokens/01_mint_native_token.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/mint_native_token",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/mint_native_token",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/how_tos/native_tokens/01_mint_native_token.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Mint Native Tokens",sidebar_label:"Mint",description:"How to mint native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","mint native tokens","mint","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Destroy an Alias Output",permalink:"/shimmer/wallet.rs/how_tos/outputs_and_transactions/destroy_alias_output"},next:{title:"Send",permalink:"/shimmer/wallet.rs/how_tos/native_tokens/send_native_token"}},f={},x=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],T={toc:x};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use a node running the stardust update to mint\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/what_is_stardust/tokenization#native-tokens"},"native tokens"),".\nTo do so, you will only need to ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/request_funds"},"add some funds to your account"),", define\nthe native token's options and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.mint_native_token(native_token_options, options)")," function."),(0,o.kt)(y.ZP,{mdxType:"TipFaucet"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's which was ",(0,o.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"NativeTokenOptions"),"."),(0,o.kt)("li",{parentName:"ol"},"Mint the native token by calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.mint_native_token(native_token_options, options)")," function.")),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"RustCode"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"NodejsCode"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(_,{mdxType:"RustOutput"})),(0,o.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"NodejsOutput"})),(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(m.ZP,{mdxType:"PythonOutput"}))))}N.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),i=n(86010),s=n(51048),r=n(33609),l=n(1943),c=n(72957);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:k,className:h}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,r.l)(_,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==w&&!_.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,l.U)(),[f,x]=(0,o.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=k){const e=b[k];null!=e&&e!==f&&_.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=T.indexOf(t),a=_[n].value;a!==f&&(N(t),x(a),null!=k&&g(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},_.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:Z,onClick:Z},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":f===t})}),n??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function d(e){const t=(0,s.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);