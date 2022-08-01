"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9378],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65867:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(34259),l=n(18679),s=["components"],c={keywords:["solo","testing","errors","member function","post","ctx","divide function","error message"],description:"Use the SoloContext to create full-blown tests for the dividend example smart contract.",image:"/img/logo/WASP_logo_dark.png"},u="Example Tests",d={unversionedId:"guide/schema/examples",id:"guide/schema/examples",title:"Example Tests",description:"Use the SoloContext to create full-blown tests for the dividend example smart contract.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/examples.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/examples",permalink:"/smart-contracts/guide/schema/examples",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/examples.mdx",tags:[],version:"current",frontMatter:{keywords:["solo","testing","errors","member function","post","ctx","divide function","error message"],description:"Use the SoloContext to create full-blown tests for the dividend example smart contract.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Testing Smart Contracts",permalink:"/smart-contracts/guide/schema/test"},next:{title:"Colored Tokens and Time Locks",permalink:"/smart-contracts/guide/schema/timelock"}},m={},p=[],h={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-tests"},"Example Tests"),(0,o.kt)("p",null,"In the previous sections we showed you how you can ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/call"},"call()")," or\n",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/post"},"post()")," function requests. We also created a few wrapper functions to simplify\ncalling these functions even further. Now we will look at how to use the SoloContext to\ncreate full-blown tests for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract."),(0,o.kt)("p",null,"Let's start with a simple test. We are going to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," function to add a valid\nnew member/factor combination to the member group."),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestAddMemberOk(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 100)\n    require.NoError(t, ctx.Err)\n}\n")))),(0,o.kt)("p",null,"The above test first deploys the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," smart contract to a new chain, and returns a\nSoloContext ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),". Then it uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," to create a new SoloAgent. A SoloAgent is an actor\nwith its own Tangle address, which contains solo.Saldo tokens. The SoloAgent can be used\nwhenever an address or agent ID needs to be provided, it can be used to sign a token\ntransfer from its address, and can be used to inspect the balance of tokens on the\naddress."),(0,o.kt)("p",null,"In this case, we simply create ",(0,o.kt)("inlineCode",{parentName:"p"},"member"),", and pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," function, which will\nreceive the address of member1 and a dispersal factor of 100. Finally, we check if ctx has\nreceived an error during the execution of the call. Remember that the only way to pass an\nerror from a WasmLib function call is through a panic() call. The code that handles the\nactual call will intercept any panic() that was raised, and return an error.\nThe SoloContext saves this error for later inspection, because the function descriptor\nused in the call itself has no way of passing back this error."),(0,o.kt)("p",null,"The next two example tests each call the same ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," function in the exact same way, but\nin both cases one required parameter is omitted. The idea is to test that the function\nproperly panics by checking the ctx.Err value is not nil after the call. Finally, the\nerror message text is checked to see if it contains the correct error message."),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestAddMemberFailMissingAddress(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Factor().SetValue(100)\n    member.Func.TransferIotas(1).Post()\n    require.Error(t, ctx.Err)\n    require.True(t, strings.HasSuffix(ctx.Err.Error(), "missing mandatory address"))\n}\n\nfunc TestAddMemberFailMissingFactor(t \\*testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    f := dividend.ScFuncs.Member(ctx)\n    f.Params.Address().SetValue(member1.ScAddress())\n    f.Func.TransferIotas(1).Post()\n    require.Error(t, ctx.Err)\n    require.True(t, strings.HasSuffix(ctx.Err.Error(), "missing mandatory factor"))\n}\n')))),(0,o.kt)("p",null,"Each test has to set up the chain/contract/context from scratch. We will often use a\nspecific setupTest() function to do all setup work that is shared by many tests."),(0,o.kt)("p",null,"We cannot use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividendMember")," wrapper function in these two tests because of the\nmissing required function parameters. So we have copy/pasted the code, and removed the\nParams initialization we wanted to be missing."),(0,o.kt)("p",null,"Now let's see a more complex example:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestDivide1Member(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 100)\n    require.NoError(t, ctx.Err)\n\n    require.EqualValues(t, 1, ctx.Balance(nil))\n\n    dividendDivide(ctx, 99)\n    require.NoError(t, ctx.Err)\n\n    // 99 from divide() + 1 from the member() call\n    require.EqualValues(t, solo.Saldo+100, member1.Balance())\n    require.EqualValues(t, 0, ctx.Balance(nil))\n}\n")))),(0,o.kt)("p",null,"The first half of the code is identical to our first test above. We set up the test,\ncreate an agent, set the factor for that agent to 100, and verify that no error occurred.\nThen in the next line we verify that the smart contract associated with ctx now holds a\nbalance of 1 iota. This is the token that was transferred as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Post()")," request\ninside the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividendMember()")," function."),(0,o.kt)("p",null,"Next we transfer 99 iotas as part of ",(0,o.kt)("inlineCode",{parentName:"p"},"thePost()")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function. We\nsubsequently check that no error has occurred. Finally, we expect the balance of member1\naddress to have increased by the total of 100 tokens that were stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend"),"\nsmart contract account, as 100/100th of the tokens should have been sent to member1.\nAnd the contract account should end up empty."),(0,o.kt)("p",null,"Now let's skip to the most complex test of all:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestDivide3Members(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 25)\n    require.NoError(t, ctx.Err)\n\n    member2 := ctx.NewSoloAgent()\n    dividendMember(ctx, member2, 50)\n    require.NoError(t, ctx.Err)\n\n    member3 := ctx.NewSoloAgent()\n    dividendMember(ctx, member3, 75)\n    require.NoError(t, ctx.Err)\n\n    require.EqualValues(t, 3, ctx.Balance(nil))\n\n    dividendDivide(ctx, 97)\n    require.NoError(t, ctx.Err)\n\n    // 97 from divide() + 3 from the member() calls\n    require.EqualValues(t, solo.Saldo+16, member1.Balance())\n    require.EqualValues(t, solo.Saldo+33, member2.Balance())\n    require.EqualValues(t, solo.Saldo+50, member3.Balance())\n    // 1 remaining due to fractions\n    require.EqualValues(t, 1, ctx.Balance(nil))\n}\n")))),(0,o.kt)("p",null,"This function creates 3 agents, and associates factors of 25, 50, and 75 respectively to\nthem. Since that required 3 ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," requests, the contract account should now contain 3\niotas. Next the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function is called, with 97 iotas passed to it, for a total of\n100 into the contract account."),(0,o.kt)("p",null,"After this we verify that each agent has been distributed tokens according to its relative\nfactor. Those factors are 25/150th, 50/150th, and 75/150th, respectively. Note that we\ncannot transfer fractional tokens, so we truncate to the nearest integer and ultimately\nare left with 1 iota in the contract account. This 1 iota will be part of the dispersal\namount when the next ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," call request is executed."),(0,o.kt)("p",null,"We can test this behavior by adding extra calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," at the end of this test like\nthis:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    dividendDivide(ctx, 100)\n    require.NoError(t, ctx.Err)\n\n    // 100 from divide() + 1 remaining\n    require.EqualValues(t, solo.Saldo+16+16, member1.Balance())\n    require.EqualValues(t, solo.Saldo+33+33, member2.Balance())\n    require.EqualValues(t, solo.Saldo+50+50, member3.Balance())\n    // now we have 2 remaining due to fractions\n    require.EqualValues(t, 2, ctx.Balance(nil))\n\n    dividendDivide(ctx, 100)\n    require.NoError(t, ctx.Err)\n\n    // 100 from divide() + 2 remaining\n    require.EqualValues(t, solo.Saldo+16+16+17, member1.Balance())\n    require.EqualValues(t, solo.Saldo+33+33+34, member2.Balance())\n    require.EqualValues(t, solo.Saldo+50+50+51, member3.Balance())\n    // managed to give every one an exact integer amount, so no remainder\n    require.EqualValues(t, 0, ctx.Balance(nil))\n")))),(0,o.kt)("p",null,"After the final ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," call, we ended up with the exact amounts to disperse, so no\nremainder iotas were left in the contract account."),(0,o.kt)("p",null,"Each divide is cumulative to the balances of the members. We have highlighted this by\nindicating the separate increases after every ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," call."),(0,o.kt)("p",null,"Finally, we will show how to test ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/views"},"Views")," and/or ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/funcs"},"Funcs")," that return\na result. Since solo executes ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/post"},"post()")," requests synchronously, it is possible to\nhave a Func return a result and test for certain result values."),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestGetFactor(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 25)\n    require.NoError(t, ctx.Err)\n\n    member2 := ctx.NewSoloAgent()\n    dividendMember(ctx, member2, 50)\n    require.NoError(t, ctx.Err)\n\n    member3 := ctx.NewSoloAgent()\n    dividendMember(ctx, member3, 75)\n    require.NoError(t, ctx.Err)\n\n    require.EqualValues(t, 3, ctx.Balance(nil))\n\n    value := dividendGetFactor(ctx, member3)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 75, value)\n\n    value = dividendGetFactor(ctx, member2)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 50, value)\n\n    value = dividendGetFactor(ctx, member1)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 25, value)\n}\n")))),(0,o.kt)("p",null,"Here we first set up the same 3 dispersion factors, and then we retrieve the dispersion\nfactors for each member in reverse order and verify its value."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/timelock"},"next section")," we will describe a few more helper member functions\nof the SoloContext."))}f.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),o=n(86010),i=n(51048),l=n(33609),s=n(1943),c=n(72957),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,p=e.defaultValue,h=e.values,f=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),x=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,a.useState)(w),T=E[0],q=E[1],S=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=y[f];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&q(O)}var V=function(e){var t=e.currentTarget,n=S.indexOf(t),r=g[n].value;r!==T&&(C(t),q(r),null!=f&&N(f,String(r)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=S.indexOf(e.currentTarget)+1;n=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;n=null!=(o=S[i])?o:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:A,onFocus:V,onClick:V},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);