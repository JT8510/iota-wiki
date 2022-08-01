"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59731],{11664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={description:"Learn how to install and run a HORNET node using Docker. It is recommended for macOS and Windows.",image:"/img/Banner/banner_hornet_using_docker.png",keywords:["IOTA Node","HORNET Node","Docker","Install","Run","macOS","Windows","how to"]},s="Install HORNET using Docker",d={unversionedId:"how_tos/using_docker",id:"how_tos/using_docker",title:"Install HORNET using Docker",description:"Learn how to install and run a HORNET node using Docker. It is recommended for macOS and Windows.",source:"@site/content/build/hornet/develop/documentation/docs/how_tos/using_docker.md",sourceDirName:"how_tos",slug:"/how_tos/using_docker",permalink:"/hornet/develop/how_tos/using_docker",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/develop/documentation/content/build/hornet/develop/documentation/docs/how_tos/using_docker.md",tags:[],version:"current",frontMatter:{description:"Learn how to install and run a HORNET node using Docker. It is recommended for macOS and Windows.",image:"/img/Banner/banner_hornet_using_docker.png",keywords:["IOTA Node","HORNET Node","Docker","Install","Run","macOS","Windows","how to"]},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/hornet/develop/getting_started/"},next:{title:"Post-installation",permalink:"/hornet/develop/how_tos/post_installation"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Download the latest release",id:"download-the-latest-release",level:2},{value:"Prepare",id:"prepare",level:2},{value:"1. Setup Environment",id:"1-setup-environment",level:3},{value:"2. Setup neighbors",id:"2-setup-neighbors",level:3},{value:"3. Create the <code>data</code> folder",id:"3-create-the-data-folder",level:3},{value:"4. Set dashboard credentials",id:"4-set-dashboard-credentials",level:3},{value:"Run",id:"run",level:2},{value:"Starting HORNET",id:"starting-hornet",level:3},{value:"Displaying Log Output",id:"displaying-log-output",level:3},{value:"Stopping HORNET",id:"stopping-hornet",level:3},{value:"Tools",id:"tools",level:3},{value:"JWT Auth",id:"jwt-auth",level:2},{value:"INX",id:"inx",level:2}],c={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-hornet-using-docker"},"Install HORNET using Docker"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HORNET Node using Docker",src:n(52438).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"This guide represents the recommended setup to run a HORNET node.\nIt includes everything required to setup a public node accessible by wallets and applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet"},"HORNET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://traefik.io"},"Traefik")," - Reverse proxy using SSL certificates to secure access to the node API and dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io"},"Prometheus")," - Metrics scraper configured to collect all metrics from HORNET and INX extensions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com"},"Grafana")," - Data visualizer that can be used to display the metrics collected by Prometheus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-dashboard"},"inx-dashboard")," - Node dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-dashboard"},"inx-indexer")," - Indexer extension for wallets and applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-mqtt"},"inx-mqtt")," - MQTT extension providing the Event API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-participation"},"inx-participation")," - Participation extension providing on-tangle-voting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-poi"},"inx-poi")," - Extention to generate proofs of inclusion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-spammer"},"inx-spammer")," - Network spammer.")),(0,o.kt)("p",null,"We only recommend running a node on hosted servers and not on personal computers.\nPlease take into consideration the points explained in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/nodes/explanations/security_101#securing-your-device"},"Security 101"),"."),(0,o.kt)("p",null,"HORNET Docker images (amd64/x86_64 and arm64 architecture) are available at the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/hornet"},"iotaledger/hornet")," Docker hub."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A recent release of Docker enterprise or community edition. You can find installation instructions in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"official Docker documentation"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/compose-plugin/"},"Docker Compose CLI plugin"),"."),(0,o.kt)("li",{parentName:"ol"},"A registered domain name pointing to the public IP address of your server."),(0,o.kt)("li",{parentName:"ol"},"Opening up the following ports in your servers firewall:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"15600 TCP")," - Used for gossip."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"14626 UDP")," - Used for autopeering."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"80 TCP")," - Used for HTTP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"443 TCP")," - Used for HTTPS."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://curl.se/"},"CURL"),".")),(0,o.kt)("h2",{id:"download-the-latest-release"},"Download the latest release"),(0,o.kt)("p",null,"Once you have completed all the installation ",(0,o.kt)("a",{parentName:"p",href:"#requirements"},"requirements"),", you can download the latest release by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'mkdir hornet\ncd hornet\ncurl -L -O "https://github.com/iotaledger/hornet/releases/download/v2.0.0-beta.3/HORNET-2.0.0-beta.3-docker.tar.gz"\ntar -zxf HORNET-2.0.0-beta.3-docker.tar.gz\n')),(0,o.kt)("h2",{id:"prepare"},"Prepare"),(0,o.kt)("h3",{id:"1-setup-environment"},"1. Setup Environment"),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," add the following to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ACME_EMAIL=your-email@example.com\n\nHORNET_HOST=node.your-domain.com\n\nDASHBOARD_USERNAME=admin\nDASHBOARD_PASSWORD=0000000000000000000000000000000000000000000000000000000000000000\nDASHBOARD_SALT=0000000000000000000000000000000000000000000000000000000000000000\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"your-email@example.com")," with the e-mail used for issuing a ",(0,o.kt)("a",{parentName:"li",href:"https://letsencrypt.org"},"Let's Encrypt")," SSL certificate."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"node.your-domain.com")," with the domain pointing to your public IP address as described in the ",(0,o.kt)("a",{parentName:"li",href:"#requirements"},"requirements"),". ")),(0,o.kt)("h3",{id:"2-setup-neighbors"},"2. Setup neighbors"),(0,o.kt)("p",null,"Add your neighbors addresses to the ",(0,o.kt)("inlineCode",{parentName:"p"},"peering.json")," file."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This step is recommended, but optional if you are using autopeering.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/hornet/develop/references/peering"},"peering")," for more information.")),(0,o.kt)("h3",{id:"3-create-the-data-folder"},"3. Create the ",(0,o.kt)("inlineCode",{parentName:"h3"},"data")," folder"),(0,o.kt)("p",null,"All files used by HORNET, the INX extensions, Traefik & co will be stored in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),".\nDocker image runs under user with user id 65532 and group id 65532, so this directory needs to have the correct permissions to be accessed by HORNET.\nTo create this directory with correct permissions run the contained script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./prepare_docker.sh\n")),(0,o.kt)("h3",{id:"4-set-dashboard-credentials"},"4. Set dashboard credentials"),(0,o.kt)("p",null,"To access your nodes dashboard, a set of credentials need to be configured.\nRun the following command to generate a password hash and salt for the dashboard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker compose run hornet tool pwd-hash\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"DASHBOARD_PASSWORD")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"DASHBOARD_SALT")," values in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with the result of the previous command.")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("h3",{id:"starting-hornet"},"Starting HORNET"),(0,o.kt)("p",null,"You can start a HORNET by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up -d\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d")," Instructs Docker to start HORNET in the background.")),(0,o.kt)("p",null,"After starting HORNET you will be able to access your node at the following endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/api/routes")),(0,o.kt)("li",{parentName:"ul"},"Dashboard: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/dashboard")),(0,o.kt)("li",{parentName:"ul"},"Grafana: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://node.your-domain.com/grafana"))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"   After starting your node for the first time, please change the default grafana credentials",(0,o.kt)("br",null),"\nUser: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),(0,o.kt)("br",null),"\nPassword: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"))),(0,o.kt)("p",null,"You can configure your wallet software to use ",(0,o.kt)("inlineCode",{parentName:"p"},"https://node.your-domain.com")),(0,o.kt)("h3",{id:"displaying-log-output"},"Displaying Log Output"),(0,o.kt)("p",null,"You can display the HORNET logs by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose logs -f hornet\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-f"),"\nInstructs Docker to continue displaying the log to ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout")," until CTRL+C is pressed.")),(0,o.kt)("h3",{id:"stopping-hornet"},"Stopping HORNET"),(0,o.kt)("p",null,"You can stop HORNET container by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose down\n")),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("p",null,"To access the tools provided inside HORNET you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run hornet tool <tool-name>\n")),(0,o.kt)("p",null,"To see the list of tools included run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run hornet tool -h\n")),(0,o.kt)("h2",{id:"jwt-auth"},"JWT Auth"),(0,o.kt)("p",null,"To generate a JWT token to be used to access protected routes you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run hornet tool jwt-api --databasePath data/p2pstore\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you changed the ",(0,o.kt)("inlineCode",{parentName:"li"},"restAPI.jwtAuth.salt")," value in the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.json"),", then you need to pass that value as a parameter as ",(0,o.kt)("inlineCode",{parentName:"li"},"--salt <restAPI.jwtAuth.salt value from your config.json>"))),(0,o.kt)("h2",{id:"inx"},"INX"),(0,o.kt)("p",null,"This setup includes the INX extensions listed at the beginning of this guide.\nIf you want to disable certain extensions you can comment out the different services in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file and restart HORNET."))}m.isMDXComponent=!0},52438:function(e,t,n){t.Z=n.p+"assets/images/banner_hornet_using_docker-feb9ddd072b8a345152bf4e2a70b040b.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);