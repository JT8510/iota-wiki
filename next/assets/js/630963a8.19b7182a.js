"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8549],{80958:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}i.isMDXComponent=!0},72907:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}i.isMDXComponent=!0},65866:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),o=(n(67294),n(3905));const s={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}i.isMDXComponent=!0},35320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>w,default:()=>N,frontMatter:()=>b,metadata:()=>g,toc:()=>x});var a=n(87462),o=(n(67294),n(3905)),s=n(34259),i=n(18679),r=n(69319);const l={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example will send native tokens\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        // Get a tokenId from your account balance after running example\n        // 22-mint-native-tokens.js\n        let tokenId =\n            '0x087ec7c0a543e60cfc92850ed053d3b323c0d7181e63b24c6ef24dd591814006950100000000';\n        // `100` hex encoded\n        let tokenAmount = \"0x64\"\n\n        // Send native tokens with a storage deposit return and an expiraiton of one day\n        // This means that the receiver has to claim the output in time (can be done with 21-claim-outputs.js),\n        // where the storage deposit of the output is returned, or if not, the sender gets full control back after one day passed.\n        const response = await account.sendNativeTokens([\n            {\n                //TODO: Replace with the address of your choice!\n                address: 'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0',\n                nativeTokens: [[tokenId, tokenAmount]],\n            }\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 24-send-native-tokens.js"))}c.isMDXComponent=!0;const d={toc:[]};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0xaf866f45f6418098b2bb3b8359f39ca55ecb57c666c65c40c4f982af365f37d6',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x1630e8423fe5eb11f7c6ad9afcb2198ac731fb2b10efa7e903f30fd79ddd5c14',\n  inclusionState: 'Pending',\n  timestamp: '1662659637387',\n  transactionId: '0xd4a81db105132dfa0c51a29eaecff1d796bf66d4be91be15a9864c88ee8f2c67',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x1630e8423fe5eb11f7c6ad9afcb2198ac731fb2b10efa7e903f30fd79ddd5c14\n")))}u.isMDXComponent=!0;var p=n(80958);var m=n(65866);const k={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example send_native_tokens --release\n// In this example we will send native tokens\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_wallet::{\n    account_manager::AccountManager,\n    iota_client::block::{\n        address::Address,\n        output::{unlock_condition::AddressUnlockCondition, BasicOutputBuilder, NativeToken, TokenId, UnlockCondition},\n    },\n    AddressNativeTokens, Result,\n};\nuse primitive_types::U256;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let bech32_address = "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string();\n    // Replace with a TokenId that is available in the account\n    let token_id = TokenId::from_str("0x08847bd287c912fadedb6bf38900bda9f2d377b75b2a0bece8738699f56ebca4130100000000")?;\n\n    let outputs = vec![AddressNativeTokens {\n        address: bech32_address.clone(),\n        native_tokens: vec![(token_id, U256::from(10))],\n        ..Default::default()\n    }];\n\n    let transaction = account.send_native_tokens(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    // Send native tokens together with the required storage deposit\n    let rent_structure = account.client().get_rent_structure()?;\n\n    let outputs = vec![\n        BasicOutputBuilder::new_with_minimum_storage_deposit(rent_structure)?\n            .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(\n                Address::try_from_bech32(bech32_address)?.1,\n            )))\n            .with_native_tokens(vec![NativeToken::new(token_id, U256::from(10))?])\n            .finish_output(account.client().get_token_supply()?)?,\n    ];\n\n    let transaction = account.send(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example send_native_tokens --release"))}h.isMDXComponent=!0;const v={toc:[]};function _(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x649987dd056ac5ad87adb5dbfa2648262856f2dfcd0ac7039e520fc6ccbc2b1f \nBlock sent: http://localhost:14265/api/core/v2/blocks/0x1e2126e848f10cf2c77d122f3bd003454267c1f46c20f4a3458b74f5639ce818\n")))}_.isMDXComponent=!0;var f=n(72907);const b={title:"Send Native Tokens",sidebar_label:"Send",description:"How to send native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","send native token","send","native token","nodejs","python","rust"]},w=void 0,g={unversionedId:"how_tos/native_tokens/send_native_token",id:"how_tos/native_tokens/send_native_token",title:"Send Native Tokens",description:"How to send native tokens using wallet.rs.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/02_send_native_token.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/send_native_token",permalink:"/next/wallet.rs/how_tos/native_tokens/send_native_token",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/02_send_native_token.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Send Native Tokens",sidebar_label:"Send",description:"How to send native tokens using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","send native token","send","native token","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Mint",permalink:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},next:{title:"Melt",permalink:"/next/wallet.rs/how_tos/native_tokens/melt_native_token"}},y={},x=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],T={toc:x};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you have ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},"minted")," a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/what_is_stardust/tokenization#native-tokens"},"native tokens"),",\nyou can easily send it by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send_native_tokens(addresses_native_tokens, options)")," function."),(0,o.kt)("p",null,"As with any output, you can set a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/what_is_stardust/storage_deposit"},"storage deposit")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/what_is_stardust/unlock_conditions"},"output unlock conditions"),".\nKeep in mind that if you set unlock conditions, whoever you send the native tokens to may need to\n",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/outputs_and_transactions/claim_outputs"},"claim them"),"."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(f.ZP,{mdxType:"ReplaceNativeTokenId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Define the type of native token and amount to send."),(0,o.kt)("li",{parentName:"ol"},"Send the native tokens calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_native_tokens(addresses_native_tokens, options)")," function.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"RustCode"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"NodejsCode"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(_,{mdxType:"RustOutput"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"}))))}N.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),s=n(86010),i=n(51048),r=n(33609),l=n(1943),c=n(72957);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:k,className:h}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(_,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!_.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:g}=(0,l.U)(),[y,x]=(0,o.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=k){const e=w[k];null!=e&&e!==y&&_.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=_[n].value;a!==y&&(N(t),x(a),null!=k&&g(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},_.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:C,onClick:C},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);