"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71774],{72211:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),s=t(69319),a=t(43993),d=["components"],c={title:"How To Get Node Info"},l=void 0,p={unversionedId:"libraries/nodejs/how_to/get_node_info",id:"libraries/nodejs/how_to/get_node_info",title:"How To Get Node Info",description:"Since the examples are written in TypeScript, they first need to be compiled to JavaScript, before you can run them.",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/0_get_node_info.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/get_node_info",permalink:"/iota.rs/develop/libraries/nodejs/how_to/get_node_info",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/0_get_node_info.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How To Get Node Info"},sidebar:"docs",previous:{title:"Getting Started with Node.js",permalink:"/iota.rs/develop/libraries/nodejs/getting_started"},next:{title:"How To Build An Output",permalink:"/iota.rs/develop/libraries/nodejs/how_to/build_output"}},u={},m=[],f={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," are written in TypeScript, they first need to be compiled to JavaScript, before you can run them.\nTo do this, run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," in the examples folder or use ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc exampleName.js")," to compile a specific example."),(0,i.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/00_get_info.js\n\n// In this example we will get information about the node\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n        localPow: true,\n    });\n\n    try {\n        const nodeInfo = await client.getInfo();\n        console.log('Node info: ', nodeInfo);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n\n// Example output:\n// Node info:  {\n//     nodeInfo: {\n//       name: 'HORNET',\n//       version: '2.0.0-alpha.25',\n//       status: {\n//         isHealthy: true,\n//         latestMilestone: [Object],\n//         confirmedMilestone: [Object],\n//         pruningIndex: 0\n//       },\n//       supportedProtocolVersions: [ 2 ],\n//       protocol: {\n//         version: 2,\n//         networkName: 'dummy-1',\n//         bech32Hrp: 'rms',\n//         minPowScore: 1500,\n//         rentStructure: [Object],\n//         tokenSupply: '1450896407249092'\n//       },\n//       pendingProtocolParameters: [],\n//       baseToken: {\n//         name: 'Shimmer',\n//         tickerSymbol: 'SMR',\n//         unit: 'SMR',\n//         subunit: 'glow',\n//         decimals: 6,\n//         useMetricPrefix: false\n//       },\n//       metrics: {\n//         blocksPerSecond: 1.2,\n//         referencedBlocksPerSecond: 1.2,\n//         referencedRate: 100\n//       },\n//       features: []\n//     },\n//     url: 'https://api.testnet.shimmer.network'\n// }\n"),(0,i.kt)(a.ZP,{mdxType:"MoreExamples"}))}h.isMDXComponent=!0},43993:function(e,n,t){t.d(n,{ZP:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],a={toc:[]};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"More advanced examples can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}d.isMDXComponent=!0}}]);