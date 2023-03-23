"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={author:"richards",tags:["exercise","assignment"]},a="Ex2: Letter Histogram",s={unversionedId:"exercises/letter-histogram/index",id:"exercises/letter-histogram/index",title:"Ex2: Letter Histogram",description:"Information",source:"@site/docs/05-exercises/02-letter-histogram/index.md",sourceDirName:"05-exercises/02-letter-histogram",slug:"/exercises/letter-histogram/",permalink:"/docs/exercises/letter-histogram/",draft:!1,tags:[{label:"exercise",permalink:"/docs/tags/exercise"},{label:"assignment",permalink:"/docs/tags/assignment"}],version:"current",frontMatter:{author:"richards",tags:["exercise","assignment"]},sidebar:"tutorialSidebar",previous:{title:"Ex1: Letter Frequency",permalink:"/docs/exercises/letter-frequency/"},next:{title:"Ex3: Decoder Ring",permalink:"/docs/exercises/decoder-ring/"}},l={},c=[{value:"Information",id:"information",level:2},{value:"Submission",id:"submission",level:2},{value:"Overview",id:"overview",level:2},{value:"Starter Repository",id:"starter-repository",level:2},{value:"TODO #1: Letter Histogram",id:"todo-1-letter-histogram",level:2},{value:"TODO #2: Write Tests",id:"todo-2-write-tests",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ex2-letter-histogram"},"Ex2: Letter Histogram"),(0,o.kt)("h2",{id:"information"},"Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit Moodle and follow the GitHub Classroom assignment link."),(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"/docs/information/schedule/#exercises"},"calendar")," for due\ndates.")),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"You must submit the following to complete this assignment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Push all changes to your GitHub repository before the due date. You\ndo not need to submit anything to Moodle. We will take your last\ncommit before the deadline as your submission."),(0,o.kt)("li",{parentName:"ul"},"Complete the Grade Reflection survey associated with this assignment\non Moodle.")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/information/syllabus/#exercises"},"course syllabus")," for\nadditional information on exercise assignments."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The following exercises will give you some practice with various\naspects of the JavaScript programming language. You should write your\nsolutions in VSCode (or an editor of your choice)."),(0,o.kt)("h2",{id:"starter-repository"},"Starter Repository"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Follow the GitHub Classroom assignment link on Moodle first.")),(0,o.kt)("p",null,"You are provided a single HTML file named ",(0,o.kt)("inlineCode",{parentName:"p"},"exercise-02.html"),". Although\nwe haven\u2019t discussed HTML files yet, you will write your JavaScript\ncode between the ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tags inside of that HTML file. You may\nonly use the\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console/log"},"console.log"),"\nfunction to print values to the browser\u2019s console and\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console/assert"},"console.assert"),"\nto test the functions that you write. You are encouraged to test your\ncode to make sure it works as intended."),(0,o.kt)("h2",{id:"todo-1-letter-histogram"},"TODO #1: Letter Histogram"),(0,o.kt)("p",null,"Write a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"letterHistogram")," that counts the number of\ntimes each character appears in a string and returns an object mapping\ncharacters to their frequencies. You will be creating an object (",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")\nto track the count of each letter. Instead of accessing each character\nby indexing an array, use ",(0,o.kt)("inlineCode",{parentName:"p"},"str.split(\u2018\u2019).forEach"),"."),(0,o.kt)("p",null,"Here is the signature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"letterHistogram")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function letterHistogram(str)\n")),(0,o.kt)("p",null,"Here is an example of calling this function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"letterHistogram('this is a test');\n// evaluates to { t: 3, h: 1, i: 2, s: 3, ' ': 3, a: 1, e: 1 }\n")),(0,o.kt)("p",null,"You will find ",(0,o.kt)("inlineCode",{parentName:"p"},"TODO #1")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"exercise-02.html")," file."),(0,o.kt)("h2",{id:"todo-2-write-tests"},"TODO #2: Write Tests"),(0,o.kt)("p",null,"To ensure that the letterHistogram function you wrote in TODO #1 is working properly, it is good software development/engineering and web programming practice to write tests. For this TODO, you must write 3 tests to test your letterHistogram function. You must use the console.assert function to write your tests. Hint: To compare objects, it is easiest to convert both objects into a string and then perform a string comparison. This will be helpful when you test the return value of your letterHistogram function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.assert(JSON.stringify(letterHistogram("xxx")) === \n               JSON.stringify({x : 3}));\n')),(0,o.kt)("p",null,"You will find ",(0,o.kt)("inlineCode",{parentName:"p"},"TODO #2")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"exercise-02.html")," file."))}p.isMDXComponent=!0}}]);