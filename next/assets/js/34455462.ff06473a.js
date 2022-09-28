"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18938],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=l(o),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,s(s({ref:t},h),{},{components:o})):n.createElement(f,s({ref:t},h))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,s=new Array(a);s[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},67671:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const a={description:"High-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements. A P2P overlay network, an immutable data structure, and a consensus mechanism.",image:"/img/protocol_specification/layers.png",keywords:["network layer","node","block","ledger state","data flow","past cone","future cone","timestamp","opinion setting","strong tip","tip pool"]},s="Components of the Protocol",r={unversionedId:"protocol_specification/components/overview",id:"protocol_specification/components/overview",title:"Components of the Protocol",description:"High-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements. A P2P overlay network, an immutable data structure, and a consensus mechanism.",source:"@site/next/external/goshimmer/documentation/docs/protocol_specification/components/overview.md",sourceDirName:"protocol_specification/components",slug:"/protocol_specification/components/overview",permalink:"/next/goshimmer/protocol_specification/components/overview",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/protocol_specification/components/overview.md",tags:[],version:"current",frontMatter:{description:"High-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements. A P2P overlay network, an immutable data structure, and a consensus mechanism.",image:"/img/protocol_specification/layers.png",keywords:["network layer","node","block","ledger state","data flow","past cone","future cone","timestamp","opinion setting","strong tip","tip pool"]},sidebar:"docs",previous:{title:"Protocol High-level Overview",permalink:"/next/goshimmer/protocol_specification/protocol"},next:{title:"Tangle",permalink:"/next/goshimmer/protocol_specification/components/tangle"}},c={},l=[{value:"Network Layer",id:"network-layer",level:2},{value:"Communication Layer",id:"communication-layer",level:2},{value:"(Decentralized) Application Layer",id:"decentralized-application-layer",level:2},{value:"Data Flow - Overview",id:"data-flow---overview",level:2},{value:"Block Factory",id:"block-factory",level:3},{value:"Parser",id:"parser",level:3},{value:"Storage",id:"storage",level:3},{value:"Solidifier",id:"solidifier",level:3},{value:"Scheduler",id:"scheduler",level:3},{value:"Booker",id:"booker",level:3},{value:"Consensus Mechanism",id:"consensus-mechanism",level:3},{value:"Tip Manager",id:"tip-manager",level:3}],h={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"components-of-the-protocol"},"Components of the Protocol"),(0,i.kt)("p",null,"This section provides a high-level description of the interaction between components of the currently implemented GoShimmer protocol. The protocol can be divided into three main elements: a P2P overlay network, an immutable data structure, and a consensus mechanism. We abstract these three elements into layers, where\u2014similarly to other architectures\u2014upper layers build on the functionality provided by the layers below them. The definition of the different layers is merely about the convenience of creating a clear separation of concerns."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(32731).Z},(0,i.kt)("img",{alt:"Components of the Protocol",src:o(43839).Z,title:"Components of the Protocol",width:"965",height:"657"}))),(0,i.kt)("h2",{id:"network-layer"},"Network Layer"),(0,i.kt)("p",null,"The network is maintained by the network layer modules, which can be characterized as a pure P2P overlay network, meaning that it is a system that runs on top of another network (e.g., the internet), and where all nodes have the same roles and perform the same actions (in contrast to client-server systems). GoShimmer's Network Layer consists of three basic modules: the ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/autopeering#peer-discovery"},"peer discovery")," module (which provides a list of nodes actively using the network), and the ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/autopeering#neighbor-selection"},"neighbor selection")," module (also known as autopeering), which actually selects peers. Finally, the P2P Communication manages a node's neighbors, either selected via ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/autopeering"},"autopeering")," or ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/tutorials/manual_peering"},"manual peering"),"."),(0,i.kt)("h2",{id:"communication-layer"},"Communication Layer"),(0,i.kt)("p",null,"The communication layer concerns the information propagated through the network layer, which is contained in objects called blocks. This layer forms a DAG with blocks as vertices called the ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/tangle"},"Tangle"),": a replicated, shared and distributed data structure that emerges\u2014through a combination of deterministic rules, cooperation, and virtual voting.\nSince nodes have finite capabilities, the number of blocks that the network can process is limited. Thus, the network might become overloaded, either simply because of honest heavy usage or because of malicious (spam) attacks. To protect the network from halting or even from getting inconsistent, the rate control (currently a static PoW) and ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/congestion_control"},"congestion control")," modules control when and how many blocks can be gossiped."),(0,i.kt)("h2",{id:"decentralized-application-layer"},"(Decentralized) Application Layer"),(0,i.kt)("p",null,"On top of the communication layer lives the application layer. Anybody can develop applications that run on this layer, and nodes can choose which applications to run. Of course, these applications can also be dependent on each other.\nThere are several core applications that must be run by all nodes, as the value transfer applications, which maintains the ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/ledgerstate"},"ledger state")," (including  advanced ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/advanced_outputs"},"output types"),"), and a quantity called ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/mana"},"Mana"),", that serves as a scarce resource as our Sybil protection mechanism.\nAdditionally, all nodes must run what we call the consensus applications, which regulate timestamps in the blocks and resolve conflicts.\nThe consensus mechanism implemented in GoShimmer is leaderless and consists out of multiple components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/next/goshimmer/protocol_specification/components/consensus_mechanism#approval-weight-aw"},"Approval Weight")," is an objective measure to determine the grade of finality of blocks and conflicts based on ",(0,i.kt)("a",{parentName:"li",href:"/next/goshimmer/protocol_specification/components/consensus_mechanism#Active-cMana"},"active cMana"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"/next/goshimmer/protocol_specification/components/consensus_mechanism#modular-conflict-selection-function"},"Modular Conflict Selection Function")," is an abstraction on how a node sets an initial opinion on conflicts based on the .")),(0,i.kt)("h2",{id:"data-flow---overview"},"Data Flow - Overview"),(0,i.kt)("p",null,"The diagram below represents the interaction between the different modules in the protocol (",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/implementation_design/event_driven_model"},"event driven"),"). Each blue box represents a component of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/develop/packages/tangle"},"Tangle codebase"),", which has events (in yellow boxes) that belong to it. Those events will trigger methods (the green boxes), that can also trigger other methods. This triggering is represented by the arrows in the diagram. Finally, the purple boxes represent events that do not belong to the component that triggered them."),(0,i.kt)("p",null,"As an example, take the Parser component. The function ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcessGossipBlock")," will trigger the method ",(0,i.kt)("inlineCode",{parentName:"p"},"Parse"),", which is the only entry to the component. There are three possible outcomes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser"),": triggering a ",(0,i.kt)("inlineCode",{parentName:"p"},"ParsingFailed")," event, a ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockRejected")," event, or a ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockParsed")," event. In the last case, the event will trigger the ",(0,i.kt)("inlineCode",{parentName:"p"},"StoreBlock")," method (which is the entry to the Storage component), whereas the first two events do not trigger any other component."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(29533).Z},(0,i.kt)("img",{alt:"Data Flow - Overview",src:o(44138).Z,title:"Data Flow - Overview",width:"3822",height:"3302"}))),(0,i.kt)("p",null,"We call this the data flow, i.e., the ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/protocol"},"life cycle of a block"),", from block reception (meaning that we focus here on the point of view of a node receiving a block issued by another node) up until acceptance in the Tangle. Notice that any block, either created locally by the node or received from a neighbor needs to pass through the data flow."),(0,i.kt)("h3",{id:"block-factory"},"Block Factory"),(0,i.kt)("p",null,"The IssuePayload function creates a valid payload which is provided to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateBlock")," method, along with a set of parents chosen with the Tip Selection Algorithm. Then, the Block Factory component is responsible to find a nonce compatible with the PoW requirements defined by the rate control module. Finally, the block is signed. Notice that the block generation should follow the rates imposed by the rate setter, as defined in ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/congestion_control#rate-setting"},"rate setting"),"."),(0,i.kt)("h3",{id:"parser"},"Parser"),(0,i.kt)("p",null,"The first step after the arrival of the block to the block inbox is the parsing, which consists of the following different filtering processes (meaning that the blocks that don't pass these steps will not be stored):"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bytes filter"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Recently Seen Bytes: it compares the incoming blocks with a pool of recently seen bytes to filter duplicates."),(0,i.kt)("li",{parentName:"ol"},"PoW check: it checks if the PoW requirements are met, currently set to the block hash starting with 22 zeroes.")),(0,i.kt)("p",null,"Followed by the bytes filters, the received bytes are parsed into a block and its corresponding payload and ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/tangle#syntactical-validation"},"syntactically validated"),". From now on, the filters operate on block objects rather than just bytes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Block filter"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Signature check: it checks if the block signature is valid."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/next/goshimmer/protocol_specification/components/tangle#block-timestamp-vs-transaction-timestamp"},"Timestamp Difference Check for transactions"),": it checks if the timestamps of the payload, and the block are consistent with each other")),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Only blocks that pass the Parser are stored, along with their metadata. Additionally, new blocks are stored as children of their parents, i.e., a reverse mapping that enables us to walk the Tangle into the future cone of a block."),(0,i.kt)("h3",{id:"solidifier"},"Solidifier"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/tangle#Solidification"},"Solidification")," is the process of requesting missing blocks. In this step, the node checks if all the past cone of the block is known; in the case that the node realizes that a block in the past cone is missing, it sends a request to its neighbors asking for that missing block. This process is recursively repeated until all of a block's past cone up to the genesis (or snapshot) becomes known to the node.\nThis way, the protocol enables any node to retrieve the entire block history, even for nodes that have just joined the network."),(0,i.kt)("h3",{id:"scheduler"},"Scheduler"),(0,i.kt)("p",null,"The scheduler makes sure that the network as a whole can operate with maximum throughput and minimum delays while providing consistency, fairness (according to aMana), and security. It, therefore, regulates the allowed influx of blocks to the network as a ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/congestion_control"},"congestion-control mechanism"),"."),(0,i.kt)("h3",{id:"booker"},"Booker"),(0,i.kt)("p",null,"After scheduling, the block goes to the booker. This step is different between blocks that contain a transaction payload and blocks that do not contain it."),(0,i.kt)("p",null,"In the case of a non-transaction payload, booking into the Tangle occurs after the conflicting parents conflicts check, i.e., after checking if the parents' conflicts contain sets of (two or more) transactions that belong to the same conflict set. In the case of this check not being successful, the block is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"invalid")," and not booked."),(0,i.kt)("p",null,"In the case of a transaction as payload, initially, the following check is done:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"UTXO check: it checks if the inputs of the transaction were already booked. If the block does not pass this check, the block is not booked. If it passes the check, it goes to the next block of steps."),(0,i.kt)("li",{parentName:"ol"},"Balances check: it checks if the sum of the values of the generated outputs equals the sum of the values of the consumed inputs. If the block does not pass this check, the block is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step."),(0,i.kt)("li",{parentName:"ol"},"Unlock conditions: checks if the unlock conditions are valid. If the block does not pass this check, the block is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step."),(0,i.kt)("li",{parentName:"ol"},"Inputs' conflicts validity check: it checks if all the consumed inputs belong to a valid conflict. If the block does not pass this check, the block is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step.")),(0,i.kt)("p",null,"After the objective checks, the following subjective checks are done:"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'Inputs\' conflicts rejection check: it checks if all the consumed inputs belong to a non-rejected conflict. Notice that this is not an objective check, so the node is susceptible (even if with a small probability) to have its opinion about rejected conflicts changed by a reorganization. For that reason, if the block does not pass this check, the block is booked into the Tangle and ledger state (even though the balances are not altered by this block, since it will be booked to a rejected conflict). This is what we call "lazy booking", which is done to avoid huge re-calculations in case of a reorganization of the ledger. If it passes the check, it goes to the next step.'),(0,i.kt)("li",{parentName:"ol"},"Double spend check: it checks if any of the inputs is conflicting with a transaction that was already confirmed. As in the last step, this check is not objective and, thus, if the block does not pass this check, it is lazy booked into the Tangle and ledger state, into an invalid conflict. If it passes the check, it goes to the next step.")),(0,i.kt)("p",null,"At this point, the missing steps are the most computationally expensive:"),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Inputs' conflicting conflicts check: it checks if the conflicts of the inputs are conflicting. As in the last step, if the block does not pass this check, the block is marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"invalid")," and not booked. If it passes the check, it goes to the next step."),(0,i.kt)("li",{parentName:"ol"},"Conflict check: it checks if the inputs are conflicting with an unconfirmed transaction. In this step, the conflict to which the block belongs is computed. In both cases (passing the check or not), the transaction is booked into the ledger state and the block is booked into the Tangle, but its conflict ID will be different depending on the outcome of the check.")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(93909).Z},(0,i.kt)("img",{alt:"Booker",src:o(17041).Z,title:"Booker",width:"1822",height:"621"}))),(0,i.kt)("p",null,"Finally, after a block is booked, it might become a ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/markers"},"marker")," (depending on the marker policy) and can be gossiped."),(0,i.kt)("h3",{id:"consensus-mechanism"},"Consensus Mechanism"),(0,i.kt)("p",null,"A detailed description can be found ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/consensus_mechanism"},"here"),"."),(0,i.kt)("h3",{id:"tip-manager"},"Tip Manager"),(0,i.kt)("p",null,"The first check done in the tip manager is the eligibility check (i.e., subjective timestamp is ok), after passing it, a block is said to be ",(0,i.kt)("inlineCode",{parentName:"p"},"eligible")," for tip selection (otherwise, it's ",(0,i.kt)("inlineCode",{parentName:"p"},"not eligible"),").\nIf a block is eligible for ",(0,i.kt)("a",{parentName:"p",href:"/next/goshimmer/protocol_specification/components/tangle#tsa"},"tip selection")," and its payload is ",(0,i.kt)("inlineCode",{parentName:"p"},"liked"),", along with all its weak past cone, the block is added to the strong tip pool and its parents are removed from the strong tip pool. If a block is eligible for tip selection, its payload is ",(0,i.kt)("inlineCode",{parentName:"p"},"liked")," but its conflict is not liked it is added to the weak tip pool."))}p.isMDXComponent=!0},93909:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/booker-b4b40d422eb236f9bd7bc84724245725.png"},29533:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/data-flow-ddec65cfe6be1a0e178ffdcf785e39fc.png"},32731:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/layers-8fa7d412981883f7a41d753629f40bab.png"},17041:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/booker-b4b40d422eb236f9bd7bc84724245725.png"},44138:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/data-flow-ddec65cfe6be1a0e178ffdcf785e39fc.png"},43839:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/layers-8fa7d412981883f7a41d753629f40bab.png"}}]);