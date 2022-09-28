"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78010],{60680:(e,n,t)=>{t.d(n,{ZP:()=>d});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}d.isMDXComponent=!0},32286:(e,n,t)=>{t.d(n,{ZP:()=>d});var a=t(87462),o=(t(67294),t(3905));const c={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Iota.js",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also find this guide in the native ",(0,o.kt)("a",{href:t.exampleURL}," iota.js library"))))}d.isMDXComponent=!0},7563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>I,default:()=>S,frontMatter:()=>B,metadata:()=>N,toc:()=>E});var a=t(87462),o=(t(67294),t(3905)),c=t(34259),d=t(18679),l=t(69319);const i={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},'package node_api_core;\n\nimport org.iota.Client;\nimport org.iota.types.Block;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.ClientException;\nimport org.iota.types.ids.BlockId;\n\npublic class GetBlock {\n    public static void main(String[] args) throws ClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Set up a block ID for this example.\n        BlockId blockId = ExampleUtils.setUpBlockId(client);\n\n        // Get the block.\n        Block block = client.getBlock(blockId);\n\n        // Print the block.\n        System.out.println(block);\n    }\n}'))}r.isMDXComponent=!0;const s={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocolVersion": 2,\n  "parents": [\n    "0x452105dc88c4c4c927dcf9b3658a99d82331583cc84e84caf58669f0fcce4588",\n    "0xb8d06ee5dfcf512cc782facaaf54eaac77942ff529f69b8d129fb4009b38f68f",\n    "0xbd2792748becac463beba3e1ad952453dd225edd6d68ddd91bb41f9a88eb5a3e",\n    "0xbf22b0a595927f5c44f1991662f5c0a3702f38a851c0a37dd58f8977cda102d8"\n  ],\n  "payload": {\n    "type": 5,\n    "tag": "0x484f524e4554205370616d6d6572",\n    "data": "0x57652061726520616c6c206d616465206f662073746172647573742e0a436f756e743a20313332343432300a54696d657374616d703a20323032322d30392d30315431343a32393a32345a0a54697073656c656374696f6e3a20343032c2b573"\n  },\n  "nonce": "341022"\n}\n')))}b.isMDXComponent=!0;var f=t(60680);const p={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(f.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(l.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/07_get_block_data.js\n\n// In this example we will send a block and get the data and metadata for it\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        // Create block with no payload.\n        const blockIdAndBlock = await client.buildAndPostBlock();\n        console.log('Block:', blockIdAndBlock, '\\n');\n\n        // Get the metadata for the block.\n        const blockMetadata = await client.getBlockMetadata(blockIdAndBlock[0]);\n        console.log('Block metadata: ', blockMetadata, '\\n');\n\n        // Request the block by its id.\n        const blockData = await client.getBlock(blockIdAndBlock[0]);\n        console.log('Block data: ', blockData, '\\n');\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/07_get_block_data.ts"))}u.isMDXComponent=!0;const m={toc:[]};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Block: [\n  '0xb6133638cb4653f3d00585e114dc64db22ed2c9402f03ca5e7894e236673662e',\n  {\n    protocolVersion: 2,\n    parents: [\n      '0x03191e7d2cea9b2a9c0dc0ff4d43bfd3f95aad7c7d45d7ebd9f7825f0a108c26',\n      '0x7e914209c791fe529bcae19870c21b1ceab8b0e529ef884797395ae73d90c318',\n      '0xdbc196d4e46d0fb9c3a7aba24213840e09b107c1c7510974b19b83ef4ab93b75',\n      '0xfcae9899666214e0c831e63caaec4030d83380fd2d7194a2ae23abecfd987dc2'\n    ],\n    nonce: '1537228672809154665'\n  }\n] \n\nBlock metadata:  {\n  blockId: '0xb6133638cb4653f3d00585e114dc64db22ed2c9402f03ca5e7894e236673662e',\n  parents: [\n    '0x03191e7d2cea9b2a9c0dc0ff4d43bfd3f95aad7c7d45d7ebd9f7825f0a108c26',\n    '0x7e914209c791fe529bcae19870c21b1ceab8b0e529ef884797395ae73d90c318',\n    '0xdbc196d4e46d0fb9c3a7aba24213840e09b107c1c7510974b19b83ef4ab93b75',\n    '0xfcae9899666214e0c831e63caaec4030d83380fd2d7194a2ae23abecfd987dc2'\n  ],\n  isSolid: true,\n  shouldPromote: false,\n  shouldReattach: false\n} \n\nBlock data:  {\n  protocolVersion: 2,\n  parents: [\n    '0x03191e7d2cea9b2a9c0dc0ff4d43bfd3f95aad7c7d45d7ebd9f7825f0a108c26',\n    '0x7e914209c791fe529bcae19870c21b1ceab8b0e529ef884797395ae73d90c318',\n    '0xdbc196d4e46d0fb9c3a7aba24213840e09b107c1c7510974b19b83ef4ab93b75',\n    '0xfcae9899666214e0c831e63caaec4030d83380fd2d7194a2ae23abecfd987dc2'\n  ],\n  nonce: '1537228672809154665'\n} \n")))}k.isMDXComponent=!0;const x={toc:[]};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Create and post a block without payload\nblockIdAndBlock = client.build_and_post_block()\nprint(f'{blockIdAndBlock}')\n\n# Get the metadata for the block\nmetadata = client.get_block_metadata(blockIdAndBlock[0])\nprint(f'{metadata}')\n\n# Request the block by its id\nblock = client.get_block_data(blockIdAndBlock[0])\nprint(f'{block}')\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"binding/python/native/examples")," folder:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 07_get_block_data.py"))}h.isMDXComponent=!0;const g={toc:[]};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[\n  '0xd1cb2c76a7ebbab78336dc185e565920aa165590e9f8a1f4b94d9dc381f24a81',\n  {\n    'protocolVersion': 2,\n    'parents': [\n      '0x2cb6a30010b7b108262504545f2ff23da9c2fe7bf7e09f200140dd4edebcd0c9',\n      '0x4c145b3e311ea1a37b1601efb80f19ca3e3ee431dad9aeebfa18976b67646fac',\n      '0x5de1ab132cf00d590ca4bfd8f8c06fc576ac9dbd56d1fa4be5720f8583978533',\n      '0xc4838f69b7f5f7d4860341bd7483d19d814ce6df8dc60b72245d94d938970404'\n    ],\n    'nonce': '13835058055282164293'\n  }\n]\n{\n  'blockId': '0xd1cb2c76a7ebbab78336dc185e565920aa165590e9f8a1f4b94d9dc381f24a81',\n  'parents': [\n    '0x2cb6a30010b7b108262504545f2ff23da9c2fe7bf7e09f200140dd4edebcd0c9',\n    '0x4c145b3e311ea1a37b1601efb80f19ca3e3ee431dad9aeebfa18976b67646fac',\n    '0x5de1ab132cf00d590ca4bfd8f8c06fc576ac9dbd56d1fa4be5720f8583978533',\n    '0xc4838f69b7f5f7d4860341bd7483d19d814ce6df8dc60b72245d94d938970404'\n  ],\n  'isSolid': True,\n  'shouldPromote': False,\n  'shouldReattach': False\n}\n{\n  'protocolVersion': 2,\n  'parents': [\n    '0x2cb6a30010b7b108262504545f2ff23da9c2fe7bf7e09f200140dd4edebcd0c9',\n    '0x4c145b3e311ea1a37b1601efb80f19ca3e3ee431dad9aeebfa18976b67646fac',\n    '0x5de1ab132cf00d590ca4bfd8f8c06fc576ac9dbd56d1fa4be5720f8583978533',\n    '0xc4838f69b7f5f7d4860341bd7483d19d814ce6df8dc60b72245d94d938970404'\n  ],\n  'nonce': '13835058055282164293'\n}\n\n")))}y.isMDXComponent=!0;const v={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function _(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(f.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(l.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `GET /api/core/v2/blocks/{blockId}`.\n//! Returns block data as JSON by its identifier.\n//! Run: `cargo run --example node_api_core_get_block --release -- [NODE URL] [BLOCK ID]`.\n\nuse std::str::FromStr;\n\nuse iota_client::{block::BlockId, Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Take the block ID from command line argument or...\n    let block_id = if let Some(Ok(block_id)) = std::env::args().nth(2).map(|s| BlockId::from_str(&s)) {\n        block_id\n    } else {\n        // ... fetch one from the node.\n        client.get_tips().await?[0]\n    };\n\n    // Get the block.\n    let block = client.get_block(&block_id).await?;\n\n    println!("{block:#?}");\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_get_block --release -- https://api.testnet.shimmer.network 0xa9f11aba1e9965173dc21a47ec4fbfe5b953a6e60277857a3f7a5c1499e7c454"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can replace ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.testnet.shimmer.network")," with any node url."),(0,o.kt)("li",{parentName:"ul"},"You can replace ",(0,o.kt)("inlineCode",{parentName:"li"},"0x78680faa5ee34d77399ad7eff5fec9b9ceb99fea86822a16f57f49aa69771ee5")," with any other Block ID.")))}_.isMDXComponent=!0;const w={toc:[]};function T(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'Block {\n    protocol_version: 2,\n    parents: Parents(\n        BoxedSlicePrefix([\n            BlockId(0x2ec007718ebd1f8dd10be36c76820321fd24fd1739a52a7176f3314f1158ea44),\n            BlockId(0x536f8b2beba143278bda5074a311c827ef37c5756d80ea90372b2688b92cd5ae),\n            BlockId(0x6b6bcad97ba4f8d6f75aeea1dfc945425d2d6ead793af302dd5040590f5e409d),\n            BlockId(0xcff2436f2d65438c7351946fe793af3a8f059b485250d0ee2c5875d0aed71884),\n        ]),\n    ),\n    payload: OptionalPayload(\n        Some(\n            Transaction(\n                TransactionPayload {\n                    essence: Regular(\n                        RegularTransactionEssence {\n                            network_id: 8342982141227064571,\n                            inputs: BoxedSlicePrefix([\n                                Utxo(\n                                    UtxoInput(0xcb664cb88dcb4182df622fb82661e2d82e81ff95f3f04d5f3b071484a10fdc490100),\n                                ),\n                                Utxo(\n                                    UtxoInput(0xeede6413d25f1cb1fc68187cda339ec22e66e4fb945b8397c7251d46164a0c495900),\n                                ),\n                                Utxo(\n                                    UtxoInput(0x45a6247d6af3214828fcab1206f6b6c8e61a359fec821d48cb578b3f70a291a40000),\n                                ),\n                                Utxo(\n                                    UtxoInput(0x71638c38cf0be640f082edf9b1a9dc1ea898932762ede49b164f0894826009703b00),\n                                ),\n                            ]),\n                            inputs_commitment: InputsCommitment(0x10cb15a61c30e10e569f10513834d5fd0ee53049a77223ccf43a921ea22e1675),\n                            outputs: BoxedSlicePrefix([\n                                Alias(\n                                    AliasOutput {\n                                        amount: BoundedU64(\n                                            53700,\n                                        ),\n                                        native_tokens: NativeTokens(\n                                            BoxedSlicePrefix([]),\n                                        ),\n                                        alias_id: AliasId(0x0000000000000000000000000000000000000000000000000000000000000000),\n                                        state_index: 0,\n                                        state_metadata: BoxedSlicePrefix([]),\n                                        foundry_counter: 0,\n                                        unlock_conditions: UnlockConditions(\n                                            BoxedSlicePrefix([\n                                                StateControllerAddress(\n                                                    StateControllerAddressUnlockCondition(\n                                                        Ed25519(\n                                                            Ed25519Address(0x4f56285a1876d31b62f085c1bb35a85c0edc29889074631b81172991c3e4d6ff),\n                                                        ),\n                                                    ),\n                                                ),\n                                                GovernorAddress(\n                                                    GovernorAddressUnlockCondition(\n                                                        Ed25519(\n                                                            Ed25519Address(0x4f56285a1876d31b62f085c1bb35a85c0edc29889074631b81172991c3e4d6ff),\n                                                        ),\n                                                    ),\n                                                ),\n                                            ]),\n                                        ),\n                                        features: Features(\n                                            BoxedSlicePrefix([]),\n                                        ),\n                                        immutable_features: Features(\n                                            BoxedSlicePrefix([\n                                                Issuer(\n                                                    IssuerFeature(\n                                                        Ed25519(\n                                                            Ed25519Address(0x4f56285a1876d31b62f085c1bb35a85c0edc29889074631b81172991c3e4d6ff),\n                                                        ),\n                                                    ),\n                                                ),\n                                            ]),\n                                        ),\n                                    },\n                                ),\n                                Basic(\n                                    BasicOutput {\n                                        amount: BoundedU64(\n                                            1000047500,\n                                        ),\n                                        native_tokens: NativeTokens(\n                                            BoxedSlicePrefix([]),\n                                        ),\n                                        unlock_conditions: UnlockConditions(\n                                            BoxedSlicePrefix([\n                                                Address(\n                                                    AddressUnlockCondition(\n                                                        Ed25519(\n                                                            Ed25519Address(0x4f56285a1876d31b62f085c1bb35a85c0edc29889074631b81172991c3e4d6ff),\n                                                        ),\n                                                    ),\n                                                ),\n                                            ]),\n                                        ),\n                                        features: Features(\n                                            BoxedSlicePrefix([]),\n                                        ),\n                                    },\n                                ),\n                            ]),\n                            payload: OptionalPayload(\n                                Some(\n                                    TaggedData(\n                                        TaggedDataPayload {\n                                            tag: "0x484f524e4554205370616d6d65722053656d692d4c617a79",\n                                            data: "0x57652061726520616c6c206d616465206f662073746172647573742e0a436f756e743a203030353539320a54696d657374616d703a20323032322d30392d30315431343a32323a33345a0a54697073656c656374696f6e3a2031312e3832376d73",\n                                        },\n                                    ),\n                                ),\n                            ),\n                        },\n                    ),\n                    unlocks: Unlocks(\n                        BoxedSlicePrefix([\n                            Signature(\n                                SignatureUnlock(\n                                    Ed25519(\n                                        Ed25519Signature {\n                                            public_key: 0x229172a3883abbeb5ff7e680a6a0a0f5c31bf222d48fd1747d9d0ead24155a6b,\n                                            signature: 0x354174e8f7981aa05eca6d936cd2c7bf0eb9e2954b1f550e683959eb412194f8edab0f8536c370e576eb812da434496749221c3b96b40d6d2c9de4c06d97030f,\n                                        },\n                                    ),\n                                ),\n                            ),\n                            Reference(\n                                ReferenceUnlock(\n                                    BoundedU16(\n                                        0,\n                                    ),\n                                ),\n                            ),\n                            Reference(\n                                ReferenceUnlock(\n                                    BoundedU16(\n                                        0,\n                                    ),\n                                ),\n                            ),\n                            Reference(\n                                ReferenceUnlock(\n                                    BoundedU16(\n                                        0,\n                                    ),\n                                ),\n                            ),\n                        ]),\n                    ),\n                },\n            ),\n        ),\n    ),\n    nonce: 1785168781326821022,\n}\n')))}T.isMDXComponent=!0;var C=t(32286);const B={title:"Get a Block",description:"You can retrieve a block's data by calling the Client.get_block(&block_id) function.",keywords:["how to","block","get","block data","block metadata","get block by id","java","nodejs","python","rust"]},I=void 0,N={unversionedId:"how_tos/get_block",id:"how_tos/get_block",title:"Get a Block",description:"You can retrieve a block\\'s data by calling the Client.get_block(&block_id) function.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/09_get_block.mdx",sourceDirName:"how_tos",slug:"/how_tos/get_block",permalink:"/next/iota.rs/how_tos/get_block",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/09_get_block.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Get a Block",description:"You can retrieve a block\\'s data by calling the Client.get_block(&block_id) function.",keywords:["how to","block","get","block data","block metadata","get block by id","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Post a Data Block",permalink:"/next/iota.rs/how_tos/post_block"},next:{title:"Send a Transaction",permalink:"/next/iota.rs/how_tos/prepare_sign_transaction"}},D={},E=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],Z={toc:E};function S(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},Z,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can retrieve a block's data by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client.get_block(&block_id)")," function."),(0,o.kt)("p",null,"You can also retrieve a block's metadata by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client.get_block_metadata(&block_id)")," function."),(0,o.kt)("p",null,"The following code example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a block with no payload."),(0,o.kt)("li",{parentName:"ol"},"Retrieve and log the block's metadata."),(0,o.kt)("li",{parentName:"ol"},"Retrieve and log the block's data."),(0,o.kt)("li",{parentName:"ol"},"Get the block by its block ID.")),(0,o.kt)(C.ZP,{exampleURL:"https://wiki.iota.org/iotajs/how_tos/data",mdxType:"IotaJs"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(_,{mdxType:"RustCode"})),(0,o.kt)(d.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsCode"})),(0,o.kt)(d.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"PythonCode"})),(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(r,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(c.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(T,{mdxType:"RustOutput"})),(0,o.kt)(d.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"NodejsOutput"})),(0,o.kt)(d.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"PythonOutput"})),(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"JavaOutput"}))))}S.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(67294),o=t(86010);const c="tabItem_Ymn6";function d(e){let{children:n,hidden:t,className:d}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(c,d),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(87462),o=t(67294),c=t(86010),d=t(51048),l=t(33609),i=t(1943),r=t(72957);const s="tabList__CuJ",b="tabItem_LNqP";function f(e){var n;const{lazy:t,block:d,defaultValue:f,values:p,groupId:u,className:m}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),x=p??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,l.l)(x,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===f?f:f??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==g&&!x.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${x.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,i.U)(),[_,w]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=u){const e=y[u];null!=e&&e!==_&&x.some((n=>n.value===e))&&w(e)}const B=e=>{const n=e.currentTarget,t=T.indexOf(n),a=x[t].value;a!==_&&(C(n),w(a),null!=u&&v(u,String(a)))},I=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},m)},x.map((e=>{let{value:n,label:t,attributes:d}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:e=>T.push(e),onKeyDown:I,onFocus:B,onClick:B},d,{className:(0,c.Z)("tabs__item",b,null==d?void 0:d.className,{"tabs__item--active":_===n})}),t??n)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==_})))))}function p(e){const n=(0,d.Z)();return o.createElement(f,(0,a.Z)({key:String(n)},e))}}}]);