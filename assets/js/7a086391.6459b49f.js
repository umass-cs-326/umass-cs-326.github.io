"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1115],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={},i="Pr4: Front-End",l={unversionedId:"project/front-end/index",id:"project/front-end/index",title:"Pr4: Front-End",description:"Objective",source:"@site/docs/07-project/04-front-end/index.md",sourceDirName:"07-project/04-front-end",slug:"/project/front-end/",permalink:"/docs/project/front-end/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pr3: UI Design",permalink:"/docs/project/ui-design/"},next:{title:"Pr5: Back-End",permalink:"/docs/project/back-end/"}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Information",id:"information",level:2},{value:"Submission",id:"submission",level:2},{value:"Starter Kit",id:"starter-kit",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Task #1: Layer 1 - Browser Data Interface",id:"task-1-layer-1---browser-data-interface",level:3},{value:"Task #2: Layer 2 - Implement Front-End Functionality",id:"task-2-layer-2---implement-front-end-functionality",level:3},{value:"Task #3: Mock Data",id:"task-3-mock-data",level:3},{value:"Version Control",id:"version-control",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pr4-front-end"},"Pr4: Front-End"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"The goal of this part of the project is to take your user interface design from Pr3 and design and implement front-end logic in JavaScript to provide user interaction and prepare your front-end for the eventual communication to a back-end server. This will require your team to identify points in your front-end where you require data and information from the back-end and design and develop components (e.g., functions, classes) that can be used to eventually retrieve that implementation."),(0,n.kt)("h2",{id:"information"},"Information"),(0,n.kt)("p",null,"See the calendar for due dates."),(0,n.kt)("h2",{id:"submission"},"Submission"),(0,n.kt)("p",null,"You must submit the following to complete this assignment:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Team Submission"),"\xa0Push all changes to your GitHub repository before the due date. You do not need to submit anything to Moodle. We will take your last commit before the deadline as your submission. All team members must add commit, and push to the repository. We will ask you about your contributions in the Grade Reflection survey, so be prepared to provide evidence of your contributions. See the\xa0",(0,n.kt)("a",{parentName:"li",href:"https://umass-cs-326.github.io/docs/project/ui-design/#version-control-git"},"Version Control"),"\xa0section below for additional information and requirements."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Individual Submission:"),"\xa0Complete the Grade Reflection survey associated with this assignment on Moodle. You will be asked to reflect on your team's performance and your individual contributions to the project. Everyone on the team must complete the survey. You will be asked to provide evidence of your contributions to the project.\xa0",(0,n.kt)("strong",{parentName:"li"},"We will not review your project until you have completed the Grade Reflection survey."))),(0,n.kt)("p",null,"Helpful Links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://umass-cs-326.github.io/docs/information/syllabus/#team-project"},"Project information in the syllabus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://umass-cs-326.github.io/docs/project/"},"Project requirements"))),(0,n.kt)("h2",{id:"starter-kit"},"Starter Kit"),(0,n.kt)("p",null,"There is no starter kit. Use your project repository from the previous project assignment."),(0,n.kt)("h2",{id:"tasks"},"Tasks"),(0,n.kt)("h3",{id:"task-1-layer-1---browser-data-interface"},"Task #1: Layer 1 - Browser Data Interface"),(0,n.kt)("p",null,"In this part of the project you need to implement an interface to your applications data in the browser. In particular, you will need to define an interface (functions/methods/classes) that can perform all CRUD operations on the data needed by your application. For example, if you are creating a recipe application that needs to maintain data about recipes, you will need to add a CRUD operation for each recipe. You must be able to create a recipe, read a recipe, update a recipe, and delete a recipe. You should implement this in files that use an appropriate name to identify their intended use."),(0,n.kt)("p",null,"In addition, you are to use PouchDB to implement your data storage for your application. All your data must be stored and retrieved from PouchDB and calls to PouchDB can only be made inside of the module containing your CRUD operations. You are welcome to have different files for each part of your data model, but each file must only contain CRUD operations and access to a PouchDB database."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"In the next project assignment you will be required to replace this functionality with calls to the back-end HTTP server. We will hold off on this for now so we can more fully complete the front-end UI part of your application."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"At the completion of this task, your implementation must include:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A JavaScript file(s) that implement functions, classes, methods that interact with PouchDB"),(0,n.kt)("li",{parentName:"ul"},"Functions, classes, methods that implement the CRUD operations to that data"),(0,n.kt)("li",{parentName:"ul"},"Comments")),(0,n.kt)("h3",{id:"task-2-layer-2---implement-front-end-functionality"},"Task #2: Layer 2 - Implement Front-End Functionality"),(0,n.kt)("p",null,"The completion of this task depends on your application. However, your application must demonstrate many of the aspects we have covered in our exploration of the front-end Browser/UI part of this course. You are required to create a fully functional front-end that is (1) rendered into the browser, and (2) allows you to interact with the application as if it were connected to a remote HTTP server. In particular, you are to further develop out your front-end UI and add functionality to support the UI functions you provide to the user. For example, for a recipe application I would want my UI to be able to ",(0,n.kt)("strong",{parentName:"p"},"create")," a new recipe, ",(0,n.kt)("strong",{parentName:"p"},"read")," an existing recipe, ",(0,n.kt)("strong",{parentName:"p"},"update")," an existing recipe, and ",(0,n.kt)("strong",{parentName:"p"},"delete")," an existing recipe. That is, I want to be able to create, modify, and remove recipes as well as display them to the user."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This part of the implementation must make calls to the functions, methods, and/or classes you implemented in Task #1 if it involves data. Note, you should not implement anything in this layer that directly talks to the PouchDB database.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"At the completion of this task, your implementation must include:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An HTML file or set of files that contain HTML"),(0,n.kt)("li",{parentName:"ul"},"A CSS file(s) that provide styling rules"),(0,n.kt)("li",{parentName:"ul"},"A CSS rule(s) using IDs"),(0,n.kt)("li",{parentName:"ul"},"A CSS rule(s) using classes"),(0,n.kt)("li",{parentName:"ul"},"A JavaScript file(s) that implement the behavior of the program"),(0,n.kt)("li",{parentName:"ul"},"HTML files must use ",(0,n.kt)("inlineCode",{parentName:"li"},"<link>")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"<script>")," tags to pull in CSS and JavaScript files"),(0,n.kt)("li",{parentName:"ul"},"DOM methods such as ",(0,n.kt)("inlineCode",{parentName:"li"},"getElementById")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"getElementsByClass")),(0,n.kt)("li",{parentName:"ul"},"User interactivity using ",(0,n.kt)("inlineCode",{parentName:"li"},"addEventListener")),(0,n.kt)("li",{parentName:"ul"},"Functionality to update the DOM after data has changed in your application"),(0,n.kt)("li",{parentName:"ul"},"Iteration (e.g., for, while)"),(0,n.kt)("li",{parentName:"ul"},"Branching (e.g., if/else)"),(0,n.kt)("li",{parentName:"ul"},"One or all of the following: functions, classes, objects"),(0,n.kt)("li",{parentName:"ul"},"Comments")),(0,n.kt)("h3",{id:"task-3-mock-data"},"Task #3: Mock Data"),(0,n.kt)("p",null,"This task is not so much about implementation as it is about testing. You are required to add mock (fake) data into your application to make it look real in your implementation. We recognize that not everything will work yet as we still have a number of weeks to go into the semester, however, providing mock data into your application will allow you to test your application manually and give it a look and feel of a real application."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This part of the implementation is used by the calls to the functions, methods, and/or classes you implemented in Task #1. A good way to do this is to implement an initialization function that loads this data into the PouchDB database if the database doesn\u2019t already exist.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Here are some websites your might want to check out to help with this:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mockaroo.com/"},"Mockaroo"),", Random Data Generator and Mocking Tool",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We recommend generating JSON and using that in a JavaScript file"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.lipsum.com/"},"Lorem Ipsum"),", Generating dummy text"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://picsum.photos/"},"Lorem Picsum"),", The Lorem Ipsum for photos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://generative-placeholders.glitch.me/"},"Generative Placeholders"),", Use generative art as your image placeholders")),(0,n.kt)("h2",{id:"version-control"},"Version Control"),(0,n.kt)("p",null,"Each team member is required to have at least 10 commits for this project assignment. Your commits should be useful and sensible and provide quality commit messages. There are many ways in which to write good Git commit messages. Here is a good approach to doing it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/"},"How to Write Better Git Commit Messages \u2013 A Step-By-Step Guide"))))}c.isMDXComponent=!0}}]);