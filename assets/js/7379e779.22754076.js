"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22408:(e,t,n)=>{n.d(t,{O:()=>l});var a=n(67294),r=n(52263);const l=e=>{let{lec_src:t}=e;const{siteConfig:n}=(0,r.Z)(),{url:l}=n,o=`https://view.officeapps.live.com/op/embed.aspx?src=${l+t}`;return a.createElement("div",{style:{marginBottom:"4rem"}},a.createElement("iframe",{src:o,width:"100%",height:"600px",frameborder:"0"}),a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},63578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(22408);const o={},s="L07 DOM Events",i={unversionedId:"lectures/dom-events/index",id:"lectures/dom-events/index",title:"L07 DOM Events",description:"Understanding the JavaScript DOM, DOM Events, and Event Handlers",source:"@site/docs/03-lectures/07-dom-events/index.md",sourceDirName:"03-lectures/07-dom-events",slug:"/lectures/dom-events/",permalink:"/docs/lectures/dom-events/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L06 Modules, HTML, DOM",permalink:"/docs/lectures/modules-html-dom/"},next:{title:"L08 Basic CSS",permalink:"/docs/lectures/basic-css/"}},c={},d=[{value:"Understanding the JavaScript DOM, DOM Events, and Event Handlers",id:"understanding-the-javascript-dom-dom-events-and-event-handlers",level:2},{value:"The JavaScript DOM",id:"the-javascript-dom",level:2},{value:"DOM Events",id:"dom-events",level:2},{value:"Event Handlers",id:"event-handlers",level:2},{value:"Slides",id:"slides",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Resources",id:"resources",level:2},{value:"MDN Web Docs",id:"mdn-web-docs",level:3},{value:"VSCode",id:"vscode",level:3}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"l07-dom-events"},"L07 DOM Events"),(0,r.kt)("h2",{id:"understanding-the-javascript-dom-dom-events-and-event-handlers"},"Understanding the JavaScript DOM, DOM Events, and Event Handlers"),(0,r.kt)("p",null,"The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. With the DOM, developers can create and modify HTML and XML documents, and also add interactivity to web pages with JavaScript."),(0,r.kt)("h2",{id:"the-javascript-dom"},"The JavaScript DOM"),(0,r.kt)("p",null,"In JavaScript, the DOM is represented as a tree-like structure, with the document object at the root. Each node in the tree represents an element, attribute, or text content of the document. Developers can use JavaScript to access, modify, and create elements in the DOM tree."),(0,r.kt)("p",null,"For example, to access an HTML element with a given id using JavaScript, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getElementById()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const element = document.getElementById('my-element');\n")),(0,r.kt)("p",null,"Once we have a reference to an element in the DOM, we can modify its properties, such as its text content or style, using JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"element.textContent = 'Hello, World!';\nelement.style.color = 'red';\n")),(0,r.kt)("h2",{id:"dom-events"},"DOM Events"),(0,r.kt)("p",null,"DOM events are actions or occurrences that happen in the browser (or server), such as a user clicking a button or a page finishing loading. JavaScript can listen for these events and perform actions in response, such as updating the page content or submitting a form."),(0,r.kt)("p",null,"To listen for an event in JavaScript, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const button = document.getElementById('my-button');\nbutton.addEventListener('click', () => {\n  console.log('Button clicked!');\n});\n")),(0,r.kt)("p",null,"This code adds a click event listener to a button element with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"my-button"),". When the button is clicked, the anonymous function passed as the second argument will be executed, logging a message to the console."),(0,r.kt)("h2",{id:"event-handlers"},"Event Handlers"),(0,r.kt)("p",null,"Event handlers are functions that are called in response to a specific event, such as a button click. In JavaScript, event handlers are often used with DOM events to add interactivity to web pages."),(0,r.kt)("p",null,"For example, we can define an event handler function that updates the text content of an element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function handleClick() {\n  const element = document.getElementById('my-element');\n  element.textContent = 'Button clicked!';\n}\n\nconst button = document.getElementById('my-button');\nbutton.addEventListener('click', handleClick);\n")),(0,r.kt)("p",null,"This code defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"handleClick()")," function that updates the text content of an element with the id my-element. It then adds an event listener to a button element with the id my-button, calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleClick()")," function when the button is clicked."),(0,r.kt)("p",null,"Overall, the JavaScript DOM, DOM events, and event handlers provide a powerful set of tools for creating dynamic and interactive web pages. By using JavaScript to manipulate the DOM and respond to user events, developers can create web applications that are engaging and responsive to user input."),(0,r.kt)("h2",{id:"slides"},"Slides"),(0,r.kt)(l.O,{lec_src:n(31874).Z,mdxType:"PowerPoint"}),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"You must complete ",(0,r.kt)("a",{parentName:"p",href:"../../exercises/interactive-decoder"},"Ex6: Interactive Decoder")," by the next class meeting."),(0,r.kt)("h2",{id:"code-examples"},"Code Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/umass-cs-326/examples/tree/main/07-dom-events"},"examples/07-dom-events"))),(0,r.kt)("p",null,"You can view all of the examples by cloning the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umass-cs-326/examples"},"examples repository"),"."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("h3",{id:"mdn-web-docs"},"MDN Web Docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"},"Introduction to Events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Events"},"Event Reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"Event Interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},"EventTarget Interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},"EventTarget.addEventListener()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"},"Event.preventDefault()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/jqU3uaRgQyQ"},"What are event listeners in JavaScript?"),", mmtuts (video)")),(0,r.kt)("h3",{id:"vscode"},"VSCode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks.")))}u.isMDXComponent=!0},31874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/07-dom-events-2db5164622eb3e1558b138d6fc3295f9.pptx"}}]);