"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54523],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=n(34259),i=n(18679),l=["components"],u={description:"The `withdraw` endpoint sends L2 funds owned by the caller to their L1 address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","withdraw","transfer","chain","Rust","Solo","how to"]},s="How to Withdraw From a Chain",d={unversionedId:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",id:"guide/core_concepts/accounts/how-to-withdraw-from-a-chain",title:"How to Withdraw From a Chain",description:"The `withdraw` endpoint sends L2 funds owned by the caller to their L1 address.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-withdraw-from-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain.mdx",tags:[],version:"current",frontMatter:{description:"The `withdraw` endpoint sends L2 funds owned by the caller to their L1 address.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","withdraw","transfer","chain","Rust","Solo","how to"]},sidebar:"tutorialSidebar",previous:{title:"How to Deposit to a Chain",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},next:{title:"View Account Balances",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/view-account-balances"}},p={},m=[],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-withdraw-from-a-chain"},"How to Withdraw From a Chain"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," endpoint sends L2 funds owned by the caller to their L1 address."),(0,o.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain to wallet\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name)\n_, err := chain.PostRequestSync(req.WithMaxAffordableGasBudget(), wallet)\nrequire.NoError(t, err)\n"))),(0,o.kt)(i.Z,{value:"soloctx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to wallet\nw := coreaccounts.ScFuncs.Withdraw(ctx.Sign(wallet))\nw.Func.TransferBaseTokens(1).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nlet w = coreaccounts::ScFuncs::withdraw(ctx);\nw.func.transfer_base_tokens(1).post_to_chain(chainID);\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// withdraw from chain *chainID* to current common account\n// (there is no way to specify hname for withdrawals)\nw := coreaccounts.ScFuncs.Withdraw(ctx)\nw.Func.TransferBaseTokens(1).PostToChain(chainID)\n")))))}f.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function c(e){var t=e.children,n=e.hidden,c=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,c),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(86010),c=n(51048),i=n(33609),l=n(1943),u=n(72957),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,c=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,w=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),T=k.tabGroupChoices,O=k.setTabGroupChoices,x=(0,a.useState)(y),N=x[0],_=x[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=T[f];null!=C&&C!==N&&b.some((function(e){return e.value===C}))&&_(C)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==N&&(S(t),_(r),null!=f&&O(f,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,c=E.indexOf(e.currentTarget)-1;n=null!=(o=E[c])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},w)},b.map((function(e){var t=e.value,n=e.label,c=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:P,onClick:P},c,{className:(0,o.Z)("tabs__item",d,null==c?void 0:c.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,c.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}}}]);