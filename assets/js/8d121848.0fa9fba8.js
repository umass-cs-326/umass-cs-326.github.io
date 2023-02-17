"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22408:(e,t,r)=>{r.d(t,{O:()=>o});var a=r(67294),n=r(52263);const o=e=>{let{lec_src:t}=e;const{siteConfig:r}=(0,n.Z)(),{url:o}=r,s=`https://view.officeapps.live.com/op/embed.aspx?src=${o+t}`;return a.createElement("div",{style:{marginBottom:"4rem"}},a.createElement("iframe",{src:s,width:"100%",height:"600px",frameborder:"0"}),a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},3836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(22408);const s={},i="L03 Objects, Arrays, Functions",c={unversionedId:"lectures/obj-arrays-funcs/index",id:"lectures/obj-arrays-funcs/index",title:"L03 Objects, Arrays, Functions",description:"Overview",source:"@site/docs/03-lectures/03-obj-arrays-funcs/index.md",sourceDirName:"03-lectures/03-obj-arrays-funcs",slug:"/lectures/obj-arrays-funcs/",permalink:"/docs/lectures/obj-arrays-funcs/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L02 JavaScript Intro",permalink:"/docs/lectures/js-intro/"},next:{title:"L04 Objects",permalink:"/docs/lectures/objects/"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Arrays:",id:"arrays",level:3},{value:"Objects:",id:"objects",level:3},{value:"Functions:",id:"functions",level:3},{value:"Slides",id:"slides",level:2},{value:"Resources",id:"resources",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"l03-objects-arrays-functions"},"L03 Objects, Arrays, Functions"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"JavaScript is a powerful and versatile programming language that is widely used for web development. One of its core strengths lies in its ability to handle data structures like arrays, objects, and functions. In this post, we'll take a closer look at each of these data structures and how they can be used in JavaScript."),(0,n.kt)("h3",{id:"arrays"},"Arrays:"),(0,n.kt)("p",null,"Arrays in JavaScript are ordered collections of values. They can contain any type of data, including numbers, strings, objects, and even other arrays. Arrays are declared using square brackets, and each value is separated by a comma. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var myArray = [1, 2, 3, 'Hello', [4, 5]];\n")),(0,n.kt)("p",null,"Arrays in JavaScript have a number of useful built-in methods that allow you to manipulate the data within them. For example, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},".push()")," method to add an element to the end of an array, or the ",(0,n.kt)("inlineCode",{parentName:"p"},".pop()")," method to remove the last element. You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},".sort()")," method to sort the elements in an array, and the ",(0,n.kt)("inlineCode",{parentName:"p"},".slice()")," method to extract a portion of the array."),(0,n.kt)("h3",{id:"objects"},"Objects:"),(0,n.kt)("p",null,"Objects in JavaScript are unordered collections of key-value pairs. They are used to represent complex data structures and can contain any type of data, including arrays and other objects. Objects are declared using curly braces, and each key-value pair is separated by a comma. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var myObject = {\n  name: 'John',\n  age: 30,\n  hobbies: ['reading', 'hiking']\n};\n")),(0,n.kt)("p",null,"Objects in JavaScript are very versatile, and you can use them to represent anything from simple data structures to complex data models. They also have a number of useful built-in methods, such as ",(0,n.kt)("inlineCode",{parentName:"p"},".hasOwnProperty()"),", which allows you to check if an object has a specific property, and ",(0,n.kt)("inlineCode",{parentName:"p"},".keys()"),", which returns an array of the object's keys."),(0,n.kt)("h3",{id:"functions"},"Functions:"),(0,n.kt)("p",null,"Functions in JavaScript are blocks of code that can be executed when they are called. They can take any number of arguments, and can return a value if desired. Functions are declared using the function keyword, followed by the function name, and a set of parentheses that define the arguments. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function addNumbers(a, b) {\n  return a + b;\n}\n")),(0,n.kt)("p",null,"Functions are a crucial part of JavaScript, and they allow you to write modular and reusable code. They can also be used to create complex algorithms and data structures, and can be used in conjunction with arrays and objects to achieve powerful results."),(0,n.kt)("p",null,"In conclusion, arrays, objects, and functions are the building blocks of JavaScript and are used to represent and manipulate data in a variety of ways. Understanding how to use these data structures effectively is an important part of being a JavaScript developer, and mastering them can open up a world of possibilities for your projects."),(0,n.kt)("h2",{id:"slides"},"Slides"),(0,n.kt)(o.O,{lec_src:r(1154).Z,mdxType:"PowerPoint"}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks.")))}m.isMDXComponent=!0},1154:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/03-obj-arrays-funcs-63d98cf38f08e7e2c871aaa1a6316d87.pptx"}}]);