"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(34259),i=n(18679);const s={image:"/img/integration-services/logo/integration_services.png",description:"This section will show you an example on how to authenticate using the IOTA IS-SDK npm package.",keywords:["how to","authentication","jwt","nonce","not-authenticated",401,"nodejs","is-sdk","java","node","npm","how to"]},l="Authenticate Your Identity",c={unversionedId:"how_tos/integration-services-sdk/authenticate-your-identity",id:"how_tos/integration-services-sdk/authenticate-your-identity",title:"Authenticate Your Identity",description:"This section will show you an example on how to authenticate using the IOTA IS-SDK npm package.",source:"@site/iota/external/integration-services/production/documentation/docs/how_tos/integration-services-sdk/authenticate-your-identity.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/authenticate-your-identity",permalink:"/integration-services/how_tos/integration-services-sdk/authenticate-your-identity",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/how_tos/integration-services-sdk/authenticate-your-identity.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section will show you an example on how to authenticate using the IOTA IS-SDK npm package.",keywords:["how to","authentication","jwt","nonce","not-authenticated","401","nodejs","is-sdk","java","node","npm","how to"]}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Required Packages",id:"required-packages",level:3},{value:"Authentication Workflow",id:"authentication-workflow",level:2},{value:"1. Request a Nonce",id:"1-request-a-nonce",level:3},{value:"2. Hash the Nonce",id:"2-hash-the-nonce",level:3},{value:"3. Sign the Hashed Nonce",id:"3-sign-the-hashed-nonce",level:3},{value:"4. Request the JWT",id:"4-request-the-jwt",level:3},{value:"5. Set the JWT as Request Header",id:"5-set-the-jwt-as-request-header",level:3},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authenticate-your-identity"},"Authenticate Your Identity"),(0,o.kt)("p",null,"In this how-to, you will learn to authenticate your identity. Make sure to read the\n",(0,o.kt)("a",{parentName:"p",href:"/integration-services/explanations/authentication"},"general authentication concept"),", so you can fully understand the\n",(0,o.kt)("a",{parentName:"p",href:"/integration-services/explanations/authentication#authentication-workflow"},"Authentication Workflow"),"."),(0,o.kt)("p",null,"This example uses the following identity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    identityId: 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF',\n    secretKey: '5N3SxG4UzVDpNe4LyDoZyb6bSgE9tk3pE2XP5znXo5bF'\n}\n")),(0,o.kt)("admonition",{title:"BETA",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk"},"Integration Services Java library")," is still in BETA. Please note that not\neverything may yet run smoothly.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openjdk.java.net/projects/jdk/16/"},"JDK 16")," (recommended)"),(0,o.kt)("li",{parentName:"ul"},"A reference to an instance of the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/integration-services"},"Integration Services API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"Maven")))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A recent version of ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (>v16.17.0).")))),(0,o.kt)("h3",{id:"required-packages"},"Required Packages"),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"Ideally every dependency listed in the\nproject's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/pom.xml"},"POM")," (",(0,o.kt)("inlineCode",{parentName:"p"},"mvn clean install"),"). This example uses in\nparticular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.commons.codec.digest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.http.*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.bitcoinj.core.Base58")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.bouncycastle.crypto")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.json.*")))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("p",null,"This example uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Axios")," as the HTTP client, ",(0,o.kt)("inlineCode",{parentName:"p"},"bs58")," to decode Base58, and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/noble-ed25519"},"@noble/ed25519")," to sign the nonce. However, you can use any package as long as it accomplishes the same result."),(0,o.kt)("p",null,"Newer versions may work, but the examples were tested with the following versions:"),(0,o.kt)(r.Z,{groupId:"packageManagerNode",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @noble/ed25519@1.5.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install bs58@4.0.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios@0.21.4\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @noble/ed25519@1.5.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add bs58@4.0.1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add axios@0.21.4\n")))))),(0,o.kt)("h2",{id:"authentication-workflow"},"Authentication Workflow"),(0,o.kt)("h3",{id:"1-request-a-nonce"},"1. Request a Nonce"),(0,o.kt)("p",null,"First, request a nonce and supply your identity id."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can find your current API version using the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/info"},"http://localhost:3000/info")," endpoint. This example uses ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.1"),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Never save your secret key in plain text in your code. Use local environment variables or IOTA ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},"Stronghold")," to store your secret keys securely.")),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    private String createNonce(String didId)\n    throws IOException, URISyntaxException, ParseException, InvalidAPIResponseException {\n    final String endpoint = "authentication/prove-ownership/" + didId;\n\n    JSONObject response = sendIOTAGetRequest(endpoint, null, false);\n    return response.getString("nonce");\n}\n\n    public JSONObject sendIOTAGetRequest(String endpoint, Map<String, String> params, boolean withAuth)\n    throws ClientProtocolException, IOException, URISyntaxException, ParseException,\n    InvalidAPIResponseException {\n    CloseableHttpClient client = HttpClients.createDefault();\n    final HttpEntity response_body = sendGetRequest(endpoint, params, withAuth, null, client); // see last step of tutorial for implementation of this method\n    if (response_body == null) {\n    return null;\n}\n\n    JSONObject result = new JSONObject(EntityUtils.toString(response_body, StandardCharsets.UTF_8));\n    client.close();\n    return result;\n}\n\n'))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js"',title:'"./authenticate.js"'},"import axios from 'axios';\n\nconst requestNonce = async () => {\nconst identityId = 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF';\nconst url = `http://localhost:3000/api/v0.2/authentication/prove-ownership/${identityId}`\nconst request = await axios.get(url);\nconsole.log(request.data);\n};\n\nrequestNonce();\n")))),(0,o.kt)("p",null,"The returned response body will look like this .js object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    nonce: '3eaf8814caa842d94fdb96fc26d02f7c339e65ff'\n}\n")),(0,o.kt)("h3",{id:"2-hash-the-nonce"},"2. Hash the Nonce"),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"After you have retrieved the nonce, you should hash it. You can use insert java method to hash the nonce with the\nSHA-256 hash function and convert it to hexadecimal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public void hashAndSignNonce(String privateKey, String publicKey, String nonce, String didId)\nthrows IOException, CryptoException, URISyntaxException, InvalidAPIResponseException {\n\nbyte[] b58key = Base58.decode(privateKey); // Decode a base58 key and encode it as hex key\nString b58keyHex = DatatypeConverter.printHexBinary(b58key).toLowerCase();\nbyte[] convertKey = DatatypeConverter.parseHexBinary(b58keyHex);\n\nString hashNonceHex = DigestUtils.sha256Hex(nonce); // Hash a nonce with SHA-256 (apache_commons)\nbyte[] convertNonce = DatatypeConverter.parseHexBinary(hashNonceHex);\n[...]\n"))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("p",null,"After you have retrieved the nonce, you should hash it. You can use the Node API's ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/crypto.html#hashupdatedata-inputencoding"},"createHash()")," function to hash the nonce with the SHA-256 hash function and convert it to hexadecimal.{#hashupdatedata-inputencoding) function to hash the nonce with the sha-256 hash function and convert it to hexadecimal.-node}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js"',title:'"./authenticate.js"'},"import crypto from 'crypto';\n\nconst hashNonce = () => {\nconst nonce = '3eaf8814caa842d94fdb96fc26d02f7c339e65ff';\n\nconst hashedNonce = crypto.createHash('sha256').update(nonce).digest('hex');\nconsole.log(hashedNonce);\n};\n\nhashNonce();\n")))),(0,o.kt)("p",null,"The example's nonce will generate the following hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"6d748f209e5af1f5b8825f7822d6659c45c874076cd2b3337c7861fd94cd3ba5\n")),(0,o.kt)("h3",{id:"3-sign-the-hashed-nonce"},"3. Sign the Hashed Nonce"),(0,o.kt)("p",null,"Your secret key is encoded in Base58 and has to be decoded. Once it has been decoded, the nonce is signed with your\nencoded secret key and saved as a hexadecimal string."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Never save your secret key in plain text in your code. Use local environment variables or\nIOTA ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},"Stronghold")," to store your secret keys securely.")),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java.]"},"\n        Ed25519PrivateKeyParameters privateKeyParams = new Ed25519PrivateKeyParameters(convertKey, 0); // Encode in\n// PrivateKey\n        Signer signer = new Ed25519Signer(); // Sign a nonce using the private key\n        signer.init(true, privateKeyParams);\n        signer.update(convertNonce, 0, convertNonce.length);\n        byte[] signature = signer.generateSignature();\n\n        String sign = Da\n[..tatypeConverter.printHexBinary(signature).toLowerCase();\n[...]\n"))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js"',title:'"./authenticate.js"'},"import * as ed from '@noble/ed25519';\nimport bs58 from 'bs58';\n\nconst signNonce = async () => {\n    const hashedNonce = '6d748f209e5af1f5b8825f7822d6659c45c874076cd2b3337c7861fd94cd3ba5';\n    const secretKey = '5N3SxG4UzVDpNe4LyDoZyb6bSgE9tk3pE2XP5znXo5bF';\n\n    const encodedSecretKey = bs58.decode(secretKey).toString('hex');\n    const signedNonceArray = await ed.sign(hashedNonce, encodedSecretKey);\n    const signedNonce = ed.Signature.fromHex(signedNonceArray).toHex();\n    console.log(signedNonce);\n};\n\nsignNonce();\n")))),(0,o.kt)("p",null,"The example's nonce and secret key will generate the following signed nonce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"270c2e502c5c753e39159683981e452444f81a10d798f56406a9c471d672a5ede1792cb7f97d4f9c9efeec7bf35577dd1f8482afca7e3710291868a65bf91e07\n")),(0,o.kt)("h3",{id:"4-request-the-jwt"},"4. Request the JWT"),(0,o.kt)("p",null,"The last step is to request the JWT. You can use the following code snippet with your signed nonce in the request body."),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'final String endpoint = "authentication/prove-ownership/" + didId;\n\nJSONObject json = new JSONObject().put("signedNonce", sign);\n\nJSONObject response = sendIOTAPostRequest(endpoint, json, false);\nbyte[] b58keyPrimary = Base58.decode(publicKey);\nString b58keyPrimaryHex = DatatypeConverter.printHexBinary(b58keyPrimary).toLowerCase();\nbyte[] convert_primarykey = DatatypeConverter.parseHexBinary(b58keyPrimaryHex);\n\nEd25519PublicKeyParameters primaryKeyVerify = new Ed25519PublicKeyParameters(convert_primarykey, 0);\nSigner verifier = new Ed25519Signer();\nverifier.init(false, primaryKeyVerify);\nverifier.update(convertNonce, 0, convertNonce.length);\nboolean verified = verifier.verifySignature(signature);\n\nSystem.out.println("Verify Signature: " + verified);\nthis.jwt = response.getString("jwt");\n}\n'))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js"',title:'"./authenticate.js"'},"import axios from 'axios';\n\nconst requestJWT = async () => {\nconst identityId = 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF';\nconst body = {\nsignedNonce:\n'270c2e502c5c753e39159683981e452444f81a10d798f56406a9c471d672a5ede1792cb7f97d4f9c9efeec7bf35577dd1f8482afca7e3710291868a65bf91e07'\n};\nconst url = `http://localhost:3000/api/v0.2/authentication/prove-ownership/${identityId}`;\n\nconst request = await axios.post(url, body);\nconsole.log(request.data);\n};\n\nrequestJWT();\n")))),(0,o.kt)("p",null,"The returned JS object will contain the following JWT:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZGlkOmlvdGE6OEJBbVVxQWc0YVVqVjNUOVdVaFBwRG5GVmJKU2sxNm9MeUZxM20zZTYyTUYiLCJwdWJsaWNLZXkiOiI3WFRYVlJ5M0cxTVhjbURrejJiUUNiV3B2OEF6b1FSZ3hHdjVtRG0xRkoxdCIsInVzZXJuYW1lIjoiVGltMTIzNDUiLCJyZWdpc3RyYXRpb25EYXRlIjoiMjAyMi0wMi0xOFQwNzo0ODo0NSswMTowMCIsImNsYWltIjp7InR5cGUiOiJQZXJzb24ifSwicm9sZSI6IlVzZXIifSwiaWF0IjoxNjQ1MTc3OTg1LCJleHAiOjE2NDUyNjQzODV9.-O2UpPyfWOvtLV2cUF9fPVhgCGDCVwFU9zXrpn_uKU0'\n}\n")),(0,o.kt)("h3",{id:"5-set-the-jwt-as-request-header"},"5. Set the JWT as Request Header"),(0,o.kt)("p",null,"This is an example of a GET request to the API with the JWT from the last step included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),":"),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    private HttpEntity sendGetRequest(String endpoint, Map<String, String> params, boolean needsBearer,\n    String presharedKey, CloseableHttpClient client) throws URISyntaxException, ClientProtocolException,\n    IOException, ParseException, InvalidAPIResponseException {\n    URIBuilder builder = new URIBuilder(this.baseUrl + endpoint);\n\n    if (params != null) {\n    for (Map.Entry<String, String> e : params.entrySet()) {\n    builder.setParameter(e.getKey(), e.getValue());\n}\n}\n    if (presharedKey != null) {\n    builder.setParameter("preshared-key", presharedKey);\n}\n\n    builder.setParameter("api-key", this.apiKey);\n    final URI urlFinal = builder.build();\n    System.out.println("GET " + urlFinal.toString());\n    HttpGet httpGet = new HttpGet(urlFinal);\n\n    httpGet.setHeader(HttpHeaders.ACCEPT, "application/json");\n    if (needsBearer && this.jwt != null) {\n    httpGet.setHeader(HttpHeaders.AUTHORIZATION, "Bearer " + this.jwt);\n}\n\n    CloseableHttpResponse response = client.execute(httpGet);\n    final HttpEntity response_body = response.getEntity();\n    int statusCode = response.getStatusLine().getStatusCode();\n    if (statusCode != 200) {\n    throw new InvalidAPIResponseException(\n    statusCode + EntityUtils.toString(response_body, StandardCharsets.UTF_8));\n}\n    return response_body;\n}\n\n'))),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js"',title:'"./authenticate.js"'},"import axios from 'axios';\n\nconst setAxiosHeader = () => {\n    const jwt =\n    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZGlkOmlvdGE6OEJBbVVxQWc0YVVqVjNUOVdVaFBwRG5GVmJKU2sxNm9MeUZxM20zZTYyTUYiLCJwdWJsaWNLZXkiOiI3WFRYVlJ5M0cxTVhjbURrejJiUUNiV3B2OEF6b1FSZ3hHdjVtRG0xRkoxdCIsInVzZXJuYW1lIjoiVGltMTIzNDUiLCJyZWdpc3RyYXRpb25EYXRlIjoiMjAyMi0wMi0xOFQwNzo0ODo0NSswMTowMCIsImNsYWltIjp7InR5cGUiOiJQZXJzb24ifSwicm9sZSI6IlVzZXIifSwiaWF0IjoxNjQ1MTc3OTg1LCJleHAiOjE2NDUyNjQzODV9.-O2UpPyfWOvtLV2cUF9fPVhgCGDCVwFU9zXrpn_uKU0';\n\n    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;\n};\n\nsetAxiosHeader();\n")))),(0,o.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,o.kt)("p",null,"You can find the complete code\nexample ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/src/main/java/net/gradbase/clients/BaseClient.java"},"here"),".\nAll snippets above are taken from there."),(0,o.kt)(r.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,o.kt)("p",null,"You can find the complete code example in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/src/main/java/net/gradbase/clients/BaseClient.java"},"repository"),".\nAll snippets above are taken from there.")),(0,o.kt)(i.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("p",null,"The following snippet is the final code using all functions together to request a JWT.\nYou can find the complete code example at this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Schereo/is-node-authentication"},"repository"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./authenticate.js"',title:'"./authenticate.js"'},"import axios from 'axios';\nimport * as ed from '@noble/ed25519';\nimport bs58 from 'bs58';\nimport crypto from 'crypto';\n\nconst requestNonce = async (identityId) => {\n    const url = `http://localhost:3000/api/v0.2/authentication/prove-ownership/${identityId}`;\n    const request = await axios.get(url);\n    return request.data.nonce;\n};\n\nconst hashNonce = (nonce) => {\n    const hashedNonce = crypto.createHash('sha256').update(nonce).digest('hex');\n    return hashedNonce;\n};\n\nconst signNonce = async (hashedNonce, secretKey) => {\n    const encodedSecretKey = bs58.decode(secretKey).toString('hex');\n    const signedNonceArray = await ed.sign(hashedNonce, encodedSecretKey);\n    const signedNonce = ed.Signature.fromHex(signedNonceArray).toHex();\n    return signedNonce;\n};\n\nconst requestJwt = async (identityId, signedNonce) => {\n    const url = `http://localhost:3000/api/v0.2/authentication/prove-ownership/${identityId}`;\n    const request = await axios.post(url, { signedNonce });\n    return request.data.jwt;\n};\n\nconst setAxiosHeader = (jwt) => {\n    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;\n};\n\nconst authenticate = async (identityId, secretKey) => {\n    const nonce = await requestNonce(identityId);\n    const hashedNonce = hashNonce(nonce);\n    const signedNonce = await signNonce(hashedNonce, secretKey);\n    const jwt = await requestJwt(identityId, signedNonce);\n    setAxiosHeader(jwt);\n};\n\nconst identityId = 'did:iota:8BAmUqAg4aUjV3T9WUhPpDnFVbJSk16oLyFq3m3e62MF';\nconst secretKey = '5N3SxG4UzVDpNe4LyDoZyb6bSgE9tk3pE2XP5znXo5bF';\nauthenticate(identityId, secretKey);\n\n")))))}h.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),o=n(67294),r=n(86010),i=n(51048),s=n(33609),l=n(1943),c=n(72957);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:h,groupId:m,className:g}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,l.U)(),[w,x]=(0,o.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=m){const e=f[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==w&&(j(t),x(a),null!=m&&N(m,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:S,onFocus:T,onClick:T},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);