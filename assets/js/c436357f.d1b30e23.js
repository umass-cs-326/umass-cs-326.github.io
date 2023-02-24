"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22408:(e,t,a)=>{a.d(t,{O:()=>r});var n=a(67294),l=a(52263);const r=e=>{let{lec_src:t}=e;const{siteConfig:a}=(0,l.Z)(),{url:r}=a,s=`https://view.officeapps.live.com/op/embed.aspx?src=${r+t}`;return n.createElement("div",{style:{marginBottom:"4rem"}},n.createElement("iframe",{src:s,width:"100%",height:"600px",frameborder:"0"}),n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},87282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(22408);const s={},i="L05 Classes",o={unversionedId:"lectures/classes/index",id:"lectures/classes/index",title:"L05 Classes",description:"Overview",source:"@site/docs/03-lectures/05-classes/index.md",sourceDirName:"03-lectures/05-classes",slug:"/lectures/classes/",permalink:"/docs/lectures/classes/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L04 Objects",permalink:"/docs/lectures/objects/"},next:{title:"L06 Modules, HTML, DOM",permalink:"/docs/lectures/modules-html-dom/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:2},{value:"Example 1: Animal",id:"example-1-animal",level:3},{value:"Example 2: Person",id:"example-2-person",level:3},{value:"Slides",id:"slides",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Resources",id:"resources",level:2},{value:"MDN Web Docs",id:"mdn-web-docs",level:3},{value:"VSCode",id:"vscode",level:3}],m={toc:p};function d(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"l05-classes"},"L05 Classes"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"JavaScript classes are a way of defining object-oriented programming (OOP) constructs in JavaScript. Classes provide a way to define blueprints for objects, which encapsulate data and functionality into a single entity."),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"The syntax for creating a class in JavaScript is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"class ClassName {\n  constructor() {\n    // constructor code\n  }\n\n  method1() {\n    // method1 code\n  }\n\n  method2() {\n    // method2 code\n  }\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," keyword is used to declare a new class, followed by the name of the class (",(0,l.kt)("inlineCode",{parentName:"p"},"ClassName")," in this case). The class body is contained within curly braces, which includes a constructor and any number of methods."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"constructor")," method is a special method that is called when an instance of the class is created. It is used to set up any initial state that the object needs."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Here are some examples of JavaScript classes:"),(0,l.kt)("h3",{id:"example-1-animal"},"Example 1: Animal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"class Animal {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  speak() {\n    console.log('Hello, my name is ' + this.name);\n  }\n\n  getAge() {\n    return this.age;\n  }\n}\n\nconst cat = new Animal('Fluffy', 2);\ncat.speak(); // output: \"Hello, my name is Fluffy\"\nconsole.log(cat.getAge()); // output: 2\n")),(0,l.kt)("p",null,"In this example, we define a class ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," that has a constructor that takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," argument. The class also has two methods, ",(0,l.kt)("inlineCode",{parentName:"p"},"speak")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getAge"),". We then create an instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Animal")," class called ",(0,l.kt)("inlineCode",{parentName:"p"},"cat")," and call its ",(0,l.kt)("inlineCode",{parentName:"p"},"speak")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getAge")," methods."),(0,l.kt)("h3",{id:"example-2-person"},"Example 2: Person"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  sayHello() {\n    console.log('Hello, my name is ' + this.name);\n  }\n\n  getAge() {\n    return this.age;\n  }\n}\n\nclass Employee extends Person {\n  constructor(name, age, salary) {\n    super(name, age);\n    this.salary = salary;\n  }\n\n  getSalary() {\n    return this.salary;\n  }\n}\n\nconst alice = new Employee('Alice', 30, 50000);\nalice.sayHello(); // output: \"Hello, my name is Alice\"\nconsole.log(alice.getAge()); // output: 30\nconsole.log(alice.getSalary()); // output: 50000\n")),(0,l.kt)("p",null,"In this example, we define a class ",(0,l.kt)("inlineCode",{parentName:"p"},"Person")," that has a constructor that takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," argument, and two methods, ",(0,l.kt)("inlineCode",{parentName:"p"},"sayHello")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getAge"),". We then define a subclass ",(0,l.kt)("inlineCode",{parentName:"p"},"Employee")," that extends the ",(0,l.kt)("inlineCode",{parentName:"p"},"Person")," class and has a constructor that takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"age"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"salary")," argument, and a ",(0,l.kt)("inlineCode",{parentName:"p"},"getSalary")," method. We create an instance of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Employee")," class called ",(0,l.kt)("inlineCode",{parentName:"p"},"alice")," and call its ",(0,l.kt)("inlineCode",{parentName:"p"},"sayHello"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getAge"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"getSalary")," methods."),(0,l.kt)("h2",{id:"slides"},"Slides"),(0,l.kt)(r.O,{lec_src:a(491).Z,mdxType:"PowerPoint"}),(0,l.kt)("h2",{id:"exercise"},"Exercise"),(0,l.kt)("p",null,"You must complete ",(0,l.kt)("a",{parentName:"p",href:"../../exercises/decoder-ring-class"},"Ex5: Decoder Ring Class")," by the next class meeting."),(0,l.kt)("h2",{id:"code-examples"},"Code Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/umass-cs-326/examples/tree/main/05-classes"},"examples/05-classes"))),(0,l.kt)("p",null,"You can view all of the examples by cloning the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/umass-cs-326/examples"},"examples repository"),"."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("h3",{id:"mdn-web-docs"},"MDN Web Docs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"},"JavaScript Modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"},"JavaScript Classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://javascript.info/modules-dynamic-imports"},"Dynamic Imports")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/s9kNndJLOjg"},"JavaScript Modules with Import/Export Syntax (ES6)")," (video)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/wik23D_gyCo"},"JavaScript Classes #1: The Basics")," (video)")),(0,l.kt)("h3",{id:"vscode"},"VSCode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks.")))}d.isMDXComponent=!0},491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/05-classes-6b5e22b555eb43cc381ea4ef7a3cdb01.pptx"}}]);