"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="Ex1: Letter Frequency",l={unversionedId:"exercises/letter-frequency/index",id:"exercises/letter-frequency/index",title:"Ex1: Letter Frequency",description:"Information",source:"@site/docs/05-exercises/01-letter-frequency/index.md",sourceDirName:"05-exercises/01-letter-frequency",slug:"/exercises/letter-frequency/",permalink:"/docs/exercises/letter-frequency/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exercises",permalink:"/docs/exercises/"},next:{title:"Ex2: Letter Histogram",permalink:"/docs/exercises/letter-histogram/"}},s={},c=[{value:"Information",id:"information",level:2},{value:"Submission",id:"submission",level:2},{value:"Overview",id:"overview",level:2},{value:"Starter Code",id:"starter-code",level:2},{value:"TODO #1: Letter Frequency",id:"todo-1-letter-frequency",level:2},{value:"TODO #2: Palindrome Detector",id:"todo-2-palindrome-detector",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ex1-letter-frequency"},"Ex1: Letter Frequency"),(0,o.kt)("h2",{id:"information"},"Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Believe it or not, you should start ",(0,o.kt)("a",{parentName:"li",href:"/docs/homework/github-classroom"},"HW1")," first before completing this exercise."),(0,o.kt)("li",{parentName:"ul"},"Visit Moodle and follow the GitHub Classroom assignment link."),(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"/docs/information/schedule/#exercises"},"calendar")," for due dates.")),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"You must submit the following to complete this assignment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Push all changes to your GitHub repository before the due date. You do not need to submit anything to Moodle. We will take your last commit before the deadline as your submission."),(0,o.kt)("li",{parentName:"ul"},"Complete the Grade Reflection survey associated with this assignment on Moodle.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The following exercises will give you some practice with some of the basics of the JavaScript programming language. You should write your solutions in VSCode (or an editor of your choice)."),(0,o.kt)("h2",{id:"starter-code"},"Starter Code"),(0,o.kt)("p",null,"You are provided a single HTML file named ",(0,o.kt)("inlineCode",{parentName:"p"},"exercise-04.html"),". Although we haven\u2019t discussed HTML files yet, you will write your JavaScript code between the ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tags inside of that HTML file. You may only use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console/log"},"console.log")," function to print values to the browser\u2019s console and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/console/assert"},"console.assert")," to test the functions that you write. You are encouraged to test your code to make sure it works as intended."),(0,o.kt)("h2",{id:"todo-1-letter-frequency"},"TODO #1: Letter Frequency"),(0,o.kt)("p",null,"Write a function letterFrequency that counts the number of times a particular character appears in a string and returns that count. You'll need to use the length property of a string (str.length \u2192 the length of the string). Note that the string is represented as an array, so you can access each character by normal array indexing: str","[0]"," is the first character."),(0,o.kt)("p",null,"You will find ",(0,o.kt)("strong",{parentName:"p"},"TODO #1")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"exercise-04.html")," file. "),(0,o.kt)("h2",{id:"todo-2-palindrome-detector"},"TODO #2: Palindrome Detector"),(0,o.kt)("p",null,"Write a function isPalindrome that checks if the input string is a palindrome \u2013 that is, the string is the same forwards and backwards (example: ",(0,o.kt)("em",{parentName:"p"},"level")," is a palindrome, as is the word ",(0,o.kt)("em",{parentName:"p"},"racecar")," and ",(0,o.kt)("em",{parentName:"p"},"tacocat"),"). This function returns ",(0,o.kt)("em",{parentName:"p"},"true"),' if the word is a palindrome; false otherwise. For this exercise, "race car" (with a space) is not a palindrome, but "a a a" is.'),(0,o.kt)("p",null,"You will find ",(0,o.kt)("strong",{parentName:"p"},"TODO #2")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"exercise-04.html")," file."))}p.isMDXComponent=!0}}]);