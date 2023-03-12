"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||n;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));const n={},s="L10 Browser Local Storage",i={unversionedId:"lectures/local-storage/index",id:"lectures/local-storage/index",title:"L10 Browser Local Storage",description:"The web has come a long way since its inception, and with the advancement of web technologies, it has become possible to store data locally in a user's browser, making it faster and more responsive. This has opened up a whole new world of possibilities for developers to build more interactive and engaging web applications.",source:"@site/docs/03-lectures/10-local-storage/index.md",sourceDirName:"03-lectures/10-local-storage",slug:"/lectures/local-storage/",permalink:"/docs/lectures/local-storage/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L09 CSS and DOM Surgery",permalink:"/docs/lectures/css-dom-surgery/"},next:{title:"L11 Networking, HTTP",permalink:"/docs/lectures/network-http/"}},l={},c=[{value:"Introduction to Browser Storage",id:"introduction-to-browser-storage",level:2},{value:"Types of Browser Storage",id:"types-of-browser-storage",level:2},{value:"Working with Local Storage",id:"working-with-local-storage",level:2},{value:"Working with Session Storage",id:"working-with-session-storage",level:2},{value:"Working with IndexedDB",id:"working-with-indexeddb",level:2},{value:"Slides",id:"slides",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Resources",id:"resources",level:2},{value:"MDN Web Docs",id:"mdn-web-docs",level:3},{value:"VSCode",id:"vscode",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"l10-browser-local-storage"},"L10 Browser Local Storage"),(0,o.kt)("p",null,"The web has come a long way since its inception, and with the advancement of web technologies, it has become possible to store data locally in a user's browser, making it faster and more responsive. This has opened up a whole new world of possibilities for developers to build more interactive and engaging web applications."),(0,o.kt)("p",null,"In this lecture, we will be covering the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduction to browser storage"),(0,o.kt)("li",{parentName:"ul"},"Types of browser storage"),(0,o.kt)("li",{parentName:"ul"},"Working with Local Storage"),(0,o.kt)("li",{parentName:"ul"},"Working with Session Storage"),(0,o.kt)("li",{parentName:"ul"},"Working with IndexedDB"),(0,o.kt)("li",{parentName:"ul"},"Let's dive right in with an introduction to browser storage!")),(0,o.kt)("h2",{id:"introduction-to-browser-storage"},"Introduction to Browser Storage"),(0,o.kt)("p",null,"Browser storage is a way to store data locally in a user's browser. This data can be accessed and manipulated on the client-side, without the need for server-side code or database connectivity. There are several types of browser storage available, each with its own use case."),(0,o.kt)("h2",{id:"types-of-browser-storage"},"Types of Browser Storage"),(0,o.kt)("p",null,"There are three types of browser storage available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Storage:")," Local storage is a key-value pair storage mechanism that stores data with no expiration date. This data is stored on the user's browser and persists even after the browser is closed. It can be accessed and manipulated by JavaScript code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Session Storage:")," Session storage is similar to local storage, but the data is cleared when the browser is closed or the session is ended. It can be accessed and manipulated by JavaScript code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IndexedDB:")," IndexedDB is a more powerful storage mechanism that allows developers to store large amounts of structured data. It is an object-oriented database and can be accessed and manipulated by JavaScript code.")),(0,o.kt)("h2",{id:"working-with-local-storage"},"Working with Local Storage"),(0,o.kt)("p",null,"Let's take a look at how to use local storage in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Store data in local storage\nlocalStorage.setItem("name", "John");\n\n// Retrieve data from local storage\nconst name = localStorage.getItem("name");\n\n// Remove data from local storage\nlocalStorage.removeItem("name");\n\n// Clear all data from local storage\nlocalStorage.clear();\n')),(0,o.kt)("p",null,"In the above example, we store data in local storage using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setItem")," method, retrieve data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getItem")," method, remove data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeItem")," method, and clear all data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"clear")," method."),(0,o.kt)("h2",{id:"working-with-session-storage"},"Working with Session Storage"),(0,o.kt)("p",null,"Let's take a look at how to use session storage in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Store data in session storage\nsessionStorage.setItem("name", "John");\n\n// Retrieve data from session storage\nconst name = sessionStorage.getItem("name");\n\n// Remove data from session storage\nsessionStorage.removeItem("name");\n\n// Clear all data from session storage\nsessionStorage.clear();\n')),(0,o.kt)("p",null,"In the above example, we store data in session storage using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setItem")," method, retrieve data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getItem")," method, remove data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeItem")," method, and clear all data using the ",(0,o.kt)("inlineCode",{parentName:"p"},"clear")," method."),(0,o.kt)("h2",{id:"working-with-indexeddb"},"Working with IndexedDB"),(0,o.kt)("p",null,"Let's take a look at how to use IndexedDB in JavaScript:"),(0,o.kt)("h2",{id:"slides"},"Slides"),(0,o.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRXh7aH1MfXgzXcotHvmISHVaYFS3rvF68nGBdh3nm1WE4Dj6ufebhXJng_mabSq-ebe93XFwn8Khxx/embed?start=false&loop=false&delayms=3000",frameborder:"0",width:"960",height:"569",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"You must complete ",(0,o.kt)("a",{parentName:"p",href:"../../exercises/persistent-encoder"},"Ex9: Persistent Encoder")," by the assigned due date."),(0,o.kt)("h2",{id:"code-examples"},"Code Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/umass-cs-326/examples/tree/main/10-persistent-encoder"},"examples/10-persistent-encoder"))),(0,o.kt)("p",null,"You can view all of the examples by cloning the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/umass-cs-326/examples"},"examples repository"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("h3",{id:"mdn-web-docs"},"MDN Web Docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"Window.sessionStorage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"Window.localStorage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3schools.com/js/js_cookies.asp"},"JavaScript Cookies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria"},"Browser storage limits and eviction criteria"))),(0,o.kt)("h3",{id:"vscode"},"VSCode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks.")))}p.isMDXComponent=!0}}]);