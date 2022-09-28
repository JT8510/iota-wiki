"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=i,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={},o="Zebra-IOTA-Edge-SDK : Identity Enabler : 102 Tutorial",s={unversionedId:"zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial",id:"zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial",title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 102 Tutorial",description:"Managing credentials (Holder Application)",source:"@site/iota/external/zebra-iota-edge-sdk/production/documentation/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md",sourceDirName:"zebra-iota-edge-sdk",slug:"/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial",draft:!1,editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation/iota/external/zebra-iota-edge-sdk/production/documentation/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 101 Tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial"},next:{title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 103 Tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"How to run in a browser",id:"how-to-run-in-a-browser",level:2},{value:"How to run on an Android Device",id:"how-to-run-on-an-android-device",level:2},{value:"DataWedge profile",id:"datawedge-profile",level:2},{value:"Create an Identity",id:"create-an-identity",level:2},{value:"Show me the code",id:"show-me-the-code",level:3},{value:"Self-issue a new credential",id:"self-issue-a-new-credential",level:2},{value:"Show me the code",id:"show-me-the-code-1",level:3},{value:"Present a credential",id:"present-a-credential",level:2},{value:"Show me the code",id:"show-me-the-code-2",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zebra-iota-edge-sdk--identity-enabler--102-tutorial"},"Zebra-IOTA-Edge-SDK : Identity Enabler : 102 Tutorial"),(0,i.kt)("h2",null,"Managing credentials (Holder Application)"),(0,i.kt)("p",null,"In this tutorial you will learn how to issue and present Verifiable Credentials through a blueprint application that showcases how to incorporate the corresponding UI toolkit and libraries offered by the SDK."),(0,i.kt)("p",null,"Before reading this tutorial we recommend that you read the ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial"},"first part")," of this series, especially if you are not familiar with decentralized identities or IOTA."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"All the scaffolding needed to create a solution for managing credentials on Android devices is packaged under the so-called ",(0,i.kt)("em",{parentName:"p"},"Holder Application"),". This application also allows sharing credentials with interested parties by way of a scannable data matrix."),(0,i.kt)("p",null,"The application guides the user to set up an Identity (a DID document) before associating Verifiable Credentials to this Identity. As this is just a reference application, the app self-signs the Verifiable Credentials, but ordinarily they would be signed by a third party such as a government in the case of personal details. An interested party can scan and verify the credential when presented in the form of a data matrix (see ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial"},"103 Tutorial")),")."),(0,i.kt)("p",null,"Note: The ",(0,i.kt)("em",{parentName:"p"},"Holder Application")," also includes partial functionality as an issuer of credentials (see ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial"},"104 Tutorial"),")."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The prerequisites for running this tutorial are described on ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#prerequisites"},"part 1")," of this series."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"An overview of the structure of the SDK are described on ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#getting-started"},"part 1")," of this series."),(0,i.kt)("h2",{id:"how-to-run-in-a-browser"},"How to run in a browser"),(0,i.kt)("p",null,"Run the Holder application in your browser with the below commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# Clone the repository\ngit clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK\n\n# Set up the project\ncd Zebra-Iota-Edge-SDK/identity-enabler/holder-mobile-app\nnpm install\n\n# Build and run\nnpm run build:dev\nnpm run start:dev\n\n# Open http://localhost:5001 in your browser\n")),(0,i.kt)("h2",{id:"how-to-run-on-an-android-device"},"How to run on an Android Device"),(0,i.kt)("p",null,"Before continuing please ensure that you have already installed the Android Studio on your local development machine and is properly configured. Then"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"# Clone the repository\ngit clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK\n\n# Set up the project\ncd Zebra-Iota-Edge-SDK/identity-enabler/holder-mobile-app\nnpm install\n\n# Build and run\nnpm run android\n")),(0,i.kt)("p",null,"Afterwards you need to go to the Android Studio and compile, install and execute the corresponding Android application. After successfully running the application you will be shown a simple wizard that you will need to complete. See below."),(0,i.kt)("h2",{id:"datawedge-profile"},"DataWedge profile"),(0,i.kt)("p",null,"In order to use the credential issuance part of this application (see ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial#onboard-a-device"},"DeviceID tutorial"),") you will need to set up a DataWedge profile bound to the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201corg.iota.zebra.holder\u201d")," application as follows:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{alt:"Data Wedge Profile 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image3.png",width:"30%"}),(0,i.kt)("img",{alt:"Data Wedge Profile 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image10.png",width:"30%"}),(0,i.kt)("img",{alt:"Data Wedge Profile 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image1.png",width:"30%"})),(0,i.kt)("p",null,"Note: On a non DataWedge device you can simulate a DataWedge scanning through the ",(0,i.kt)("inlineCode",{parentName:"p"},"adb")," command line tool as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"adb shell am startservice -a org.iota.zebra.holder.intent.action.SCAN -e com.symbol.datawedge.source scanner -e com.symbol.datawedge.data_string <scanned_string>\n")),(0,i.kt)("p",null,"Additional information on how Zebra DataWedge can be integrated is found at the ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#zebra-datawedge-integration"},"introductory tutorial"),"."),(0,i.kt)("h2",{id:"create-an-identity"},"Create an Identity"),(0,i.kt)("p",null,"Under the first time experience wizard, once you enter a name associated with your new Identity, (last step of the wizard) the application will create a new DID, anchoring it to the IOTA Tangle. The private key that allows control of such an Identity is securely stored on the device."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{alt:"Identity Creation 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image9.png",width:"30%"}),(0,i.kt)("img",{alt:"Identity Creation 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image6.png",width:"30%"}),(0,i.kt)("img",{alt:"Identity Creation 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image26.png",width:"30%"})),(0,i.kt)("h3",{id:"show-me-the-code"},"Show me the code"),(0,i.kt)("p",null,"Below you can find the code that calls the IOTA Identity Framework and generates a new decentralized identity. As mentioned before, this code can be found under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/holder-mobile-app/src/services/identityService.ts"},"IdentityService")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as IotaIdentity from "@iota/identity-wasm/web";\nconst { Config, Network, Client, KeyPair, KeyType, Document, KeyCollection, VerificationMethod } = IotaIdentity;\n\n// Initialize the library - Is cached after first initialization\nawait IotaIdentity.init();\n\n// Create a client\nconst cfg = Config.fromNetwork(Network.try_from_name("main"));\ncfg.setNode("https://chrysalis-nodes.iota.org");\ncfg.setPermanode("https://chrysalis-chronicle.iota.org/api/mainnet");\nconst client = Client.fromConfig(cfg);\n\n// Generate a new keypair and DID document\nconst key = new KeyPair(KeyType.Ed25519);\nconst doc = new Document(key, client.network().toString());\n\n// Add a Merkle Key Collection method, so compromised keys can be revoked.\nconst keys = new KeyCollection(KeyType.Ed25519, 8);\nconst method = VerificationMethod.createMerkleKey(Digest.Sha256, doc.id, keys, "key-collection");\n')),(0,i.kt)("p",null,"Afterwards a new DID Document will have been anchored to the IOTA Tangle mainnet similar to (Note: you will have a different one when you execute this tutorial)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ",\n    "verificationMethod": [\n        {\n            "id": "did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ#authentication",\n            "controller": "did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ",\n            "type": "Ed25519VerificationKey2018",\n            "publicKeyMultibase": "z9wnY61277zU1xLg4TUXXz4ZBQRFudu1Ln52QFXSYEnXF"\n        },\n        {\n            "id": "did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ#key-collection",\n            "controller": "did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ",\n            "type": "MerkleKeyCollection2021",\n            "publicKeyMultibase": "z11m9xNVcEfLJcakvkQF8UkeyaFdfcyLPMvrU9qzBMEKqa"\n        }\n    ],\n    "authentication": [\n        "did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ#authentication"\n    ],\n    "created": "2021-12-21T11:27:10Z",\n    "updated": "2021-12-21T11:27:10Z"\n}\n')),(0,i.kt)("p",null,"The document contains two verification methods, one used for authentication purposes (i.e for modifying the content of the DID document) and the other could be used for issuing new credentials. The latter is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Merkle_tree"},"Merkle Tree")," of multiple key pairs that facilitates the revocation of credentials when needed. It is noteworthy that from now on, this DID document will be publicly auditable and could be used to verify credentials issued by the DID ",(0,i.kt)("inlineCode",{parentName:"p"},"did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ. ")),(0,i.kt)("p",null,"Note: You can always inspect a DID document by using the IOTA Identity Resolver, for instance, at ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.iota.org/mainnet/identity-resolver/did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ"},"https://explorer.iota.org/mainnet/identity-resolver/did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ")," . In addition you can also resolve DID documents (and also generate them) using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tangle-js/tangle-cli"},"tangle-cli")," command line interface tool, for instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"tcli did resolve \u2013mainnet \u2013did=did:iota:7mog3xHBBm6H5fHxRdMiaRMjDHaFZn1kQshd8CoVPJdZ\n")),(0,i.kt)("p",null,"In addition, the private key materials associated with the identity are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/identity-enabler/holder-mobile-app/src/pages/Name.svelte#L46"},"securely stored")," on the device."),(0,i.kt)("h2",{id:"self-issue-a-new-credential"},"Self-issue a new credential"),(0,i.kt)("p",null,"Now that we have an anchored Identity, we can issue a new Credential containing claims about it. For demonstration purposes the ",(0,i.kt)("em",{parentName:"p"},"Holder Application")," is capable of self-issuing credentials, thus playing also the role of an Issuer. Please note that, indeed, ",(0,i.kt)("strong",{parentName:"p"},"in a real use case there would be a separate issuer application and credentials will not be self-signed.")),(0,i.kt)("p",null,"For self-issuing a new credential, click on the \u201c",(0,i.kt)("em",{parentName:"p"},"Add new Credential"),"\u201d button. Immediately a new Credential, which subject will be equal to its issuer, will be signed and generated. The reference application is capable of issuing personal credentials (Government ID cards, health passports, etc.). However, it can also be easily extended to support other kinds of credentials, for instance, for organizations or devices along supply chains."),(0,i.kt)("p",null,"Note: The user is both the subject and the holder of the identity and credentials created in this app."),(0,i.kt)("p",null,"Note: At any point in time you can click on the button on top left of the main page of the application and restart the process of identity and credentials generation."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{alt:"Credential Issuance 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image24.png",width:"30%"}),(0,i.kt)("img",{alt:"Credential Issuance 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image14.png",width:"30%"}),(0,i.kt)("img",{alt:"Credential Issuance 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image27.png",width:"30%"})),(0,i.kt)("h3",{id:"show-me-the-code-1"},"Show me the code"),(0,i.kt)("p",null,"The issuance of a new credential is performed using the IOTA Identity implementation of the W3C Verifiable Credentials standard. It means that credentials are represented using JSON-LD and can make use of standard vocabularies such as ",(0,i.kt)("a",{parentName:"p",href:"https://schema.org"},"schema.org")," for representing claims. The claims contained within a credential (the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field in the code below) are just randomly generated for educational purposes."),(0,i.kt)("p",null,"The code below shows how this process can be implemented. The verification method used to generate our new credential is the one corresponding to the aforementioned Merkle keyset, concretely using the key at the index 0 of such keyset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'    const IssuerDidDoc = Document.fromJSON(JSON.parse(issuer.didDoc));\n    const IssuerKeys = KeyCollection.fromJSON(issuer.keys);\n    const IssuerDoc = Document.fromJSON(issuer.doc);\n    const IssuerMethod = VerificationMethod.fromJSON(issuer.method);\n\n    // Prepare a credential subject\n    const credentialSubject = {\n        id: IssuerDidDoc.id.toString(),\n        ...data\n    };\n\n    // Issue an unsigned credential\n    const unsignedVc = VerifiableCredential.extend({\n        id: "http://example.com/credentials/3732",\n        type: schemaName,\n        issuer: IssuerDidDoc.id.toString(),\n        credentialSubject\n    });\n\n    // Sign the credential with User\'s Merkle Key Collection method\n    const signedVc = IssuerDoc.signCredential(unsignedVc, {\n        method: IssuerMethod.id.toString(),\n        public: IssuerKeys.public(0),\n        private: IssuerKeys.private(0),\n        proof: IssuerKeys.merkleProof(Digest.Sha256, 0)\n    });\n')),(0,i.kt)("p",null,"As a result, a new Verifiable Credential will be generated and stored on the device. An example that shows the structure of a Verifiable Credential can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#example-a-simple-example-of-a-verifiable-credential"},"here"),". It is a standard JSON-LD document using the vocabulary and data model defined by the W3C standard, which includes fields devoted to the signature (proof) and related metadata."),(0,i.kt)("h2",{id:"present-a-credential"},"Present a credential"),(0,i.kt)("p",null,"The last but not least functionality that any holder application should offer is the possibility to present a credential. The presentation of a credential consists of the generation of a new signed JSON-LD document (named as Verifiable Presentation) that wraps the original credential document together with a signature generated with a private key of the holder of the credential."),(0,i.kt)("p",null,"As a result the verifier can validate not only the credential itself, but also the identity of who is presenting the credential (the holder). In our example, the holder, the issuer and the subject of the credential all correspond to the same identity."),(0,i.kt)("p",null,"Once a verifiable presentation has been generated it is encoded using a data matrix code. In our example we are using a 6 by 6 data matrix code that can later be scanned by the ",(0,i.kt)("em",{parentName:"p"},"Verifier Application")," (see below). If you double tap on the data matrix code you will be able to inspect the JSON-LD content that represents the credential presented."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{alt:"Credential Presentation 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image15.png",width:"30%"}),(0,i.kt)("img",{alt:"Credential Presentation 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/documentation/static/img/zebra-iota-edge-sdk/102/image5.png",width:"30%"})),(0,i.kt)("h3",{id:"show-me-the-code-2"},"Show me the code"),(0,i.kt)("p",null,"Generating and signing a Verifiable Presentation is done using the following code snippet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"    // Prepare presentation Data\n    const IssuerKeys = KeyCollection.fromJSON(issuer.keys);\n    const IssuerDoc = Document.fromJSON(issuer.doc);\n    const IssuerMethod = VerificationMethod.fromJSON(issuer.method);\n\n    // Create a Verifiable Presentation from the Credential - signed by user's key\n    const unsignedVp = new VerifiablePresentation(IssuerDoc, signedVc);\n\n    const signedVp = IssuerDoc.signPresentation(unsignedVp, {\n        method: IssuerMethod.id.toString(),\n        public: IssuerKeys.public(0),\n        private: IssuerKeys.private(0),\n        proof: IssuerKeys.merkleProof(Digest.Sha256, 0)\n    });\n")),(0,i.kt)("p",null,"Then, the generation of a data matrix code is done using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metafloor/bwip-js"},"bwip-js library")," library."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"If you want to know how to build an application capable of verifying credentials go the ",(0,i.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial"},"103 Tutorial"),"."))}u.isMDXComponent=!0}}]);