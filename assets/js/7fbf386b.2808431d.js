"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[31538],{74102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={keywords:["how to","subscribe to channel","immutable data channel","Channel","Subscriber","Identity","CLI","Verifiable Credential"],description:"The IS-CLI allows technical as well as non-technical users to interact with Integration Services Audit Trail Gateway and SSI Bridge."},c="CLI for Integration Services",s={unversionedId:"is-cli/introduction",id:"is-cli/introduction",title:"CLI for Integration Services",description:"The IS-CLI allows technical as well as non-technical users to interact with Integration Services Audit Trail Gateway and SSI Bridge.",source:"@site/content/build/integration-services/production/documentation/docs/is-cli/introduction.md",sourceDirName:"is-cli",slug:"/is-cli/introduction",permalink:"/integration-services/is-cli/introduction",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/is-cli/introduction.md",tags:[],version:"current",frontMatter:{keywords:["how to","subscribe to channel","immutable data channel","Channel","Subscriber","Identity","CLI","Verifiable Credential"],description:"The IS-CLI allows technical as well as non-technical users to interact with Integration Services Audit Trail Gateway and SSI Bridge."},sidebar:"docs",previous:{title:"UI Components",permalink:"/integration-services/services/dashboard/ui-components"},next:{title:"Examples",permalink:"/integration-services/is-cli/is_cli_examples"}},u={},p=[{value:"Configure API environment",id:"configure-api-environment",level:3},{value:"Configure CLI for local API access",id:"configure-cli-for-local-api-access",level:3},{value:"View all commands",id:"view-all-commands",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-for-integration-services"},"CLI for Integration Services"),(0,a.kt)("p",null,"The IS-CLI allows technical as well as non-technical users to interact with Integration Services ",(0,a.kt)("inlineCode",{parentName:"p"},"Audit Trail Gateway"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"SSI Bridge"),". In a simple way users can create and manage Identities, Verifiable Credentials and Channels as well as retrieve information about them with different commands. The syntax is kept simple and it doesn't take a lot of time learning to start interacting with the services."),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"min. Node v15.6.0")),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @iota/is-cli@latest\n")),(0,a.kt)("p",null,"or for one-time use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @iota/is-cli <command>\n")),(0,a.kt)("h1",{id:"configurations"},"Configurations"),(0,a.kt)("h3",{id:"configure-api-environment"},"Configure API environment"),(0,a.kt)("p",null,"If you want to run a local node and want a quick setup of all the necessary configurations use this command. It generates the DB configurations in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo-init.js")," file and the environment variables in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"is setup-node\n")),(0,a.kt)("p",null,"If you want to run your local node with Docker use this command for the necessary configurations.\nIt does the same as for setting up the up the node with the previous command and does some adjustments specifically for running it with Docker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"is setup-docker\n")),(0,a.kt)("h3",{id:"configure-cli-for-local-api-access"},"Configure CLI for local API access"),(0,a.kt)("p",null,"Before starting using the CLI we need to configure the environment for the API of the local node once. Therefore provide the URL for ",(0,a.kt)("inlineCode",{parentName:"p"},"SSI Bridge")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"-s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Audit Trail Gateway")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"-a")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"API Key")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"-k"),".\nThis command will create one ",(0,a.kt)("inlineCode",{parentName:"p"},".iota-is.json")," file and will set the enviroment variables. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"is config -s http://localhost:3001 -a http://localhost:3002 -k <your-api-key>\n")),(0,a.kt)("p",null,"If running the node with Docker or if you want to request against a deployed instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Integration Services")," providing the gateway URL with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"-g")," is sufficient enough."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"is config -g http://localhost:3000  -k <your-api-key>\n")),(0,a.kt)("h3",{id:"view-all-commands"},"View all commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"is help\n")),(0,a.kt)("admonition",{title:"Important ",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For most of the channel and identity commands is a ",(0,a.kt)("inlineCode",{parentName:"p"},"identity.json")," file in the directory where the CLI is executed needed. The CLI is suited for creating one identity in advance."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"is create-identity -i <Path to identity claim file or stdin> -o  <Path to output file>\n"))))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);