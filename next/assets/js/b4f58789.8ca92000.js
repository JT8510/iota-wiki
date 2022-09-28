"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(34259),i=n(18679);const l={description:"How Tos give users step by step instructions on how to complete a concrete task.",image:"/img/logo/iota_logo.svg",keywords:["How Tos","action oriented"]},s="How Tos",u={unversionedId:"contribute-to-wiki/reference/structure/how_tos",id:"contribute-to-wiki/reference/structure/how_tos",title:"How Tos",description:"How Tos give users step by step instructions on how to complete a concrete task.",source:"@site/next/community/contribute-to-wiki/reference/structure/how_tos.md",sourceDirName:"contribute-to-wiki/reference/structure",slug:"/contribute-to-wiki/reference/structure/how_tos",permalink:"/next/community/contribute-to-wiki/reference/structure/how_tos",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/community/contribute-to-wiki/reference/structure/how_tos.md",tags:[],version:"current",lastUpdatedAt:1664315461,formattedLastUpdatedAt:"Sep 27, 2022",frontMatter:{description:"How Tos give users step by step instructions on how to complete a concrete task.",image:"/img/logo/iota_logo.svg",keywords:["How Tos","action oriented"]},sidebar:"learn",previous:{title:"Example Getting Started File",permalink:"/next/community/contribute-to-wiki/reference/structure/getting_started"},next:{title:"Tutorials",permalink:"/next/community/contribute-to-wiki/reference/structure/tutorials"}},c={},p=[{value:"Action-Oriented",id:"action-oriented",level:2},{value:"Use Tabs For Each Programming Language",id:"use-tabs-for-each-programming-language",level:3},{value:"Tabs Example",id:"tabs-example",level:4},{value:"Single Responsibility Principle",id:"single-responsibility-principle",level:2},{value:"Related Articles",id:"related-articles",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-tos"},"How Tos"),(0,o.kt)("p",null,"Also see ",(0,o.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/how_tos/how_to_write_how_tos"},"How To Write Banger How Tos"),"."),(0,o.kt)("p",null,"How Tos are the same as ",(0,o.kt)("a",{parentName:"p",href:"https://diataxis.fr/how-to-guides/"},"how-tos in Diataxis"),". You should use this folder to give in depth guides on how to complete concrete single tasks. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to a Server"),(0,o.kt)("li",{parentName:"ul"},"Send a Message"),(0,o.kt)("li",{parentName:"ul"},"Create a Transaction"),(0,o.kt)("li",{parentName:"ul"},"Connect to Stronghold")),(0,o.kt)("h2",{id:"action-oriented"},"Action-Oriented"),(0,o.kt)("p",null,"How To files should be ",(0,o.kt)("strong",{parentName:"p"},"action-oriented"),". This means that you should first think of what you want the user to achieve\nwith this How To, and explain only that. You may shortly introduce a concept and add\na link to the ",(0,o.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/reference/structure/explanations"},"main article"),", but make sure you leave the full explanation to the main key concept article."),(0,o.kt)("h3",{id:"use-tabs-for-each-programming-language"},"Use Tabs For Each Programming Language"),(0,o.kt)("p",null,"Users may choose to execute the same action in a variety of languages. Ideally, you should use\n",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"tabs")," to show the language specific instructions (usually code\nsnippets), while keeping the language agnostic instructions outside the tabs."),(0,o.kt)("h4",{id:"tabs-example"},"Tabs Example"),(0,o.kt)(a.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},"Java specific code and text goes here."),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},"Nodejs specific code and text goes here.")),(0,o.kt)("h2",{id:"single-responsibility-principle"},"Single Responsibility Principle"),(0,o.kt)("p",null,"Similar to the SOLID principles, you should try to adhere to the\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single-responsibility_principle"},"Single Responsibility Principle")," when writing\nexplanations. Each article should address a single topic, and any sub-topics if relevant. If you need to touch on a\ndifferent subject while doing so, you should add a link to that subjects explanation, rather than fully explain it."),(0,o.kt)("p",null,"The main action should be the first header in the article, and any relevant actions to complete the main action\nshould follow hierarchically by using the appropriate header tag level."),(0,o.kt)("h2",{id:"related-articles"},"Related Articles"),(0,o.kt)("p",null,"Your How To will probably be related to one or more ",(0,o.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/reference/structure/explanations"},"explanations"),", ",(0,o.kt)("a",{parentName:"p",href:"/next/community/contribute-to-wiki/reference/structure/tutorials"},"Tutorials"),", or other How Tos. Please make sure to list them in the article so the user can carry on learning in an oriented way."))}m.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(86010),i=n(51048),l=n(33609),s=n(1943),u=n(72957);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:h,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[T,x]=(0,o.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==T&&(E(t),x(r),null!=h&&k(h,String(r)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},b)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:_,onFocus:N,onClick:N},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);