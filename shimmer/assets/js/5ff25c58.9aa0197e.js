"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,k=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={description:"Protocol specification glossary.",image:"/img/logo/goshimmer_light.png",keywords:["transactions","node","tangle","weak parents","past cone","approval switch","tip selection","mana distribution","value transfer application"]},l="Glossary",r={unversionedId:"protocol_specification/glossary",id:"protocol_specification/glossary",title:"Glossary",description:"Protocol specification glossary.",source:"@site/shimmer/external/goshimmer/documentation/docs/protocol_specification/glossary.md",sourceDirName:"protocol_specification",slug:"/protocol_specification/glossary",permalink:"/shimmer/goshimmer/protocol_specification/glossary",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/protocol_specification/glossary.md",tags:[],version:"current",frontMatter:{description:"Protocol specification glossary.",image:"/img/logo/goshimmer_light.png",keywords:["transactions","node","tangle","weak parents","past cone","approval switch","tip selection","mana distribution","value transfer application"]},sidebar:"docs",previous:{title:"Markers",permalink:"/shimmer/goshimmer/protocol_specification/components/markers"},next:{title:"Client Lib: Interaction With Layers",permalink:"/shimmer/goshimmer/apis/client_lib"}},s={},c=[{value:"Application Layer",id:"application-layer",level:2},{value:"Core Applications",id:"core-applications",level:3},{value:"Faucet",id:"faucet",level:3},{value:"Value Transfer Application",id:"value-transfer-application",level:3},{value:"Communication Layer",id:"communication-layer",level:2},{value:"Mana",id:"mana",level:3},{value:"Epoch",id:"epoch",level:4},{value:"Block",id:"block",level:3},{value:"Block Overhead",id:"block-overhead",level:3},{value:"Parent",id:"parent",level:3},{value:"Payload",id:"payload",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Finality",id:"finality",level:4},{value:"History",id:"history",level:4},{value:"Orphan",id:"orphan",level:4},{value:"Reattachment",id:"reattachment",level:4},{value:"Solidification Time",id:"solidification-time",level:4},{value:"UTXO",id:"utxo",level:4},{value:"Tip Selection",id:"tip-selection",level:3},{value:"Approval Switch",id:"approval-switch",level:4},{value:"Approval Weight",id:"approval-weight",level:4},{value:"Local Modifiers",id:"local-modifiers",level:4},{value:"Tip",id:"tip",level:4},{value:"Consensus",id:"consensus",level:2},{value:"Blockchain Bottleneck",id:"blockchain-bottleneck",level:3},{value:"Mining Races",id:"mining-races",level:3},{value:"Nakamoto Consensus",id:"nakamoto-consensus",level:3},{value:"Proof of Work",id:"proof-of-work",level:3},{value:"Coordinator",id:"coordinator",level:2},{value:"Milestones",id:"milestones",level:3},{value:"Markers",id:"markers",level:2},{value:"Network Layer",id:"network-layer",level:2},{value:"Eclipse Attack",id:"eclipse-attack",level:3},{value:"Neighbors",id:"neighbors",level:3},{value:"Node",id:"node",level:3},{value:"Peering",id:"peering",level:3},{value:"Small World Network",id:"small-world-network",level:3},{value:"Splitting Attack",id:"splitting-attack",level:3},{value:"Sybil Attack",id:"sybil-attack",level:3},{value:"Tangle",id:"tangle",level:2},{value:"Subtangle",id:"subtangle",level:3}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"application-layer"},"Application Layer"),(0,o.kt)("p",null,"The IOTA Protocol allows for a host of applications to run on the block tangle. Anybody can design an application, and users can decide which applications to run on their nodes. These applications will all use the communication layer to broadcast and store data."),(0,o.kt)("h3",{id:"core-applications"},"Core Applications"),(0,o.kt)("p",null,"Applications that are necessary for the protocol to operate. These include for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The value transfer application"),(0,o.kt)("li",{parentName:"ul"},"The distributed random number generator (DRNG for short)"),(0,o.kt)("li",{parentName:"ul"},"The consensus mechanism, more specifically the Approval Weight manager")),(0,o.kt)("h3",{id:"faucet"},"Faucet"),(0,o.kt)("p",null,"A test application issuing funds on request."),(0,o.kt)("h3",{id:"value-transfer-application"},"Value Transfer Application"),(0,o.kt)("p",null,"The application which maintains the ledger state."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"communication-layer"},"Communication Layer"),(0,o.kt)("p",null,"This layer stores and communicates information. This layer contains the \u201cdistributed ledger\u201d or the tangle. The rate control and timestamps are in this layer too."),(0,o.kt)("h3",{id:"mana"},"Mana"),(0,o.kt)("p",null,"The reputation of a node is based on a virtual token called mana. This reputation, working as a Sybil protection mechanism, is important for issuing more transactions (see Module 3) and having a higher influence during the voting process (see Module 5)."),(0,o.kt)("h4",{id:"epoch"},"Epoch"),(0,o.kt)("p",null,"A time interval that is used for a certain type of consensus mana. At the end of each epoch a snapshot of the state of mana distribution in the network is taken. Since this tool employs the timestamp of blocks every node can reach consensus on an epoch's mana distribution eventually."),(0,o.kt)("h3",{id:"block"},"Block"),(0,o.kt)("p",null,"The object that is gossiped between neighbors. All gossiped information is included in a block. The most basic unit of information of the IOTA Protocol. Each block has a type and size and contains data."),(0,o.kt)("h3",{id:"block-overhead"},"Block Overhead"),(0,o.kt)("p",null,"The additional information (metadata) that needs to be sent along with the actual information (data). This can contain signatures, voting, heartbeat signals, and anything that is transmitted over the network but is not the transaction itself."),(0,o.kt)("h3",{id:"parent"},"Parent"),(0,o.kt)("p",null,"A block approved by another block is called a parent to the latter. A parent can be selected as strong or weak parent. If the past cone of the parent is liked the parent is set as strong parent. If the block is liked but its past cone is disliked it is set as a weak parent. This mechanism is called approval switch."),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"A field in a block which determines the type. Examples are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value payload (type TransactionType)"),(0,o.kt)("li",{parentName:"ul"},"dRNG payload"),(0,o.kt)("li",{parentName:"ul"},"Salt declaration payload"),(0,o.kt)("li",{parentName:"ul"},"Generic data payload")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"transaction"},"Transaction"),(0,o.kt)("p",null,"A block with payload of type TransactionType. It contains the information of a transfer of funds."),(0,o.kt)("h4",{id:"finality"},"Finality"),(0,o.kt)("p",null,"The property that once a transaction is completed there is no way to revert or alter it. This is the moment when the parties involved in a transfer can consider the deal done. Finality can be deterministic or probabilistic."),(0,o.kt)("h4",{id:"history"},"History"),(0,o.kt)("p",null,"The list of transactions directly or indirectly approved by a given transaction."),(0,o.kt)("h4",{id:"orphan"},"Orphan"),(0,o.kt)("p",null,"A transaction (or block) that is not referenced by any succeeding transaction (or block). An orphan is not considered confirmed and will not be part of the consensus."),(0,o.kt)("h4",{id:"reattachment"},"Reattachment"),(0,o.kt)("p",null,"Resending a transaction by redoing tip selection and referencing newer tips by redoing PoW."),(0,o.kt)("h4",{id:"solidification-time"},"Solidification Time"),(0,o.kt)("p",null,"The solidification time is the point at which the entire history of a transaction has been received by a node."),(0,o.kt)("h4",{id:"utxo"},"UTXO"),(0,o.kt)("p",null,"Unspent transaction output."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tip-selection"},"Tip Selection"),(0,o.kt)("p",null,"The process of selecting previous blocks to be referenced by a new block. These references are where a block attaches to the existing data structure. IOTA only enforces that a block approves (at least) two other blocks, but the tip selection strategy is left up to the user (with a good default provided by IOTA)."),(0,o.kt)("h4",{id:"approval-switch"},"Approval Switch"),(0,o.kt)("p",null,"When selecting a block as a parent, we can select from the strong or weak tip pool. This mechanism is called approval switch."),(0,o.kt)("h4",{id:"approval-weight"},"Approval Weight"),(0,o.kt)("p",null,"A block gains mana weight, by blocks approving it directly or indirectly. However, only strong parents can propagate the mana weight to the past, while weak parents obtain the weight from its weak children but don't propagate it."),(0,o.kt)("h4",{id:"local-modifiers"},"Local Modifiers"),(0,o.kt)("p",null,"Custom conditions that nodes can take into account during tip selection. In IOTA, nodes do not necessarily have the same view of the Tangle; various kinds of information only locally available to them can be used to strengthen security."),(0,o.kt)("h4",{id:"tip"},"Tip"),(0,o.kt)("p",null,"A block that has not yet been approved."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"Agreement on a specific datum or value in distributed multi-agent systems, in the presence of faulty processes."),(0,o.kt)("h3",{id:"blockchain-bottleneck"},"Blockchain Bottleneck"),(0,o.kt)("p",null,"As more transactions are issued, the block rate and size become a bottleneck in the system. It can no longer include all incoming transactions promptly. Attempts to speed up block rates will introduce more orphan blocks (blocks being left behind) and reduce the security of the blockchain."),(0,o.kt)("h3",{id:"mining-races"},"Mining Races"),(0,o.kt)("p",null,"In PoW-based DLTs, competition between nodes to obtain mining rewards and transaction fees are known as mining races. These are undesirable as they favor more powerful nodes, especially those with highly optimized hardware like ASICs. As such,\nthey block participation by regular or IoT hardware and are harmful for the environment."),(0,o.kt)("h3",{id:"nakamoto-consensus"},"Nakamoto Consensus"),(0,o.kt)("p",null,"Named after the originator of Bitcoin, Satoshi Nakamoto, Nakamoto consensus describes the replacement of voting/communication between known agents with a cryptographic puzzle (Proof-of-Work). Completing the puzzle determines which agent is the next to act."),(0,o.kt)("h3",{id:"proof-of-work"},"Proof of Work"),(0,o.kt)("p",null,"Data which is difficult (costly, time-consuming) to produce but easy for others to verify."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"coordinator"},"Coordinator"),(0,o.kt)("p",null,"A trusted entity that issues milestones to guarantee finality and protect the Tangle against attacks."),(0,o.kt)("h3",{id:"milestones"},"Milestones"),(0,o.kt)("p",null,"Milestones are transactions signed and issued by the Coordinator. Their main goal is to help the Tangle to grow healthily and to guarantee finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the state of that transaction and its entire history as confirmed."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"markers"},"Markers"),(0,o.kt)("p",null,"A tool that exists only locally and allows performing certain calculations more efficiently. Such as approval weight calculation or the existence of certain blocks in the past or future cone of another block."),(0,o.kt)("h2",{id:"network-layer"},"Network Layer"),(0,o.kt)("p",null,"This layer manages the lower layers of internet communication like TCP. It is the most technical, and in some ways the least interesting. In this layer, the connections between nodes are managed by the autopeering and peer discovery modules and the gossip protocol."),(0,o.kt)("h3",{id:"eclipse-attack"},"Eclipse Attack"),(0,o.kt)("p",null,"A cyber-attack that aims to isolate and attack a specific user, rather than the whole network."),(0,o.kt)("h3",{id:"neighbors"},"Neighbors"),(0,o.kt)("p",null,"Network nodes that are directly connected and can exchange blocks without intermediate nodes."),(0,o.kt)("h3",{id:"node"},"Node"),(0,o.kt)("p",null,"A machine which is part of the IOTA network. Its role is to issue new transactions and to validate existing ones."),(0,o.kt)("h3",{id:"peering"},"Peering"),(0,o.kt)("p",null,"The procedure of discovering and connecting to other network nodes."),(0,o.kt)("h3",{id:"small-world-network"},"Small World Network"),(0,o.kt)("p",null,"A network in which most nodes can be reached from every other node by a few intermediate steps."),(0,o.kt)("h3",{id:"splitting-attack"},"Splitting Attack"),(0,o.kt)("p",null,"An attack in which a malicious node attempts to split the Tangle into two conflicts. As one of the conflicts grows, the attacker publishes transactions on the other conflict to keep both alive. Splitting attacks attempt to slow down the consensus process or conduct a double spend."),(0,o.kt)("h3",{id:"sybil-attack"},"Sybil Attack"),(0,o.kt)("p",null,"An attempt to gain control over a peer-to-peer network by forging multiple fake identities."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"tangle"},"Tangle"),(0,o.kt)("p",null,"An append only block data structure where each block references (at least) two other blocks."),(0,o.kt)("h3",{id:"subtangle"},"Subtangle"),(0,o.kt)("p",null,"A consistent section of the Tangle (i.e. a subset of blocks), such that each included block also includes its referenced blocks."),(0,o.kt)("hr",null))}h.isMDXComponent=!0}}]);