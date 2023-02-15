"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22408:(e,t,r)=>{r.d(t,{O:()=>o});var n=r(67294),a=r(52263);const o=e=>{let{lec_src:t}=e;const{siteConfig:r}=(0,a.Z)(),{url:o}=r,i=`https://view.officeapps.live.com/op/embed.aspx?src=${o+t}`;return n.createElement("div",{style:{marginBottom:"4rem"}},n.createElement("iframe",{src:i,width:"100%",height:"600px",frameborder:"0"}),n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},44235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(22408);const i={},c="L04 Objects",l={unversionedId:"lectures/objects/index",id:"lectures/objects/index",title:"L04 Objects",description:"Overview",source:"@site/docs/03-lectures/04-objects/index.md",sourceDirName:"03-lectures/04-objects",slug:"/lectures/objects/",permalink:"/docs/lectures/objects/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L03 Objects, Arrays, Functions",permalink:"/docs/lectures/obj-arrays-funcs/"},next:{title:"L05 Classes",permalink:"/docs/lectures/classes/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Creating an Object",id:"creating-an-object",level:2},{value:"Accessing Object Properties",id:"accessing-object-properties",level:2},{value:"Memory Diagram of an Object",id:"memory-diagram-of-an-object",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Slides",id:"slides",level:2},{value:"Resources",id:"resources",level:2},{value:"MDN Web Docs",id:"mdn-web-docs",level:3},{value:"VSCode",id:"vscode",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"l04-objects"},"L04 Objects"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In JavaScript, an object is a data structure that allows you to store\nand organize data in a more complex way than primitive data types like\nnumbers and strings. Objects can contain properties, which are\nkey-value pairs, as well as methods, which are functions that can be\ncalled on the object."),(0,a.kt)("h2",{id:"creating-an-object"},"Creating an Object"),(0,a.kt)("p",null,"There are a few different ways to create an object in JavaScript. One\ncommon method is to use object literal notation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const myObj = {\n  property1: 'value1',\n  property2: 'value2',\n  method1: function() {\n    console.log('This is a method.');\n  }\n};\n")),(0,a.kt)("p",null,"This creates an object with two properties (",(0,a.kt)("inlineCode",{parentName:"p"},"property1")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"property2"),") and one method (",(0,a.kt)("inlineCode",{parentName:"p"},"method1"),")."),(0,a.kt)("h2",{id:"accessing-object-properties"},"Accessing Object Properties"),(0,a.kt)("p",null,"You can access object properties using dot notation or bracket notation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(myObj.property1); // Output: 'value1'\nconsole.log(myObj['property2']); // Output: 'value2'\n")),(0,a.kt)("h2",{id:"memory-diagram-of-an-object"},"Memory Diagram of an Object"),(0,a.kt)("p",null,"To better understand how objects work in JavaScript, let's take a look\nat a memory diagram of an object:"),(0,a.kt)("mermaid",{value:'graph LR\n  id1(("Object")) --\x3e id2["property1: \'value1\'"]\n  id1(("Object")) --\x3e id3["property2: \'value2\'"]\n  id1(("Object")) --\x3e id4["method1()"]'}),(0,a.kt)("p",null,"In this diagram, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," is represented by a circle, and its\nproperties (",(0,a.kt)("inlineCode",{parentName:"p"},"property1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"property2"),") and method (",(0,a.kt)("inlineCode",{parentName:"p"},"method1"),") are\nrepresented by rectables connected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," circle."),(0,a.kt)("p",null,"Here is a more in depth diagram:"),(0,a.kt)("mermaid",{value:"graph LR\n  id1(Array) --\x3e id2(Object1)\n  id1(Array) --\x3e id3(Object2)\n  id1(Array) --\x3e id4(Object3)\n\n  subgraph Object1\n    id2[\"property1: 'value1'\"]\n    id2[\"property2: 'value2'\"]\n  end\n\n  subgraph Object2\n    id3[\"property1: 'value3'\"]\n    id3[\"property2: 'value4'\"]\n  end\n\n  subgraph Object3\n    id4[\"property1: 'value5'\"]\n    id4[\"property2: 'value6'\"]\n  end"}),(0,a.kt)("p",null,"In this diagram, A JavaScript array named ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," is represented by a\nrectangle, and each of the three objects (",(0,a.kt)("inlineCode",{parentName:"p"},"Object1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Object2"),", and\n",(0,a.kt)("inlineCode",{parentName:"p"},"Object3"),") are represented by larger rectangles. The objects each\ncontain two properties (",(0,a.kt)("inlineCode",{parentName:"p"},"property1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"property2"),") represented by\nrectangles. The values of the properties are also shown in the\ncircles."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"JavaScript objects are a powerful tool for organizing and manipulating\ndata in your code. By understanding how objects work and how to create\nand access their properties and methods, you can take your"),(0,a.kt)("h2",{id:"slides"},"Slides"),(0,a.kt)(o.O,{lec_src:r(10696).Z,mdxType:"PowerPoint"}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("h3",{id:"mdn-web-docs"},"MDN Web Docs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"},"JavaScript data types and data structures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},"Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this keyword")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=37YIF_evtEk"},"JavaScript OBJECTS in ONE Video"))),(0,a.kt)("h3",{id:"vscode"},"VSCode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks.")))}m.isMDXComponent=!0},10696:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/04-objects-8e40bc1c87a2e2feb8db7198553ce4d5.pptx"}}]);