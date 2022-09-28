"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80641:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Create an NFT with the Wallet Library and IPFS",l={type:"mdx",permalink:"/tutorials/create-nft-with-wallet-lib",source:"@site/iota/tutorials/single-page-tutorials/create-nft-with-wallet-lib.md",title:"Create an NFT with the Wallet Library and IPFS",description:'In this tutorial, you will upload your desired image to IPFS and create an NFT from the unique IPFS URL on the Shimmer testnet. This tutorial will build on the tutorial "Setup testnet address and receive funds from the faucet" (IOTA Wiki PR under review). If you haven\'t completed it, please do so, and afterward, come back here, or make sure you have a prefunded wallet. You will use the same folder and development environment as in the mentioned prerequired tutorial, allowing you to reuse the Stronghold account with funds on it.',frontMatter:{}},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up",id:"set-up",level:2},{value:"Prepare Your Development Environment",id:"prepare-your-development-environment",level:3},{value:"Install Packages",id:"install-packages",level:4},{value:"Prepare an Image for the NFT",id:"prepare-an-image-for-the-nft",level:3},{value:"Scripts",id:"scripts",level:2},{value:"Create NFT",id:"create-nft",level:3},{value:"1. Imports and parameters",id:"1-imports-and-parameters",level:4},{value:"2. Upload file to IPFS",id:"2-upload-file-to-ipfs",level:4},{value:"3. Prepare NFT metadata",id:"3-prepare-nft-metadata",level:4},{value:"4. Import Stronghold account and synchronize",id:"4-import-stronghold-account-and-synchronize",level:4},{value:"5. Mint NFT",id:"5-mint-nft",level:4}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-nft-with-the-wallet-library-and-ipfs"},"Create an NFT with the Wallet Library and IPFS"),(0,r.kt)("p",null,"In this tutorial, you will upload your desired image to ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.tech/"},"IPFS"),' and create an NFT from the unique IPFS URL on the Shimmer testnet. This tutorial will build on the tutorial "Setup testnet address and receive funds from the faucet" (',(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet-setup"},"IOTA Wiki PR under review"),"). If you haven't completed it, please do so, and afterward, come back here, or make sure you have a prefunded wallet. You will use the same folder and development environment as in the mentioned prerequired tutorial, allowing you to reuse the Stronghold account with funds on it."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Finish the ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/wallet-setup"},"Set up testnet address and receive funds from faucet")," tutorial.")),(0,r.kt)("h2",{id:"set-up"},"Set Up"),(0,r.kt)("h3",{id:"prepare-your-development-environment"},"Prepare Your Development Environment"),(0,r.kt)("p",null,"Navigate to the folder you created when completing the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet-setup"},"set up a testnet address and receive funds from the faucet tutorial"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet-setup\n")),(0,r.kt)("h4",{id:"install-packages"},"Install Packages"),(0,r.kt)("p",null,"Next to the existing dependencies of the wallet setup tutorial, you will only need to add two more packages by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/client\nnpm install ipfs-core@0.10.8\n")),(0,r.kt)("p",null,"Afterward, your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file should contain the following dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6-12}","{6-12}":!0},'{\n  "name": "wallet-setup",\n  "version": "1.0.0",\n  "description": "",\n  "main": "create-mnemonic.js",\n  "dependencies": {\n    "@iota/client": "^3.0.0-alpha.7",\n    "@iota/wallet": "^2.0.2-alpha.21",\n    "bip39": "^3.0.4",\n    "dotenv": "^16.0.1",\n    "ipfs-core": "^0.15.4"\n  },\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "Apache-2.0"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepare-an-image-for-the-nft"},"Prepare an Image for the NFT"),(0,r.kt)("p",null,"Add your desired ",(0,r.kt)("inlineCode",{parentName:"p"},"*.jpg")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet-setup")," folder you created and rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"nft-image.jpg"),"."),(0,r.kt)("p",null,"For this tutorial we'll use the following image:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NFT Image",src:n(10995).Z,width:"300",height:"300"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("h3",{id:"create-nft"},"Create NFT"),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"create-nft.js")," and add the following code:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file that you have just created.")),(0,r.kt)("h4",{id:"1-imports-and-parameters"},"1. Imports and parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Libraries\nconst { utf8ToHex } = require('@iota/client');\nconst { AccountManager } = require('@iota/wallet');\nconst IPFS = require('ipfs-core');\nconst fs = require('fs');\n\n// Environment variables\nrequire('dotenv').config({ path: './.env' });\nconst password = process.env.SH_PASSWORD;\nconst accountName = process.env.ACCOUNT_NAME;\n\n// Network configuration\nconst { networkConfig } = require(\"./networkConfig.js\");\nconst explorerURL = networkConfig.explorer;\n\n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n")),(0,r.kt)("h4",{id:"2-upload-file-to-ipfs"},"2. Upload file to IPFS"),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadByPath()")," starts a local IPFS node, reads the file from the provided path, uploads it to IPFS and returns the unique IPFS content identifer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function uploadByPath(filePath) {\n    try {\n        console.log('\\n')\n        console.log(consoleColor, `Start local IPFS node for upload:`);\n    \n        // Set up local IPFS node for upload\n        let node;\n        if (!node) {\n            node = await IPFS.create({\n                repo: `ipfs_node`,\n            }); \n        }\n    \n        // Read file from path\n        const file = fs.readFileSync(filePath);\n    \n        // Upload file to IPFS\n        const fileAdded = await node.add(file);\n        const contentIdentifier = fileAdded.path;\n    \n        console.log('\\n')\n        console.log(consoleColor, `Your file was uploaded to IPFS with the following Content Identifier (CID):`);\n        console.log(contentIdentifier, '\\n')\n    \n        console.log(consoleColor, `Check your file on IPFS:`);\n        console.log(`https://ipfs.io/ipfs/${contentIdentifier}`, '\\n')\n    \n        return contentIdentifier;\n    } catch (error) {\n      console.error('IPFS upload error', error);\n    }\n}\n")),(0,r.kt)("h4",{id:"3-prepare-nft-metadata"},"3. Prepare NFT metadata"),(0,r.kt)("p",null,"This part calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"uploadByPath()")," function described above and prepares the metadata of your NFT. Make sure to give your NFT a nice name here."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'async function run() {\n    try {\n        const filePath = "nft-image.jpg";\n        const ipfsCid = await uploadByPath(filePath);\n\n        // Define NFT metadata\n        const metadataObject = {\n            standard: "IRC27",\n            type: "image/jpeg",\n            version: "v1.0",\n            name: "<Enter_your_desired_name_here>",\n            uri: `https://ipfs.io/ipfs/${ipfsCid}`\n        };\n\n        const metadataBytes = utf8ToHex(JSON.stringify(metadataObject));\n')),(0,r.kt)("h4",{id:"4-import-stronghold-account-and-synchronize"},"4. Import Stronghold account and synchronize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"        const manager = new AccountManager({\n            storagePath: `./${accountName}-database`,\n        });\n        await manager.setStrongholdPassword(password);\n        const account = await manager.getAccount(accountName);\n        \n        await account.sync();\n")),(0,r.kt)("h4",{id:"5-mint-nft"},"5. Mint NFT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"        const response = await account.mintNfts([\n            {\n                immutableMetadata: metadataBytes\n            }\n        ]);\n\n        console.log(consoleColor, `Your NFT was successfully minted in this block:`);\n        console.log(`${explorerURL}/block/${response.blockId}`, '\\n')\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n")),(0,r.kt)("p",null,"Run the script ",(0,r.kt)("inlineCode",{parentName:"p"},"create-nft.js")," and check the console output to follow along the steps described above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node create-nft.js\n")),(0,r.kt)("p",null,"Make sure to check out the transaction block that minted your NFT in the Shimmer explorer. If everything went according to plan, the transaction spent a basic output and created two new unspent outputs, one NFT output, and a new basic output. In the newly created NFT output, you can see the immutable metadata of your NFT together with the unique IPFS URL."))}c.isMDXComponent=!0},10995:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-image-bebf222235828689ef7a2a616d3fc465.jpg"}}]);