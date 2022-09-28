"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[83205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||s;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const s={description:"These are the research specifications for the IOTA 2.0 protocol. Chapter 1 contains control files. Chapter 2 outlines the general structure of the protocol. Chapter 3 explains the networking layer. Chapters 4, 5, and 6 describe the bulk of the protocol.",image:"https://i.imgur.com/qiZtuon.png",slug:"1.1Introduction",keywords:["messages","nodes","approval weight","value transfer","tip selection","access mana","layers","communication","networks"]},i="Introduction",r={unversionedId:"1.1 Introduction",id:"1.1 Introduction",title:"Introduction",description:"These are the research specifications for the IOTA 2.0 protocol. Chapter 1 contains control files. Chapter 2 outlines the general structure of the protocol. Chapter 3 explains the networking layer. Chapters 4, 5, and 6 describe the bulk of the protocol.",source:"@site/iota/external/iota-2.0-research-specifications/1.1 Introduction.md",sourceDirName:".",slug:"/1.1Introduction",permalink:"/IOTA-2.0-Research-Specifications/1.1Introduction",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/iota/external/iota-2.0-research-specifications/1.1 Introduction.md",tags:[],version:"current",frontMatter:{description:"These are the research specifications for the IOTA 2.0 protocol. Chapter 1 contains control files. Chapter 2 outlines the general structure of the protocol. Chapter 3 explains the networking layer. Chapters 4, 5, and 6 describe the bulk of the protocol.",image:"https://i.imgur.com/qiZtuon.png",slug:"1.1Introduction",keywords:["messages","nodes","approval weight","value transfer","tip selection","access mana","layers","communication","networks"]},sidebar:"tutorialSidebar",previous:{title:"Preface",permalink:"/IOTA-2.0-Research-Specifications/Preface"},next:{title:"2.2 Message Layout",permalink:"/IOTA-2.0-Research-Specifications/2.2MessageLayout"}},c={},l=[{value:"The Communication Layer",id:"the-communication-layer",level:2},{value:"The Value Transfer Application",id:"the-value-transfer-application",level:2},{value:"The Consensus Applications",id:"the-consensus-applications",level:2}],h={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"These are the research specifications for the IOTA 2.0 protocol. To orientate the reader, we provide a brief summary of their contents along with an overview of the protocol. "),(0,o.kt)("p",null,"The first chapter of these specifications contains control files to help the reader navigate these pages. The second chapter of these specifications outlines the general structure of the protocol, including the layouts of messages and their payloads and how messages are processed."),(0,o.kt)("p",null,"Chapter 3 discusses the networking layer. This layer maintains the underlying IOTA network and includes the gossip protocol, managing connections with peers, and bootstrapping while joining the network.  The networking layer largely functions independently from the rest of the protocol, allowing the other modules to abstract these components to sending and receiving messages in gossip."),(0,o.kt)("p",null,"Chapters 4, 5, and 6 include the bulk of the protocol.  Chapter 4 describes the communication layer, which manages the information transmitted through the networking layer.  "),(0,o.kt)("p",null,"Running on top of the communication layer, the application layer provides actual services to clients. Anybody can develop applications, and nodes can choose which applications to run. Of course, these applications can also be dependent on each other. While third-party applications are clearly out of the realm of this document, there are several core applications which must be run by all nodes.  The core applications are split into two groups: the value transfer application and the consensus applications, which are discussed in Chapters 5 and 6 respectively.  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://i.imgur.com/qiZtuon.png"},(0,o.kt)("img",{parentName:"a",src:"https://i.imgur.com/qiZtuon.png",alt:"Data flow overview"}))),(0,o.kt)("h2",{id:"the-communication-layer"},"The Communication Layer"),(0,o.kt)("p",null,"The communication layer manages the information communicated through the network layer, including processing information received from the gossip, storing information, checking various validity conditions, and deciding what information to send to neighbors. "),(0,o.kt)("p",null,'All the data and transactions exchanged in IOTA 2.0 protocol is contained in objects called messages. All messages are stored in a data structure called the Tangle.  Since each message contains the hash of at least two other messages, the Tangle has a DAG structure which secures all the data, making the history of each message immutable. We refer to these references as "approval" since a message should only reference another if it approves of its history.  '),(0,o.kt)("p",null,"Each message contains a timestamp, and the protocol enforces various objective and subjective rules regarding them.  "),(0,o.kt)("p",null,'When nodes create new messages,  they must decide which messages their new message should reference.  To do this, the node uses the tip selection algorithm to select tips, messages which are not yet referenced.  Since references denote approval, tip selection algorithm ultimately decides which transactions and data will be included into the ledger.  The node uses flags managed by the consensus applications to maintain a pool of tips with a "correct" history.  The tip selection algorithm just randomly selects tips from this pool.  '),(0,o.kt)("p",null,"  To prevent the network from being overloaded, the rate control uses adaptive PoW to coarsely limit the messages created during a spam attack while keeping the network usable for honest nodes.  The congestion control module manages fine grained access, using a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deficit_round_robin"},"deficit round robin scheduler")," to decide which messages are added to the ledger and gossiped.  The scheduler is designed to have the following properties:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Consistency: all honest nodes will schedule the same messages"),(0,o.kt)("li",{parentName:"ol"},"Fair access: the nodes' messages will be scheduled at a fair rate according to their access mana (explained below)"),(0,o.kt)("li",{parentName:"ol"},"Utilisation: when there is demand, the entire throughput will be used"),(0,o.kt)("li",{parentName:"ol"},"Bounded latency: network delay of all messages will be bounded"),(0,o.kt)("li",{parentName:"ol"},"Security: these properties hold even in the presence of an attacker\nLastly, the congestion control module includes a rate setter for honest nodes to use which allows them to determine the proper rate they can issue messages.")),(0,o.kt)("h2",{id:"the-value-transfer-application"},"The Value Transfer Application"),(0,o.kt)("p",null," The Value Transfer Application maintains the ledger state and a quantity called mana which is held by each node. Changes to the ledger are made through objects called transactions submitted to the Tangle via messages. Transactions are dependent on each other, and these dependencies are tracked in the UTXO DAG.  By monitoring the UTXO DAG, a node can easily detect when two transactions intend to make conflicting changes to the ledger.  "),(0,o.kt)("p",null," Once conflicts are detected, they are tracked in a sophisticated data structure called the Branch DAG.  Each branch represents a valid and monotonic choice of conflicts.  These choices, and hence the branches, are naturally partially ordered by inclusion, and thus the branches have a DAG structure.  Each message and transaction is flagged with a branch, indicating the conflicts that each transaction or message depends upon. Since each message and transaction must have a valid history, these dependencies always form a branch. "),(0,o.kt)("p",null," The consensus applications choose which branches are correct, resolving the conflicts,  and which transactions are finalised,  deciding how to mutate the balances of the ledger. "),(0,o.kt)("p",null," The value transfer application also manages the mana state, which is the IOTA 2.0 Sybil protection mechanism. Every node has holds two quantities: access mana and consensus mana. Every time a transaction moves funds, a roughly equal amount of consensus mana and access mana are pledged to two nodes. Thus mana is an extension  of the ledger state.  "),(0,o.kt)("p",null," The amount of mana a node has determines how it can interact with certain modules.  For example, the congestion control algorithm schedules messages according to access mana.  The consensus applications dRNG, FPC, approval weight and autopeering all use consensus mana."),(0,o.kt)("h2",{id:"the-consensus-applications"},"The Consensus Applications"),(0,o.kt)("p",null,'The consensus applications allow the network to come to consensus on which messages have accurate timestamps and which conflicts should be accepted and which rejected. These questions are decided through the binary voting protocol Fast Probabilistic Consensus, or FPC for short.  This binary voting protocol exchanges opinions with randomly selected nodes to come to consensus on  a bit.  To prevent an attacker from maintaining a metastable state, FPC effectively breaks "ties" of opinions using a random number generated by the dRNG module.  '),(0,o.kt)("p",null,"Using the outcomes of FPC, nodes come to consensus on which branches new messages should be attached.  The approval weight essentially tracks how many nodes have issued a message in a future cone of a message, weighted by their consensus mana.   After the approval weight of a message (or a branch) becomes large enough, the branch is considered finalised.  "),(0,o.kt)("p",null,"Some nodes may miss certain instances of FPC voting, because they are either new or they temporarily lost connectivity. These nodes may come to the wrong conclusions using FPC voting. "),(0,o.kt)("p",null,"However, such nodes will always compute the approval weight correctly. Thus, if a conflict approved by FPC conflicts with a branch finalised by approval weight, the node will always default to the approval weight.  In this way, FPC provides an initial round of consensus for nodes which are active in the network, and then the approval weight provides the final consensus."))}p.isMDXComponent=!0}}]);