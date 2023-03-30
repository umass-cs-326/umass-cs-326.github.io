# Hw6: Scrabble Express, Fetch, Database, and Deployment

**This homework has a total of 70 points.**

-----
# **Overview**
This is the final part of a series of assignments around the game of Scrabble. We hope that this will be a fun experience in implementing the pieces of modern web development, so as to engineer a functional game. In this assignment, we will add (most of) the Scrabble rules regarding placement and scoring, as well as use our RESTful API we completed in the previous homework.

![](img/img.png)
# <a name="_3wjxh2b8j3zc"></a>**GitHub Classroom and Workflow**
All homework assignments use GitHub Classroom. To start this assignment, you must click on the GitHub Classroom link and accept the assignment to create your initial GitHub repository. You must then use the git **clone** command to clone that repository to your local computer to begin work. If you forget how to do this, refer to the first homework assignment and related material. We recommend the following workflow to complete homework assignments:

1. Accept the GitHub Classroom link
1. Clone your repository to your local computer
1. Do the following until your homework is complete (you can also use GitHub Desktop and/or VSCode to do this):
   1. Make incremental required additions/edits/changes to the source code
   1. Add those changes to your repository: 

      **git add .**

   1. Commit those changes: 

      **git add -m “a short, but specific message about changes”**
   1. Push those changes to GitHub:

      **git push**

1. Copy your GitHub repository URL into the Moodle assignment and submit
# <a name="_11e1gwzi7iwa"></a>**General Guidelines**
Here are a few general guidelines for this assignment:

**Use [console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log) to print values to the browser console.** This is a cheap way to ensure that your code is doing what you think it is doing. If nothing displays in the browser window, it is likely that there is an error in your code. Open the console and see if there was an error. 

**Use [console.assert](https://developer.mozilla.org/en-US/docs/Web/API/console/assert) to come up with test cases.** This will give you some assurance that your code is working properly. We encourage you to share test cases that you develop with others taking this class. This will make everyone’s code better and is how [quality assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA) can work in practice.

**Write code in small increments, continually verify that it is working.** It is strongly encouraged that you write your code in small increments and test (or print) that code at each step of the way. Do not write an entire application and then see if it works. If you can verify that your code is working each step of the way, then you can be confident to extend it further.

**This is an individual assignment, and you cannot share code.** We will run submissions against a plagiarism detection tool to ensure that academic dishonesty has not taken place. We will be spot checking your code for good coding practices. It is expected your code does not contain (1) extraneous variables/code, (2) missing semicolons, (3) missing curly braces, and (4) use of double equals. Furthermore, you should use whitespace consistently and make the code legible. Many of these issues will be recognized by VSCode and either suggested as corrections or automatically corrected when you save your code.
# <a name="_6hwv613zw50h"></a>**Starter Code**
After you have successfully cloned the repository, you can begin working on the assignment. Most of the files are the same as the previous assignment. The most notable change is the addition of the multiplayer solution in **client/multiplayer.js** and a new file for this homework that is responsible for a score board feature in **client/scoreboard.js**.

The first step is to install the dependencies:


|npm install|
| :- |

We have added a "script" to the **package.json** file to make it easier to start this application. It is common practice to add scripts to simplify the execution of complicated tasks. If you look in the **package.json** file, you will see an entry that looks like this:


|`  `"scripts": {<br>`    `"start": "node server/index.js"<br>`  `},|
| :- |

This script will run the code written in **server/index.js** file. You can run this script by typing the following in the command line:


|npm start|
| :- |

This will run the server. At that point, you can open your browser to <http://localhost:3000> and the scrabble application will appear. Now, you need to complete the TODOs below.
# <a name="_tthhv5yqabrh"></a>**Part 0 (2 points): GitHub Commits**
## <a name="_y551682uianq"></a>TODO #0: GitHub Commits
You must have at least 5 GitHub commits to receive credit for this part. It is always good practice to design and develop code incrementally. As part of that process you should be making frequent commits to keep a record of your changes along the way. We apply a 4-point scale to the scoring of this part. 4 points when you have commits >= 5, 3 points for 4 commits, 2 points for 3 commits, 1 point for 2 commits, and 0 points for <= 1 commits.

|<h3><a name="_weimw8jlf848"></a>**Part 0 Rubric / 2 Points**</h3>|
| :-: |
|<p>**TODO 0: Number of commits**</p><p>- 0 points if you have < 5 commits</p><p>- 1 points if you have >= 5 commits</p><p>**TODO 0: Quality of commits**</p><p>- 0 points if you have < 5 commits and your commit messages are not all good</p><p>- 1 points if you have >= 5 commits and your commit messages are all good</p><p>Examples of poor commit messages:</p><p>- fixed some stuff</p><p>- update</p><p>- made some changes</p><p>- refactored the function</p><p>Examples of good commit messages (this commit will…):</p><p>- Add /happy route to server/index.js</p><p>- Add fix to Dictionary class to convert to lowercase letters</p><p>- Add margin to scrabble board to prevent overlapping tiles</p><p>- Extend scrabble rules to prevent overlapping tiles</p>|
# <a name="_g8tlr9n2zst2"></a>**Part 1 (20 points): Refactoring Server to Use Express (Server)**
In the previous homework we used the built-in Node.js **http** module to create a server. In this assignment, we will be using ExpressJS to refactor the Scrabble  server and its endpoints. We have provided the basic scaffolding to get you started. You are welcome to use code you implemented in your solution to the previous homework or use our code out of the box. You will need to do the following in the **server/index.js** file:

## <a name="_rz7c0pnn98kw"></a>TODO #1: Import libraries
Import the following libraries:

import express from 'express';

import logger from 'morgan';

The express library provides us the express framework and morgan provides useful HTTP logging information.

## <a name="_hb3kndqlvux8"></a>TODO #2: Create an Express application
Add this code to create an express application and set the default port:

const app = express();

const port = process.env.PORT || 3000;

The port number will come from either the environment variable PORT (provided by Heroku if the application is running in a Heroku container) or 3000 if running locally. 

## <a name="_3xlmtldaj8et"></a>TODO #3: Setup middleware for the Express application
Add this code to setup middleware for the application

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));

app.use('/', express.static('client'));

## <a name="_cg28v7f3infk"></a>TODO #4: Implement the /wordScore endpoint
Add the following API endpoint to the Express application. It is recommended that you test the endpoint before proceeding to the next to ensure that it is working correctly. We recommend using [Postman](https://www.postman.com/downloads/) to manually test each endpoint.

**POST /wordScore**

This endpoint will be used to save a word score on the server. The response should only consist of a 200 status code, with a success JSON object (see below).

**Example Request: <http://localhost:3000/wordScore>**

**Body:**

{

` `"name": "Artemis",

` `"word": "test",

` `"score": 8

}

**Example Response:**

**Status Code:** 200 OK

**Body:**

{

` `"status": "success"

}

## <a name="_2cj10gfbok72"></a>TODO #5: Implement the /highestWordScores endpoint
Add the following API endpoint to the Express application. It is recommended that you test the endpoint before proceeding to the next to ensure that it is working correctly. We recommend using [Postman](https://www.postman.com/downloads/) to manually test each endpoint.

**GET /highestWordScores**

This endpoint will be used to get the top 10 word scores saved on the server (or top X scores if only X < 10 scores are saved). It should return a JSON response, which will be an array of objects consisting of a word and a score.

**Example Request: <http://localhost:3000/highestWordScores>**

**Example Response:**

**Status Code:** 200 OK

**Body:**

[{ "name": "Artemis", "word": "test", "score": 8 }, *...*, { "name": "Parzival", "word": "school", "score": 11 }]

## <a name="_uf3seqxgznl6"></a>TODO #6: Implement the /gameScore endpoint
Add the following API endpoint to the Express application. It is recommended that you test the endpoint before proceeding to the next to ensure that it is working correctly. We recommend using [Postman](https://www.postman.com/downloads/) to manually test each endpoint.

**POST /gameScore**

This endpoint will be used to save a game score for a single player on the server. The response should only consist of a 200 status code, with no body.

**Example Request: <http://localhost:3000/gameScore>**

**Body:**

{

` `"name": "Artemis",

` `"score": 361

}

**Example Response:**

**Status Code:** 200 OK

**Body:**

{

` `"status": "success"

}

## <a name="_sll1endt3z3e"></a>TODO #7: Implement the /highestGameScores endpoint
Add the following API endpoint to the Express application. It is recommended that you test the endpoint before proceeding to the next to ensure that it is working correctly. We recommend using [Postman](https://www.postman.com/downloads/) to manually test each endpoint.

**GET /highestGameScores**

This endpoint will be used to get the top 10 game scores saved on the server (or top X scores if only X < 10 scores are saved). It should return a JSON response, which will be an array of objects consisting of a name and a score.

**Example Request: <http://localhost:3000/highestGameScores>**

**Example Response:**

**Status Code:** 200 OK

**Body:**

[{ "name": "Artemis", "score": 650 }, *...*, { "name": "Parzival", "score": 513 }]


|<h3><a name="_chu2zvdg6f60"></a>**Part 1 Rubric / 20 Points**</h3>|
| :-: |
|<p>**TODO 1-3: imports and express application setup**</p><p>- 0 points for very little or no implementation</p><p>- 4 points if there is code and your correctly wrote it</p><p>**TODO 4-7: API endpoints**</p><p>- 0 points for very little or no implementation</p><p>- 1 point if there is code, little effort, does not appear to be implemented correctly</p><p>- 2 points if there is code, some effort, does not appear to be correct</p><p>- 3 points if there is code, there is effort, most correct, but some errors</p><p>- 4 points if there is code, clear effort, appears to be correct, documented</p>|
# <a name="_9pe50i65t9cr"></a>**Part 2 (40 points): Add Score Board Feature (Client)**
In Part 1 we refactored the server to use ExpressJS to service routes for handling scores. Now, we are going to add a feature to display a score board in the Scrabble user interface. This feature will support the following:

- Display the player name, word, and score each time a player plays a word
- Display a top 10 word and game score board when an “End” button is clicked

Although these TODOs are ordered, it is likely that you will need to iterate on these TODOs until you have a functioning implementation. We have provided some functionality as reference for implementing the rest. First, we will add functionality for communicating with the server and code to render the score boards. These TODOs are 

## <a name="_9h403kdbhdi6"></a>TODO #8: Save the word score to the server
In **client/scoreboard.js** you need to implement the **saveWordScore** method in the **WordScoreBoard** class. This method needs to do two things: (1) save the player **name**, **word**, and **score** in the **words** instance variable, and (2) send a request to the **/wordScore** route to save the word score on the server.

## <a name="_mfg2b0ndq38a"></a>TODO #9: Save the game score to the server
In **client/scoreboard.js** you need to implement the **saveGameScore** method in the **GameScoreBoard** class. This method needs to do two things: (1) save the player’s **name** and game **score** in the **game** instance variable, and (2) send a request to the **/gameScore** route to save the game score on the server.
## <a name="_bhvunwchab02"></a>TODO #10: Render the top word and game scores
In **client/scoreboard.js** you need to implement the **render** method int he **TopWordAndGameScoreBoard** class. This method needs to fetch the highest word and game scores from the server and render them to the HTML element that is passed in as a parameter. You are welcome to structure the output to be rendered in any form that you want. We used an html **<table>** for organizing the scores and used a provided CSS rule (**top-score-boards**) for some basic styling. You should reference the other two classes in this file to see how we wrote our rendering code there. **You should start simple to make sure it works first before making it look nice!**

## <a name="_3t1zuottgxd2"></a>TODO #11: Add End Button with id end
In **client/index.html** you need to add a button. We added ours below the “Help!” button. We also gave it an id “end”.

## <a name="_ujb3eninmak7"></a>TODO #12: Save the word score and render it to the UI
In **client/main.js** you need to add some code to save and render the word score when a player plays a word. To do this you need to get the **word-score-board** element identified in **client/index.html**, use the **wordScoreBoard** object that we imported from **client/scoreboard.js** to save the word score, and call render on that object to render the word score to the screen. To get the player’s name you can use the **getPlayerName** function from **client/multiplayer.js** module passing it the **turn** as the argument.

## <a name="_wdhv19nuy399"></a>TODO #13: Handle a click event when "End" button is clicked
In **client/main.js** you need to add an event listener for a click event on the “End” button you added previously. The event handler must:

1. Iterate from **1** to **NUMBER\_OF\_PLAYERS** inclusive, getting the player name (using **getPlayerName**), saving the game score using the **gameScoreBoard** object imported from **client/scoreboard.js**), and setting the **scores** array entry to **0**. The **scores** array is used to track the score of each player. Note, you will need to index the **scores** array properly in this loop as it is indexed one less than the loop index.
1. After the loop, get the **top-10-score-board** element identified in **client/index.html** and use it to render the top 10 score board using the **topWordAndGameScoreBoard** we imported from **client/scoreboard.js**.


|<h3><a name="_keonbgtq95dy"></a>**Part 2 Rubric / 40 Points**</h3>|
| :-: |
|<p>**TODO 8-9: using fetch to communicate with server**</p><p>- 0 points for very little or no implementation</p><p>- 1 point if there is code, little effort, does not appear to be implemented correctly</p><p>- 2 points if there is code, some effort, does not appear to be correct</p><p>- 3 points if there is code, there is effort, most correct, but some errors</p><p>- 4 points if there is code, clear effort, appears to be correct, documented</p><p>**TODO 10: rendering the top word and game scores**</p><p>- 0 points for very little or no implementation</p><p>- 2 point if there is code, little effort, does not appear to be implemented correctly</p><p>- 4 points if there is code, some effort, does not appear to be correct</p><p>- 8 points if there is code, there is effort, most correct, but some errors</p><p>- 12 points if there is code, clear effort, appears to be correct, documented</p><p>**TODO 11: adding the “End” button**</p><p>- 0 points for very little or no implementation</p><p>- 1 the button exists, but it doesn’t have an id</p><p>- 2 the button exists and has an id</p><p>**TODO 12: save the word score and render it to the UI**</p><p>- 0 points for very little or no implementation</p><p>- 1 point if there is code, little effort, does not appear to be implemented correctly</p><p>- 2 points if there is code, some effort, does not appear to be correct</p><p>- 3 points if there is code, there is effort, most correct, but some errors</p><p>- 4 points if there is code, clear effort, appears to be correct, documented</p><p>**TODO 13: handle a click event when “End” button is clicked**</p><p>- 0 points for very little or no implementation</p><p>- 4 point if there is code, little effort, does not appear to be implemented correctly</p><p>- 8 points if there is code, some effort, does not appear to be correct</p><p>- 12 points if there is code, there is effort, most correct, but some errors</p><p>- 14 points if there is code, clear effort, appears to be correct, documented</p>|
# <a name="_5w1fpoegn7d"></a>**Part 3 (8 points) - Exceeding Work: Database and Deployment**
To have an application running in the cloud is truly an amazing experience. In this part you are to extend the Scrabble application to use a database (either Postgresql or MongoDB) and deploy the Scrabble application to Heroku. Most of this part is configuration, however, you will need to replace the file-based persistence in **server/database.js** with calls to a database. You should follow the process outlined in the lessons that precede this homework.

You will need to capture some screenshots to submit for this assignment. Create a new folder in your GitHub repository called **part-3-evidence**. Screenshots will be placed in this folder.

## <a name="_4om9tk4e3cnl"></a>TODO #14: Replace server persistence with a database
You must implement the database calls in **server/database.js**. After completing the implementation and creating a database on Heroku or Atlas, provide at last 1 screenshot that proves that you created a database on Heroku or Atlas that has structure and possibly scoring data.

## <a name="_6zfvni13suii"></a>TODO #15: Deploy Scrabble to Heroku
After you deploy Scrabble to Heroku, provide a screenshot of the Heroku configuration of the application in the Heroku dashboard. You must also update your README.md in your repository to include a link to your application running on Heroku.


|<h3><a name="_qd05mea6scco"></a>**Part 3 Rubric / 8 Points**</h3>|
| :-: |
|<p>**TODO 14: add a database**</p><p>- 0 a database wasn’t added</p><p>- 2 an implementation was started, but it is either incomplete or not entirely correct</p><p>- 4 there is code and it looks pretty darn good</p><p>**TODO 15: deployed**</p><p>- 0 no evidence of deployment achieved</p><p>- 2 partial evidence of deployment</p><p>- 4 deployment was successful</p>|
#
