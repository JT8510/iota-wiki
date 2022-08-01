"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84890],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=s,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var o=n(87462),s=n(63366),r=(n(67294),n(3905)),a=["components"],i={keywords:["Smart Contracts","Consensus"],description:"IOTA Smart Contracts Consensus",image:"/img/logo/WASP_logo_dark.png"},c="Consensus",u={unversionedId:"guide/core_concepts/consensus",id:"guide/core_concepts/consensus",title:"Consensus",description:"IOTA Smart Contracts Consensus",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/consensus.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/consensus",permalink:"/smart-contracts/guide/core_concepts/consensus",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/consensus.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Consensus"],description:"IOTA Smart Contracts Consensus",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/smart-contracts/guide/core_concepts/validators"},next:{title:"State, Transitions, and State Anchoring",permalink:"/smart-contracts/guide/core_concepts/states"}},l={},h=[{value:"Consensus on computations",id:"consensus-on-computations",level:2},{value:"Proof of consensus",id:"proof-of-consensus",level:2},{value:"The Consensus Algorithm",id:"the-consensus-algorithm",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consensus"},"Consensus"),(0,r.kt)("h2",{id:"consensus-on-computations"},"Consensus on computations"),(0,r.kt)("p",null,"Even if all committee nodes are honest (i.e. they have no malicious intent), there are factors which may make each node see things differently. This can lead to different inputs to the same program on different nodes and, consequently, to different results."),(0,r.kt)("p",null,"There are several possible reasons for such an apparently non-deterministic outcome."),(0,r.kt)("p",null,"Each committee node has its own access to the UTXO ledger, i.e. committee nodes are usually connected to different IOTA nodes. The reason for this is to not make access to the UTXO ledger a single point of failure, i.e. we also want access to the Tangle to be distributed. This may often lead to a slightly different perception of some aspects of the ledger, for example of the token balance in a particular address. Also, each node has its own local clock and those clocks may be slightly skewed, so there isn\u2019t an objective time for nodes."),(0,r.kt)("p",null,"The requests (UTXOs) may reach Wasp nodes in an arbitrary order and with arbitrary delays (even if these are usually close to the network latency)."),(0,r.kt)("p",null,"Before starting calculations, nodes are required to have consensus on the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The current state of the chain i.e. on the state output"),(0,r.kt)("li",{parentName:"ul"},"Timestamp to be used for the next state transaction"),(0,r.kt)("li",{parentName:"ul"},"Ordered batch of requests to be processed"),(0,r.kt)("li",{parentName:"ul"},"Address where node fees for processing the request must be sent (if enabled)"),(0,r.kt)("li",{parentName:"ul"},"Mana pledge targets")),(0,r.kt)("p",null,"In order to achieve a bigger throughput, the committee picks requests from the on-ledger backlog and processes requests in batches, not one by one. This means the committee has to have a consensus on the batch of the requests and the order of the requests in the batch. After at least a quorum of committee nodes have a consensus on the above, honest committee members will always produce identical results of calculations."),(0,r.kt)("h2",{id:"proof-of-consensus"},"Proof of consensus"),(0,r.kt)("p",null,"Suppose a quorum of committee nodes has reached consensus on inputs and produced identical results, these being the block of state updates and the anchor transaction."),(0,r.kt)("p",null,"The anchor transaction contains chain state transition, the AliasOutput and token transfers, so it must be signed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is only possible to produce valid signatures of inputs of the anchor transaction by the quorum")," of nodes. In this case, a confirmed anchor transaction becomes a cryptographical ",(0,r.kt)("strong",{parentName:"p"},"proof of consensus")," in the committee.  "),(0,r.kt)("p",null,"To achieve this, IOTA Smart Contracts uses ",(0,r.kt)("strong",{parentName:"p"},"BLS threshold signatures in combination with polynomial (Shamir) secret sharing")," to identify the address controlling the chain state. In order for the secret keys to be distributed across the chain validators, a DKG (Distributed Key Generation) procedure is executed when starting a chain (using the Rabin-Gennaro algorithm)."),(0,r.kt)("h2",{id:"the-consensus-algorithm"},"The Consensus Algorithm"),(0,r.kt)("p",null,"The committee is of fixed size, thus we use a Byzantine Fault Tolerant (BFT) Algorithm, which guarantees consistency and byzantine fault tolerance if less than \u2153 of nodes are malicious."),(0,r.kt)("p",null,"As a basis for the IOTA Smart Contracts consensus, the Asynchronous Common Subset (ACS) part of the HoneyBadgerBFT algorithm is used, with the exception of how the proposals are combined."),(0,r.kt)("p",null,"The rest of the consensus algorithm is built on top of the ACS. Each node supplies to the ACS its batch proposal which indicates a set of Request IDs, a timestamp, consensus and access mana pledge addresses, fee destination and a partial signature for generating non-forgeable entropy. Upon termination of the ACS, each honest node gets the same set of such proposals and aggregates them into the final batch in a deterministic way."),(0,r.kt)("p",null,"It is ensured that all honest nodes have the same input for the VM. After running the selected batch, the VM results are then collectively signed using the threshold signature. The signed transaction can be published by any node at this point. In order to minimize the load on the IOTA network, the nodes calculate a delay for posting the transaction to the network based on a deterministic permutation of the nodes relative to the local perception of time."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The comprehensive overview of architectural design decisions of IOTA Smart Contracts can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/raw/master/documentation/ISC_WP_Nov_10_2021.pdf"},"whitepaper"),".  ")))}p.isMDXComponent=!0}}]);