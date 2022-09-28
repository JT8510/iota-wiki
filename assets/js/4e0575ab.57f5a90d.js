"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13601],{55660:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var r=a(67294),l=a(64966),o=a(87462),n=a(36503),i=a(36136),s=a(23777),c=a(76775),u=a(31610),m=a(51048),d=a(86010);const g="name";function p(e){return new URLSearchParams(e).get(g)}const h=function(e){let{className:t}=e;const a=(0,c.k6)(),l=(0,c.TH)(),[o,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{n(p(l.search))}),[l]),r.createElement("div",{className:(0,d.Z)("search-container",t)},r.createElement("input",{className:"search-container__input",id:"searchbar",placeholder:"Search for tutorials",value:o??void 0,onInput:e=>{n(e.currentTarget.value);const t=new URLSearchParams(l.search);t.delete(g),e.currentTarget.value&&t.set(g,e.currentTarget.value),a.push({...l,search:t.toString(),state:y()}),setTimeout((()=>{var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}}))};function v(e,t){const a=[...e];return a.sort(((e,a)=>t(e)>t(a)?1:t(a)>t(e)?-1:0)),a}var f=a(97893),T=a.n(f);const b=JSON.parse('{"Type":[{"value":"text","label":"Text Tutorial","description":"Tutorial in written format","color":"#010067"},{"value":"video","label":"Video Tutorial","description":"Tutorial in video format","color":"#010067"},{"value":"live-coding","label":"Live Coding","description":"Recorded live coding session","color":"#ffe502"}],"Topic":[{"value":"getting-started","label":"Getting Started","description":"Easy Tutorials for getting started","color":"#9e008e"},{"value":"integration-services","label":"Integration Services","description":"Integrate IOTA seamlessly","color":"#0e4ca1"},{"value":"hornet","label":"Hornet","description":"Hornet node software","color":"#0e4ca1"},{"value":"bee","label":"Bee","description":"Bee node software","color":"#0e4ca1"},{"value":"wasp","label":"Wasp","description":"Wasp smart contracts node software","color":"#0e4ca1"},{"value":"chronicle","label":"Chronicle","description":"Chronicle permanode software","color":"#0e4ca1"},{"value":"nft","label":"NFT","description":"This Tutorial is related to non-fungible token(NFT)","color":"#005f39"},{"value":"supply-chain","label":"Supply Chain","description":"This Tutorial is related to supply chain","color":"#00ff00"}],"Framework":[{"value":"client","label":"Client","description":"This Tutorial is using the IOTA Client framework","color":"#95003a"},{"value":"identity","label":"Identity","description":"This Tutorial is using the IOTA Identity framework","color":"#ff937e"},{"value":"iscp","label":"Smart Contracts","description":"This Tutorial is using the IOTA Smart Contract framework","color":"#a42400"},{"value":"streams","label":"Streams","description":"This Tutorial is using the IOTA Streams framework","color":"#001544"},{"value":"stronghold","label":"Stronghold","description":"This Tutorial is using the IOTA Stronghold framework","color":"#91d0cb"},{"value":"wallet","label":"Wallet","description":"This Tutorial is using the IOTA Wallet framework","color":"#620e00"}],"Language":[{"value":"c","label":"C","description":"This Tutorial is using the C programming language","color":"#6b6882"},{"value":"go","label":"Go","description":"This Tutorial is using the Go programming language","color":"#0000ff"},{"value":"java","label":"Java","description":"This Tutorial is using the Java programming language","color":"#007db5"},{"value":"node_js","label":"Node.js","description":"This Tutorial is using the Node.js programming language","color":"#6a826c"},{"value":"python","label":"Python","description":"This Tutorial is using the Python programming language","color":"#00ae7e"},{"value":"rust","label":"Rust","description":"This Tutorial is using the Rust programming language","color":"#c28c9f"},{"value":"wasm","label":"Wasm","description":"This Tutorial is using the Wasm programming language","color":"#be9970"},{"value":"js","label":"JavaScript","description":"This Tutorial is using the JavaScript programming language","color":"#f8a454"}],"Network":[{"value":"testnet","label":"Testnet","description":"The test network","color":"#6b6882"},{"value":"shimmer","label":"Shimmer","description":"The staging network","color":"#6b6882"},{"value":"mainnet","label":"Mainnet","description":"The IOTA network","color":"#6b6882"}]}'),E=new Map(Object.entries(b)),w=Array.from(E.values()).flat(),N=w.map((e=>e.value)),_="tags";function k(e){return new URLSearchParams(e).getAll(_)}function y(){var e;if(i.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}function C(){const e=(0,c.TH)(),[t,a]=(0,r.useState)([]),[l,o]=(0,r.useState)(null);(0,r.useEffect)((()=>{a(k(e.search)),o(p(e.search)),function(e){var t;const{scrollTopPosition:a,focusedElementId:r}=e??{scrollTopPosition:0,focusedElementId:void 0};null==(t=document.getElementById(r))||t.focus(),window.scrollTo({top:a})}(e.state)}),[e]);let n=Object.values((0,u.OD)("@iota-wiki/plugin-tutorial")||{});return n=v(n,(e=>e.title.toLowerCase())),n=v(n,(e=>!e.tags.includes("favorite"))),(0,r.useMemo)((()=>function(e,t,a){return a&&(e=e.filter((e=>e.title.toLowerCase().includes(a.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&t.every((t=>e.tags.includes(t)))))}(n,t,l)),[t,l])}const S=function(){const e=(0,c.TH)(),t=(0,c.k6)(),a=C(),l=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,"1 result|"+t+" results")}(),[i,u]=(0,r.useState)(!1),d={isMulti:!0,onChange:(0,r.useCallback)(((a,r)=>{const l=function(e){const t=[];switch(e.action){case"select-option":case"deselect-option":t.push(e.option);break;case"remove-value":case"pop-value":t.push(e.removedValue);break;case"clear":t.push(...e.removedValues)}return t.map((e=>e.value))}(r),o=function(e,t){let a=[...e];return t.forEach((e=>{const t=a.indexOf(e);-1===t?a=a.concat(e):a.splice(t,1)})),a}(k(e.search),l),n=function(e,t){const a=new URLSearchParams(e);return a.delete(_),t.forEach((e=>a.append(_,e))),a.toString()}(e.search,o);t.push({...e,search:n,state:y()})}),[t,e]),menuPortalTarget:null,className:"react-select-container",classNamePrefix:"react-select"};return(0,m.Z)()&&(d.menuPortalTarget=document.body),r.createElement("section",{className:"container margin-bottom--lg"},r.createElement("div",{className:"tutorial-filter"},r.createElement(h,{className:"tutorial-filter__search"}),r.createElement("button",{className:"button tutorial-filter__toggle",onClick:()=>u(!i)},r.createElement("span",{className:"material-icons"},"filter_list"),r.createElement("span",{className:"tutorial-filter__toggle-label"},"Filter"))),r.createElement(T(),{trigger:"",triggerDisabled:!0,open:i},r.createElement("div",{className:"row"},Array.from(E.entries()).map((e=>{let[t,a]=e;return r.createElement("div",{className:"col",key:t},r.createElement("h5",null,t),r.createElement(n.ZP,(0,o.Z)({placeholder:t,options:a},d)))})))),r.createElement("div",{className:"row margin-vert--lg"},r.createElement("div",{className:"col"},r.createElement("span",null,l(a.length))),r.createElement("div",{className:"col col--2 tutorial-link"},r.createElement("span",null,"+"),r.createElement("a",{className:"tutorial-link__anchor",href:"https://github.com/iota-wiki/tutorial-template",target:"_blank",rel:"noreferrer"},"Add your tutorial"))))};var I=a(15944),O=a(79524);const P={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};function A(e){const{svgClass:t,colorAttr:a,children:l,color:n="inherit",size:i="medium",viewBox:s="0 0 24 24",...c}=e;return r.createElement("svg",(0,o.Z)({viewBox:s,color:a,"aria-hidden":!0,className:(0,d.Z)(P.svgIcon,P[n],P[i],t)},c),l)}function Z(e){return r.createElement(A,e,r.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}const x=r.forwardRef(((e,t)=>r.createElement("li",{ref:t,className:"tag",title:e.description},r.createElement("span",{className:"text-label"},e.label.toLowerCase()),r.createElement("span",{className:"color-label",style:{backgroundColor:e.color}}))));function L(e){let{tags:t}=e;const a=v(w.filter((e=>{let{value:a}=e;return t.includes(a)})),(e=>N.indexOf(e.value)));return r.createElement(r.Fragment,null,a.map(((e,t)=>r.createElement(x,(0,o.Z)({key:t},e)))))}x.displayName="TagComponent";const M=(0,r.memo)((e=>{let{tutorial:t}=e;const a=t.source&&(0,O.Z)(t.source),l=t.route&&(0,O.Z)(t.route),[o,n]=(0,r.useState)(!1),i=(e,t)=>{e.preventDefault(),e.stopPropagation(),window.location.href=t};return r.createElement("li",{key:t.title,onMouseOver:()=>n(!0),onMouseOut:()=>n(!1)},r.createElement("div",{onClick:e=>i(e,l),className:"card shadow--md tutorial-card"},r.createElement("div",{className:"card__image tutorial-card__image-container"},r.createElement(I.Z,{className:"tutorial-card__image",img:t.preview,alt:t.title})),r.createElement("div",{className:"card__body"},r.createElement("div",{className:"tutorial-card__header"},r.createElement("h4",{className:(0,d.Z)("tutorial-card__title",o&&"tutorial-card__title--hover")},t.title),t.tags.includes("favorite")&&r.createElement(Z,{svgClass:"svg-icon-favorite",size:"small"}),t.source&&r.createElement("div",{onClick:e=>i(e,a),className:"button button--secondary button--sm tutorial-card__source-button"},"source")),r.createElement("p",{className:"tutorial-card__body"},t.description)),r.createElement("ul",{className:"card__footer tutorial-card__footer"},r.createElement(L,{tags:t.tags}))))}));M.displayName="TutorialCard";const R=M;const j=function(){const e=C();return 0===e.length?r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container padding-vert--md text--center"},r.createElement("h2",null,"No result"))):r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container margin-top--lg"},r.createElement("ul",{className:"tutorial-list"},e.map((e=>r.createElement(R,{key:e.title,tutorial:e}))))))};function U(){return r.createElement("section",{className:"container margin-top--lg margin-bottom--lg text--center"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--2 col--offset-0"},r.createElement("h1",{className:"tutorial-header"},"Tutorials"))))}const B=function(){return r.createElement(l.Z,{title:"Tutorials"},r.createElement("main",{className:"margin-vert--lg"},r.createElement(U,null),r.createElement(S,null),r.createElement(j,null)))}}}]);