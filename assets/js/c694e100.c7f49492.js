"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61148:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},s="Send Shimmer Tokens with Javascript",i={type:"mdx",permalink:"/tutorials/send-shimmer-tokens-with-javascript",source:"@site/iota/tutorials/single-page-tutorials/send-shimmer-tokens-with-javascript.md",title:"Send Shimmer Tokens with Javascript",description:"In this tutorial you will learn how to send Shimmer Tokens in the testnet.",frontMatter:{}},l=[{value:"Set Up Your Development Environment.",id:"set-up-your-development-environment",level:2},{value:"Create Your First Address",id:"create-your-first-address",level:2},{value:"Get Some Testnet Tokens.",id:"get-some-testnet-tokens",level:2},{value:"Read Your Balance",id:"read-your-balance",level:2},{value:"Send Shimmer Tokens.",id:"send-shimmer-tokens",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-shimmer-tokens-with-javascript"},"Send Shimmer Tokens with Javascript"),(0,o.kt)("p",null,"In this tutorial you will learn how to send Shimmer Tokens in the testnet."),(0,o.kt)("p",null,"This tutorial assumes that you have ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," installed."),(0,o.kt)("h2",{id:"set-up-your-development-environment"},"Set Up Your Development Environment."),(0,o.kt)("p",null,"First, you should create a new folder for the tutorial. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir send-shimmer-tutorial\ncd send-shimmer-tutorial\n")),(0,o.kt)("p",null,"Now you need to run the Node.js initializer to configure the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n")),(0,o.kt)("p",null,"Next, you must install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs"},"iota.js client library"),". Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@next")," version to use the Shimmer network. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @iota/client@next\n")),(0,o.kt)("h2",{id:"create-your-first-address"},"Create Your First Address"),(0,o.kt)("p",null,"Next, you should generate an address where you can deposit some Shimmer testnet Tokens."),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"get_address.js")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," directory and add the content below. On Linux-based machines, you can use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"touch")," to create a new file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir scripts\ntouch scripts/get_address.js\n")),(0,o.kt)("p",null,"Add the following content to the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_address.js")," file you just created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst {\n  Client,\n  CoinType,\n  initLogger,\n  SHIMMER_TESTNET_BECH32_HRP,\n} = require("@iota/client");\n\n\nasync function run() {\n\n  const client = new Client({\n    nodes: [\'https://api.testnet.shimmer.network\'],\n  });\n\n  // You should only generate mnemonics for development or testing\n  const mnemonic = await client.generateMnemonic();\n  console.log(\'Mnemonic: \' + mnemonic);\n\n  const secretManager = {\n    Mnemonic: mnemonic,\n  };\n\n  // Generate addresses by providing all inputs, that way it can also be done offline without a node.\n  const offlineGeneratedAddresses = await client.generateAddresses(\n    secretManager,\n    {\n      coinType: CoinType.Shimmer,\n      accountIndex: 0,\n      range: {\n        start: 0,\n        end: 1,\n      },\n      internal: false,\n      // Generating addresses with client.generateAddresses(secretManager, {}), will by default get the bech32_hrp (Bech32\n      // human readable part) from the nodeinfo, generating it "offline" requires setting it in the generateAddressesOptions\n      bech32Hrp: SHIMMER_TESTNET_BECH32_HRP,\n    }\n  );\n  console.log(\n    "Generated public address:",\n    offlineGeneratedAddresses[0]\n  );\n}\n\nrun().then(() => process.exit());\n\n')),(0,o.kt)("p",null,"This script will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," and connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer testnet API"),"."),(0,o.kt)("li",{parentName:"ol"},"Generate a mnemonic."),(0,o.kt)("li",{parentName:"ol"},"Generate an address.")),(0,o.kt)("p",null,"If you run this script, you should see your mnemonic and Shimmer address in your console output. You can run it using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/get_address.js\n")),(0,o.kt)("p",null,"The output should look something like this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mnemonic: deputy cousin oxygen quiz also odor clever candy borrow know junk method logic alert give history toy dolphin enact shift tooth wreck verify evil\nGenerated public address: rms1qpzkrdmt0dja3sch2mt2sapj46j4ywatxlxrgneynqtcp8ltyzf7yz75ser")),(0,o.kt)("p",null,"Save your mnemonic in a file, you will need this to send your tokens."),(0,o.kt)("admonition",{title:"Address Anatomy",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Testnet addresses begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"rms..."),", while Mainnet addresses will begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"smr..."),".")),(0,o.kt)("h2",{id:"get-some-testnet-tokens"},"Get Some Testnet Tokens."),(0,o.kt)("p",null,"You will need to visit the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Faucet")," to get some tokens. Just input your address, and you will get some testnet tokens."),(0,o.kt)("h2",{id:"read-your-balance"},"Read Your Balance"),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"get_balance.js")," and add the code below and replace the YOUR_ADDRESS constant with the address just added the testnet tokens to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const {\n    Client,\n  } = require("@iota/client");\n \n// Input  the address which you generated in the first step\nconst YOUR_ADDRESSS = "rms1qpzkrdmt0dja3sch2mt2sapj46j4ywatxlxrgneynqtcp8ltyzf7yz75ser"\n\n// In this example we will get the outputs of an address that has no additional unlock\n// conditions and sum the amounts and native tokens\nasync function run() {\n    const client = new Client({\n        nodes: [\'https://api.testnet.shimmer.network\'],\n      });\n    \n      try {\n        // Get output ids of basic outputs that can be controlled by this address without further unlock constraints\n        const outputIds = await client.basicOutputIds([\n            { address: YOUR_ADDRESSS },\n            { hasExpiration: false },\n            { hasTimelock: false },\n            { hasStorageDepositReturn: false },\n        ]);\n\n        // Get outputs by their IDs\n        const addressOutputs = await client.getOutputs(outputIds);\n\n        // Calculate the total amount and native tokens\n        let totalAmount = 0;\n        for (const outputResponse of addressOutputs) {\n            const output = outputResponse[\'output\'];\n            totalAmount += parseInt(output.amount);\n        }\n\n        console.log(\n            `Address Outputs have ${totalAmount} glow.`\n        );\n    } catch (error) {\n        console.log("Error: ", error)\n    }\n}\n\nrun().then(() => process.exit());\n')),(0,o.kt)("p",null,"This script will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," and connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer testnet API"),"."),(0,o.kt)("li",{parentName:"ol"},"Get all the unlocked basic outputs associated with your address."),(0,o.kt)("li",{parentName:"ol"},"Get the outputs from step 2. using their output ID by calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"Client.getOutputs(outputIds)")," function. "),(0,o.kt)("li",{parentName:"ol"},"Loop through all the retrieved outputs from step 3 and add their value in the ",(0,o.kt)("inlineCode",{parentName:"li"},"totalAmount")," variable."),(0,o.kt)("li",{parentName:"ol"},"Log the ",(0,o.kt)("inlineCode",{parentName:"li"},"totalAmount")," variable to the console.")),(0,o.kt)("p",null,"If you run the script, you should see your address's balance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/get_balance.js\n")),(0,o.kt)("p",null,"If it shows zero balance, wait a bit and rerun the script."),(0,o.kt)("p",null,"Your console output should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"}," Address Outputs have 1000000000 glow.\n")),(0,o.kt)("p",null,"Now you should have 1000000000 glow Tokens, which are equal to 1000 Shimmer Tokens."),(0,o.kt)("h2",{id:"send-shimmer-tokens"},"Send Shimmer Tokens."),(0,o.kt)("p",null,"The last step is to send the tokens to another address. Create a file for that and add the content below. You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"SEND_TO_ADDRESSS")," constant with any valid testnet address. You should replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_MNEMONIC")," constant with the mnemonic you generated in the first step. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n    Client,\n  } = require(\"@iota/client\");\n\n// Use this public address, or use a friends address to send tokens\nconst SEND_TO_ADDRESSS = \"rms1qznwxgd9medd03ne7ydl083rgdrduadxv2d932w64zas94dlpc3ju7xvpqq\"\n// Input your mnemonic, which was generated in the first step of the tutorial.\nconst YOUR_MNEMONIC = \"deputy cousin oxygen quiz also odor clever candy borrow know junk method logic alert give history toy dolphin enact shift tooth wreck verify evil\"\n// In this example we will send a transaction\nasync function run() {\n    const client = new Client({\n        nodes: ['https://api.testnet.shimmer.network'],\n        localPow: true,\n      });\n\n\n    try {\n        \n        const secretManager = {\n            Mnemonic: YOUR_MNEMONIC,\n        };\n\n        // We prepare the transaction\n        // Insert the output address and amount to spend. The amount cannot be zero.\n        const blockIdAndBlock = await client.buildAndPostBlock(secretManager, {\n            output: {\n                address: SEND_TO_ADDRESSS,\n                amount: '1000000',\n            },\n        });\n\n        console.log(\n            `Transaction sent: https://explorer.shimmer.network/testnet/block/${blockIdAndBlock[0]}`,\n        );\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n")),(0,o.kt)("p",null,"This script will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"Client")," and connect to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer testnet API"),"."),(0,o.kt)("li",{parentName:"ol"},"Instantiate a ",(0,o.kt)("inlineCode",{parentName:"li"},"SecretManager")," with the mnemonic you generated in the first step."),(0,o.kt)("li",{parentName:"ol"},"Build and post a block using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Client.buildAndPostBlock()"),"  function."),(0,o.kt)("li",{parentName:"ol"},"Log the transaction's ",(0,o.kt)("a",{parentName:"li",href:"https://explorer.shimmer.network/"},"Shimmer Explorer URL")," to the console.")),(0,o.kt)("p",null,"You can run it with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node scripts/send_tokens.js\n")),(0,o.kt)("p",null,"Your output should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction sent: https://explorer.shimmer.network/testnet/block/0xd1edfc557025600e7fcf7ddc99bc1a4fa1b10335c584f0406174a45d7a992554\n")),(0,o.kt)("p",null,"If you follow the link in the console output, you can see the transaction in the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network"},"Shimmer Explorer"),"."),(0,o.kt)("p",null,"You can check your balance again by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/get_balance.js")," script again.  Your output should be less than before."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"}," Address Outputs have 999000000 glow.\n")),(0,o.kt)("p",null,"Congratulations! You have sent some Shimmer testnet tokens!"))}p.isMDXComponent=!0}}]);