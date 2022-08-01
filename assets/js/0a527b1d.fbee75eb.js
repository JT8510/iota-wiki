"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59856],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=c(n),d=i,m=k["".concat(s,".").concat(d)]||k[d]||p[d]||l;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],o={description:"The `blocklog` contract keeps track of the blocks of requests that were processed by the chain.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","blocklog","views","information","request status","receipts","events","reference"]},s="The `blocklog` Contract",c={unversionedId:"guide/core_concepts/core_contracts/blocklog",id:"guide/core_concepts/core_contracts/blocklog",title:"The `blocklog` Contract",description:"The `blocklog` contract keeps track of the blocks of requests that were processed by the chain.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/blocklog.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/blocklog",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/blocklog",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/blocklog.md",tags:[],version:"current",frontMatter:{description:"The `blocklog` contract keeps track of the blocks of requests that were processed by the chain.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","blocklog","views","information","request status","receipts","events","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `blob` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/blob"},next:{title:"The `governance` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/governance"}},u={},p=[{value:"Entry Points",id:"entry-points",level:2},{value:"Views",id:"views",level:2},{value:"<code>getBlockInfo(n uint32)</code>",id:"getblockinfon-uint32",level:3},{value:"<code>getRequestIDsForBlock(n uint32)</code>",id:"getrequestidsforblockn-uint32",level:3},{value:"<code>getRequestReceipt(u RequestID)</code>",id:"getrequestreceiptu-requestid",level:3},{value:"<code>getRequestReceiptsForBlock(n uint32)</code>",id:"getrequestreceiptsforblockn-uint32",level:3},{value:"<code>isRequestProcessed(u RequestID)</code>",id:"isrequestprocessedu-requestid",level:3},{value:"<code>getEventsForRequest(u RequestID)</code>",id:"geteventsforrequestu-requestid",level:3},{value:"<code>getEventsForBlock(n blockIndex)</code>",id:"geteventsforblockn-blockindex",level:3},{value:"<code>getEventsForContract(h Hname)</code>",id:"geteventsforcontracth-hname",level:3},{value:"<code>controlAddresses()</code>",id:"controladdresses",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>RequestID</code>",id:"requestid",level:3},{value:"<code>BlockInfo</code>",id:"blockinfo",level:3},{value:"<code>RequestReceipt</code>",id:"requestreceipt",level:3}],k={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-blocklog-contract"},"The ",(0,l.kt)("inlineCode",{parentName:"h1"},"blocklog")," Contract"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"blocklog")," contract is one of the ",(0,l.kt)("a",{parentName:"p",href:"/smart-contracts/develop/overview"},"core contracts")," on each IOTA Smart Contracts chain."),(0,l.kt)("p",null,"The purpose of the ",(0,l.kt)("inlineCode",{parentName:"p"},"blocklog")," contract is to keep track of the blocks of requests that were processed by the chain, providing views to get request status, receipts, block and event details."),(0,l.kt)("h2",{id:"entry-points"},"Entry Points"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"blocklog")," core contract does not contain any entry points which modify its\nstate."),(0,l.kt)("p",null,"The only way to modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"blocklog")," state is by submitting requests for\nprocessing to the chain."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"views"},"Views"),(0,l.kt)("h3",{id:"getblockinfon-uint32"},(0,l.kt)("inlineCode",{parentName:"h3"},"getBlockInfo(n uint32)")),(0,l.kt)("p",null,"Returns information about the block with index ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),"): The block index. Default: the latest block.")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n"),": (",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"i"),": (",(0,l.kt)("a",{parentName:"li",href:"#blockinfo"},(0,l.kt)("inlineCode",{parentName:"a"},"BlockInfo")),") The information about the block")),(0,l.kt)("h3",{id:"getrequestidsforblockn-uint32"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRequestIDsForBlock(n uint32)")),(0,l.kt)("p",null,"Returns a list with the IDs of all requests in the block with block index ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index. Default: the latest block.")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"u")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,l.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,l.kt)("a",{parentName:"li",href:"#requestid"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestID")),")")),(0,l.kt)("h3",{id:"getrequestreceiptu-requestid"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRequestReceipt(u RequestID)")),(0,l.kt)("p",null,"Returns the receipt for the request with the given ID."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"u")," (",(0,l.kt)("a",{parentName:"li",href:"#requestid"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestID")),") The request ID")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"d")," (",(0,l.kt)("a",{parentName:"li",href:"#requestreceipt"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestReceipt")),") The request receipt"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n")," (",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"r")," (",(0,l.kt)("inlineCode",{parentName:"li"},"uint16"),") The request index")),(0,l.kt)("h3",{id:"getrequestreceiptsforblockn-uint32"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRequestReceiptsForBlock(n uint32)")),(0,l.kt)("p",null,"Returns all the receipts in the block with index ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index. Default: the latest block.")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"d")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,l.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,l.kt)("a",{parentName:"li",href:"#requestreceipt"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestReceipt")),")")),(0,l.kt)("h3",{id:"isrequestprocessedu-requestid"},(0,l.kt)("inlineCode",{parentName:"h3"},"isRequestProcessed(u RequestID)")),(0,l.kt)("p",null,"Returns whether the request with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"u")," has been processed."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"u")," (",(0,l.kt)("a",{parentName:"li",href:"#requestid"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestID")),") The request ID")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p")," (",(0,l.kt)("inlineCode",{parentName:"li"},"bool"),") Whether the request was processed or not.")),(0,l.kt)("h3",{id:"geteventsforrequestu-requestid"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEventsForRequest(u RequestID)")),(0,l.kt)("p",null,"Returns the list of events triggered during the execution of the request with ID ",(0,l.kt)("inlineCode",{parentName:"p"},"u"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"u")," (",(0,l.kt)("a",{parentName:"li",href:"#requestid"},(0,l.kt)("inlineCode",{parentName:"a"},"RequestID")),") The request ID")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"e")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,l.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,l.kt)("inlineCode",{parentName:"li"},"[]byte"),")")),(0,l.kt)("h3",{id:"geteventsforblockn-blockindex"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEventsForBlock(n blockIndex)")),(0,l.kt)("p",null,"Returns the list of events triggered during the execution of all requests in the block with index ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n")," (optional ",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index. Default: the latest block.")),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"e")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,l.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,l.kt)("inlineCode",{parentName:"li"},"[]byte"),")")),(0,l.kt)("h3",{id:"geteventsforcontracth-hname"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEventsForContract(h Hname)")),(0,l.kt)("p",null,"Returns a list of events triggered by the smart contract with hname ",(0,l.kt)("inlineCode",{parentName:"p"},"h"),"."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"h")," (",(0,l.kt)("inlineCode",{parentName:"li"},"hname"),") The smart contract hname."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"f")," (optional ",(0,l.kt)("inlineCode",{parentName:"li"},"uint32")," - default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),') "From" block index'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"t")," (optional ",(0,l.kt)("inlineCode",{parentName:"li"},"uint32")," - default: ",(0,l.kt)("inlineCode",{parentName:"li"},"MaxUint32"),') "To" block index')),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"e")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,l.kt)("inlineCode",{parentName:"a"},"Array16"))," of ",(0,l.kt)("inlineCode",{parentName:"li"},"[]byte"),")")),(0,l.kt)("h3",{id:"controladdresses"},(0,l.kt)("inlineCode",{parentName:"h3"},"controlAddresses()")),(0,l.kt)("p",null,"Returns the current state controller and governing addresses, and at what block index they were set."),(0,l.kt)("p",null,"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s"),": (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,l.kt)("inlineCode",{parentName:"a"},"iotago::Address")),") The state controller address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g"),": (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,l.kt)("inlineCode",{parentName:"a"},"iotago::Address")),") The governing address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n"),": (",(0,l.kt)("inlineCode",{parentName:"li"},"uint32"),") The block index where the specified addresses were set")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("h3",{id:"requestid"},(0,l.kt)("inlineCode",{parentName:"h3"},"RequestID")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestID")," is encoded as the concatenation of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Transaction ID (",(0,l.kt)("inlineCode",{parentName:"li"},"[32]byte"),")"),(0,l.kt)("li",{parentName:"ul"},"Transaction output index (",(0,l.kt)("inlineCode",{parentName:"li"},"uint16"),")")),(0,l.kt)("h3",{id:"blockinfo"},(0,l.kt)("inlineCode",{parentName:"h3"},"BlockInfo")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BlockInfo")," is encoded as the concatenation of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The block timestamp (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64")," UNIX nanoseconds)"),(0,l.kt)("li",{parentName:"ul"},"Amount of requests in the block (",(0,l.kt)("inlineCode",{parentName:"li"},"uint16"),")"),(0,l.kt)("li",{parentName:"ul"},"Amount of successful requests (",(0,l.kt)("inlineCode",{parentName:"li"},"uint16"),")"),(0,l.kt)("li",{parentName:"ul"},"Amount of off-ledger requests (",(0,l.kt)("inlineCode",{parentName:"li"},"uint16"),")"),(0,l.kt)("li",{parentName:"ul"},"Anchor transaction ID (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/transaction.go"},(0,l.kt)("inlineCode",{parentName:"a"},"iotago::TransactionID")),")"),(0,l.kt)("li",{parentName:"ul"},"Anchor transaction sub-essence hash (",(0,l.kt)("inlineCode",{parentName:"li"},"[32]byte"),")"),(0,l.kt)("li",{parentName:"ul"},"Previous L1 commitment (except for block index 0)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"State commitment (",(0,l.kt)("inlineCode",{parentName:"li"},"trie::VCommitment"),")"),(0,l.kt)("li",{parentName:"ul"},"Block hash (",(0,l.kt)("inlineCode",{parentName:"li"},"[20]byte"),")"))),(0,l.kt)("li",{parentName:"ul"},"Total base tokens in L2 accounts (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,l.kt)("li",{parentName:"ul"},"Total storage deposit (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,l.kt)("li",{parentName:"ul"},"Gas burned (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,l.kt)("li",{parentName:"ul"},"Gas fee charged (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")")),(0,l.kt)("h3",{id:"requestreceipt"},(0,l.kt)("inlineCode",{parentName:"h3"},"RequestReceipt")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RequestReceipt")," is encoded as the concatenation of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gas budget (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,l.kt)("li",{parentName:"ul"},"Gas burned (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,l.kt)("li",{parentName:"ul"},"Gas fee charged (",(0,l.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,l.kt)("li",{parentName:"ul"},"The request (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/wasp/blob/develop/packages/isc/request.go"},(0,l.kt)("inlineCode",{parentName:"a"},"isc::Request")),")"),(0,l.kt)("li",{parentName:"ul"},"Whether the request produced an error (",(0,l.kt)("inlineCode",{parentName:"li"},"bool"),")"),(0,l.kt)("li",{parentName:"ul"},"If the request produced an error, the\n",(0,l.kt)("a",{parentName:"li",href:"/smart-contracts/develop/guide/core_concepts/core_contracts/errors#unresolvedvmerror"},(0,l.kt)("inlineCode",{parentName:"a"},"UnresolvedVMError")))))}d.isMDXComponent=!0}}]);