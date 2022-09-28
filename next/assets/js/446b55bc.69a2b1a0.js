"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={description:"What happens when a smart contract invocation fails?",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","error handling","panic","state","transition"]},i="Error Handling",l={unversionedId:"guide/solo/error-handling",id:"guide/solo/error-handling",title:"Error Handling",description:"What happens when a smart contract invocation fails?",source:"@site/next/external/wasp/documentation/docs/guide/solo/error-handling.md",sourceDirName:"guide/solo",slug:"/guide/solo/error-handling",permalink:"/next/smart-contracts/develop/guide/solo/error-handling",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/solo/error-handling.md",tags:[],version:"current",frontMatter:{description:"What happens when a smart contract invocation fails?",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","error handling","panic","state","transition"]},sidebar:"tutorialSidebar",previous:{title:"Calling a View",permalink:"/next/smart-contracts/develop/guide/solo/view-sc"},next:{title:"The L2 Ledger",permalink:"/next/smart-contracts/develop/guide/solo/the-l2-ledger"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"The following test posts a request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"solotutorial")," smart contract without the expected parameter ",(0,o.kt)("inlineCode",{parentName:"p"},'"str"'),", causing\nthe smart contract call to panic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorialInvokeSCError(t *testing.T) {\n    env := solo.New(t, &solo.InitOptions{AutoAdjustStorageDeposit: true})\n    chain := env.NewChain()\n    err := chain.DeployWasmContract(nil, "solotutorial", "solotutorial_bg.wasm")\n    require.NoError(t, err)\n\n    // missing the required parameter "str"\n    req := solo.NewCallParams("solotutorial", "storeString").\n        WithMaxAffordableGasBudget()\n\n    _, err = chain.PostRequestSync(req, nil)\n    t.Log(err)\n    require.Error(t, err)\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"t.Log(err)")," line will produce the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"tutorial_test.go:94: WASM: panic in VM: missing mandatory str\n")),(0,o.kt)("p",null,"This shows that the request resulted in a panic.\nThe Solo test passes because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"require.Error(t, err)")," line."),(0,o.kt)("p",null,"Note that this test still ends with the state ",(0,o.kt)("inlineCode",{parentName:"p"},"#4"),", although the last request to the smart contract failed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"20:09.974258867 INFO    TestTutorialInvokeSCError.ch1   solo/run.go:156 state transition --\x3e #4. Requests in the block: 1. Outputs: 1\n")),(0,o.kt)("p",null,"This shows that a chain block is always generated, regardless of whether the smart contract call succeeds or not. The\nresult of the request is stored in the chain's ",(0,o.kt)("a",{parentName:"p",href:"/next/smart-contracts/develop/guide/core_concepts/core_contracts/blocklog"},(0,o.kt)("inlineCode",{parentName:"a"},"blocklog"))," in the form of\na receipt. In fact, the received Go error ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," in the test above is just generated from the request receipt."),(0,o.kt)("p",null,"If a panic occurs during a smart contract call, it is recovered by the VM context, and the request is marked as failed.\nAny state changes made prior to the panic are rolled back."))}u.isMDXComponent=!0}}]);