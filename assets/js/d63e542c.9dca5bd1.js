"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2715],{75515:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(87462),r=(a(67294),a(3905)),s=a(69319);const o={description:"Official IOTA Wallet Library Software Rust examples.",image:"/img/logo/wallet_light.png",keywords:["account","event","Rust","transfer","backup","how to"]},l="Examples in Rust",i={unversionedId:"examples/rust",id:"examples/rust",title:"Examples in Rust",description:"Official IOTA Wallet Library Software Rust examples.",source:"@site/iota/external/wallet.rs/production/documentation/docs/examples/rust.mdx",sourceDirName:"examples",slug:"/examples/rust",permalink:"/wallet.rs/examples/rust",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/examples/rust.mdx",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Rust examples.",image:"/img/logo/wallet_light.png",keywords:["account","event","Rust","transfer","backup","how to"]},sidebar:"docs",previous:{title:"The Wallet Library in a Nutshell",permalink:"/wallet.rs/explanations/nutshell"},next:{title:"Examples in Node.js",permalink:"/wallet.rs/examples/nodejs"}},c={},u=[{value:"Backup and Restore Example",id:"backup-and-restore-example",level:2},{value:"Transfer Example:",id:"transfer-example",level:2},{value:"Events Example:",id:"events-example",level:2},{value:"Logger Example:",id:"logger-example",level:2}],p={toc:u};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples-in-rust"},"Examples in Rust"),(0,r.kt)("p",null,"You can see the examples in the library's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/dev/examples"},"examples directory"),". You can list all available examples by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example # lists the available examples\n")),(0,r.kt)("p",null,"To run an example, you can use the following command, replacing ",(0,r.kt)("em",{parentName:"p"},"transfer")," with the desired example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example transfer # execute the `transfer` example\n")),(0,r.kt)("h2",{id:"backup-and-restore-example"},"Backup and Restore Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an account manager and set a password:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let manager = AccountManager::builder().finish().await.unwrap();\n\nmanager.set_stronghold_password("password").await.unwrap();\nmanager.store_mnemonic(SignerType::Stronghold, None).await.unwrap();\n\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create your account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let client_options = ClientOptionsBuilder::new()\n    .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n    .build()\n    .unwrap();\nlet account_handle = manager\n    .create_account(client_options)?\n    .alias("alias")\n    .initialise()\n    .await?;\nlet id = account_handle.id().await;\n\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can secure your account in a backup file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// backup the stored accounts to ./backup/${backup_name}\nlet backup_path = manager.backup("./backup").await?;\n\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"You can import the backup later, or in another application using the following snippet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'manager.import_accounts(backup_path, "password").await?;\n\nlet imported_account_handle = manager.get_account(&id).await?;\n\nlet account = account_handle.read().await;\nlet imported_account = imported_account_handle.read().await;\n\n')),(0,r.kt)("p",null,"That's it! You can now backup and restore your account!"),(0,r.kt)("p",null,"You can see the full code for the example in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/develop/examples/backup_and_restore.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet.rs")," repository")),(0,r.kt)("h2",{id:"transfer-example"},"Transfer Example:"),(0,r.kt)("p",null,"You use the following example to generate an account and transfer funds. "),(0,r.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example transfer --release\n\nuse iota_wallet::{\n    account_manager::AccountManager,\n    address::{parse, OutputKind},\n    client::ClientOptionsBuilder,\n    message::Transfer,\n    signing::SignerType,\n};\nuse std::num::NonZeroU64;\n\n#[tokio::main]\nasync fn main() -> iota_wallet::Result<()> {\n    let manager = AccountManager::builder().finish().await.unwrap();\n    manager.set_stronghold_password("password").await.unwrap();\n\n    // Get account or create a new one\n    let account_alias = "alias";\n    let account = match manager.get_account(account_alias).await {\n        Ok(account) => account,\n        _ => {\n            // first we\'ll create an example account and store it\n            manager.store_mnemonic(SignerType::Stronghold, None).await.unwrap();\n            let client_options = ClientOptionsBuilder::new()\n                .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n                .build()\n                .unwrap();\n            manager\n                .create_account(client_options)?\n                .alias(account_alias)\n                .initialise()\n                .await?\n        }\n    };\n\n    let address = account.generate_address().await?;\n    println!(\n        "Send iotas from the faucet to {} and press enter after the transaction got confirmed",\n        address.address().to_bech32()\n    );\n    let mut input = String::new();\n    std::io::stdin().read_line(&mut input).unwrap();\n    println!("Sending transfer...");\n    let message = account\n        .transfer(\n            Transfer::builder(\n                parse("atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r")?,\n                NonZeroU64::new(10000000).unwrap(),\n                Some(OutputKind::SignatureLockedDustAllowance),\n            )\n            .finish(),\n        )\n        .await?;\n    println!("Message sent: {}", message.id());\n\n    Ok(())\n}\n'),(0,r.kt)("h2",{id:"events-example"},"Events Example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library is able to listen to several supported event. As soon as the event occurs, a provided callback will be triggered."),(0,r.kt)("p",null,"You can use the following example to fetch an existing ",(0,r.kt)("em",{parentName:"p"},"Account")," and listen to transaction events related to that ",(0,r.kt)("em",{parentName:"p"},"Account")," :"),(0,r.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example event --release\nuse iota_wallet::{\n    account::AccountHandle, account_manager::AccountManager, address::Address, client::ClientOptionsBuilder,\n    event::on_balance_change, signing::SignerType, Error, Result,\n};\nuse reqwest::Client;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let stronghold_password = "password".to_string();\n    let account_alias = "alice".to_string();\n    let node_url = "https://api.lb-1.h.chrysalis-devnet.iota.cafe/".to_string();\n    let faucet_url = "https://faucet.chrysalis-devnet.iota.cafe".to_string();\n\n    let account_manager: AccountManager = AccountManager::builder().finish().await?;\n    account_manager.set_stronghold_password(stronghold_password).await?;\n\n    // If no account was previously created, we create one. Otherwise, recover from local storage\n    // This ensures that the script can be run multiple times\n    let account: AccountHandle = match account_manager.get_account(&account_alias).await {\n        Ok(account) => account,\n        _ => {\n            account_manager.store_mnemonic(SignerType::Stronghold, None).await?;\n\n            let client_options = ClientOptionsBuilder::new().with_node(&node_url)?.build()?;\n            account_manager\n                .create_account(client_options)?\n                .alias(account_alias)\n                .initialise()\n                .await?\n        }\n    };\n\n    // Possible events are: on_balance_change, on_broadcast, on_confirmation_state_change, on_error,\n    // on_migration_progress, on_new_transaction, on_reattachment, on_stronghold_status_change,\n    // on_transfer_progress,\n    on_balance_change(move |event| {\n        println!("BalanceEvent: {:?}", event);\n        println!("Press enter to exit");\n    })\n    .await;\n\n    let address = account.generate_address().await?;\n    println!("Requesting funds from the faucet to {}", address.address().to_bech32());\n    get_funds(&address, &faucet_url).await?;\n\n    // Wait for event before exit\n    let mut exit = String::new();\n    std::io::stdin().read_line(&mut exit).unwrap();\n    Ok(())\n}\n\n// Requests a testnet funds transaction to our generated address\n// This API is rate limited: only a request every minute is allowed\nasync fn get_funds(address: &Address, faucet_url: &str) -> Result<()> {\n    let mut body = HashMap::new();\n    body.insert("address", address.address().to_bech32());\n\n    let faucet_response = Client::new()\n        .post(format!("{}/api/plugins/faucet/enqueue", faucet_url))\n        .json(&body)\n        .send()\n        .await\n        .map_err(|e| Error::ClientError(Box::new(e.into())))?;\n\n    println!(\n        "{}",\n        faucet_response\n            .text()\n            .await\n            .map_err(|e| Error::ClientError(Box::new(e.into())))?\n    );\n\n    println!("Requested funds");\n\n    Ok(())\n}\n'),(0,r.kt)("h2",{id:"logger-example"},"Logger Example:"),(0,r.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example logger --release\n\nuse iota_client::common::logger::{logger_init, LoggerConfig, LoggerOutputConfigBuilder};\nuse iota_wallet::{account_manager::AccountManager, client::ClientOptionsBuilder, signing::SignerType};\nuse log::LevelFilter;\nuse std::time::Instant;\n\n#[tokio::main]\nasync fn main() -> iota_wallet::Result<()> {\n    // Generates a wallet.log file with logs for debugging\n    let output_config = LoggerOutputConfigBuilder::new()\n        .name("wallet.log")\n        .level_filter(LevelFilter::Debug);\n    let config = LoggerConfig::build().with_output(output_config).finish();\n    logger_init(config).unwrap();\n\n    let manager = AccountManager::builder()\n        .with_storage("./backup", None)?\n        .with_skip_polling()\n        .finish()\n        .await?;\n    manager.set_stronghold_password("password").await?;\n\n    // Get account or create a new one\n    let account_alias = "logger";\n    let account = match manager.get_account(account_alias).await {\n        Ok(account) => account,\n        _ => {\n            // first we\'ll create an example account and store it\n            manager.store_mnemonic(SignerType::Stronghold, None).await.unwrap();\n            let client_options = ClientOptionsBuilder::new()\n                .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n                .build()\n                .unwrap();\n            manager\n                .create_account(client_options)?\n                .alias(account_alias)\n                .initialise()\n                .await?\n        }\n    };\n\n    let now = Instant::now();\n    account.sync().await.execute().await?;\n    println!("Syncing took: {:.2?}", now.elapsed());\n\n    println!("Balance: {:?}", account.balance().await?);\n\n    let addresses = account.list_unspent_addresses().await?;\n    println!("Addresses: {}", addresses.len());\n\n    let address = account.generate_address().await?;\n    println!("Generated a new address: {:?}", address);\n\n    Ok(())\n}\n'))}d.isMDXComponent=!0}}]);