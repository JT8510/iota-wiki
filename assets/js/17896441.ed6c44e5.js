"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27918],{95128:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var a=n(67294),r=n(79488),l=n(58755),i=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(i.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(i);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e,t=c(),n=t.metadata,l=t.frontMatter,i=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:l.keywords,image:null!=(e=i.image)?e:l.image})}var d=n(86010),m=n(13488),u=n(87462),v=n(97325),f=n(23672);function b(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(f.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(f.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){var e=c().metadata;return a.createElement(b,{previous:e.previous,next:e.next})}var h=n(39962),g=n(83699),E=n(30868),L=n(23702),N=n(86409),Z=n(58801);var k={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){var t=k[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(g.Z,{to:n,onClick:r},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){var t,n=e.className,r=e.versionMetadata,l=(0,h.Z)().siteConfig.title,i=(0,E.gA)({failfast:!0}).pluginId,o=(0,N.J)(i).savePreferredVersionName,c=(0,E.Jo)(i),s=c.latestDocSuggestion,m=c.latestVersionSuggestion,u=null!=s?s:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,d.Z)(n,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(_,{siteTitle:l,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:m.label,to:u.path,onClick:function(){return o(m.name)}})))}function T(e){var t=e.className,n=(0,Z.E)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function H(e){var t=e.className,n=(0,Z.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){var t=e.lastUpdatedBy;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function y(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:L.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(w,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(35228),M=n(74597),I="lastUpdated_vwxv";function B(e){return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function O(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I)},(n||r)&&a.createElement(y,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function V(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,i=e.tags,o=i.length>0,s=!!(t||n||l);return o||s?a.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(B,{tags:i}),s&&a.createElement(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var P=n(54639),S=n(2728),R=n(63366),D="tocCollapsibleButton_TO0P",z="tocCollapsibleButtonExpanded_MG3E",j=["collapsed"];function F(e){var t=e.collapsed,n=(0,R.Z)(e,j);return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",D,!t&&z,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var q="tocCollapsible_ETCw",G="tocCollapsibleContent_vkbj",J="tocCollapsibleExpanded_sAul";function Q(e){var t=e.toc,n=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,P.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return a.createElement("div",{className:(0,d.Z)(q,!o&&J,n)},a.createElement(F,{collapsed:o,onClick:c}),a.createElement(P.z,{lazy:!0,className:G,collapsed:o},a.createElement(S.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}var W="tocMobile_ITEo";function X(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(Q,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,W)})}var K=n(87086);function Y(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(K.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var $=n(13899),ee=n(80985);function te(e){var t,n,r,l,i=e.children,o=(t=c(),n=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:n.title);return a.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},o&&a.createElement("header",null,a.createElement($.Z,{as:"h1"},o)),a.createElement(ee.Z,null,i))}var ne=n(87400),ae=n(69003),re=n(79524);function le(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ie={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function oe(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(g.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ce(e){var t=e.children,n=e.active,r=e.index,l=e.addMicrodata;return a.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function se(){var e=(0,re.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(g.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",ie.breadcrumbsItemLink),href:e},a.createElement(le,{className:ie.breadcrumbHomeIcon})))}function de(){var e=(0,ne.s1)(),t=(0,ae.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(se,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(ce,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(oe,{href:t.href,isLast:r},t.label))})))):null}var me="docItemContainer_Djhp",ue="docItemCol_VOVn";function ve(e){var t,n,r,l,i,o,s=e.children,u=(t=c(),n=t.frontMatter,r=t.toc,l=(0,m.i)(),i=n.hide_table_of_contents,o=!i&&r.length>0,{hidden:i,mobile:o?a.createElement(X,null):void 0,desktop:!o||"desktop"!==l&&"ssr"!==l?void 0:a.createElement(Y,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!u.hidden&&ue)},a.createElement(T,null),a.createElement("div",{className:me},a.createElement("article",null,a.createElement(de,null),a.createElement(H,null),u.mobile,a.createElement(te,null,s),a.createElement(V,null)),a.createElement(p,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function fe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(o,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(s,null),a.createElement(ve,null,a.createElement(n,null))))}},94850:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(97325),l=n(23702),i=n(87462),o=n(63366),c=n(86010),s="iconEdit_Z9Sw",d=["className"];function m(e){var t=e.className,n=(0,o.Z)(e,d);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(m,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},23672:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l=n(83699);function i(e){var t=e.permalink,n=e.title,i=e.subLabel,o=e.isNext;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},87086:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(63366),l=n(67294),i=n(86010),o=n(2728),c="tableOfContents_bqdL",s=["className"];function d(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},2728:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(63366),l=n(67294),i=n(20107),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=u();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var b=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,i.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=g?g:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,f,N,Z])),l.createElement(b,(0,a.Z)({toc:k,className:o,linkClassName:m},E))}},53852:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l=n(83699),i="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function s(e){var t=e.permalink,n=e.label,s=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(i,s?c:o)},n,s&&a.createElement("span",null,s))}},74597:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l=n(97325),i=n(53852),o="tags_jXut",c="tag_QGVx";function s(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:c},a.createElement(i.Z,{label:t,permalink:n}))}))))}},58801:function(e,t,n){n.d(t,{E:function(){return o},q:function(){return i}});var a=n(67294),r=n(58755),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},35228:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(63366),l=n(67294),i=n(94850),o=["editUrl"];function c(e){var t=e.editUrl,n=(0,r.Z)(e,o),c=function(e){return new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i").test(e)}(t)?function(e){var t=new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i");return e.replace(t,"")}(t):t;return l.createElement(i.Z,(0,a.Z)({editUrl:c},n))}}}]);