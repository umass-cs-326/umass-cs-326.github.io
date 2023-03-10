"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={author:"Isi Bernoff & Ashir Imran",tags:["lab","assignment"]},i="B05 Event Handling",l={unversionedId:"labs/event-handling/index",id:"labs/event-handling/index",title:"B05 Event Handling",description:"Information",source:"@site/docs/04-labs/05-event-handling/index.md",sourceDirName:"04-labs/05-event-handling",slug:"/labs/event-handling/",permalink:"/docs/labs/event-handling/",draft:!1,tags:[{label:"lab",permalink:"/docs/tags/lab"},{label:"assignment",permalink:"/docs/tags/assignment"}],version:"current",frontMatter:{author:"Isi Bernoff & Ashir Imran",tags:["lab","assignment"]},sidebar:"tutorialSidebar",previous:{title:"B04 Milestone 2 Work",permalink:"/docs/labs/ms-2-work/"},next:{title:"B05 Event Listeners",permalink:"/docs/labs/event-listeners/"}},s={},u=[{value:"Information",id:"information",level:2},{value:"Submission",id:"submission",level:2},{value:"Overview",id:"overview",level:2},{value:"Events",id:"events",level:2},{value:"addEventListener()",id:"addeventlistener",level:2},{value:"Event Types",id:"event-types",level:3},{value:"Mouse Events",id:"mouse-events",level:4},{value:"Drag Events",id:"drag-events",level:4},{value:"Submit Events",id:"submit-events",level:4},{value:"Keyboard Events",id:"keyboard-events",level:4},{value:"The &quot;event&quot; Parameter",id:"the-event-parameter",level:3},{value:"Example",id:"example",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"b05-event-handling"},"B05 Event Handling"),(0,r.kt)("h2",{id:"information"},"Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please accept the ",(0,r.kt)("a",{parentName:"li",href:"https://classroom.github.com/a/OGbk21J-"},"GitHub Classroom Assignment")," for this lab"),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/information/schedule/#labs"},"calendar")," for due dates.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"The assignment has several TODOs split up into three parts that you must complete. They all involve playing around with various event types."),(0,r.kt)("p",null,"You must submit the following to complete this assignment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Push all changes to your GitHub repository before the due date. You do not need to submit anything to Moodle. We will take your last commit before the deadline as your submission.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this lab we will delve into the details of Event handling in JavaScript, and apply this knowledge to a few exercises."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"In the context of the web, an ",(0,r.kt)("strong",{parentName:"p"},"Event")," is when a user performs some action on a webpage, e.g. clicks a link, refreshes the page, scrolls down, downloads an image, etc. Linking these actions to meaningul functionality is key to creating dynamic webpages This is what separates the current web from the static nature of the the early web. When users interact with a page, they expect to see feedback from the page that guides them through to their goals, e.g. making a purchase, sending a message, playing a game, liking a video, etc."),(0,r.kt)("p",null,"Linking Events to this functionality and feedback is called ",(0,r.kt)("strong",{parentName:"p"},"Event handling"),': The user performs an action on your page, and you want to "handle" that event through a function that provides live feedback to the user. You can handle an event through the ',(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method of the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget"))," interface."),(0,r.kt)("h2",{id:"addeventlistener"},"addEventListener()"),(0,r.kt)("p",null,"Understanding the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},(0,r.kt)("inlineCode",{parentName:"a"},"addEventListener()"))," is sometimes confusing for new web programmers, so read this section carefully to clear up points of confusion. To access the ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method, you need an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget"),' interface, which is usually a HTML Element like a button. Once you have an EventTarge`, you can "listen" for some ',(0,r.kt)("strong",{parentName:"p"},"event")," to occur on it, like a user clicking it."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener(type, listener)")," takes in an ",(0,r.kt)("em",{parentName:"p"},"event type"),", as well as something to handle the event in the form of a callback function. Here's an example of a few common events, although you can find a full list on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event"},"MDN Web Docs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/tags/ref_eventattributes.asp"},"W3 Schools"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since ",(0,r.kt)("inlineCode",{parentName:"li"},"listener")," is a callback function, it is passed in as a reference. For example, the function ",(0,r.kt)("inlineCode",{parentName:"li"},"foo()")," is passed in as ",(0,r.kt)("inlineCode",{parentName:"li"},"addEventListener(type, foo)"),", not ",(0,r.kt)("inlineCode",{parentName:"li"},"addEventListener(type, foo())"))),(0,r.kt)("h3",{id:"event-types"},"Event Types"),(0,r.kt)("h4",{id:"mouse-events"},"Mouse Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"click:")," Event when a mouse button is both pressed and released on the target"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mouseup:")," Event when a mouse button is released on the target"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mousedown:")," Event when a mouse button is held down on the target")),(0,r.kt)("h4",{id:"drag-events"},"Drag Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"drag:")," Even when the element is dragged")),(0,r.kt)("h4",{id:"submit-events"},"Submit Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submit:")," Event when an HTML ",(0,r.kt)("inlineCode",{parentName:"li"},"<form>")," is submitted")),(0,r.kt)("h4",{id:"keyboard-events"},"Keyboard Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"keydown:")," Event when a key is pressed down while the target is selected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"keyup:")," Event when a key is released while the target is selected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"keypress:")," Event when a user presses and releases a key")),(0,r.kt)("h3",{id:"the-event-parameter"},'The "event" Parameter'),(0,r.kt)("p",null,'As part of the Event interface, we can access instance properties directly in an event listener function by passing in the "event" parameter. This allows us to control the behavior of the event through instance methods, or read various properties through ',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/target"},(0,r.kt)("inlineCode",{parentName:"a"},"event.target")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTML:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input type="text" id="my-textbox" />\n\n<button type="button" id="my-button">Click here</button>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Javascript:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// First, we grab our DOM elements through their IDs\nconst textBox = document.getElementById("my-textbox");\nconst button = document.getElementById("my-button");\n\n// Then, we create a function to handle an event for when we click our button\nconst buttonHandler = (event) => {\n  // Changes the background color of the button to black\n  event.target.style.backgroundColor = "black";\n\n  // Changes the text color of the button to white\n  event.target.style.color = "white";\n\n  // Changes the button text to what\'s in the text box\n  event.target.textContent = textBox.value;\n};\n')))}d.isMDXComponent=!0}}]);