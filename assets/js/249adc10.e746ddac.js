"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[26421],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7544:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(34259),c=n(18679),l=["components"],s={keywords:["functions","views","Funcs","ScFuncContext","ScViewContext","ScExports"],description:"The function call context provides as a predefined parameter to the smart contract function and allows you to access the functionality that the host sandbox interface provides.",image:"/img/logo/WASP_logo_dark.png"},u="Function Call Context",d={unversionedId:"guide/wasm_vm/context",id:"guide/wasm_vm/context",title:"Function Call Context",description:"The function call context provides as a predefined parameter to the smart contract function and allows you to access the functionality that the host sandbox interface provides.",source:"@site/content/build/wasp/production/documentation/docs/guide/wasm_vm/context.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/context",permalink:"/smart-contracts/guide/wasm_vm/context",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/wasm_vm/context.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","views","Funcs","ScFuncContext","ScViewContext","ScExports"],description:"The function call context provides as a predefined parameter to the smart contract function and allows you to access the functionality that the host sandbox interface provides.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"WasmLib Data Types",permalink:"/smart-contracts/guide/wasm_vm/types"},next:{title:"Smart Contract Schema Tool",permalink:"/smart-contracts/guide/schema/"}},p={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-call-context"},"Function Call Context"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/proxies"},"Proxy objects")," provide generic access capabilities to the data on the host. It\nis now time to introduce the gateway to the host that allows you to access the\nfunctionality that the host sandbox interface provides. We call this gateway the ",(0,r.kt)("em",{parentName:"p"},"function\ncall context"),"\n, and it is provided as a predefined parameter to the smart contract function. In fact, you can\ndistinguish two separate flavors of smart contract functions in the IOTA Smart Contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Func"),", which allows full mutable access to the smart contract state, and always\nresults in a state update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"View"),", which allows only limited, immutable access to the smart contract state, and\ntherefore does not result in a state update. Views can be used to efficiently query the\ncurrent state of the smart contract.")),(0,r.kt)("p",null,"To support this function type distinction, Func and View functions each receive a\nseparate, different function call context. Only the functionality that is necessary for\ntheir implementation can be accessed through their respective contexts, ",(0,r.kt)("inlineCode",{parentName:"p"},"ScFuncContext"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"ScViewContext"),". ScViewContext provides a limited, immutable subset of the full\nfunctionality provided by ScFuncContext. By having separate context types, compile-time\ntype-checking can be used to enforce their usage constraints."),(0,r.kt)("p",null,"An important part of setting up a smart contract is defining exactly which Funcs and Views\nare available and informing the host about them. The host will have to dispatch the\nfunction calls to the corresponding smart contract code. To that end, the smart contract\nWasm code will expose an externally callable function named ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load")," that will be called\nby the host upon initial loading of the smart contract code. The ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load")," function must\nprovide the host with the list of Funcs and Views, and specific identifiers that can be\nused to invoke them. It uses a special temporary function context named ",(0,r.kt)("inlineCode",{parentName:"p"},"ScExports"),". That\ncontext can be used to provide the host with a function, type, name, and identifier for\neach Func and View that can be called in the smart contract."),(0,r.kt)("p",null,"When the host need to call a smart contract function, it has to do it by invoking a second\nexternally callable function named ",(0,r.kt)("inlineCode",{parentName:"p"},"on_call"),". The host passes the identifier for the smart\ncontract Func or View that needs to be invoked. The client Wasm code will then use this\nidentifier to set up the corresponding function context and call the function. Note that\nthere are no other parameters necessary because the function can subsequently access any\nother function-related data through its context object."),(0,r.kt)("p",null,"Here is a (simplified) example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract that showcases\nsome features of WasmLib:"),(0,r.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func OnLoad() {\n    exports := wasmlib.NewScExports()\n    exports.AddFunc("divide", funcDivide)\n    exports.AddFunc("init", funcInit)\n    exports.AddFunc("member", funcMember)\n    exports.AddFunc("setOwner", funcSetOwner)\n    exports.AddView("getFactor", viewGetFactor)\n    exports.AddView("getOwner", viewGetOwner)\n}\n'))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn on_load() {\n    let exports = ScExports::new();\n    exports.add_func("divide", func_divide);\n    exports.add_func("init", func_init);\n    exports.add_func("member", func_member);\n    exports.add_func("setOwner", func_set_owner);\n    exports.add_view("getFactor", view_get_factor);\n    exports.add_view("getOwner", view_get_owner);\n}\n'))),(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export function on_load(): void {\n    let exports = new ScExports();\n    exports.addFunc("divide", funcDivide);\n    exports.addFunc("init", funcInit);\n    exports.addFunc("member", funcMember);\n    exports.addFunc("setOwner", funcSetOwner);\n    exports.addView("getFactor", viewGetFactor);\n    exports.addView("getOwner", viewGetOwner);\n}\n')))),(0,r.kt)("p",null,"The on_load() function first creates the required ScExports context, and\nthen proceeds to define four Funcs named ",(0,r.kt)("inlineCode",{parentName:"p"},"divide"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"member"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"setOwner"),". It\ndoes this by calling the add_func() method of the ScExports context. Next it defines two\nViews named ",(0,r.kt)("inlineCode",{parentName:"p"},"getFactor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getOwner")," by calling the addView() method of the ScExports\ncontext. The second parameter to these methods is the actual smart contract function\nassociated with the name specified. These methods will also automatically assign a unique\nidentifier to the function and then send everything to the host."),(0,r.kt)("p",null,"In its simplest form this is all that is necessary to initialize a smart contract. To\nfinalize this example, here is what the skeleton function implementations for the above\nsmart contract definition would look like:"),(0,r.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func funcDivide(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcDivide")\n}\n\nfunc funcInit(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcInit")\n}\n\nfunc funcMember(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcMember")\n}\n\nfunc funcSetOwner(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n}\n\nfunc viewGetFactor(ctx wasmlib.ScViewContext) {\n    ctx.Log("dividend.viewGetFactor")\n}\n\nfunc viewGetOwner(ctx wasmlib.ScViewContext) {\n    ctx.Log("dividend.viewGetOwner")\n}\n'))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn func_divide(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.divide");\n}\n\nfn func_init(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.init");\n}\n\nfn func_member(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.member");\n}\n\nfn func_set_owner(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.setOwner");\n}\n\nfn view_get_factor(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getFactor");\n}\n\nfn view_get_owner(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getOwner");\n}\n'))),(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export function func_divide(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.divide");\n}\n\nexport function func_init(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.init");\n}\n\nexport function func_member(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.member");\n}\n\nexport function func_set_owner(ctx: &ScFuncContext) {\n    ctx.log("Calling dividend.setOwner");\n}\n\nexport function view_get_factor(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getFactor");\n}\n\nexport function view_get_owner(ctx: &ScViewContext) {\n    ctx.log("Calling dividend.getOwner");\n}\n')))),(0,r.kt)("p",null,"As you can see, each function is provided with a context parameter, which is\nconventionally named ",(0,r.kt)("em",{parentName:"p"},"ctx"),". Notice that the four Funcs are passed an ScFuncContext,\nwhereas the two Views receive an ScViewContext."),(0,r.kt)("p",null,"This example also showcases an important feature of the contexts: the ",(0,r.kt)("inlineCode",{parentName:"p"},"log()")," method. This\ncan be used to log human-readable text to the host's log output. Logging text is the only\nway to add tracing to a smart contract, because it does not have any I/O capabilities\nother than what the host provides. There is a second logging method, called ",(0,r.kt)("inlineCode",{parentName:"p"},"trace()"),",\nthat can be used to provide extra debug information to the host's log output. The trace\noutput can be selectively turned on and off at the host."),(0,r.kt)("p",null,"In the next section we will introduce the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/"},(0,r.kt)("inlineCode",{parentName:"a"},"schema"))," tool that\nsimplifies smart contract programming a lot."))}h.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),o=n(86010),r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),o=n(67294),r=n(86010),i=n(51048),c=n(33609),l=n(1943),s=n(72957),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,x=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:x.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,c.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=x.find((function(e){return e.props.default})))?void 0:n.props.value)?t:x[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),k=y.tabGroupChoices,C=y.setTabGroupChoices,_=(0,o.useState)(b),T=_[0],S=_[1],N=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var F=k[h];null!=F&&F!==T&&g.some((function(e){return e.value===F}))&&S(F)}var E=function(e){var t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==T&&(O(t),S(a),null!=h&&C(h,String(a)))},V=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=N.indexOf(e.currentTarget)+1;n=null!=(a=N[o])?a:N[0];break;case"ArrowLeft":var r,i=N.indexOf(e.currentTarget)-1;n=null!=(r=N[i])?r:N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return N.push(e)},onKeyDown:V,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(x.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},x.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);