"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[855],{3905:(e,n,s)=>{s.d(n,{Zo:()=>p,kt:()=>u});var t=s(67294);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){a(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,t,a=function(e,n){if(null==e)return{};var s,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(a[s]=e[s]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=t.createContext({}),d=function(e){var n=t.useContext(o),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},p=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},_=t.forwardRef((function(e,n){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),_=d(s),u=a,m=_["".concat(o,".").concat(u)]||_[u]||c[u]||r;return s?t.createElement(m,i(i({ref:n},p),{},{components:s})):t.createElement(m,i({ref:n},p))}));function u(e,n){var s=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=_;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=s[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}_.displayName="MDXCreateElement"},62532:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(87462),a=(s(67294),s(3905));const r={description:"Official IOTA Streams C API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","C","examples"]},i="Examples",l={unversionedId:"libraries/c/examples",id:"libraries/c/examples",title:"Examples",description:"Official IOTA Streams C API examples.",source:"@site/iota/external/streams/develop/documentation/docs/libraries/c/examples.md",sourceDirName:"libraries/c",slug:"/libraries/c/examples",permalink:"/streams/libraries/c/examples",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/main/documentation/iota/external/streams/develop/documentation/docs/libraries/c/examples.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Streams C API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","C","examples"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/streams/libraries/c/getting_started"},next:{title:"Iota Streams C Bindings API Reference",permalink:"/streams/libraries/c/api_reference"}},o={},d=[{value:"Core Functionality",id:"core-functionality",level:2},{value:"Author Generation",id:"author-generation",level:3},{value:"Subscriber Generation",id:"subscriber-generation",level:3},{value:"Subscription",id:"subscription",level:3},{value:"Keyload",id:"keyload",level:3},{value:"Sending Messages",id:"sending-messages",level:3},{value:"Message Fetching",id:"message-fetching",level:3},{value:"Forward",id:"forward",level:4},{value:"Backwards",id:"backwards",level:4}],p={toc:d};function c(e){let{components:n,...s}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"An overview example of the available api tools can be found ",(0,a.kt)("a",{parentName:"p",href:"../../../../bindings/c/main.c"},"here"),".\nThe general API is simply an abstraction over the rust library, so the examples found\n",(0,a.kt)("a",{parentName:"p",href:"/streams/libraries/rust/examples"},"here")," still apply (with some minor modifications, see: ",(0,a.kt)("a",{parentName:"p",href:"/streams/libraries/c/api_reference"},"api_reference"),")"),(0,a.kt)("h2",{id:"core-functionality"},"Core Functionality"),(0,a.kt)("h3",{id:"author-generation"},"Author Generation"),(0,a.kt)("p",null,"Create an Author and generate a new channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'uint8_t multi_branching = 0;\nchar seed[] = "Some unique seed";\nchar const encoding[] = "utf-8";\nconst size_t size = 1024;\nchar const *url = "https://chrysalis-nodes.iota.org";\n\ntransport_t *tsp = tsp_client_new_from_url(url);\nauthor_t *auth = auth_new(seed, encoding, size, multi_branching, tsp);\naddress_t const *ann_link = auth_send_announce(auth);\nprintf("Announcement message sent");\n\nchar const *ann_address_inst_str = get_address_inst_str(ann_link);\nchar const *ann_address_id_str = get_address_id_str(ann_link);\n// Link used by subscribers to attach to instance\nprintf("Link: %s:%s\\n", ann_address_inst_str, ann_address_id_str);\n\n// Clean up\ndrop_str(ann_address_inst_str);\ndrop_str(ann_address_id_str);\ndrop_address(ann_link);\nauth_drop(auth);\ntsp_drop(tsp);\n')),(0,a.kt)("h3",{id:"subscriber-generation"},"Subscriber Generation"),(0,a.kt)("p",null,"Create a Subscriber and attach to a channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char seed[] = "Some unique seed";\nchar const encoding[] = "utf-8";\nconst size_t size = 1024;\nchar const *url = "https://chrysalis-nodes.iota.org";\n\ntransport_t *tsp = tsp_client_new_from_url(url);\nsubscriber_t *sub = sub_new(seed, encoding, size, tsp);\n\naddress_t const *ann_link = address_from_string("Announcement:Link");\nsub_receive_announcement(sub, ann_link);\n\n// Clean up\ndrop_address(ann_link);\nsub_drop(sub);\ntsp_drop(tsp);\n')),(0,a.kt)("h3",{id:"subscription"},"Subscription"),(0,a.kt)("p",null,"Subscriber sends a subscription message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'address_t const *sub_link = sub_send_subscribe(sub, ann_link);\nchar const *sub_inst_str = get_address_inst_str(ann_link);\nchar const *sub_id_str = get_address_id_str(ann_link);\n// Link used by Author to process subscription\nprintf("Link: %s:%s\\n", sub_inst_str, sub_id_str);\n\n// Clean up\ndrop_str(sub_inst_str);\ndrop_str(sub_id_str);\ndrop_address(sub_link);\n')),(0,a.kt)("p",null,"Author accepts and processes subscription: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'address_t const *sub_link = address_from_string("Subscribe:Link");\nauth_receive_subscribe(auth, sub_link);\ndrop_address(sub_link);\n')),(0,a.kt)("h3",{id:"keyload"},"Keyload"),(0,a.kt)("p",null,"Author sends a keyload for all participants in the channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'message_links_t keyload_links = auth_send_keyload_for_everyone(auth, ann_link);\nchar const *keyload_inst_str = get_address_inst_str(keyload_links.msg_link);\nchar const *keyload_id_str = get_address_id_str(keyload_links.msg_link);\n// Keyload message can now act as starting point for a protected branch\nprintf("Link: %s:%s\\n", keyload_inst_str, keyload_id_str);\n\n// Clean up\ndrop_str(keyload_inst_str);\ndrop_str(keyload_id_str);\ndrop_links(keyload_links);\n')),(0,a.kt)("p",null,"Author sends a keyload for just one subscriber in the channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'sig_pks_t *sig_pks[sub_pk]\nmessage_links_t keyload_links = auth_send_keyload(auth, ann_link, NULL, sig_pks);\nchar const *keyload_inst_str = get_address_inst_str(keyload_links.msg_link);\nchar const *keyload_id_str = get_address_id_str(keyload_links.msg_link);\n// Keyload message can now act as starting point for a protected branch\nprintf("Link: %s:%s\\n", keyload_inst_str, keyload_id_str);\n\n// Clean up\ndrop_str(keyload_inst_str);\ndrop_str(keyload_id_str);\ndrop_links(keyload_links);\n')),(0,a.kt)("h3",{id:"sending-messages"},"Sending Messages"),(0,a.kt)("p",null,"Messages are required to be linked to a previous message that the user had access to.\nIn a single branch implementation this means the latest message in the branch, in multi\nbranch implementations, this can mean any message in a branch that they have had access\nto."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: In a multi publisher implementation (i.e. multiple publishers in a single branch),\nit is required that each publisher make sure to sync their state before publishing to ensure\nthat the instance stays in sync with the other publishers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char const public_payload[] = "A public payload woopeee";\nchar const masked_payload[] = "A masked payload uhu";\n\nsub_sync_state(sub);\nmessage_links_t signed_packet_links = sub_send_signed_packet(\n    sub, keyload_links,\n    (uint8_t const *)public_payload, sizeof(public_payload),\n    (uint8_t const *)masked_payload, sizeof(masked_payload)\n);\n\nchar const *signed_packet_inst_str = get_address_inst_str(signed_packet_links.msg_link);\nchar const *signed_packet_id_str = get_address_id_str(signed_packet_links.msg_link);\nprintf("Signed Packet link: %s:%s\\n", keyload_inst_str, keyload_id_str);\n\n// Clean up\ndrop_str(signed_packet_inst_str);\ndrop_str(signed_packet_id_str);\ndrop_links(signed_packet_links);\n')),(0,a.kt)("h3",{id:"message-fetching"},"Message Fetching"),(0,a.kt)("h4",{id:"forward"},"Forward"),(0,a.kt)("p",null,"When new messages are available to retrieve from the channel, you can fetch the next\nmessage sent by each publisher like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"unwrapped_messages_t const *message_returns = sub_sync_state(subA);\n\nsize_t x;\nfor(x = 0; x < sizeof(message_returns); x++)\n  {\n    printf(\"Found a message...\");\n    packet_payloads_t response = get_indexed_payload(message_returns, x);\n    printf(\"Unpacking message...\\npublic: '%s' \\tmasked: '%s'\\n\", response.public_payload.ptr, response.masked_payload.ptr);\n  }\n\n// Clean up\ndrop_unwrapped_messages(message_returns);\n")),(0,a.kt)("p",null,"If no new messages are present, the returned array will be empty."),(0,a.kt)("h4",{id:"backwards"},"Backwards"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'size_t num_messages = 10;\nunwrapped_messages_t const *prev_msgs = auth_fetch_prev_msgs(auth, latest_msg_link, num_messages);\nprintf("Previous messages retrieved... \\n);\n\nsize_t x;\nfor(x = 0; x < sizeof(message_returns); x++)\n  {\n    printf("Found a message...");\n    packet_payloads_t response = get_indexed_payload(message_returns, x);\n    printf("Unpacking message...\\npublic: \'%s\' \\tmasked: \'%s\'\\n", response.public_payload.ptr, response.masked_payload.ptr);\n  }\n\n// Clean up\ndrop_unwrapped_messages(prev_msgs);\n')))}c.isMDXComponent=!0}}]);