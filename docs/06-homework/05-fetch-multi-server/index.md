# Hw5: Fetch, Multiplayer, Server

## Overview

This is the next part of a series of assignments around the game of Scrabble. We hope that it will be a fun experience in progressively learning all the pieces of modern web development, so as to engineer a fully functional game.  In this assignment, you will work on incorporating previous work into the project, and implement player interaction. You will also add a second player and make the game work turn by turn and set up a basic server capable of saving statistics about the game.

In particular, this is what your web application will resemble in the end:

![image1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/201f618d-bde6-4d1f-8469-2d20c657b23a/image1.png)

## Submission

You must submit the following to complete this exercise:

1. The associated assignment survey on Moodle.

You must ensure that you have completed this exercise and committed your work to your GitHub repository before submitting the assignment survey on Moodle. You are required to submit a link to the commit that you are self reviewing and that we may use to review your work.

Your submission time/date is based on the time/date of the assignment survey submission available from Moodle. You are responsible for ensuring that your submission is complete and accurate.

If your survey submission is late, tokens will be automatically deducted from your token count. You will be notified of the number of tokens deducted from your token count as part of your score report in an email. (**note: at this time we have not been notifying you of token deductions or additions. We hope to be doing this soon. We are also not entirely sure how tokens fit into the picture except to justify (or not) your final grade in the course.**)

# Deliverables

- [ ]  Your code in your GitHub repository assigned to you from GitHub Classroom
- [ ]  Your submission of the grade reflection form

:::note

if we do not receive your grade reflection form submission, your submission will not be counted. It is CRUCIAL that you submit the grade reflection form to have your submission counted. We will only be using GitHub Classroom as a place to find your repositories.

:::

**In addition:**

- You must ensure that you have completed this homework and committed your work to your GitHub repository before submitting the assignment survey on Moodle. You are required to submit a link to the commit that you are self reviewing and that we may use to review your work.
- Your submission time/date is based on the time/date of the assignment survey submission. You are responsible for ensuring that your submission is complete and accurate.
- If your survey submission is late, tokens will be automatically deducted from your token count. You will be notified of the number of tokens deducted from your token count as part of your score report in an email. (Hopefully happening soon).

## General Guidelines

Here are a few general guidelines for this assignment:

- Use [console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log) to print values to the browser console.** This is a cheap way to ensure that your code is doing what you think it is doing. If nothing displays in the browser window, it is likely that there is an error in your code. Open the console and see if there was an error.

- Use [console.assert](https://developer.mozilla.org/en-US/docs/Web/API/console/assert) to come up with test cases.** This will give you some assurance that your code is working properly. We encourage you to share test cases that you develop with others taking this class. This will make everyone’s code better and is how [quality assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA) can work in practice.

- Write code in small increments, continually verify that it is working.** It is strongly encouraged that you write your code in small increments and test (or print) that code at each step of the way. Do not write an entire application and then see if it works. If you can verify that your code is working each step of the way, then you can be confident to extend it further.

- This is an individual assignment, but you can talk about the assignment and even look at other people's implementations. But, you must submit your own work.

## Starter Code

In this homework we are introducing a Node.js HTTP server to respond to browser requests. To better organize our code we separate the code for the two main components of our application: client and server. You will find all code related to the front-end part of our application (JavaScript, HTML, and CSS) in the **client** directory. The code for the server is placed in the **server** directory.

The starter code contains the following files:

**client/**

- **dictionary.js**: a new module for loading the dictionary from dictionary.json
- **dictionary.json**: a json file containing the dictionary words
- **game.js**: code for representing the scrabble game board
- **index.html**: used to display the scrabble board and user interface
- **main.css**: styling for this web application
- **main.js**: main entry point into the application; loaded by index.html
- **rack.js**: represents a rack of tiles used by a player
- **scoring.js**: implements the scoring for the scrabble game
- **scrabbleUtils.js**: utility functions

**server/**

- **database.js**: reads/writes scores from the scrabble game to a file
- **index.js**: main entry point to the node.js HTTP server

We also include `package.json` to specify that we are using ESM ([JavaScript/ECMAScript modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)) in our JavaScript code base (i.e., “type”=”module”).

In the previous homeworks, we used the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension to run our code in the browser. We are now switching to our own Node.js HTTP server that we will be implementing. To run our web application, we open a console/terminal, navigate to the root directory of the starter code, and run the following command:

```bash
node server/index.js
```

This will produce the following output:

```bash
Server started on port 3000
```

At that point, you can open your browser to [http://localhost:3000](http://localhost:3000/) and the scrabble application will appear. Now, you need to complete the TODOs below.

**Please complete all the TODOs below.**

## 🕊️ Approaching Standards 🕊️[](https://umass-cs-326.github.io/docs/homework/persistence-and-hints/#%EF%B8%8F-approaching-standards-%EF%B8%8F)

**Approaching Standards is considered C-quality work**.

This level of work indicates that you are not quite meeting the standards for the assignment, but you are making progress. You should be able to complete the assignment with some guidance and/or additional work. You have demonstrated some understanding of the concepts, but you haven't completely showed that you understand the concepts entirely. You are likely to struggle on future assignments and/or subsequent courses that have this course as a prerequisite.

If you struggled with this assignment, but you understand the concepts and have some understanding of how to solve it, but your application of that understanding is not quite there, incomplete, or incorrect, then your score is at the Approaching Standards level.

You should consider seeking help from another student in the class, a TA/UCA, or the instructor.

---

### Part 0: GitHub Commits

**TODO 0:** You must have at least 5 GitHub commits to receive credit for this part. It is always good practice to design and develop code incrementally. As part of that process you should be making frequent commits to keep a record of your changes along the way.

### Part 1 (Client): Loading the JSON Dictionary into the Browser

In previous homework we imported `client/dictionary.js` into `client/scrabbleUtils.js` in our browser code. However, importing the dictionary as a JavaScript file was a quick fix. What we really want to do is represent the dictionary data as a JSON file and load in that JSON file over HTTP. To load the dictionary as a JSON file into the browser, your code will need to make an HTTP request in JavaScript to fetch a **client/dictionary.json** file. In the past, this used to be fairly complex, but luckily with modern browser APIs, it is almost trivial: use the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

There are two important changes to the code that is provided to you in the starter kit. The first change is that we included `dictionary.json` which contains the dictionary words in JSON format. The second change is that we replaced the dictionary array in `client/dictionary.js` with a class representing the dictionary. This class includes methods for loading the dictionary, checking the status of loading the dictionary (i.e., if it was successful or not), and getting the words. You are to do the following:

#### TODO 1

Write the implementation of the `loadDictionary` method. This method must use the fetch function to retrieve the `client/dictionary.json` file from the server. If the fetch is successful, set the words to the JSON response value and the status to “loaded” and return *true*. If the fetch fails, set the status to “unavailable” and return *false*. Notice after this class definition that we create a single new `Dictionary` object that is exported to be used by the rest of the front-end part of the application.

#### TODO 2

Next, you need to update `client/scrabbleUtils.js` to use the new dictionary object. First, you need to invoke the `loadDictionary` method on the dictionary object that is imported. Although we do not do anything with the return value, you could imagine that it might be useful if the application were extended to retry loading the dictionary at a future time.

#### TODO 3

Lastly, you need to update the rest of `client/scrabbleUtils.js` ****to use the new dictionary object in the functions that access the dictionary.

## 😎 Meeting Standards 😎[](https://umass-cs-326.github.io/docs/homework/persistence-and-hints/#-meeting-standards-)

**Meeting Standards is considered B-quality work**.

This level of work meets the requirements of the assignment. It is expected that you will be able to complete this level of work with minimal assistance and complete it by the assigned due date with a correct solution. By completing this level of work, you will be able to demonstrate that you have met the learning objectives of the assignment and of the course and are prepared to be successful in future assignments and subsequent courses that have this course as a prerequisite.

---

### **Part 2 (Server): CRUD Operations**

Complete the implementation of the CRUD operations in **server/database.js**. Inside this file you will find a partial implementation of a **Database** class. At this point our database is simply a JSON file. We will need to have our CRUD operations in place in order to use them as part of our RESTful API in the next TODO. 

You need to implement the following methods in the Database class:

#### **TODO 4**

`saveWordScore(name, word, score)`

#### **TODO 5**

`saveGameScore(name, score)`

#### **TODO 6**

`top10WordScores()`

#### **TODO 7**

`top10GameScores()`

You will find documentation in `server/database.js` **for each of these methods to guide you towards a successful implementation. Make sure you use `await` if you are calling an `async` function. If you do not, you may experience unexpected behavior.

### Part 3 (Server): A REST/CRUD API

Next, you need to implement a basic REST API with 4 endpoints in `server/index.js` that we will use to track some statistics about the game. We will track (persist to a file) the highest word scores as well as the highest game scores using the **`client/database.js`** operations implemented in the previous TODO. We will assume all requests are correct and we will not handle bad requests on this server. Here are the endpoints you need to implement:

**REST Endpoints**

---

**TODO 8:** `POST /wordScore`

This endpoint will be used to save the given word score on the server in a file in JSON format. The response should only consist of a 200 Ok status code, with no body. If the request is not valid (i.e., missing parameters) then the response should be a [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)

**Example:** [http://localhost:3000/wordScore?name=Artemis&word=test&score=8](http://localhost:3000/wordScore?name=Artemis&word=test&score=8)

---

**TODO 9:** `GET /highestWordScores`

This endpoint will be used to get the top 10 word scores saved on the server (or top X scores if only X < 10 scores are saved). It should return a JSON response, which will be an array of objects consisting of a word and a score.

**Example:** [http://localhost:3000/highestWordScores](http://localhost:3000/highestWordScores)

**Example Response Body:**

```json
[{ "name": "Artemis", "word": "test", "score": 8 }, ..., 
 { "name": "Parzival", "word": "school", "score": 11 }]
```

---

**TODO 10:** `POST /gameScore`

This endpoint will be used to save a game score for a single player on the server. The response should only consist of a 200 status code, with no body. If the request is not valid (i.e., missing parameters) then the response should be a [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400).

**Example:** [http://localhost:3000/gameScore?name=Artemis&score=361](http://localhost:3000/gameScore?name=Artemis&score=361)

---

**TODO 11:** `GET /highestGameScores`

This endpoint will be used to get the top 10 game scores saved on the server (or top X scores if only X < 10 scores are saved). It should return a JSON response, which will be an array of objects consisting of a name and a score.

**Example:** [http://localhost:3000/highestGameScores](http://localhost:3000/highestGameScores)

**Example Response Body:**

```json
[{ "name": "Artemis", "score": 650 }, ..., 
 { "name": "Parzival", "score": 513 }]
```

---

Each route handler you implement will need to look at the HTTP method and route/path sent from the browser. If the method matches and the route matches, then you implement the endpoints as described above. Make sure you use **await** if you are calling an **async** function. If you do not, you may experience unexpected behavior.

**We will not be calling these endpoints from the browser until the next homework.** But, you will need to test your endpoints to make sure they work. To test your server use [Postman](https://www.postman.com/downloads/) to send HTTP GET and POST requests. Make sure the response you get from your server in Postman has the correct HTTP status code and payload (any JSON data that is part of the HTTP response). This will help you identify any problems with your code.

You will find TODOs in `server/index.js` for guidance.

## 🚀 Exceeding Standards 🚀

**Exceeding Standards is considered A-quality work**.

If you have satisfied the Meeting Standards level of this assignment and you want to go above and beyond, you can try to do one or all of the following below.

---

### Part 4 (Client): Scrabble Multiplayer

![image1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/201f618d-bde6-4d1f-8469-2d20c657b23a/image1.png)

In this last part, you will add a second player to the game. In the original Scrabble, you can only see your own tiles, whereas here we will just show both player’s tiles on the screen. The second player needs their own rack of tiles.  Both players should be able to name themselves via an input field next to their rack. You will then make the game turn-based by letting each player play one after another and by displaying a message indicating whose turn it is. We will not enforce rules yet (having to play a word in the center first / building on previous tiles after) or fix our score calculation: you will implement this in a later homework.

The players should now be able to place words turn by turn (first player, second player, first player, …). You should also edit your hint functionality so that it shows a hint relevant to the correct player’s tiles.

There is no further details and you are welcome to implement this in any way you seem fit. It is entirely up to you. But, remember, you must justify your submission which is critically important to convey that you qualify for the exceeding level.
