"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={description:"Example of a _Solo_ test. It deploys a new chain and invokes a function in the root contract.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","solo","example","root contract","new chain"]},l="First Example",c={unversionedId:"guide/solo/first-example",id:"guide/solo/first-example",title:"First Example",description:"Example of a _Solo_ test. It deploys a new chain and invokes a function in the root contract.",source:"@site/content/build/wasp/production/documentation/docs/guide/solo/first-example.md",sourceDirName:"guide/solo",slug:"/guide/solo/first-example",permalink:"/smart-contracts/guide/solo/first-example",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/solo/first-example.md",tags:[],version:"current",frontMatter:{description:"Example of a _Solo_ test. It deploys a new chain and invokes a function in the root contract.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","solo","example","root contract","new chain"]},sidebar:"tutorialSidebar",previous:{title:"Solo",permalink:"/smart-contracts/guide/solo/what-is-solo"},next:{title:"Tokens and the UTXO Ledger",permalink:"/smart-contracts/guide/solo/tokens-and-utxos"}},p={},u=[],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"first-example"},"First Example"),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("em",{parentName:"p"},"Solo")," test. It deploys a new chain and invokes\na function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var seed = ed25519.NewSeed([]byte("long long seed for determinism................"))\n\nfunc TestTutorial1(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    chain := env.NewChain(nil, "ex1")\n\n    // calls view root::GetChainInfo\n    chainID, chainOwnerID, coreContracts := chain.GetInfo()\n    // assert all core contracts deployed (default)\n    require.EqualValues(t, len(core.AllCoreContractsByHash), len(coreContracts))\n\n    t.Logf("chain ID: %s", chainID.String())\n    t.Logf("chain owner ID: %s", chainOwnerID.String())\n    for hname, rec := range coreContracts {\n        t.Logf("    Core contract \'%s\': %s", rec.Name, iscp.NewAgentID(chainID.AsAddress(), hname))\n    }\n}\n')),(0,r.kt)("p",null,"The output of the test will be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"=== RUN   TestTutorial1\n26:50.073047100 INFO    TestTutorial1.db    dbmanager/dbmanager.go:56   creating new registry database. Persistent: false\n26:50.074651000 INFO    TestTutorial1   solo/solo.go:168    Solo environment has been created with initial logical time 00:01.000000000\n26:50.075719500 INFO    TestTutorial1   solo/solo.go:236    deploying new chain 'ex1'. ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM, state controller address: 1Aa4X9L2xJVQqxiLFbHj9KXA8YtQqBLHsytuCxBn1kneM\n26:50.075719500 INFO    TestTutorial1   solo/solo.go:238         chain '$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM'. state controller address: 1Aa4X9L2xJVQqxiLFbHj9KXA8YtQqBLHsytuCxBn1kneM\n26:50.075719500 INFO    TestTutorial1   solo/solo.go:239         chain '$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM'. originator address: 1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q\n26:50.075719500 INFO    TestTutorial1.db    dbmanager/dbmanager.go:58   creating new database for chain $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM. Persistent: false\n26:50.107454300 INFO    TestTutorial1   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns to 00:01.000000002\n26:50.108564300 INFO    TestTutorial1.ex1   solo/run.go:127 state transition --\x3e #1. Requests in the block: 1. Outputs: 1\n26:50.108564300 INFO    TestTutorial1   solo/clock.go:44    ClockStep: logical clock advanced by 1ms to 00:01.001000002\n26:50.108564300 INFO    TestTutorial1.ex1   solo/req.go:268 callView: blocklog::getLatestBlockInfo\n26:50.108564300 INFO    TestTutorial1.ex1   solo/req.go:268 callView: blocklog::getRequestReceiptsForBlock\n26:50.108564300 INFO    TestTutorial1.ex1   solo/run.go:148 REQ: 'tx/[0]J2FrZnvQBbkD5kfPzZFkZfQAK7PYTD9Kh5QsKSaYdBAf'\n26:50.108564300 INFO    TestTutorial1.ex1   solo/solo.go:312    chain 'ex1' deployed. Chain ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM\n26:50.108564300 INFO    TestTutorial1.ex1   solo/req.go:268 callView: root::getChainInfo\n    tutorial_test.go:28: chain ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM\n    tutorial_test.go:29: chain owner ID: A/1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q::00000000\n    tutorial_test.go:31:     Core contract 'governance': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::17cf909f\n    tutorial_test.go:31:     Core contract 'root': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::cebf5908\n    tutorial_test.go:31:     Core contract 'blob': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::fd91bc63\n    tutorial_test.go:31:     Core contract 'blocklog': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::f538ef2b\n    tutorial_test.go:31:     Core contract 'eventlog': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::661aa7d8\n    tutorial_test.go:31:     Core contract 'accounts': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::3c4b5e02\n    tutorial_test.go:31:     Core contract '_default': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::00000000\n--- PASS: TestTutorial1 (0.04s)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Addresses, chain IDs and other hashes will be the same on each run of the test because of the constant seed. "),(0,r.kt)("li",{parentName:"ul"},"The log produced by the test contains timestamps from computer timer, while the Solo environment operates in its own logical time"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/core_concepts/core_contracts/overview"},"core contracts")," listed in the log (",(0,r.kt)("inlineCode",{parentName:"p"},"_default"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blob"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklog"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),") are automatically deployed on each new chain. You can see\nthem listed in the test log together with their ",(0,r.kt)("em",{parentName:"p"},"contract IDs"),"."),(0,r.kt)("p",null,"The output fragment in the log ",(0,r.kt)("inlineCode",{parentName:"p"},"state transition #0 --\x3e #1")," means the state of\nthe chain has changed from block index 0 (the origin index of the empty state)\nto block index 1. The state #0 is the empty origin state, the #1 always contains\nall core smart contracts deployed on the chain as well as other variables of\nchain set, such as ",(0,r.kt)("em",{parentName:"p"},"chainID")," and ",(0,r.kt)("em",{parentName:"p"},"chain owner ID"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"chain ID")," and ",(0,r.kt)("em",{parentName:"p"},"chain owner ID")," are respectively ID of the deployed\nchain ",(0,r.kt)("inlineCode",{parentName:"p"},"$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM")," and the address (in the\nform of ",(0,r.kt)("em",{parentName:"p"},"agent ID"),") from which the chain has been deployed:\n",(0,r.kt)("inlineCode",{parentName:"p"},"A/1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q::00000000")," (the prefixes ",(0,r.kt)("inlineCode",{parentName:"p"},"$/"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"A/")," indicate that what follows are a chain ID and an agent ID, respectively)."))}g.isMDXComponent=!0}}]);