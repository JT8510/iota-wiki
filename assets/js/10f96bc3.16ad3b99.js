"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90850],{16676:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var r=a(67294),l=a(47151),n=a(87462),o=a(44170),i=a(36136),c=a(23777),s=a(76775),u=a(31610),m=a(51048),d=a(86010),g="name";function v(e){return new URLSearchParams(e).get(g)}var f=function(e){var t=e.className,a=(0,s.k6)(),l=(0,s.TH)(),n=(0,r.useState)(null),o=n[0],i=n[1];return(0,r.useEffect)((function(){i(v(l.search))}),[l]),r.createElement("div",{className:(0,d.Z)("search-container",t)},r.createElement("input",{className:"search-container__input",id:"searchbar",placeholder:"Search for tutorials",value:null!=o?o:void 0,onInput:function(e){i(e.currentTarget.value);var t=new URLSearchParams(l.search);t.delete(g),e.currentTarget.value&&t.set(g,e.currentTarget.value),a.push(Object.assign({},l,{search:t.toString(),state:y()})),setTimeout((function(){var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}}))};function p(e,t){var a=[].concat(e);return a.sort((function(e,a){return t(e)>t(a)?1:t(a)>t(e)?-1:0})),a}var h=a(97893),T=a.n(h),b=JSON.parse('{"Type":[{"value":"text","label":"Text Tutorial","description":"Tutorial in written format","color":"#010067"},{"value":"video","label":"Video Tutorial","description":"Tutorial in video format","color":"#010067"},{"value":"live-coding","label":"Live Coding","description":"Recorded live coding session","color":"#ffe502"}],"Topic":[{"value":"getting-started","label":"Getting Started","description":"Easy Tutorials for getting started","color":"#9e008e"},{"value":"integration-services","label":"Integration Services","description":"Integrate IOTA seamlessly","color":"#0e4ca1"},{"value":"hornet","label":"Hornet","description":"Hornet node software","color":"#0e4ca1"},{"value":"bee","label":"Bee","description":"Bee node software","color":"#0e4ca1"},{"value":"wasp","label":"Wasp","description":"Wasp smart contracts node software","color":"#0e4ca1"},{"value":"chronicle","label":"Chronicle","description":"Chronicle permanode software","color":"#0e4ca1"},{"value":"nft","label":"NFT","description":"This Tutorial is related to non-fungible token(NFT)","color":"#005f39"},{"value":"supply-chain","label":"Supply Chain","description":"This Tutorial is related to supply chain","color":"#00ff00"}],"Framework":[{"value":"client","label":"Client","description":"This Tutorial is using the IOTA Client framework","color":"#95003a"},{"value":"identity","label":"Identity","description":"This Tutorial is using the IOTA Identity framework","color":"#ff937e"},{"value":"iscp","label":"Smart Contracts","description":"This Tutorial is using the IOTA Smart Contract framework","color":"#a42400"},{"value":"streams","label":"Streams","description":"This Tutorial is using the IOTA Streams framework","color":"#001544"},{"value":"stronghold","label":"Stronghold","description":"This Tutorial is using the IOTA Stronghold framework","color":"#91d0cb"},{"value":"wallet","label":"Wallet","description":"This Tutorial is using the IOTA Wallet framework","color":"#620e00"}],"Language":[{"value":"c","label":"C","description":"This Tutorial is using the C programming language","color":"#6b6882"},{"value":"go","label":"Go","description":"This Tutorial is using the Go programming language","color":"#0000ff"},{"value":"java","label":"Java","description":"This Tutorial is using the Java programming language","color":"#007db5"},{"value":"node_js","label":"Node.js","description":"This Tutorial is using the Node.js programming language","color":"#6a826c"},{"value":"python","label":"Python","description":"This Tutorial is using the Python programming language","color":"#00ae7e"},{"value":"rust","label":"Rust","description":"This Tutorial is using the Rust programming language","color":"#c28c9f"},{"value":"wasm","label":"Wasm","description":"This Tutorial is using the Wasm programming language","color":"#be9970"},{"value":"js","label":"JavaScript","description":"This Tutorial is using the JavaScript programming language","color":"#f8a454"}],"Network":[{"value":"testnet","label":"Testnet","description":"The test network","color":"#6b6882"},{"value":"shimmer","label":"Shimmer","description":"The staging network","color":"#6b6882"},{"value":"mainnet","label":"Mainnet","description":"The IOTA network","color":"#6b6882"}]}'),E=new Map(Object.entries(b)),w=Array.from(E.values()).flat(),N=w.map((function(e){return e.value})),_="tags";function k(e){return new URLSearchParams(e).getAll(_)}function y(){var e;if(i.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}function C(){var e=(0,s.TH)(),t=(0,r.useState)([]),a=t[0],l=t[1],n=(0,r.useState)(null),o=n[0],i=n[1];(0,r.useEffect)((function(){var t,a,r,n,o;l(k(e.search)),i(v(e.search)),t=e.state,n=(r=null!=t?t:{scrollTopPosition:0,focusedElementId:void 0}).scrollTopPosition,o=r.focusedElementId,null==(a=document.getElementById(o))||a.focus(),window.scrollTo({top:n})}),[e]);var c=Object.values((0,u.OD)("@iota-wiki/plugin-tutorial")||{});return c=p(c,(function(e){return e.title.toLowerCase()})),c=p(c,(function(e){return!e.tags.includes("favorite")})),(0,r.useMemo)((function(){return function(e,t,a){return a&&(e=e.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&t.every((function(t){return e.tags.includes(t)}))}))}(c,a,o)}),[a,o])}var S=function(){var e,t=(0,s.TH)(),a=(0,s.k6)(),l=C(),i=(e=(0,c.c)().selectMessage,function(t){return e(t,"1 result|"+t+" results")}),u=(0,r.useState)(!1),d=u[0],g=u[1],v={isMulti:!0,onChange:(0,r.useCallback)((function(e,r){var l,n,o=function(e){var t=[];switch(e.action){case"select-option":case"deselect-option":t.push(e.option);break;case"remove-value":case"pop-value":t.push(e.removedValue);break;case"clear":t.push.apply(t,e.removedValues)}return t.map((function(e){return e.value}))}(r),i=k(t.search),c=(l=o,n=[].concat(i),l.forEach((function(e){var t=n.indexOf(e);-1===t?n=n.concat(e):n.splice(t,1)})),n),s=function(e,t){var a=new URLSearchParams(e);return a.delete(_),t.forEach((function(e){return a.append(_,e)})),a.toString()}(t.search,c);a.push(Object.assign({},t,{search:s,state:y()}))}),[a,t]),menuPortalTarget:null,className:"react-select-container",classNamePrefix:"react-select"};return(0,m.Z)()&&(v.menuPortalTarget=document.body),r.createElement("section",{className:"container margin-bottom--lg"},r.createElement("div",{className:"tutorial-filter"},r.createElement(f,{className:"tutorial-filter__search"}),r.createElement("button",{className:"button tutorial-filter__toggle",onClick:function(){return g(!d)}},r.createElement("span",{className:"material-icons"},"filter_list"),r.createElement("span",{className:"tutorial-filter__toggle-label"},"Filter"))),r.createElement(T(),{trigger:"",triggerDisabled:!0,open:d},r.createElement("div",{className:"row"},Array.from(E.entries()).map((function(e){var t=e[0],a=e[1];return r.createElement("div",{className:"col",key:t},r.createElement("h5",null,t),r.createElement(o.ZP,(0,n.Z)({placeholder:t,options:a},v)))})))),r.createElement("div",{className:"row margin-vert--lg"},r.createElement("div",{className:"col"},r.createElement("span",null,i(l.length))),r.createElement("div",{className:"col col--2 tutorial-link"},r.createElement("span",null,"+"),r.createElement("a",{className:"tutorial-link__anchor",href:"https://github.com/iota-wiki/tutorial-template",target:"_blank",rel:"noreferrer"},"Add your tutorial"))))},I=a(15944),O=a(79524),A=a(63366),P={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"},Z=["svgClass","colorAttr","children","color","size","viewBox"];function x(e){var t=e.svgClass,a=e.colorAttr,l=e.children,o=e.color,i=void 0===o?"inherit":o,c=e.size,s=void 0===c?"medium":c,u=e.viewBox,m=void 0===u?"0 0 24 24":u,g=(0,A.Z)(e,Z);return r.createElement("svg",(0,n.Z)({viewBox:m,color:a,"aria-hidden":!0,className:(0,d.Z)(P.svgIcon,P[i],P[s],t)},g),l)}function L(e){return r.createElement(x,e,r.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}var j=r.forwardRef((function(e,t){return r.createElement("li",{ref:t,className:"tag",title:e.description},r.createElement("span",{className:"text-label"},e.label.toLowerCase()),r.createElement("span",{className:"color-label",style:{backgroundColor:e.color}}))}));function M(e){var t=e.tags,a=p(w.filter((function(e){var a=e.value;return t.includes(a)})),(function(e){return N.indexOf(e.value)}));return r.createElement(r.Fragment,null,a.map((function(e,t){return r.createElement(j,(0,n.Z)({key:t},e))})))}j.displayName="TagComponent";var R=(0,r.memo)((function(e){var t=e.tutorial,a=t.source&&(0,O.Z)(t.source),l=t.route&&(0,O.Z)(t.route),n=(0,r.useState)(!1),o=n[0],i=n[1],c=function(e,t){e.preventDefault(),e.stopPropagation(),window.location.href=t};return r.createElement("li",{key:t.title,onMouseOver:function(){return i(!0)},onMouseOut:function(){return i(!1)}},r.createElement("div",{onClick:function(e){return c(e,l)},className:"card shadow--md tutorial-card"},r.createElement("div",{className:"card__image tutorial-card__image-container"},r.createElement(I.Z,{className:"tutorial-card__image",img:t.preview,alt:t.title})),r.createElement("div",{className:"card__body"},r.createElement("div",{className:"tutorial-card__header"},r.createElement("h4",{className:(0,d.Z)("tutorial-card__title",o&&"tutorial-card__title--hover")},t.title),t.tags.includes("favorite")&&r.createElement(L,{svgClass:"svg-icon-favorite",size:"small"}),t.source&&r.createElement("div",{onClick:function(e){return c(e,a)},className:"button button--secondary button--sm tutorial-card__source-button"},"source")),r.createElement("p",{className:"tutorial-card__body"},t.description)),r.createElement("ul",{className:"card__footer tutorial-card__footer"},r.createElement(M,{tags:t.tags}))))}));R.displayName="TutorialCard";var B=R;var U=function(){var e=C();return 0===e.length?r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container padding-vert--md text--center"},r.createElement("h2",null,"No result"))):r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container margin-top--lg"},r.createElement("ul",{className:"tutorial-list"},e.map((function(e){return r.createElement(B,{key:e.title,tutorial:e})})))))};function W(){return r.createElement("section",{className:"container margin-top--lg margin-bottom--lg text--center"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--2 col--offset-0"},r.createElement("h1",{className:"tutorial-header"},"Tutorials"))))}var H=function(){return r.createElement(l.Z,{title:"Tutorials"},r.createElement("main",{className:"margin-vert--lg"},r.createElement(W,null),r.createElement(S,null),r.createElement(U,null)))}}}]);