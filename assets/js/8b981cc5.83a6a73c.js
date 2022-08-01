"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40290],{14563:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Running a node","Go-lang","GoShimmer","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},l="Running a Node",d={unversionedId:"guide/chains_and_nodes/running-a-node",id:"guide/chains_and_nodes/running-a-node",title:"Running a Node",description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",source:"@site/content/build/wasp/production/documentation/docs/guide/chains_and_nodes/running-a-node.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/running-a-node",permalink:"/smart-contracts/guide/chains_and_nodes/running-a-node",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/chains_and_nodes/running-a-node.md",tags:[],version:"current",frontMatter:{description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Running a node","Go-lang","GoShimmer","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},sidebar:"tutorialSidebar",previous:{title:"Sending Tokens From IOTA Smart Contracts to the Tangle",permalink:"/smart-contracts/guide/solo/sending-funds-sc"},next:{title:"Docker (Standalone)",permalink:"/smart-contracts/guide/chains_and_nodes/docker_standalone"}},p={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Download Wasp",id:"download-wasp",level:2},{value:"Compile",id:"compile",level:2},{value:"Linux/macOS",id:"linuxmacos",level:3},{value:"macOS arm64 (M1 Apple Silicon)",id:"macos-arm64-m1-apple-silicon",level:3},{value:"Microsoft Windows",id:"microsoft-windows",level:3},{value:"Microsoft Windows Installation Errors",id:"microsoft-windows-installation-errors",level:4},{value:"Test",id:"test",level:2},{value:"Run All Tests",id:"run-all-tests",level:3},{value:"Run Unit Tests",id:"run-unit-tests",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Peering",id:"peering",level:3},{value:"Goshimmer Connection Settings",id:"goshimmer-connection-settings",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Web API",id:"web-api",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Prometheus",id:"prometheus",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Goshimmer Provider",id:"goshimmer-provider",level:2},{value:"Default Configuration Changes",id:"default-configuration-changes",level:3},{value:"Add the TXStream plugin port",id:"add-the-txstream-plugin-port",level:4},{value:"Enable TXStream and Faucet Plugins",id:"enable-txstream-and-faucet-plugins",level:4},{value:"Running the Node",id:"running-the-node",level:2},{value:"Accessing Your Node From a Remote Machine",id:"accessing-your-node-from-a-remote-machine",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,i.kt)("p",null,"In the following section, you can find information on how to use Wasp by cloning the repository and building the application. The instructions below will build both the Wasp node and the Wasp CLI to interact with the node from the command line."),(0,i.kt)("p",null,"If you just want to run a Wasp node, you can also use the ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/docker_standalone"},"Wasp standalone Docker image")," or a pre-configured local ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/development_tools/docker_preconfigured"},"Wasp and GoShimmer node setup using Docker Compose"),"."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cores"),": At least 2 cores (most modern processors will suffice)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RAM"),": 4GB")),(0,i.kt)("h3",{id:"software"},"Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go 1.16")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"RocksDB")),(0,i.kt)("li",{parentName:"ul"},"Access to a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer"},"GoShimmer")," node for\nproduction operation.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"GoShimmer is a developing prototype, so some things are prone to break. For a smooth development experience, you should use the GoShimmer code at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/commit/25c827e8326a"},"this commit"),".")),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Wasp node requires the Goshimmer node to have the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/master/plugins/txstream"},"TXStream"),"\nplugin enabled. Being an experimental plugin, it is currently disabled by default and can\nbe enabled via configuration.")),(0,i.kt)("h2",{id:"download-wasp"},"Download Wasp"),(0,i.kt)("p",null,"You can get the source code of the latest Wasp version from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp"},"official repository"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp\n")),(0,i.kt)("h2",{id:"compile"},"Compile"),(0,i.kt)("p",null,"You can build and install both ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," by running the following commands."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default this will place the applications in ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," on Linux and Mac and ",(0,i.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/go/bin")," on Windows. On Windows the Go installation should add this path automatically to your PATH environment variable. On Linux and Mac you can add this location to your PATH by adding the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.profile"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:$(go env GOPATH)/bin\n")),(0,i.kt)("p",{parentName:"admonition"},"Changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as ",(0,i.kt)("inlineCode",{parentName:"p"},"source $HOME/.profile"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As an alternative you could run ",(0,i.kt)("inlineCode",{parentName:"p"},"make build")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"make install"),", this would only build the applications and leave them in the repository directory.")),(0,i.kt)("h3",{id:"linuxmacos"},"Linux/macOS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make install\n")),(0,i.kt)("h3",{id:"macos-arm64-m1-apple-silicon"},"macOS arm64 (M1 Apple Silicon)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bytecodealliance/wasmtime-go"},(0,i.kt)("inlineCode",{parentName:"a"},"wasmtime-go"))," hasn't supported macOS on arm64 yet, so you should build your own wasmtime library. You can follow the README in ",(0,i.kt)("inlineCode",{parentName:"p"},"wasmtime-go")," to build the library.\nOnce a wasmtime library is built, then you can run the following commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go mod edit -replace=github.com/bytecodealliance/wasmtime-go=<wasmtime-go path>\nmake install\n")),(0,i.kt)("h3",{id:"microsoft-windows"},"Microsoft Windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make install-windows\n")),(0,i.kt)("h4",{id:"microsoft-windows-installation-errors"},"Microsoft Windows Installation Errors"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"make install-windows")," command tells you it cannot find ",(0,i.kt)("inlineCode",{parentName:"p"},"gcc")," you will need to\ninstall ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/mingw-w64/"},"MinGW-w64"),".Make sure\nto select ",(0,i.kt)("em",{parentName:"p"},"x86_64")," architecture instead of the preselected ",(0,i.kt)("em",{parentName:"p"},"i686"),"\narchitecture during the installation process. After the installation make sure to\nadd the following folder to your PATH variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin\n")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("h3",{id:"run-all-tests"},"Run All Tests"),(0,i.kt)("p",null,"You can run integration and unit test together with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go test -tags rocksdb,builtin_static -timeout 20m ./...\n")),(0,i.kt)("p",null,"Keep in mind that this process may take several minutes."),(0,i.kt)("h3",{id:"run-unit-tests"},"Run Unit Tests"),(0,i.kt)("p",null,"You can run the unit tests without running integration tests with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go test -tags rocksdb,builtin_static -short ./...\n")),(0,i.kt)("p",null,"This will take significantly less time than ",(0,i.kt)("a",{parentName:"p",href:"#run-all-tests"},"running all tests"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"You can configure your node/s using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/config.json"},(0,i.kt)("inlineCode",{parentName:"a"},"config.json")),"\nconfiguration file. If you plan to run several nodes in the same host, you will need to adjust the port configuration."),(0,i.kt)("h3",{id:"peering"},"Peering"),(0,i.kt)("p",null,"Wasp nodes connect to other Wasp peers to form committees. There is exactly one\nTCP connection between two Wasp nodes participating in the same committee. Each\nnode uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"peering.port")," setting to specify the port that will be used for peering."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"peering.netid")," must have the form ",(0,i.kt)("inlineCode",{parentName:"p"},"host:port"),", with a ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," value equal to\n",(0,i.kt)("inlineCode",{parentName:"p"},"peering.port"),", and where ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," must resolve to the machine where the node is\nrunning and be reachable by other nodes in the committee. Each node in a\ncommittee must have a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"netid"),"."),(0,i.kt)("h3",{id:"goshimmer-connection-settings"},"Goshimmer Connection Settings"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nodeconn.address")," specifies the Goshimmer host and port (exposed by the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/master/plugins/txstream"},"TXStream")," plugin) to\nconnect to. You can find more information about the Goshimmer node in the ",(0,i.kt)("a",{parentName:"p",href:"#goshimmer-provider"},"Goshimmer Provider section"),"."),(0,i.kt)("h3",{id:"publisher"},"Publisher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," specifies the port for the ",(0,i.kt)("a",{parentName:"p",href:"https://nanomsg.org/"},"Nanomsg")," event publisher. Wasp nodes\npublish important events happening in smart contracts, such as state\ntransitions, incoming and processed requests, and similar. Any Nanomsg client\ncan subscribe to these messages."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"More Information on Wasp and Nanomsg"),(0,i.kt)("div",null,"Each Wasp node publishes important events via a [Nanomsg](https://nanomsg.org/) message stream (just like ZMQ is used in IRI). Possibly, in the future, [ZMQ](https://zeromq.org/) and [MQTT](https://mqtt.org/) publishers will be supported too.",(0,i.kt)("p",null,"Any Nanomsg client can subscribe to the message stream. In Go, you can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"packages/subscribe")," package provided in Wasp for this."),(0,i.kt)("p",null,"The Publisher port can be configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nanomsg.port"),"\nsetting."),(0,i.kt)("p",null,"The Message format is simply a string consisting of a space-separated list of tokens, and the first token\nis the message type. Below is a list of all message types published by Wasp (you can search for\n",(0,i.kt)("inlineCode",{parentName:"p"},"publisher.Publish")," in the code to see the exact places where each message is published)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain record has been saved in the registry"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"chainrec <chain ID> <color>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain committee has been activated"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"active_committee <chain ID>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain committee dismissed"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dismissed_committee <chain ID>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"A new SC request reached the node"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"request_in <chain ID> <request tx ID> <request block index>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SC request has been processed (i.e. corresponding state update was confirmed)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"State transition (new state has been committed to DB)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Event generated by a SC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vmmsg <chain ID> <contract hname> ..."))))))),(0,i.kt)("h3",{id:"web-api"},"Web API"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webapi.bindAddress")," specifies the bind address/port for the Web API, used by\n",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and other clients to interact with the Wasp node."),(0,i.kt)("h3",{id:"dashboard"},"Dashboard"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," specifies the bind address/port for the node dashboard,\nwhich can be accessed with a web browser."),(0,i.kt)("h3",{id:"prometheus"},"Prometheus"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.bindAddress")," specifies the bind address/port for the prometheus server, where it's possible to get multiple system metrics."),(0,i.kt)("p",null,"By default, Prometheus is disabled and should be enabled by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.enabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"grafana"},"Grafana"),(0,i.kt)("p",null,"Grafana provides a dashboard to visualize system metrics. It can use the prometheus metrics as a data source."),(0,i.kt)("h2",{id:"goshimmer-provider"},"Goshimmer Provider"),(0,i.kt)("p",null,"For the Wasp node to communicate with the L1 (Tangle/Goshimmer Network), it needs access to a Goshimmer node with the TXStream plugin enabled. You can use any ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/guide/chains_and_nodes/testnet"},"publicly available node"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/goshimmer/tutorials/setup/"},"set up your own node"),"."),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By default, the TXStream plugin will be listening for Wasp connections on port ",(0,i.kt)("inlineCode",{parentName:"p"},"5000"),".")),(0,i.kt)("h3",{id:"default-configuration-changes"},"Default Configuration Changes"),(0,i.kt)("p",null,"If you are using the default GoShimmer docker image you will need to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/goshimmer/tutorials/setup#define-the-docker-composeyml"},"edit your GoShimmer docker-compose.yml")," file to include the following settings."),(0,i.kt)("h4",{id:"add-the-txstream-plugin-port"},"Add the TXStream plugin port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'ports:\n    [...]\n      # TXStream plugin\n      - "0.0.0.0:5000:5000/tcp"\n    [...]\n')),(0,i.kt)("h4",{id:"enable-txstream-and-faucet-plugins"},"Enable TXStream and Faucet Plugins"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"[...]\n--node.enablePlugins=remotelog,networkdelay,spammer,prometheus,txstream,faucet\n[...]\n")),(0,i.kt)("h2",{id:"running-the-node"},"Running the Node"),(0,i.kt)("p",null,"After you have tweaked ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," to your liking, you can start a Wasp node by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp")," in the same directory\nas shown in the following snippet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir wasp-node\ncp config.json wasp-node\ncd wasp-node\n#<edit config.json as desired>\nwasp\n")),(0,i.kt)("p",null,"You can verify that your node is running by opening the dashboard with a web browser at ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:7000"},(0,i.kt)("inlineCode",{parentName:"a"},"127.0.0.1:7000"))," (default url)."),(0,i.kt)("p",null,"Repeat this process to launch as many nodes as you want for your committee."),(0,i.kt)("h3",{id:"accessing-your-node-from-a-remote-machine"},"Accessing Your Node From a Remote Machine"),(0,i.kt)("p",null,"If you want to access the Wasp node from outside its local network, you will need to add your public IP to the ",(0,i.kt)("inlineCode",{parentName:"p"},"webpi.adminWhitelist"),". You can do so by adding it to your config file, or running the node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"webapi.adminWhitelist")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp --webapi.adminWhitelist=127.0.0.1,YOUR_IP\n")),(0,i.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eV2AoV3QPC4",title:"Wasp Node Setup",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);