"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55143:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Safe Password Storage",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In a production setup, do not store passwords in the host's environment variables or in the source code.  See our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/how_tos/backup_security"},"backup and security recommendations")," for production setups.")))}o.isMDXComponent=!0},56141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(55143);const o={description:"Get started with the official IOTA Wallet Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},l="Getting Started with Python",s={unversionedId:"getting_started/python",id:"getting_started/python",title:"Getting Started with Python",description:"Get started with the official IOTA Wallet Library Python binding.",source:"@site/next/external/wallet.rs/documentation/docs/getting_started/python.mdx",sourceDirName:"getting_started",slug:"/getting_started/python",permalink:"/next/wallet.rs/getting_started/python",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/getting_started/python.mdx",tags:[],version:"current",frontMatter:{description:"Get started with the official IOTA Wallet Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},sidebar:"docs",previous:{title:"Getting Started with Node.js",permalink:"/next/wallet.rs/getting_started/nodejs"},next:{title:"Getting Started with Rust",permalink:"/next/wallet.rs/getting_started/rust"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Library",id:"install-the-library",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Change to the Python Binding Directory",id:"change-to-the-python-binding-directory",level:3},{value:"(optional) Create and use a virtual environment",id:"optional-create-and-use-a-virtual-environment",level:4},{value:"Linux and macOS",id:"linux-and-macos",level:5},{value:"Windows",id:"windows",level:5},{value:"Install the Required Dependencies and Build the Wheel",id:"install-the-required-dependencies-and-build-the-wheel",level:3},{value:"(optional) Deactivate the virtual environment",id:"optional-deactivate-the-virtual-environment",level:4},{value:"Use the Library",id:"use-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-python"},"Getting Started with Python"),(0,r.kt)(i.ZP,{mdxType:"SafePasswordStorage"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org"},"Python 3.x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/pip"},"pip")," >= 19.1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/setuptools-rust/"},"setuptools-rust")," >= 0.10.2"),(0,r.kt)("li",{parentName:"ul"},"Make sure you have fulfilled the ",(0,r.kt)("a",{parentName:"li",href:"/next/wallet.rs/getting_started/rust"},"Rust Getting Started")," requirements to compile the binding.")),(0,r.kt)("h2",{id:"install-the-library"},"Install the Library"),(0,r.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"You can clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs"},"wallet.rs client library")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/wallet.rs.git\n")),(0,r.kt)("h3",{id:"change-to-the-python-binding-directory"},"Change to the Python Binding Directory"),(0,r.kt)("p",null,"After you have cloned the repository, you should change directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.rs/bindings/python/native"),". You can do so\nby\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs/bindings/python/native\n")),(0,r.kt)("h4",{id:"optional-create-and-use-a-virtual-environment"},"(optional) Create and use a virtual environment"),(0,r.kt)("p",null,"If you want to isolate the library from the rest of your system, you can create a virtual environment by running the\nfollowing commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv iota_wallet_venv\n")),(0,r.kt)("h5",{id:"linux-and-macos"},"Linux and macOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source iota_wallet_venv/bin/activate\n")),(0,r.kt)("h5",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\\iota_wallet_venv\\Scripts\\activate\n")),(0,r.kt)("h3",{id:"install-the-required-dependencies-and-build-the-wheel"},"Install the Required Dependencies and Build the Wheel"),(0,r.kt)("p",null,"Once you have ",(0,r.kt)("a",{parentName:"p",href:"#clone-the-library"},"cloned the library"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"#change-to-the-python-binding-directory"},"moved to the binding's directory"),", you should install dependencies and\nbuild the wheel file."),(0,r.kt)("p",null,"You can do so by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements-dev.txt\npip install .\n")),(0,r.kt)("h4",{id:"optional-deactivate-the-virtual-environment"},"(optional) Deactivate the virtual environment"),(0,r.kt)("p",null,"If you want to deactivate the virtual environment, you should run the following command from the virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,r.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,r.kt)("p",null,"After you have ",(0,r.kt)("a",{parentName:"p",href:"#install-the-library"},"installed the library"),", you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"IotaWallet")," instance and interact with\nit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from iota_wallet import IotaWallet, StrongholdSecretManager\n\n# This example creates a new database and account\n\nclient_options = {\n    'nodes': ['https://api.testnet.shimmer.network'],\n}\n\n# Shimmer coin type\ncoin_type = 4219\n\nsecret_manager = StrongholdSecretManager(\"wallet.stronghold\", \"some_hopefully_secure_password\")\n\nwallet = IotaWallet('./alice-database', client_options, coin_type, secret_manager)\n\n# Store the mnemonic in the Stronghold snapshot, this only needs to be done once\naccount = wallet.store_mnemonic(\"flame fever pig forward exact dash body idea link scrub tennis minute \" +\n          \"surge unaware prosper over waste kitten ceiling human knife arch situate civil\")\n\naccount = wallet.create_account('Alice')\nprint(account)\n")),(0,r.kt)("h2",{id:"whats-next"},"What's Next?"),(0,r.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,r.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/python/native/examples"},"code examples"),"."))}u.isMDXComponent=!0}}]);