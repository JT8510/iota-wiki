"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(34259),l=n(18679);const s={keywords:["functions","schema tool","definition file","Rust","Go","init","json","yml"],description:"The `schema` tool will assist in creating a smart contract as unobtrusively as possible.",image:"/img/logo/WASP_logo_dark.png"},i="Using the Schema Tool",u={unversionedId:"guide/wasm_vm/usage",id:"guide/wasm_vm/usage",title:"Using the Schema Tool",description:"The `schema` tool will assist in creating a smart contract as unobtrusively as possible.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/usage.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/usage",permalink:"/next/smart-contracts/develop/guide/wasm_vm/usage",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/usage.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","schema tool","definition file","Rust","Go","init","json","yml"],description:"The `schema` tool will assist in creating a smart contract as unobtrusively as possible.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Schema Tool",permalink:"/next/smart-contracts/develop/guide/wasm_vm/schema"},next:{title:"Data Access Proxies",permalink:"/next/smart-contracts/develop/guide/wasm_vm/proxies"}},c={},m=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Creating Smart Contracts using AssemblyScript",id:"creating-smart-contracts-using-assemblyscript",level:3}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-schema-tool"},"Using the Schema Tool"),(0,o.kt)("p",null,"We tried to make the creation of smart contracts as simple as possible. The ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),"\ntool will assist you along the way as unobtrusively as possible. This section will walk you\nthrough the steps to create a new smart contract from scratch."),(0,o.kt)("p",null,"First, you need to decide on a central folder where you want to keep all your smart\ncontracts. Each smart contract you create will be maintained in a separate subfolder of\nthis folder. We will use certain naming conventions that the schema tool expects\nthroughout this section. First we will select a ",(0,o.kt)("em",{parentName:"p"},"camel case")," name for our smart contract.\nFor our example, ",(0,o.kt)("inlineCode",{parentName:"p"},"MySmartContract"),"."),(0,o.kt)("p",null,"Once you know what your smart contract will be named, it is time to set up your subfolder.\nSimply navigate to the central smart contract folder, and run the schema tool's\ninitialization function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"schema -init MySmartContract\n")),(0,o.kt)("p",null,"This command will create a subfolder named ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract")," and generate an initial YAML\nschema definition file inside this subfolder. Note that the generated subfolder name is\nall lower case. This is to conform to best practices for package names in most languages.\nThe generated schema definition file looks like this:"),(0,o.kt)(r.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: MySmartContract\ndescription: MySmartContract description\nevents: {}\nstructs: {}\ntypedefs: {}\nstate:\n  owner: AgentID // current owner of this smart contract\nfuncs:\n  init:\n    params:\n      owner: AgentID? // optional owner of this smart contract\n  setOwner:\n    access: owner // current owner of this smart contract\n    params:\n      owner: AgentID // new owner of this smart contract\nviews:\n  getOwner:\n    results:\n      owner: AgentID // current owner of this smart contract\n")))),(0,o.kt)("p",null,"The schema definition file has been pre-populated with all sections that you could need,\nand some functions that allow you to maintain the ownership of the smart contract. Now\nthat the schema definition file exists, it is up to you to modify it further to reflect\nthe requirements of your smart contract."),(0,o.kt)("p",null,"You should use ",(0,o.kt)("em",{parentName:"p"},"camel case")," naming convention throughout the schema definition file when\nnaming items. Function and variable names always start with a lower case character, and\ntype names always start with an upper case character."),(0,o.kt)("p",null,"The first thing you may want to do is to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," field to something more\nsensible. And if you already know how to use the schema tool, then now is the moment to\nfill out some sections with the definitions you know you will need."),(0,o.kt)("p",null,"The next step is to navigateo into the new ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract")," subfolder and run the schema\ntool there to generate the initial code for the desired language:"),(0,o.kt)(r.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("p",null,"If you want to generate Go code, you should run the schema tool with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"-go")," option like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"schema -go\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("p",null,"If you want to generate Rust code, you should run the schema tool with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"-rust")," option like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"schema -rust\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("p",null,"If you want to generate TypeScript code, you should run the schema tool with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"-ts")," option like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"schema -ts\n")))),(0,o.kt)("p",null,"If you want to generate more than one language your can simply specify multiple options.\nFor example, to generate both Rust and Go code you would specify both options like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"schema -rust -go\n")),(0,o.kt)("p",null,"The schema tool will generate a complete set of source files for the desired language(s),\nthat will compile successfully into a Wasm code file. You compile these as follows:"),(0,o.kt)(r.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tinygo build -target wasm go/main.go\n")),(0,o.kt)("p",null,"This will use the Go source files in the go/mysmartcontract subfolder. The only file in\nthis folder that you should edit manually is ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract.go"),". All other source files\nwill be regenerated and overwritten whenever the schema tool is run again."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://tinygo.org/"},"TinyGo")," documentation for more build options.")),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("p",null,"After generating the Rust code, you should first modify the Cargo.toml file to your\nliking, and potentially add the new project to a Rust workspace. Cargo.toml will not be\nregenerated once it already exists. Then build the code as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wasm-pack build\n")),(0,o.kt)("p",null,"This will use Rust source files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," subfolder. The only file in this folder that\nyou should edit manually is ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract.rs"),". All other source files will be\nregenerated and overwritten whenever the schema tool is run again."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-pack/"},"wasm-pack")," documentation for more build\noptions.")),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx asc ts/mysmartcontract/lib.ts --outFile mysmartcontract_ts.wasm --lib path/to/node_modules\n")),(0,o.kt)("p",null,"This will use the TypeScript source files in the ts/mysmartcontract subfolder. The only\nfile in this folder that you should edit manually is ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract.ts"),". All other\nsource files will be regenerated and overwritten whenever the schema tool is run again."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.assemblyscript.org/"},"AssemblyScript")," documentation for more build\noptions."))),(0,o.kt)("p",null,"The generated code is essentially identical for each language, barring some language\nidiosyncrasy differences. Just view different language files with the same name next to,\neach other, and you will see what we mean."),(0,o.kt)("p",null,"Here is an example of the initially generated code, ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract.xx")," looks like this\nbefore you even start modifying it:"),(0,o.kt)(r.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package mysmartcontract\n\nimport "github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib"\n\n\nfunc funcInit(ctx wasmlib.ScFuncContext, f *InitContext) {\n    if f.Params.Owner().Exists() {\n        f.State.Owner().SetValue(f.Params.Owner().Value())\n        return\n    }\n    f.State.Owner().SetValue(ctx.RequestSender())\n}\n\nfunc funcSetOwner(ctx wasmlib.ScFuncContext, f *SetOwnerContext) {\n    f.State.Owner().SetValue(f.Params.Owner().Value())\n}\n\nfunc viewGetOwner(ctx wasmlib.ScViewContext, f *GetOwnerContext) {\n    f.Results.Owner().SetValue(f.State.Owner().Value())\n}\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\n\nuse crate::*;\n\npub fn func_init(ctx: &ScFuncContext, f: &InitContext) {\n    if f.params.owner().exists() {\n        f.state.owner().set_value(&f.params.owner().value());\n        return;\n    }\n    f.state.owner().set_value(&ctx.request_sender());\n}\n\npub fn func_set_owner(_ctx: &ScFuncContext, f: &SetOwnerContext) {\n    f.state.owner().set_value(&f.params.owner().value());\n}\n\npub fn view_get_owner(_ctx: &ScViewContext, f: &GetOwnerContext) {\n    f.results.owner().set_value(&f.state.owner().value());\n}\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "wasmlib";\nimport * as wasmtypes from "wasmlib/wasmtypes";\nimport * as sc from "./index";\n\nexport function funcInit(ctx: wasmlib.ScFuncContext, f: sc.InitContext): void {\n    if (f.params.owner().exists()) {\n        f.state.owner().setValue(f.params.owner().value());\n        return;\n    }\n    f.state.owner().setValue(ctx.requestSender());\n}\n\nexport function funcSetOwner(ctx: wasmlib.ScFuncContext, f: sc.SetOwnerContext): void {\n    f.state.owner().setValue(f.params.owner().value());\n}\n\nexport function viewGetOwner(ctx: wasmlib.ScViewContext, f: sc.GetOwnerContext): void {\n    f.results.owner().setValue(f.state.owner().value());\n}\n')))),(0,o.kt)("p",null,"As you can see the schema tool even generated an initial working version of the functions\nthat are used to maintain the smart contract owner that will suffice for most cases."),(0,o.kt)("p",null,"For a smooth building experience it is a good idea to set up a build rule in your build\nenvironment that runs the schema tool with the required parameters whenever the schema\ndefinition file changes. That way regeneration of files is automatic, and you no longer\nhave to start the schema tool manually each time after changing the schema definition\nfile. The schema tool will only regenerate the code when it finds that the schema\ndefinition file has been modified since the last time it generated the code. You can force\nthe schema tool to regenerate all code by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"-force")," flag to its command line\nparameter."),(0,o.kt)("p",null,"In the next section we will look at how a smart contract can access their state\nstorage by using ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/develop/guide/wasm_vm/proxies"},"Data Access Proxies"),"."),(0,o.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/aTwXHuzwqZ0",title:"Deploying with Schema Tool",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"creating-smart-contracts-using-assemblyscript"},"Creating Smart Contracts using AssemblyScript"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/P5HMgmY3DMM",title:"Creating Smart Contracts using AssemblyScript",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),o=n(67294),r=n(86010),l=n(51048),s=n(33609),i=n(1943),u=n(72957);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:d,groupId:h,className:f}=e,w=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,i.U)(),[x,T]=(0,o.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==x&&(S(t),T(a),null!=h&&k(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(w.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);