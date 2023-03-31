"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},75119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="Ex9: Persistent Encoder",s={unversionedId:"exercises/persistent-encoder/index",id:"exercises/persistent-encoder/index",title:"Ex9: Persistent Encoder",description:"---",source:"@site/docs/05-exercises/09-persistent-encoder/index.md",sourceDirName:"05-exercises/09-persistent-encoder",slug:"/exercises/persistent-encoder/",permalink:"/docs/exercises/persistent-encoder/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ex8: 8x8 Chessboard",permalink:"/docs/exercises/chessboard/"},next:{title:"Ex10: Install Node.js and Run Server",permalink:"/docs/exercises/run-server/"}},l={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ex9-persistent-encoder"},"Ex9: Persistent Encoder"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The goal of this exercise is to add persistence to the encoder application we saw in a previous exercise. In particular, you will be implementing an application that works identical to the previous encoder/decoder exercise. However, you will extend this application to support persistence using browser local storage. That is, if you reload the page it will keep the text that has been entered into the editable text boxes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(73062).Z,width:"660",height:"482"})),(0,o.kt)("h1",{id:"starter-kit"},"Starter Kit"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Follow the GitHub Classroom assignment link on Moodle first.")),(0,o.kt)("p",null,"You are provided two files: ",(0,o.kt)("strong",{parentName:"p"},"encoder-interactive.html"),", ",(0,o.kt)("strong",{parentName:"p"},"interactive.js"),", and ",(0,o.kt)("strong",{parentName:"p"},"decoder.js"),". The HTML file provides the necessary tags to load in both the CSS and JS files. You will be modifying this file to add a button. In the ",(0,o.kt)("strong",{parentName:"p"},"interactive.js")," file you will be adding the necessary logic for data persistence. You do not need to modify the ",(0,o.kt)("strong",{parentName:"p"},"decoder.js")," file. This contains the decoder functionality from the previous exercises."),(0,o.kt)("h1",{id:"todo-1-html-adding-a-button"},"TODO #1: (HTML) Adding a button"),(0,o.kt)("p",null,"You are welcome to use your previous solution, however, the instructions for this exercise are based off of our solution and the starter kit that will help you get started. Here is the modifications you need to make to ",(0,o.kt)("strong",{parentName:"p"},"encoder-interactive.html"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a \u201cclear\u201d button that will be used to clear local storage and the content of the text boxes that you have typed into. You can see the button in the image above.")),(0,o.kt)("p",null,"You will find ",(0,o.kt)("strong",{parentName:"p"},"TODO #1")," in the ",(0,o.kt)("strong",{parentName:"p"},"encoder-interactive.html")," file."),(0,o.kt)("h1",{id:"todo-2-javascript-adding-persistence-behavior"},"TODO #2: (JavaScript) Adding persistence behavior"),(0,o.kt)("p",null,"Complete the JS in ",(0,o.kt)("strong",{parentName:"p"},"interactive.js")," provided in the starter kit to add persistence of the UI data and clear the UI data as shown in the animated image above. Follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add event handlers for the cipher ",(0,o.kt)("em",{parentName:"li"},"key"),", ",(0,o.kt)("em",{parentName:"li"},"encode"),", and ",(0,o.kt)("em",{parentName:"li"},"decode")," text boxes that will save the content of each of these text boxes to local storage."),(0,o.kt)("li",{parentName:"ol"},"Add an event handler for the clear button such that when the user clicks the button it will clear the local storage state and the text boxes."),(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("strong",{parentName:"li"},"restoreState")," function to restore the state of the text boxes."),(0,o.kt)("li",{parentName:"ol"},"Implement the ",(0,o.kt)("strong",{parentName:"li"},"saveState"),", ",(0,o.kt)("strong",{parentName:"li"},"restoreState"),", and ",(0,o.kt)("strong",{parentName:"li"},"clearState")," functions.")),(0,o.kt)("p",null,"You will find ",(0,o.kt)("strong",{parentName:"p"},"TODO #2")," in the ",(0,o.kt)("strong",{parentName:"p"},"interactive.js")," file."))}d.isMDXComponent=!0},73062:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/exercise9-5c1b39a1f2adaeaf6a2409ed7bcfe5a4.gif"}}]);