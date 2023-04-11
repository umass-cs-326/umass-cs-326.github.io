"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},i="Ex14: Routing",s={unversionedId:"exercises/routing/index",id:"exercises/routing/index",title:"Ex14: Routing",description:"Overview",source:"@site/docs/05-exercises/14-routing/index.md",sourceDirName:"05-exercises/14-routing",slug:"/exercises/routing/",permalink:"/docs/exercises/routing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ex13: CRUD #2",permalink:"/docs/exercises/crud-2/"},next:{title:"Homework",permalink:"/docs/homework/"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Starter Kit",id:"starter-kit",level:2},{value:"Submission",id:"submission",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding Express Routes (Server) \ud83d\udd4a\ufe0f Approaching Standards \ud83d\udd4a\ufe0f",id:"adding-express-routes-server-\ufe0f-approaching-standards-\ufe0f",level:2},{value:"TODO #1: Add Express Route /update",id:"todo-1-add-express-route-update",level:3},{value:"TODO #2: Add Express Route /delete",id:"todo-2-add-express-route-delete",level:3},{value:"Saving Server State (Server) \ud83d\ude0e Meeting Standards \ud83d\ude0e",id:"saving-server-state-server--meeting-standards-",level:2},{value:"TODO #3: Complete the updateCounter function",id:"todo-3-complete-the-updatecounter-function",level:3},{value:"TODO #4: Complete the deleteCounter function",id:"todo-4-complete-the-deletecounter-function",level:3},{value:"HTTP Fetch (Client) \ud83d\ude80 Exceeding Standards \ud83d\ude80",id:"http-fetch-client--exceeding-standards-",level:2},{value:"TODO #5: Complete the updateCounter function",id:"todo-5-complete-the-updatecounter-function",level:3},{value:"TODO #6: Complete the deleteCounter function",id:"todo-6-complete-the-deletecounter-function",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ex14-routing"},"Ex14: Routing"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This exercise uses the solution from a previous exercise where we extended a CRUD-based HTTP server with a front-end UI. In this exercise, we are going to use the ",(0,r.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"ExpressJS")," server-side web framework in place of the built-in Node.js ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html"},"http")," library. As you will see, the ExpressJS framework is a lot more expressive than the built-in HTTP library. It allows us to write more concise code that is easier to read."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"It will be helpful to reference the server code examples covered in the lesson to provide guidance on the implementation of this exercise. The template we provide also gives you significant direction.")),(0,r.kt)("h2",{id:"starter-kit"},"Starter Kit"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Follow the GitHub Classroom assignment link on Moodle first.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"You must submit the following to complete this exercise:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The associated assignment survey on Moodle.")),(0,r.kt)("p",null,"You must ensure that you have completed this exercise and committed your work to your GitHub repository before submitting the assignment survey on Moodle. You are required to submit a link to the commit that you are self reviewing and that we may use to review your work."),(0,r.kt)("p",null,"Your submission time/date is based on the time/date of the assignment survey submission available from Moodle. You are responsible for ensuring that your submission is complete and accurate."),(0,r.kt)("p",null,"If your survey submission is late, tokens will be automatically deducted from your token count. You will be notified of the number of tokens deducted from your token count as part of your score report in an email."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"After you download the starter, open up the exercise directory in VSCode and install the necessary dependencies in the Terminal from within the project directory. Run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm init\nnpm install --save express\nnpm install --save morgan\n")),(0,r.kt)("p",null,"This will update your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file to include the ExpressJS framework and the Morgan logging library as well as install the dependencies in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory. After installing the dependencies, you will need to add the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file under the entry for ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," to support ES6 module syntax in your server code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"type": "module"\n')),(0,r.kt)("p",null,"After you have installed the dependencies and added the ES6 module support, you can run the following command to start the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"node memcrud.js\n")),(0,r.kt)("h2",{id:"adding-express-routes-server-\ufe0f-approaching-standards-\ufe0f"},"Adding Express Routes (Server) \ud83d\udd4a\ufe0f Approaching Standards \ud83d\udd4a\ufe0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Approaching Standards is considered C-quality work"),"."),(0,r.kt)("p",null,"This level of work indicates that you are not quite meeting the standards for the assignment, but you are making progress. You should be able to complete the assignment with some guidance and/or additional work. You have demonstrated some understanding of the concepts, but you haven't completely showed that you understand the concepts entirely. You are likely to struggle on future assignments and/or subsequent courses that have this course as a prerequisite."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The starter kit we provide for you includes the setup of the ExpressJS server with a few of the routes completed. You will find the creation of the ExpressJS server and routes we have provided towards the end of the file. Your job is to complete the remaining routes. In particular, you are to do the following below."),(0,r.kt)("h3",{id:"todo-1-add-express-route-update"},"TODO #1: Add Express Route /update"),(0,r.kt)("p",null,"Add the following route:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/update"),": This route matches a ",(0,r.kt)("inlineCode",{parentName:"li"},"PUT")," request to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/update")," path. It should pass the request body to the ",(0,r.kt)("inlineCode",{parentName:"li"},"updateCounter")," function.")),(0,r.kt)("h3",{id:"todo-2-add-express-route-delete"},"TODO #2: Add Express Route /delete"),(0,r.kt)("p",null,"Add the following route:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/delete"),": This route matches a ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," request to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/delete")," path. It should pass the request body to the ",(0,r.kt)("inlineCode",{parentName:"li"},"deleteCounter")," function.")),(0,r.kt)("h2",{id:"saving-server-state-server--meeting-standards-"},"Saving Server State (Server) \ud83d\ude0e Meeting Standards \ud83d\ude0e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Meeting Standards is considered B to A- quality work"),"."),(0,r.kt)("p",null,"If you have satisfied the Approaching Standards level of this assignment and you want to go further, the Meeting Standards level of work meets the requirements described below. It is expected that you will be able to complete this level of work with minimal assistance and complete it by the assigned due date with a correct solution. By completing this level of work, you will be able to demonstrate that you have met the learning objectives of the assignment and of the course and are prepared to be successful in future assignments and subsequent courses that have this course as a prerequisite."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"todo-3-complete-the-updatecounter-function"},"TODO #3: Complete the updateCounter function"),(0,r.kt)("p",null,"Complete the following function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateCounter(response, name)"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"response")," parameter is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Response")," object passed into the express route. The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," parameter is the name of the counter. You can use the other CRUD functions we implemented as guidance. It is important to note that you must call ",(0,r.kt)("inlineCode",{parentName:"li"},"response.json()")," as the last line of the function. If you do not do this, you may encounter some unexpected behavior.")),(0,r.kt)("h3",{id:"todo-4-complete-the-deletecounter-function"},"TODO #4: Complete the deleteCounter function"),(0,r.kt)("p",null,"Complete the following function:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleteCounter(response, name)"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"response")," parameter is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Response")," object passed into the express route. The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," parameter is the name of the counter. You can use the other CRUD functions we implemented as guidance. It is important to note that you must call ",(0,r.kt)("inlineCode",{parentName:"li"},"response.json()")," as the last line of the function. If you do not do this, you may encounter some unexpected behavior.")),(0,r.kt)("h2",{id:"http-fetch-client--exceeding-standards-"},"HTTP Fetch (Client) \ud83d\ude80 Exceeding Standards \ud83d\ude80"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exceeding Standards is considered A-quality work"),"."),(0,r.kt)("p",null,"If you have satisfied the Meeting Standards level of this assignment and you want to go above and beyond, you can complete the assignment below."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The following TODOs add functionality to the client to update and delete a counter from the browser. You will need to use the fetch browser API to communicate with the server. We made some slight changes to these RESTful calls to send JSON data to the server rather than use the query string. You can use the other CRUD functions we implemented as guidance. Note, we continue to use the query string for the ",(0,r.kt)("inlineCode",{parentName:"p"},"readCounter")," function. The reason we do this is because we are unable to use the request body with a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request. If we wanted to use the request body, we would have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," method."),(0,r.kt)("h3",{id:"todo-5-complete-the-updatecounter-function"},"TODO #5: Complete the updateCounter function"),(0,r.kt)("p",null,"Complete the following function in ",(0,r.kt)("inlineCode",{parentName:"p"},"client/crud.js"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateCounter(name)"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," parameter is the name of the counter. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," to send a request to the server to update the server counter state. This function returns the data that is sent back to the client as an HTTP response.")),(0,r.kt)("h3",{id:"todo-6-complete-the-deletecounter-function"},"TODO #6: Complete the deleteCounter function"),(0,r.kt)("p",null,"Complete the following function in ",(0,r.kt)("inlineCode",{parentName:"p"},"client/crud.js"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deleteCounter(name)"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," parameter is the name of the counter. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," to send a request to the server to update the server counter state. This function returns the data that is sent back to the client as an HTTP response.")))}p.isMDXComponent=!0}}]);