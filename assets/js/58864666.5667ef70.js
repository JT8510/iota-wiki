"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?i.createElement(m,r(r({ref:t},l),{},{components:n})):i.createElement(m,r({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={image:"/img/integration-services/logo/integration_services.png",description:"This section introduces the authentication schema used in the Integration Services.",keywords:["explanation","authentication","jwt","nonce","not-authenticated",401,"explanation"]},r="Concept",s={unversionedId:"explanations/authentication",id:"explanations/authentication",title:"Concept",description:"This section introduces the authentication schema used in the Integration Services.",source:"@site/iota/external/integration-services/production/documentation/docs/explanations/authentication.md",sourceDirName:"explanations",slug:"/explanations/authentication",permalink:"/integration-services/explanations/authentication",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/explanations/authentication.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section introduces the authentication schema used in the Integration Services.",keywords:["explanation","authentication","jwt","nonce","not-authenticated","401","explanation"]},sidebar:"docs",previous:{title:"IOTA Streams",permalink:"/integration-services/explanations/streams"},next:{title:"Ecommerce-Audit Trail Gateway (GW)",permalink:"/integration-services/explanations/services/audit-trail-gateway/introduction"}},c={},u=[{value:"Authentication Workflow",id:"authentication-workflow",level:2},{value:"1. Request a Nonce",id:"1-request-a-nonce",level:3},{value:"2. Hash the Nonce",id:"2-hash-the-nonce",level:3},{value:"3. Sign the Hashed Nonce",id:"3-sign-the-hashed-nonce",level:3},{value:"4. Request the JWT",id:"4-request-the-jwt",level:3},{value:"5. Use the JWT in a Header",id:"5-use-the-jwt-in-a-header",level:3},{value:"Related How-To Guides",id:"related-how-to-guides",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concept"},"Concept"),(0,a.kt)("p",null,"The Integration Services API uses JSON Web Tokens (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"JWTs"),") as a secure way to authenticate yourself. First, you must sign a nonce (number only used once) generated by the API with your secret key to obtain a JWT. Afterwards, the API verifies the signed nonce and returns a JWT."),(0,a.kt)("h2",{id:"authentication-workflow"},"Authentication Workflow"),(0,a.kt)("h3",{id:"1-request-a-nonce"},"1. Request a Nonce"),(0,a.kt)("p",null,"First, you must request the nonce via a get request to the endpoint. Provide the identity id to authenticate in the URL. You can find more information in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/integration-services/api_reference#authenticationprove-ownershipid"},"API Reference"),"."),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/authentication/prove-ownership/<identity-id>")),(0,a.kt)("p",null,"JSON response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nonce": "748fd25be77773dbce248779e4982b6759f84071"\n}\n')),(0,a.kt)("h3",{id:"2-hash-the-nonce"},"2. Hash the Nonce"),(0,a.kt)("p",null,"Once you have received your nonce, you should hash it using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"SHA-256")," and encode it to hexadecimal to sign it afterwards."),(0,a.kt)("h3",{id:"3-sign-the-hashed-nonce"},"3. Sign the Hashed Nonce"),(0,a.kt)("p",null,"You can now sign the hashed nonce with your secret key. Your secret key is encoded in Base58 and needs to be decoded to hexadecimal.\nYou can sign your hashed nonce with your decoded secret key using the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519"},"Ed25519")," algorithm. Make sure that the signed nonce is in hexadecimal."),(0,a.kt)("h3",{id:"4-request-the-jwt"},"4. Request the JWT"),(0,a.kt)("p",null,"You can request your JWT using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/authentication/prove-ownership/<identity-id>")," endpoint. It is the same endpoint as in the first step, but it uses the POST method instead of GET. You should add your signed nonce in the request body. You can find more information in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/integration-services/api_reference#authenticationprove-ownershipid"},"API Reference"),"."),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/authentication/prove-ownership/<identity-id>")),(0,a.kt)("p",null,"JSON request body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "signedNonce": "9606885340235e37d43..."\n}\n')),(0,a.kt)("p",null,"JSON response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jwt": "eyJhbGciOiJIUzI1NiI..."\n}\n')),(0,a.kt)("h3",{id:"5-use-the-jwt-in-a-header"},"5. Use the JWT in a Header"),(0,a.kt)("p",null,"For all following requests to endpoints protected by authentication use your JWT in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authentication")," header with the prefix Bearer: ",(0,a.kt)("inlineCode",{parentName:"p"},"Authentication: Bearer eyJhbGciOiJIUzI1NiI...")),(0,a.kt)("h2",{id:"related-how-to-guides"},"Related How-To Guides"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integration-services/how_tos/integration-services-sdk/authenticate-your-identity"},"How To Authenticate Your Identity"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/integration-services/how_tos/is-cli/authenticate-your-identity"},"How To Authenticate Your Identity"),";")))}d.isMDXComponent=!0}}]);