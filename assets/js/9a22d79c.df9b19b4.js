"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3175],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(o),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return o?a.createElement(m,n(n({ref:t},c),{},{components:o})):a.createElement(m,n({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,n=new Array(r);n[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,n[1]=l;for(var u=2;u<r;u++)n[u]=o[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},86272:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=o(87462),i=(o(67294),o(3905));const r={},n="HW2: Scrabble Starter",l={unversionedId:"homework/scrabble-starter/index",id:"homework/scrabble-starter/index",title:"HW2: Scrabble Starter",description:"Information",source:"@site/docs/06-homework/02-scrabble-starter/index.md",sourceDirName:"06-homework/02-scrabble-starter",slug:"/homework/scrabble-starter/",permalink:"/docs/homework/scrabble-starter/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hw1: GitHub Classroom",permalink:"/docs/homework/github-classroom/"},next:{title:"Hw3: Rack & Render",permalink:"/docs/homework/rack-and-render/"}},s={},u=[{value:"Information",id:"information",level:2},{value:"Submission",id:"submission",level:2},{value:"Overview",id:"overview",level:2},{value:"GitHub Classroom and Workflow",id:"github-classroom-and-workflow",level:2},{value:"General Guidelines",id:"general-guidelines",level:2},{value:"Starter Code",id:"starter-code",level:2},{value:"What you need to do",id:"what-you-need-to-do",level:2},{value:"TODO #1: Word Checker",id:"todo-1-word-checker",level:3},{value:"TODO #2: Base Score Calculator",id:"todo-2-base-score-calculator",level:3},{value:"TODO #3: Possible Words",id:"todo-3-possible-words",level:3},{value:"TODO #4: Best Possible Words",id:"todo-4-best-possible-words",level:3},{value:"TODO #5: README.md",id:"todo-5-readmemd",level:3},{value:"Tips",id:"tips",level:2}],c={toc:u};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hw2-scrabble-starter"},"HW2: Scrabble Starter"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(63610).Z,width:"116",height:"125"})),(0,i.kt)("h2",{id:"information"},"Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit Moodle and follow the GitHub Classroom assignment link."),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"/docs/information/schedule/#homework"},"calendar")," for due dates.")),(0,i.kt)("h2",{id:"submission"},"Submission"),(0,i.kt)("p",null,"You must submit the following to complete this assignment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Push all changes to your GitHub repository before the due date. You do not need to submit anything to Moodle. We will take your last commit before the deadline as your submission."),(0,i.kt)("li",{parentName:"ul"},"Complete the Grade Reflection survey associated with this assignment on Moodle.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This is the first part of a series of assignments around the game of Scrabble. We hope that it will be a fun experience in progressively learning all the pieces surrounding modern web development, to engineer a fully functional game. In this assignment, you will build a collection of functions that we will use in future homework to build a (mostly) complete scrabble game web application."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"github-classroom-and-workflow"},"GitHub Classroom and Workflow"),(0,i.kt)("p",null,"All homework assignments use GitHub Classroom. To start this assignment, you must click on the GitHub Classroom link and accept the assignment to create your initial GitHub repository. You must then use the git clone command to clone that repository to your local computer to begin work. If you forget how to do this, refer to the first homework assignment and related material. We recommend the following workflow to complete homework assignments:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Accept the GitHub Classroom link")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone your repository to your local computer")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Do the following until the assignment is complete"),(0,i.kt)("p",{parentName:"li"},"A. Make incremental required additions/edits/changes to the source code"),(0,i.kt)("p",{parentName:"li"},"B. Add those changes to your repository:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"`git add .`\n")),(0,i.kt)("p",{parentName:"li"},"C. Commit those changes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'`git commit -m "a short message about changes"`\n')),(0,i.kt)("p",{parentName:"li"},"D. Push those changes to GitHub:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"`git push`\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy your GitHub repository URL into the Moodle assignment and submit"))),(0,i.kt)("p",null,"You are also welcome to use use GitHub Desktop and/or VSCode to do\nthis, but we highly encourage you to become familiar with the command\nline usage ",(0,i.kt)("strong",{parentName:"p"},"first")," as this is 100% expected in industry and academia."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"general-guidelines"},"General Guidelines"),(0,i.kt)("p",null,"Here are a few general guidelines for this assignment:"),(0,i.kt)("p",null,"It will be helpful to come up with test cases using ",(0,i.kt)("inlineCode",{parentName:"p"},"console.assert"),". This will give you some assurance that your code is working properly. We encourage you to share test cases that you develop with others taking this class. This will make everyone\u2019s code better and is how quality assurance (QA) can work in practice."),(0,i.kt)("p",null,"We will be spot checking your code for good coding practices. It is expected your code does not contain (1) extraneous variables/code, (2) missing semicolons, (3) missing curly braces, and (4) use of double equals. Furthermore, you should use whitespace consistently and make the code legible. Many of these issues will be recognized by VSCode and either suggested as corrections or automatically corrected when you save your code."),(0,i.kt)("p",null,"Please review the ",(0,i.kt)("a",{parentName:"p",href:"/docs/information/syllabus/#collaboration-policy"},"collaboration policy")," in the Syllabus for further information on what you can and cannot do in terms of sharing of work."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"starter-code"},"Starter Code"),(0,i.kt)("p",null,"The starter code provided below is a skeleton of the code you will be writing. Here is a brief description of each of the files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dictionary.js"),": This file contains the dictionary of words that will be used in the scrabble game."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.html"),": this file contains some HTML code that is used to run the ",(0,i.kt)("inlineCode",{parentName:"li"},"scrabbleUtilsTest.js")," file. There is nothing you need to do with this file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),": this file contains a brief description of the project. All GitHub repositories should have this file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scrabbleUtils.js"),": this file contains the functions you will be writing. You will need to fill in the TODO's with your own code. The TODO's are marked with a // TODO #k comment, where k is the number of the TODO."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scrabbleUtilsTest.js"),": this file contains some test cases that will be used to test your code. You should add your own tests \u2013 this is what every good programmer should do. This file will be run when the index.html file is loaded into the browser.")),(0,i.kt)("p",null,'To run this "application" it is recommended that you use the ',(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server")," VSCode extension. You simply right-click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file and select ",(0,i.kt)("em",{parentName:"p"},'"Open with Live Server"'),". This will automatically run a web server on your local machine and point your browser to the local server which will load the index.html file into the browser."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please complete all the TODOs in the code.")),(0,i.kt)("h2",{id:"what-you-need-to-do"},"What you need to do"),(0,i.kt)("h3",{id:"todo-1-word-checker"},"TODO #1: Word Checker"),(0,i.kt)("p",null,"In Scrabble, a player has a collection of tiles where each tile is bearing a single character (the letter) as depicted here:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(23169).Z,width:"296",height:"139"})),(0,i.kt)("p",null,"The goal of the game is to form words from these tiles held in a ",(0,i.kt)("em",{parentName:"p"},"rack")," that are valid according to the rules of the game. To implement Scrabble as a web application we will need to implement the game using data and functionality in the JavaScript programming language. The first function we need to write is the ",(0,i.kt)("inlineCode",{parentName:"p"},"canConstructWord")," function which can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrabbleUtils.js")," file. This function is used to perform one of the most important parts of the game which is to determine whether a player has the necessary tiles to construct a given word. The signature of this function looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function canConstructWord(availableTiles, word)\n")),(0,i.kt)("p",null,"This function has two parameters: the available tiles the player has (and how many) and a word the player wants to construct. The former is an object mapping letters to their frequencies. That is, the properties are the letters, and the values of those properties are the number of tiles the player has in their rack. The latter is simply a string. Scrabble also has blank \u201cwildcard\u201d tiles that we will represent with the \u2018","*","\u2019 (asterisk) character. A wildcard tile can be used in place of any character."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Additional specifications for this function include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may not modify the function arguments."),(0,i.kt)("li",{parentName:"ul"},"You can assume the letters in the availableTiles object are always lowercase."),(0,i.kt)("li",{parentName:"ul"},"You can assume that the word string is always lowercase.")),(0,i.kt)("p",null,"Here is an example of how you call this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"canConstructWord({ a: 1, c: 2, t: 1 }, 'cat'); // => true\ncanConstructWord({ *: 1, c: 2, t: 1 }, 'cat'); // => true\n")),(0,i.kt)("p",null,"This function is labeled as ",(0,i.kt)("strong",{parentName:"p"},"TODO #1")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrabbleUtils.js")," file provided with the starter code for this homework."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You must implement this function.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"todo-2-base-score-calculator"},"TODO #2: Base Score Calculator"),(0,i.kt)("p",null,"The next function we need to write is the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseScore")," function which is used to calculate the base score of a word. The signature of this function looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function baseScore(word)\n")),(0,i.kt)("p",null,"This function has one parameter: ",(0,i.kt)("inlineCode",{parentName:"p"},"word"),". The word is a string. The base score of a word is the sum of the scores of each letter in the word. For example, the base score of the word \u2018cat\u2019 is 3 + 1 + 1 = 5, if the letters \u2018c\u2019, 'a' and 't' have the scores 3, 2 and 1, respectively. This function returns the base score of the word."),(0,i.kt)("p",null,"The number of letters and the associated scores for each letter are shown in the list below formatted as ",(0,i.kt)("strong",{parentName:"p"},"POINTS: LETTER \xd7 COUNT.")," That is, the number of points for each letter is on the left and the letter is on the right along with the number of those letter tiles that are available in the scrabble game."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 points: blank tiles x2"),(0,i.kt)("li",{parentName:"ul"},"1 point: E \xd712, A \xd79, I \xd79, O \xd78, N \xd76, R \xd76, T \xd76, L \xd74, S \xd74, U \xd74"),(0,i.kt)("li",{parentName:"ul"},"2 points: D \xd74, G \xd73"),(0,i.kt)("li",{parentName:"ul"},"3 points: B \xd72, C \xd72, M \xd72, P \xd72"),(0,i.kt)("li",{parentName:"ul"},"4 points: F \xd72, H \xd72, V \xd72, W \xd72, Y \xd72"),(0,i.kt)("li",{parentName:"ul"},"5 points: K \xd71"),(0,i.kt)("li",{parentName:"ul"},"8 points: J \xd71, X \xd71"),(0,i.kt)("li",{parentName:"ul"},"10 points: Q \xd71, Z \xd71")),(0,i.kt)("p",null,"You can also find the scoring on Wikipedia",(0,i.kt)("sup",null,"2")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Additional specifications for this function include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may assume that the word parameter is non-empty"),(0,i.kt)("li",{parentName:"ul"},"You may assume that the word parameter is all lowercase"),(0,i.kt)("li",{parentName:"ul"},"You may assume that the word parameter could contain a wildcard character")),(0,i.kt)("p",null,"There are many ways in which to implement this function. We suggest using an object mapping characters to their scores. This function is labeled as ",(0,i.kt)("strong",{parentName:"p"},"TODO #2")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrabbleUtils.js")," file provided with the starter code for this homework."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You must implement this function.")),(0,i.kt)("sup",null,"2"),"[Scrabble letter distributions - Wikipedia](https://en.wikipedia.org/wiki/Scrabble_letter_distributions)",(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"todo-3-possible-words"},"TODO #3: Possible Words"),(0,i.kt)("p",null,"An important goal the human player has in the game of Scrabble is to find a word that they know that can be constructed from the tiles they have in their rack in the context of the words that have already been played on the board. Although this can be a challenge for the human player (depending on their knowledge of words), it is not so hard for a computer to take a giant corpus of words and given a rack of tiles determine the possible words that can be constructed from those tiles."),(0,i.kt)("p",null,"The next function we want to write is the ",(0,i.kt)("inlineCode",{parentName:"p"},"possibleWords")," function which is used to find all possible words that can be constructed from the tiles the player has in their rack. This function could be used to check if a word played by a player is an actual word (of course this depends on how extensive our dictionary is). The signature of this function looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function possibleWords(availableTiles)\n")),(0,i.kt)("p",null,"This function has one parameter: the available tiles the player has. The available tiles are an object mapping letters to their frequencies. That is, the properties are the letters, and the values of those properties are the number of tiles the player has in their rack."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Additional specifications for this function include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may not modify the function argument."),(0,i.kt)("li",{parentName:"ul"},"You can assume the letters in the availableTiles object are always lowercase.")),(0,i.kt)("p",null,"This function is labeled as ",(0,i.kt)("strong",{parentName:"p"},"TODO #3")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrabbleUtils.js")," file provided with the starter code for this homework."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You must implement this function.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"todo-4-best-possible-words"},"TODO #4: Best Possible Words"),(0,i.kt)("p",null,"The next function we want to write is the ",(0,i.kt)("inlineCode",{parentName:"p"},"bestPossibleWords")," function which is used to find the best possible words that can be constructed from the tiles the player has in their rack. This function could be used to determine the best possible words that the player can construct from their rack. As we will see in later homework, this function is used to give the player a list of words that they can construct from their rack. The signature of this function looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function bestPossibleWords(availableTiles)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Additional specifications for this function include:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may not modify the function argument."),(0,i.kt)("li",{parentName:"ul"},"You can assume the letters in the availableTiles object are always lowercase.")),(0,i.kt)("p",null,"This function is labeled as ",(0,i.kt)("strong",{parentName:"p"},"TODO #4")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scrabbleUtils.js")," file provided with the starter code for this homework."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You must implement this function.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"todo-5-readmemd"},"TODO #5: README.md"),(0,i.kt)("p",null,"It is always important to update a README.md file in your GitHub repository. This final TODO asks you to provide a brief description in the README.md file of the changes you made to the code that was provided. Briefly describe the implementation of your functions in a paragraph or two of text. Please use complete sentences and proper grammar."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Write your code in small increments. This will help you identify mistakes early. The more code you write before you test it makes it more difficult to identify mistakes."),(0,i.kt)("li",{parentName:"ul"},"You should commit your code to git regularly. This will help you keep track of your progress. You can see how many commits you have made by using ",(0,i.kt)("inlineCode",{parentName:"li"},"git log")," in the terminal."),(0,i.kt)("li",{parentName:"ul"},"You should push your code to GitHub regularly. This will allow the course staff to easily see your progress and see your code if you are having problems."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"console.log")," for debugging purposes. The output of this function will be displayed in the browser console."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"console.assert")," for testing your code. Write additional tests to the ",(0,i.kt)("inlineCode",{parentName:"li"},"scrabbleUtilsTest.js")," file. Share your tests with your classmates.")))}h.isMDXComponent=!0},63610:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/image001-0986069082222f7271cdf1d2d5009326.png"},23169:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/image002-a5919f1b6e5b6a915a43ae49effa8411.jpg"}}]);