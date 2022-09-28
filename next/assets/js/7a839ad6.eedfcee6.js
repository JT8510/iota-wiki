"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||c;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<c;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const c={description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified by an AgentID.",image:"/img/tutorial/accounts.png",keywords:["smart contracts","on-chain account","ownership","accounts Contract","explanation"]},r="How Accounts Work",s={unversionedId:"guide/core_concepts/accounts/how-accounts-work",id:"guide/core_concepts/accounts/how-accounts-work",title:"How Accounts Work",description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified by an AgentID.",source:"@site/next/external/wasp/documentation/docs/guide/core_concepts/accounts/how-accounts-work.md",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-accounts-work",permalink:"/next/smart-contracts/develop/guide/core_concepts/accounts/how-accounts-work",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/core_concepts/accounts/how-accounts-work.md",tags:[],version:"current",frontMatter:{description:"IOTA Smart Contracts chains keeps a ledger of on-chain account balances. On-chain accounts are identified by an AgentID.",image:"/img/tutorial/accounts.png",keywords:["smart contracts","on-chain account","ownership","accounts Contract","explanation"]},sidebar:"tutorialSidebar",previous:{title:"The `evm` Contract",permalink:"/next/smart-contracts/develop/guide/core_concepts/core_contracts/evm"},next:{title:"How to Deposit to a Chain",permalink:"/next/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain"}},i={},l=[{value:"Types of Accounts",id:"types-of-accounts",level:2},{value:"L1 Address",id:"l1-address",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"The Common Account",id:"the-common-account",level:3},{value:"Ethereum Address",id:"ethereum-address",level:3},{value:"The Accounts Contract",id:"the-accounts-contract",level:2},{value:"Example",id:"example",level:2}],d={toc:l};function p(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-accounts-work"},"How Accounts Work"),(0,o.kt)("p",null,"On the L1 Ledger, like with any DLT, we have ",(0,o.kt)("strong",{parentName:"p"},"trustless")," and ",(0,o.kt)("strong",{parentName:"p"},"atomic")," transfers of assets between addresses on the\nledger."),(0,o.kt)("p",null,"Tokens controlled by an address can be moved to another address by providing a valid signature using the private key\nthat controls the source address."),(0,o.kt)("p",null,"In IOTA Smart Contracts, ",(0,o.kt)("a",{parentName:"p",href:"../states#digital-assets-on-the-chain"},"each chain has a L1 address")," (also known as the ",(0,o.kt)("em",{parentName:"p"},"Chain\nID"),") which enables it to control L1 assets (base tokens, native tokens and NFTs).\nThe chain acts as a custodian of the L1 assets on behalf of different entities, thus providing a ",(0,o.kt)("em",{parentName:"p"},"L2 Ledger"),"."),(0,o.kt)("p",null,"The L2 ledger is a collection of ",(0,o.kt)("em",{parentName:"p"},"on-chain accounts")," (sometimes called just ",(0,o.kt)("em",{parentName:"p"},"accounts"),").\nL2 accounts can be owned by different entities, identified by a unique ",(0,o.kt)("em",{parentName:"p"},"Agent ID"),".\nThe L2 ledger is a mapping of Agent ID => balances of L2 assets."),(0,o.kt)("h2",{id:"types-of-accounts"},"Types of Accounts"),(0,o.kt)("h3",{id:"l1-address"},"L1 Address"),(0,o.kt)("p",null,"Any L1 address can be the owner of a L2 account.\nThe Agent ID of an L1 address is just the address,"),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"iota1pr7vescn4nqc9lpvv37unzryqc43vw5wuf2zx8tlq2wud0369hjjugg54mf"),"."),(0,o.kt)("p",null,"Tokens in an address account can only be moved through a request signed by the private key of the L1 address."),(0,o.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,o.kt)("p",null,"Any smart contract can be the owner of a L2 account. Recall that a smart\ncontract is uniquely identified in a chain by a ",(0,o.kt)("a",{parentName:"p",href:"../smart-contract-anatomy#identifying-a-smart-contract"},(0,o.kt)("em",{parentName:"a"},"hname")),".\nHowever, the hname is not enough to identify the account since a smart contract on another chain could own it."),(0,o.kt)("p",null,"Thus, the Agent ID of a smart contract is composed as the contract hname plus the ",(0,o.kt)("a",{parentName:"p",href:"../states#digital-assets-on-the-chain"},(0,o.kt)("em",{parentName:"a"},"chain\nID")),", with syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"<hname>@<chain-id>"),". For\nexample: ",(0,o.kt)("inlineCode",{parentName:"p"},"cebf5908@tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd"),"."),(0,o.kt)("p",null,"Note that this allows trustless transfers of assets between smart contracts on the same or different chains."),(0,o.kt)("p",null,"Tokens in a smart contract account can only be moved by that smart contract."),(0,o.kt)("h3",{id:"the-common-account"},"The Common Account"),(0,o.kt)("p",null,"The chain owns a unique L2 account, called the ",(0,o.kt)("em",{parentName:"p"},"common account"),".\nThe common account is controlled by the chain owner (defined in the chain root contract) and is used to store funds\ncollected by fees or sent to the chain L1 address."),(0,o.kt)("p",null,"The Agent ID of the common account is ",(0,o.kt)("inlineCode",{parentName:"p"},"<hname=0>@<chain-id>"),". For\nexample: ",(0,o.kt)("inlineCode",{parentName:"p"},"00000000@tgl1pzehtgythywhnhnz26s2vtpe2wy4y64pfcwkp9qvzhpwghzxhwkps2tk0nd"),"."),(0,o.kt)("h3",{id:"ethereum-address"},"Ethereum Address"),(0,o.kt)("p",null,"An L2 account can also be owned by an Ethereum address. See ",(0,o.kt)("a",{parentName:"p",href:"../../evm/introduction"},"EVM")," for more information.\nThe Agent ID of an Ethereum address is just the address prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"0x"),",\ne.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"0xd36722adec3edcb29c8e7b5a47f352d701393462"),"."),(0,o.kt)("p",null,"Tokens in an Ethereum account can only be moved by sending an Ethereum transaction signed by the same address."),(0,o.kt)("h2",{id:"the-accounts-contract"},"The Accounts Contract"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../core_contracts/accounts"},(0,o.kt)("inlineCode",{parentName:"a"},"accounts")," core contract")," is responsible for managing the L2 ledger.\nBy calling this contract, it is possible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/smart-contracts/develop/guide/core_concepts/accounts/view-account-balances"},"View current account balances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},"Deposit funds to the chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/smart-contracts/develop/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},"Withdraw funds from the chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/smart-contracts/develop/guide/core_concepts/accounts/the-common-account"},"Harvest")," - can only be called by the chain owner, to move funds from the chain common\naccount to their account.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following diagram illustrates an example situation.\nThe the IDs and hnames are shortened for simplicity."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:n(33569).Z},(0,o.kt)("img",{alt:"Example situation. Two chains are deployed, with three smart contracts and one address.",src:n(20212).Z,width:"862",height:"682"}))),(0,o.kt)("p",null,"Two chains are deployed, with IDs ",(0,o.kt)("inlineCode",{parentName:"p"},"chainA")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainB"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"chainA")," has two smart contracts on it (with hnames ",(0,o.kt)("inlineCode",{parentName:"p"},"3037")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2225"),"), and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainB")," has one smart contract (",(0,o.kt)("inlineCode",{parentName:"p"},"7003"),")."),(0,o.kt)("p",null,"There is also an address on the L1 Ledger: ",(0,o.kt)("inlineCode",{parentName:"p"},"iota1a2b3c4d"),".\nThis address controls 1337 base tokens and 42 ",(0,o.kt)("inlineCode",{parentName:"p"},"Red")," native tokens on the L1 Ledger."),(0,o.kt)("p",null,"The same address also controls 42 base tokens on ",(0,o.kt)("inlineCode",{parentName:"p"},"chainA")," and 8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Green")," native tokens on ",(0,o.kt)("inlineCode",{parentName:"p"},"chainB"),"."),(0,o.kt)("p",null,"So, the owner of the private key behind the address controls three different accounts: the L1 account and one L2 account\non each chain."),(0,o.kt)("p",null,"Smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"7003@chainB")," has five base tokens on its native chain and controls eleven base tokens on chain A."))}p.isMDXComponent=!0},33569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/accounts-8cb1cee589b502094c3883ff2bc0f8ba.png"},20212:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accounts-8cb1cee589b502094c3883ff2bc0f8ba.png"}}]);