"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return r?o.createElement(m,s(s({ref:t},u),{},{components:r})):o.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},s="L11 Networking, HTTP",i={unversionedId:"lectures/network-http/index",id:"lectures/network-http/index",title:"L11 Networking, HTTP",description:"HTTP, GET, and POST are three important concepts in web development. HTTP is the protocol used by web servers and web browsers to communicate with each other. GET and POST are two of the HTTP methods used to send data between the client and the server.",source:"@site/docs/03-lectures/11-network-http/index.md",sourceDirName:"03-lectures/11-network-http",slug:"/lectures/network-http/",permalink:"/docs/lectures/network-http/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L10 Browser Local Storage",permalink:"/docs/lectures/local-storage/"},next:{title:"L12 Asynchrony, Event Model",permalink:"/docs/lectures/async-event-model/"}},l={},c=[{value:"Slides",id:"slides",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Resources",id:"resources",level:2},{value:"MDN Web Docs",id:"mdn-web-docs",level:3},{value:"VSCode",id:"vscode",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"l11-networking-http"},"L11 Networking, HTTP"),(0,n.kt)("p",null,"HTTP, GET, and POST are three important concepts in web development. HTTP is the protocol used by web servers and web browsers to communicate with each other. GET and POST are two of the HTTP methods used to send data between the client and the server."),(0,n.kt)("p",null,"HTTP stands for Hypertext Transfer Protocol, which is a set of rules for transferring files (such as text, images, videos, and other multimedia files) over the internet. HTTP is the foundation of data communication for the World Wide Web. When you type a URL into a web browser and hit Enter, the browser sends an HTTP request to the web server to retrieve the webpage you requested."),(0,n.kt)("p",null,"HTTP has several methods that define how data is sent between the client and the server. The most commonly used methods are GET and POST."),(0,n.kt)("p",null,"GET is used to request data from a server. When you type a URL into a web browser and hit Enter, the browser sends a GET request to the server to retrieve the webpage. GET requests can be cached, which means that if you request the same webpage again, the browser can use the cached version instead of making another request to the server. GET requests are also bookmarkable, which means that you can save a URL that points to a specific webpage and share it with others."),(0,n.kt)("p",null,"POST is used to submit data to a server. When you fill out a form on a webpage and click Submit, the browser sends a POST request to the server with the data you entered in the form. POST requests are not cached, which means that if you submit the form again, the browser will make another request to the server. POST requests are also not bookmarkable, which means that if you try to save a URL that points to a webpage that was generated by a POST request, the URL will not include the data you submitted in the form."),(0,n.kt)("p",null,"HTTP is the protocol used by web servers and web browsers to communicate with each other. GET is used to request data from a server, while POST is used to submit data to a server. Understanding the basics of HTTP, GET, and POST is essential for building web applications and websites."),(0,n.kt)("h2",{id:"slides"},"Slides"),(0,n.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRqGGj7z_J8huhWyZl2X2QT4jbN0MspLYnG_mVZUhRDIL81o4yyjnVC607rqJxDLEoAoMk1_gzc6g4j/embed?start=false&loop=false&delayms=3000",frameborder:"0",width:"960",height:"569",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}),(0,n.kt)("h2",{id:"exercise"},"Exercise"),(0,n.kt)("p",null,"You must complete ",(0,n.kt)("a",{parentName:"p",href:"../../exercises/run-server"},"Ex10: Run Server")," by the assigned due date."),(0,n.kt)("h2",{id:"code-examples"},"Code Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/umass-cs-326/examples/tree/main/11-network-http"},"examples/11-network-http"))),(0,n.kt)("p",null,"You can view all of the examples by cloning the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/umass-cs-326/examples"},"examples repository"),"."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("h3",{id:"mdn-web-docs"},"MDN Web Docs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"},"HTTP Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP"},"HTTP")," (lots of resources)")),(0,n.kt)("h3",{id:"vscode"},"VSCode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks.")))}d.isMDXComponent=!0}}]);