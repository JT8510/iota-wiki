"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,v=d["".concat(u,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),s=n(34259),o=n(18679);const i={keywords:["functions","state","structures","storage","named fields"],description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",image:"/img/logo/WASP_logo_dark.png"},u="Triggering Events",l={unversionedId:"guide/wasm_vm/events",id:"guide/wasm_vm/events",title:"Triggering Events",description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",source:"@site/shimmer/external/wasp/documentation/docs/guide/wasm_vm/events.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/events",permalink:"/shimmer/smart-contracts/guide/wasm_vm/events",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/wasm_vm/events.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","state","structures","storage","named fields"],description:"The smart contracts can trigger events that the user can subscribe to and that convey changes to its state.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract State",permalink:"/shimmer/smart-contracts/guide/wasm_vm/state"},next:{title:"Function Definitions",permalink:"/shimmer/smart-contracts/guide/wasm_vm/funcs"}},c={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"triggering-events"},"Triggering Events"),(0,a.kt)("p",null,"Smart contracts do not live in a vacuum. Even though they run in a very limited sandbox,\nfrom a larger perspective there will have to be a way for users to interact with them.\nSince smart contracts are essentially event-driven, and requests run asynchronously from\nthe user's perspective, there is a need for triggering events by the smart contracts\nthemselves. Of course, it would be possible for users to periodically call a view function\nto retrieve the latest state of the smart contract, but this burdens the nodes\nunnecessarily. A better way is to have the smart contracts trigger events that the user\ncan subscribe to and that convey changes to its state."),(0,a.kt)("p",null,"To support events the ISC sandbox provides only a very rudimentary interface. The\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/context"},"function call context")," exposes this interface through its ",(0,a.kt)("inlineCode",{parentName:"p"},"event()"),"\nfunction, which takes a completely arbitrary text string as parameter. It is up to the\nsmart contract creator to format this text string in a meaningful way, and it's up to the\nuser to interpret this text string correctly. This is error-prone, inconsistent, and means\nthat a lot of code needs to be written both on the smart contract side that generates\nthese events, and on the client side that handles these events. And with any change to the\nformatting of these events both ends need to be modified to stay in sync."),(0,a.kt)("p",null,"This is why the ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/usage"},"schema tool")," allows you to define your own structured events.\nThe schema tool will generate a structure that will become part of all Func call contexts.\nEvents can only be triggered from within a func. They will become part of the state of the\nsmart contract because every event is logged in the core ",(0,a.kt)("inlineCode",{parentName:"p"},"blocklog")," contract. Therefore,\nevents cannot be triggered from within a View."),(0,a.kt)("p",null,"For each event defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," section of the schema definition file, this events\nstructure will contain a member function that takes the defined types of parameters and\nwill automatically encode the event as a consistently formatted string and pass it to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"event()")," function. The string consists of the name of the event, a timestamp, and string\nrepresentations of each field, all separated by vertical bars."),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," section that can be found in the demo ",(0,a.kt)("inlineCode",{parentName:"p"},"fairroulette")," smart contract:"),(0,a.kt)(s.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"events:\n  bet:\n    address: Address # address of better\n    amount: Uint64 # amount of tokens to bet\n    number: Uint16 # number to bet on\n  payout:\n    address: Address # address of winner\n    amount: Uint64 # amount of tokens won\n  round:\n    number: Uint32 # current betting round number\n  start:\n  stop:\n  winner:\n    number: Uint16 # the winning number\n")))),(0,a.kt)("p",null,"The schema tool will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"events.xx")," which contains the following code for the\nFairRouletteEvents struct:"),(0,a.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package fairroulette\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib"\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes"\n\ntype FairRouletteEvents struct {\n}\n\nfunc (e FairRouletteEvents) Bet(\n    // address of better\n    address wasmtypes.ScAddress,\n    // amount of tokens to bet\n    amount uint64,\n    // number to bet on\n    number uint16,\n) {\n    evt := wasmlib.NewEventEncoder("fairroulette.bet")\n    evt.Encode(wasmtypes.AddressToString(address))\n    evt.Encode(wasmtypes.Uint64ToString(amount))\n    evt.Encode(wasmtypes.Uint16ToString(number))\n    evt.Emit()\n}\n\nfunc (e FairRouletteEvents) Payout(\n    // address of winner\n    address wasmtypes.ScAddress,\n    // amount of tokens won\n    amount uint64,\n) {\n    evt := wasmlib.NewEventEncoder("fairroulette.payout")\n    evt.Encode(wasmtypes.AddressToString(address))\n    evt.Encode(wasmtypes.Uint64ToString(amount))\n    evt.Emit()\n}\n\nfunc (e FairRouletteEvents) Round(\n    // current betting round number\n    number uint32,\n) {\n    evt := wasmlib.NewEventEncoder("fairroulette.round")\n    evt.Encode(wasmtypes.Uint32ToString(number))\n    evt.Emit()\n}\n\nfunc (e FairRouletteEvents) Start() {\n    evt := wasmlib.NewEventEncoder("fairroulette.start")\n    evt.Emit()\n}\n\nfunc (e FairRouletteEvents) Stop() {\n    evt := wasmlib.NewEventEncoder("fairroulette.stop")\n    evt.Emit()\n}\n\nfunc (e FairRouletteEvents) Winner(\n    // the winning number\n    number uint16,\n) {\n    evt := wasmlib.NewEventEncoder("fairroulette.winner")\n    evt.Encode(wasmtypes.Uint16ToString(number))\n    evt.Emit()\n}\n'))),(0,a.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\npub struct FairRouletteEvents {\n}\n\nimpl FairRouletteEvents {\n\n    pub fn bet(&self,\n        // address of better\n        address: &ScAddress,\n        // amount of tokens to bet\n        amount: u64,\n        // number to bet on\n        number: u16,\n    ) {\n        let mut evt = EventEncoder::new("fairroulette.bet");\n        evt.encode(&address_to_string(&address));\n        evt.encode(&uint64_to_string(amount));\n        evt.encode(&uint16_to_string(number));\n        evt.emit();\n    }\n\n    pub fn payout(&self,\n        // address of winner\n        address: &ScAddress,\n        // amount of tokens won\n        amount: u64,\n    ) {\n        let mut evt = EventEncoder::new("fairroulette.payout");\n        evt.encode(&address_to_string(&address));\n        evt.encode(&uint64_to_string(amount));\n        evt.emit();\n    }\n\n    pub fn round(&self,\n        // current betting round number\n        number: u32,\n    ) {\n        let mut evt = EventEncoder::new("fairroulette.round");\n        evt.encode(&uint32_to_string(number));\n        evt.emit();\n    }\n\n    pub fn start(&self) {\n        let mut evt = EventEncoder::new("fairroulette.start");\n        evt.emit();\n    }\n\n    pub fn stop(&self) {\n        let mut evt = EventEncoder::new("fairroulette.stop");\n        evt.emit();\n    }\n\n    pub fn winner(&self,\n        // the winning number\n        number: u16,\n    ) {\n        let mut evt = EventEncoder::new("fairroulette.winner");\n        evt.encode(&uint16_to_string(number));\n        evt.emit();\n    }\n}\n'))),(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib";\nimport * as wasmtypes from "wasmlib/wasmtypes";\n\nexport class FairRouletteEvents {\n\n    bet(\n        // address of better\n        address: wasmtypes.ScAddress,\n        // amount of tokens to bet\n        amount: u64,\n        // number to bet on\n        number: u16,\n    ): void {\n        const evt = new wasmlib.EventEncoder("fairroulette.bet");\n        evt.encode(wasmtypes.addressToString(address));\n        evt.encode(wasmtypes.uint64ToString(amount));\n        evt.encode(wasmtypes.uint16ToString(number));\n        evt.emit();\n    }\n\n    payout(\n        // address of winner\n        address: wasmtypes.ScAddress,\n        // amount of tokens won\n        amount: u64,\n    ): void {\n        const evt = new wasmlib.EventEncoder("fairroulette.payout");\n        evt.encode(wasmtypes.addressToString(address));\n        evt.encode(wasmtypes.uint64ToString(amount));\n        evt.emit();\n    }\n\n    round(\n        // current betting round number\n        number: u32,\n    ): void {\n        const evt = new wasmlib.EventEncoder("fairroulette.round");\n        evt.encode(wasmtypes.uint32ToString(number));\n        evt.emit();\n    }\n\n    start(): void {\n        const evt = new wasmlib.EventEncoder("fairroulette.start");\n        evt.emit();\n    }\n\n    stop(): void {\n        const evt = new wasmlib.EventEncoder("fairroulette.stop");\n        evt.emit();\n    }\n\n    winner(\n        // the winning number\n        number: u16,\n    ): void {\n        const evt = new wasmlib.EventEncoder("fairroulette.winner");\n        evt.encode(wasmtypes.uint16ToString(number));\n        evt.emit();\n    }\n}\n')))),(0,a.kt)("p",null,"Notice how the generated functions use the WasmLib EventEncoder to encode the parameters\ninto a single string before emitting it. Here is the way in which ",(0,a.kt)("inlineCode",{parentName:"p"},"fairroulette")," emits the\n",(0,a.kt)("inlineCode",{parentName:"p"},"bet")," event in its smart contract code:"),(0,a.kt)(s.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    f.Events.Bet(bet.Better.Address(), bet.Amount, bet.Number)\n"))),(0,a.kt)(o.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"    f.events.bet(&bet.better.address(), bet.amount, bet.number);\n"))),(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"    f.events.bet(bet.better.address(), bet.amount, bet.number);\n")))),(0,a.kt)("p",null,"The smart contract client code can define handler functions to listen in to the event\nstream and respond to any events it deems noteworthy. The schema tool will automatically\ngenerate the necessary client side code that properly listens for the events, parses the\nevent strings into a type-safe structure, and passes this structure to the corresponding\nhandler function."),(0,a.kt)("p",null,"In the next section we will explore how the schema tool helps to simplify smart contract\n",(0,a.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/funcs"},"function definitions"),"."))}p.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),a=n(67294),s=n(86010),o=n(51048),i=n(33609),u=n(1943),l=n(72957);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:p,groupId:v,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,u.U)(),[k,T]=(0,a.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=v){const e=y[v];null!=e&&e!==k&&h.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==k&&(x(t),T(r),null!=v&&E(v,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>N.push(e),onKeyDown:_,onFocus:S,onClick:S},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);