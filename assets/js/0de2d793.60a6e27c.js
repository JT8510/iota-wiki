"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[32113],{72541:function(o,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return w},toc:function(){return d}});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),i=t(69319),s=["components"],c={description:"Learn how to perform proof of work operations with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","pow","proof of work","node pow","neon pow","wasm pow","local pow"]},l="Perform Proof of Work",w={unversionedId:"how_tos/pow",id:"how_tos/pow",title:"Perform Proof of Work",description:"Learn how to perform proof of work operations with the iota.js client library.",source:"@site/content/build/iota.js/develop/documentation/docs/how_tos/pow.mdx",sourceDirName:"how_tos",slug:"/how_tos/pow",permalink:"/iotajs/how_tos/pow",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/how_tos/pow.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to perform proof of work operations with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","pow","proof of work","node pow","neon pow","wasm pow","local pow"]},sidebar:"docs",previous:{title:"Send a Transaction",permalink:"/iotajs/how_tos/transaction"},next:{title:"Display Client Data in a Browser",permalink:"/iotajs/how_tos/browser"}},p={},d=[{value:"Example Code",id:"example-code",level:2},{value:"Expected Output",id:"expected-output",level:3}],m={toc:d};function g(o){var e=o.components,t=(0,r.Z)(o,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"perform-proof-of-work"},"Perform Proof of Work"),(0,a.kt)("p",null,"You can perform Proof of Work(POW) operations using the following functions :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iotajs/references/pow-neon/classes/NeonPowProvider#pow"},"NeonPowProvider.pow(message, targetScore)"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/iotajs/references/pow-node/classes/NodePowProvider#pow"},"NodePowProvider.pow(message, targetScore)"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../references/pow-wasm/classes/WasmPowProvider#pow"},"WasmPowProvider.pow(message, targetScore)"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../references/client/classes/LocalPowProvider#pow"},"LocalPow.pow(message, targetScore)"),".")),(0,a.kt)("p",null,"You will need to provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"block")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"targetScore")," to any of these functions.  If successful, they will return nonce."),(0,a.kt)("h2",{id:"example-code"},"Example Code"),(0,a.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},'import * as bigInt from "big-integer";\nimport { BigIntHelper } from "@iota/util.js";\nimport { IPowProvider, LocalPowProvider, PowHelper } from "@iota/iota.js";\nimport { NodePowProvider } from "@iota/pow-node.js";\nimport { WasmPowProvider } from "@iota/pow-wasm.js";\nimport { NeonPowProvider } from "@iota/pow-neon.js";\n\nasync function run() {\n    const dataLength = 500;\n    const targetScore = 100;\n    const iterations = 1;\n\n    await doPow("Neon Pow", dataLength, targetScore, iterations, new NeonPowProvider(1));\n    await doPow("Node Pow", dataLength, targetScore, iterations, new NodePowProvider(1));\n    await doPow("Wasm Pow", dataLength, targetScore, iterations, new WasmPowProvider(1));\n    await doPow("Local Pow", dataLength, targetScore, iterations, new LocalPowProvider());\n}\n\nasync function doPow(\n    name: string,\n    dataLength: number,\n    targetScore: number,\n    iterations: number,\n    powProvider: IPowProvider\n) {\n    console.log(name);\n    console.log("Target Score", targetScore);\n    console.log("Data Length", dataLength);\n    console.log("Iterations", iterations);\n\n    let totalTime = 0;\n    for (let i = 0; i < iterations; i++) {\n        const data = new Uint8Array(dataLength).fill(1);\n        BigIntHelper.write8(bigInt(0), data, data.length - 8);\n        console.log("\\tIteration", i + 1);\n        const startTime = Date.now();\n        const nonce = await powProvider.pow(data, targetScore);\n        console.log("\\tNonce", nonce);\n        BigIntHelper.write8(bigInt(nonce), data, data.length - 8);\n        const score = PowHelper.score(data);\n        console.log("\\tScore", score);\n        totalTime += Date.now() - startTime;\n    }\n\n    console.log("Average Time (s)", (totalTime / iterations / 1000).toFixed(2));\n    console.log();\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch(err => console.error(err));\n'),(0,a.kt)("h3",{id:"expected-output"},"Expected Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"\nNeon Pow\nTarget Score 100\nData Length 500\nIterations 1\n        Iteration 1\n        Nonce 173109\n        Score 118.098\nAverage Time (s) 0.62\n\nNode Pow\nTarget Score 100\nData Length 500\nIterations 1\n        Iteration 1\n        Nonce 173109\n        Score 118.098\nAverage Time (s) 27.11\n\nWasm Pow\nTarget Score 100\nData Length 500\nIterations 1\n        Iteration 1\n        Nonce 173109\n        Score 118.098\nAverage Time (s) 25.42\n\nLocal Pow\nTarget Score 100\nData Length 500\nIterations 1\n        Iteration 1\n        Nonce 173109\n        Score 118.098\nAverage Time (s) 24.54\n\nDone\n")))}g.isMDXComponent=!0}}]);