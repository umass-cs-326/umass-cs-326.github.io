"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9375],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={},l="L19 NoSQL",i={unversionedId:"lectures/no-sql/index",id:"lectures/no-sql/index",title:"L19 NoSQL",description:"Overview",source:"@site/docs/03-lectures/19-no-sql/index.md",sourceDirName:"03-lectures/19-no-sql",slug:"/lectures/no-sql/",permalink:"/docs/lectures/no-sql/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L18 Node and SQL",permalink:"/docs/lectures/node-sql/"},next:{title:"Atlas Tutorial",permalink:"/docs/lectures/no-sql/atlas-tut"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Slides",id:"slides",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Reference",id:"reference",level:2},{value:"Tutorials",id:"tutorials",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"VSCode",id:"vscode",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"l19-nosql"},"L19 NoSQL"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"NoSQL databases have gained popularity in recent years as an alternative to traditional relational databases for handling large volumes of unstructured data. Document-oriented databases are a popular category of NoSQL databases, which store data as collections of documents rather than in tables with fixed schemas. Two widely used document-oriented databases are MongoDB and CouchDB."),(0,o.kt)("p",null,"MongoDB is a highly scalable NoSQL database that uses a document-oriented data model. Here are some examples of how to query a MongoDB database:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find all documents in a collection:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"db.mycollection.find()\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find documents that match a specific condition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"db.mycollection.find({ age: { $gt: 25 } })\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update a document that matches a specific condition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'db.mycollection.updateOne(\n  { name: "John Doe" },\n  { $set: { age: 35 } }\n)\n')),(0,o.kt)("p",null,"CouchDB is another popular document-oriented database that uses a JSON-based data model. Here are some examples of how to query a CouchDB database:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find all documents in a database:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /mydb/_all_docs\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find documents that match a specific condition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /mydb/_find\n{\n  "selector": { "age": { "$gt": 25 } }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update a document that matches a specific condition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'PUT /mydb/document-id\n{\n  "_rev": "1-abcdef123456",\n  "name": "John Doe",\n  "age": 35,\n  "city": "New York"\n}\n')),(0,o.kt)("p",null,"In addition to MongoDB and CouchDB, there are many other document-oriented databases available, such as RavenDB, Apache Cassandra, and Amazon DynamoDB. Each database has its own unique features and strengths, so it's important to carefully evaluate your requirements before choosing a database for your application."),(0,o.kt)("p",null,"NoSQL databases, especially document-oriented databases like MongoDB and CouchDB, have become increasingly popular choices for handling large volumes of unstructured data. With their flexible data models and powerful query capabilities, these databases offer a scalable and efficient approach to data management for modern data-driven applications."),(0,o.kt)("h2",{id:"slides"},"Slides"),(0,o.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vQOWT412u6hfR0jzd7F5qdmcfk36YqgbkZ5RDkBO472_TTmD1XiLwdlRngqoHLaLEUvdH5A9fYW1gfv/embed?start=false&loop=false&delayms=3000",frameborder:"0",width:"680",height:"449",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}),(0,o.kt)("p",null,"The slide deck can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1vgKVxb1A4-5qajZCBI2KYEJ6nvMprkORa2tAy2zDhFY/edit?usp=sharing"},"here"),"."),(0,o.kt)("p",null,"The Jamboard can be found ",(0,o.kt)("a",{parentName:"p",href:"https://jamboard.google.com/d/1moiqRpFAyHs4f0X5vkdpvX4RW5nUlPLwexnwD3I9Ids/edit?usp=share_link"},"here"),"."),(0,o.kt)("h2",{id:"code-examples"},"Code Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/umass-cs-326/examples/tree/main/19-no-sql"},"examples/19-no-sql"))),(0,o.kt)("p",null,"You can view all of the examples by cloning the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/umass-cs-326/examples"},"examples repository"),"."),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NO EXERCISE"),", but you should really practice this stuff!"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"tutorials"},"Tutorials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"atlas-tut"},"MongoB Atlas Tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"node-mongo-tut"},"Node and MongoDB Tutorial"))),(0,o.kt)("h3",{id:"nodejs"},"Node.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://mongodb.github.io/node-mongodb-native/"},"Node MongoDB Driver")," is the official MongoDB driver for Node.js. It provides a high-level API for interacting with MongoDB databases from Node.js applications.")),(0,o.kt)("h3",{id:"vscode"},"VSCode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"VSCode Live Server"),", an extension we will end up using quite a bit for several weeks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres"},"PostgreSQL"),", an extension that allows you to connect to a PostgreSQL database and run queries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode"},"MongoDB for VSCode"),", an extension that allows you to connect to a MongoDB database and run queries.")))}c.isMDXComponent=!0}}]);