"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46103,29514],{95122:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(37027),l=a(18607),o=a(91891),i=a(54416),s=a(51384);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(19257);var u=function(e){var t,a=e.content,i=e.sidebar,s=a.frontMatter,u=a.assets,d=a.metadata,p=d.title,g=d.description,f=d.nextItem,v=d.prevItem,b=d.date,h=d.tags,_=d.authors,E=s.hide_table_of_contents,k=s.keywords,N=null!=(t=u.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!E&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:p,description:g,keywords:k,image:N},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),h.length>0&&n.createElement("meta",{property:"article:tag",content:h.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:s,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(f||v)&&n.createElement(c,{nextItem:f,prevItem:v}))}},91891:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(45697),l=a.n(r),o=a(86010),i=a(3905),s=a(54416),c=a(51384),m=a(51402),u=a(19257),d=a(83949),p=a(30513),g="blogHeader_11Jz",f="blogPostTitle_nmLu",v="blogPostData_3WzT",b="blogPostDetailsFull_3bEF",h="blogPostDataContainer_1pWc",_="tagsList_1Cfm",E=a(21192),k=a(16509);function N(e){var t,a,r,l,N=(r=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),w=(0,m.C)().withBaseUrl,y=e.children,Z=e.frontMatter,T=e.assets,C=e.metadata,P=e.truncated,D=e.isBlogPostPage,B=void 0!==D&&D,x=C.date,I=C.formattedDate,U=C.permalink,O=C.tags,M=C.readingTime,R=C.title,L=C.editUrl,S=C.authors,j=null!=(t=T.image)?t:Z.image;return n.createElement("article",{className:B?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=B?"h1":"h2",n.createElement("header",{className:g},n.createElement(l,{className:f,itemProp:"headline"},B?R:n.createElement(c.Z,{itemProp:"url",to:U},R)),n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col"},n.createElement(k.Z,{authors:S,assets:T})),n.createElement("div",{className:(0,o.Z)(v,"margin-vert--md","col")},n.createElement("div",{className:h},n.createElement("time",{dateTime:x,itemProp:"datePublished"},I),void 0!==M&&n.createElement(n.Fragment,null," \xb7 ",N(M))))))),j&&n.createElement("meta",{itemProp:"image",content:w(j,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(i.Zo,{components:d.Z},y)),(O.length>0||P)&&n.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(a={},a[b]=B,a))},O.length>0&&n.createElement("div",{className:(0,o.Z)("col",{"col--9":!B})},n.createElement("div",{className:_},n.createElement(E.Z,{tags:O}))),B&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(p.Z,{editUrl:L})),!B&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(c.Z,{to:C.permalink,"aria-label":"Read more about "+R},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}N.propTypes={children:l().node,frontMatter:l().object,assets:l().object,metadata:l().shape({date:l().string,formattedDate:l().string,permalink:l().string,tags:l().arrayOf(l().object),readingTime:l().string,title:l().string,editUrl:l().string,authors:l().arrayOf(l().object)}),truncated:l().bool,isBlogPostPage:l().bool},N.defaultProps={isBlogPostPage:!1};var w=N},30513:function(e,t,a){var n=a(67294),r=a(54416),l=a(23779),o=a(15987),i=a(45697),s=a.n(i);function c(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(o.Z,{editUrl:t}))}c.propTypes={editUrl:s().string},t.Z=c},32577:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(22122),r=a(19756),l=a(67294),o=a(86010),i=a(51384),s=a(19257),c=a(51402),m=a(45697),u=a.n(m),d=a(34455),p=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function g(e){var t=e.title,a=e.imageUrl,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:n},l.createElement("img",{alt:t,className:"social__image",src:(0,c.Z)(a)}),l.createElement("div",{className:"social__title"},t))}g.propTypes={title:u().string,imageUrl:u().string,url:u().string,backgroundColor:u().string};var f=function(){return l.createElement("div",{className:"social"},p.map((function(e,t){return l.createElement(g,(0,n.Z)({key:t},e))})))},v=["to","href","label","prependBaseUrlToHref"];function b(e){var t=e.to,a=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,r.Z)(e,v),u=(0,c.Z)(t),d=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?d:a}:{to:u},m),o)}b.propTypes={to:u().string,href:u().string,label:u().string,prependBaseUrlToHref:u().bool};var h=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};h.propTypes={sources:u().shape({light:u().string,dark:u().string}),alt:u().string};var _=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,c.Z)(u.src),dark:(0,c.Z)(u.srcDark||u.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(b,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(i.Z,{href:u.href},l.createElement(h,{alt:u.alt,sources:d})):l.createElement(h,{alt:u.alt,sources:d})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(f,null)):null}},78358:function(e,t,a){a.d(t,{O:function(){return b}});var n=a(22122),r=a(19756),l=a(67294),o=a(86010),i=a(45697),s=a.n(i),c=a(51384),m=a(51402),u=a(78168),d=a(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],g=["className","isDropdownItem"],f=["className"],v=["mobile","to","label"];function b(e){var t=e.activeBasePath,a=e.activeBaseRegex,o=e.to,i=e.href,s=e.label,g=e.sublabel,f=e.icon,v=e.activeClassName,b=void 0===v?"navbar__link--active":v,h=e.prependBaseUrlToHref,_=(0,r.Z)(e,p),E=(0,m.Z)(o),k=(0,m.Z)(t),N=(0,m.Z)(i,{forcePrependBaseUrl:!0}),w=s&&i&&!(0,d.Z)(i),y="dropdown__link--active"===b;return l.createElement(c.Z,(0,n.Z)({},i?{href:h?N:i}:Object.assign({isNavLink:!0,activeClassName:b,to:E},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(k)}}:null),_),l.createElement("div",{className:"link"},f&&l.createElement("div",{className:"link__icon"},f),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},w?l.createElement("span",null,s,l.createElement(u.Z,y&&{width:12,height:12})):s),g&&l.createElement("div",{className:"link__sublabel"},g))))}function h(e){var t=e.className,a=e.isDropdownItem,i=void 0!==a&&a,s=(0,r.Z)(e,g),c=l.createElement(b,(0,n.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?l.createElement("li",null,c):c}function _(e){var t=e.className,a=(0,r.Z)(e,f);return delete a.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,n.Z)({className:(0,o.Z)("menu__link",t)},a)))}function E(e){var t=e.mobile,a=void 0!==t&&t,o=e.to,i=e.label,s=(0,r.Z)(e,v);if(delete s.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},i)}var c=a?_:h;return l.createElement(c,(0,n.Z)({to:o,label:i},s))}b.propTypes={activeBasePath:s().string,activeBaseRegex:s().string,to:s().string,href:s().string,label:s().string,sublabel:s().string,icon:s().string,activeClassName:s().string,prependBaseUrlToHref:s().bool},b.defaultProps={activeClassName:"navbar__link--active"},h.propTypes={className:s().string,isDropdownItem:s().bool},h.defaultProps={isDropdownItem:!1},_.propTypes={className:s().string},E.propTypes={mobile:s().bool,to:s().string,label:s().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,a){var n=a(22122),r=a(19756),l=a(67294),o=a(86010),i=a(45697),s=a.n(i),c=a(19257),m=a(78358),u=a(52807),d=["items","position","className"],p=["items","className"],g=["mobile"];function f(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,a=e.items,i=e.position,s=e.className,p=(0,r.Z)(e,d),g=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),h=b[0],_=b[1],E=function(e,t,a){var n=t.filter((function(e){return f(e,a)}));return n.length?Object.assign({},n[0],{label:e.label+" > "+n[0].label}):e}(p,a,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},l.createElement(m.O,(0,n.Z)({className:(0,o.Z)("navbar__item navbar__link",s)},E,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!h))}}),null!=(t=p.children)?t:p.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var n=g.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,a=e.items,i=e.className,s=(0,r.Z)(e,p);delete s.position;var d=(0,c.be)(),g=function(e,t){return e.some((function(e){return f(e,t)}))}(a,d),v=(0,c.uR)({initialState:function(){return!g}}),b=v.collapsed,h=v.toggleCollapsed,_=v.setCollapsed;return(0,l.useEffect)((function(){g&&_(!g)}),[d,g]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(m.O,(0,n.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",i)},s,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=s.children)?t:s.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.map((function(e,t){return l.createElement(u.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function h(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,g);delete n.isDropdownItem;var o=a?b:v;return l.createElement(o,n)}v.propTypes=Object.assign({items:s().array,position:s().string,className:s().string},m.O.propTypes),b.propTypes=Object.assign({items:s().array,className:s().string},m.O.propTypes),h.propTypes={mobile:s().bool},h.defaultProps={mobile:!1},t.Z=h},52807:function(e,t,a){a.d(t,{Z:function(){return D}});var n=a(22122),r=a(19756),l=a(67294),o=a(45697),i=a.n(o),s=a(78358),c=a(61142),m=a(86010),u=a(19257),d=["items","label","className"],p=["className","to","href","label"],g=["items_","layout","position","className"],f=["items_","className"],v=["mobile"];function b(e,t){return e.some((function(e){e.items?b(e.items,t):function(e,t){!!(0,u.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function h(e){var t,a=e.items,n=e.label,l=e.className,o=(0,r.Z)(e,d),i={items:[],index:0};a?(n&&i.items.push({label:n,className:l}),(t=i.items).push.apply(t,a)):i.items.push(Object.assign({label:n,className:l},o));return i}function _(e){var t=e.className,a=e.to,o=e.href,i=e.label,c=(0,r.Z)(e,p);if(a||o)return l.createElement(s.O,(0,n.Z)({className:(0,m.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:a,href:o,label:i},c));if(i)return l.createElement("div",{className:"dropdown__label"},i);throw"Mega dropdown item must be a link or a category header."}function E(e){var t,a=e.items_,o=e.layout,i=e.position,c=e.className,d=(0,r.Z)(e,g),p=b(a,(0,u.be)()),f=(0,l.useRef)(null),v=(0,l.useState)(!1),E=v[0],k=v[1],N=a.map(h),w=o.length,y=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),Z=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,a){e&&"."!==e&&(Z[t+a*w]=e)}))}));for(var T=Z.map((function(e){var t,a=N[e];if(a)return null!=(t=a.items[a.index++])?t:null})),C=[],P=null,D=0;D<w;D++){for(var B=[],x=0;x<y;x++){var I=T[D+x*w];B.push(I),I&&(P=I)}C.push(B)}return P.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement(l.Fragment,null,l.createElement("div",{ref:f,className:(0,m.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":E}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},l.createElement(s.O,(0,n.Z)({className:(0,m.Z)("navbar__item navbar__link",c,{"navbar__link--active":p})},d,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!E))}}),null!=(t=d.children)?t:d.label)),l.createElement("div",{className:(0,m.Z)("dropdown__container",{"dropdown__container--show":E}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},l.createElement("div",{className:"dropdown__menu dropdown__menu--mega"},C.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(_,e):null)})))})))))}function k(e){var t,a=e.items_,o=e.className,i=(0,r.Z)(e,f);delete i.position,delete i.layout;var c=(0,u.be)(),d=b(a,c),p=(0,u.uR)({initialState:function(){return!d}}),g=p.collapsed,v=p.toggleCollapsed,h=p.setCollapsed;return(0,l.useEffect)((function(){d&&h(!d)}),[c,d]),l.createElement("li",{className:(0,m.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(s.O,(0,n.Z)({role:"button",className:(0,m.Z)("menu__link menu__link--sublist",o)},i,{onClick:function(e){e.preventDefault(),v()}}),null!=(t=i.children)?t:i.label),l.createElement(u.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.map((function(e,t){return l.createElement(D,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function N(e){var t=e.mobile,a=void 0!==t&&t,n=(0,r.Z)(e,v),o=a?k:E;return l.createElement(o,n)}_.propTypes={className:i().string,to:i().string,href:i().string,label:i().string},E.propTypes=Object.assign({items_:i().array,layout:i().arrayOf(i().string),position:i().string,className:i().string},s.O.propTypes),k.propTypes=Object.assign({items_:i().array,className:i().string},s.O.propTypes),N.propTypes={mobile:i().bool},N.defaultProps={mobile:!1};var w=N,y=a(36508),Z=a(62437),T=["type","items","layout"],C={default:function(){return s.Z},localeDropdown:function(){return y.Z},search:function(){return Z.Z},dropdown:function(){return c.Z},megaDropdown:function(){return w},docsVersion:function(){return a(39693).Z},docsVersionDropdown:function(){return a(74493).Z},doc:function(){return a(36673).Z}};function P(e){var t=e.type,a=e.items,o=e.layout,i=(0,r.Z)(e,T),s=function(e){var t=C[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,a){return a?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a,void 0!==o));return l.createElement(s,(0,n.Z)({items:a,layout:o},i))}P.propTypes={type:i().string,items:i().array,layout:i().arrayOf(i().string)};var D=P},5086:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(22122),r=a(67294),l=a(45697),o=a.n(l),i=a(19257),s=a(5730),c=a(86010),m=(0,r.memo)((function(e){var t=e.className,a=e.styles,n=e.icons,l=e.checked,o=e.disabled,i=e.onChange,s=(0,r.useState)(l),m=s[0],u=s[1],d=(0,r.useState)(!1),p=d[0],g=d[1],f=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":m,"toggle--focused":p,"toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=f.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:a.unchecked},n.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:a.checked},n.checked),r.createElement("input",{ref:f,checked:m,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!m)},onFocus:function(){return g(!0)},onBlur:function(){return g(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=f.current)||t.click())}}))}));function u(e){var t=(0,i.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,u=(0,s.Z)();return r.createElement(m,(0,n.Z)({disabled:!u,styles:{unchecked:c,checked:l},icons:{unchecked:o,checked:a}},e))}m.displayName="ToggleMemo",m.propTypes={className:o().string,styles:o().shape({unchecked:o().any,checked:o().any}),icons:o().shape({unchecked:o().string,checked:o().string}),checked:o().bool,disabled:o().bool,onChange:o().func}}}]);