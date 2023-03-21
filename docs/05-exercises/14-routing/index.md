# Ex14: Routing

## Overview

This exercise uses the solution from a previous exercise where we extended a CRUD-based HTTP server with a front-end UI. In this exercise, we are going to use the [ExpressJS](https://expressjs.com/) server-side web framework in place of the built-in Node.js [http](https://nodejs.org/api/http.html) library. As you will see, the ExpressJS framework is a lot more expressive than the built-in HTTP library. It allows us to write more concise code that is easier to read.

_It will be helpful to reference the server code examples covered in the lesson to provide guidance on the implementation of this exercise. The template we provide also gives you significant direction._


## Starter Kit

[Download the Starter Kit!](https://drive.google.com/drive/folders/1giX3JFV6e5nN8iv12Q-ztMT1Ypwg6dLt?usp=sharing)


## Setup

After you download the starter, open up the exercise directory in VSCode and install the necessary dependencies in the Terminal from within the project directory. Run the following commands:



```js
npm init
npm install --save express
npm install --save morgan
```


This will update your `package.json` file to include the ExpressJS framework and the Morgan logging library as well as install the dependencies in the `node_modules` directory. After installing the dependencies, you will need to add the following line to your `package.json` file under the entry for `description` to support ES6 module syntax in your server code:



```js
"type": "module"
```

After you have installed the dependencies and added the ES6 module support, you can run the following command to start the server:


```js
node memcrud.js
```



## Adding Express Routes (Server)

The starter kit we provide for you includes the setup of the ExpressJS server with a few of the routes completed. You will find the creation of the ExpressJS server and routes we have provided towards the end of the file. Your job is to complete the remaining routes. In particular, you are to do the following:


### TODO #1: Add Express Route /update

Add the following route:



* `/update`: This route matches a `PUT` request to the `/update` path. It should pass the request body to the `updateCounter` function.


### TODO #2: Add Express Route /delete

Add the following route:



* `/delete`: This route matches a `DELETE` request to the `/delete` path. It should pass the request body to the `deleteCounter` function.


## Saving Server State (Server)


### TODO #3: Complete the updateCounter function

Complete the following function:



* `updateCounter(response, name)`: The `response` parameter is the `Response` object passed into the express route. The `name` parameter is the name of the counter. You can use the other CRUD functions we implemented as guidance. It is important to note that you must call `response.json()` as the last line of the function. If you do not do this, you may encounter some unexpected behavior.


### TODO #4: Complete the deleteCounter function

Complete the following function:



* `deleteCounter(response, name)`: The `response` parameter is the `Response` object passed into the express route. The `name` parameter is the name of the counter. You can use the other CRUD functions we implemented as guidance. It is important to note that you must call `response.json()` as the last line of the function. If you do not do this, you may encounter some unexpected behavior.


## HTTP Fetch (Client)

The following TODOs add functionality to the client to update and delete a counter from the browser. You will need to use the fetch browser API to communicate with the server. We made some slight changes to these RESTful calls to send JSON data to the server rather than use the query string. You can use the other CRUD functions we implemented as guidance. Note, we continue to use the query string for the `readCounter` function. The reason we do this is because we are unable to use the request body with a `GET` request. If we wanted to use the request body, we would have to use the `POST` method.


### TODO #5: Complete the updateCounter function

Complete the following function in `client/crud.js`:



* `updateCounter(name)`: The `name` parameter is the name of the counter. Use `fetch` to send a request to the server to update the server counter state. This function returns the data that is sent back to the client as an HTTP response.


### TODO #6: Complete the deleteCounter function

Complete the following function in `client/crud.js`:



* `deleteCounter(name)`: The `name` parameter is the name of the counter. Use `fetch` to send a request to the server to update the server counter state. This function returns the data that is sent back to the client as an HTTP response.


## Submission

You must do the following to submit this assignment:



* Create a Zip archive of the folder containing your solution files.
* Upload this Zip file to the Moodle assignment.
* Check to make sure you uploaded your Zip archive to the Moodle assignment.
* Check again.


## Rubric and Grading

Use the following rubric to satisfy the requirements of this assignment. We will be using this rubric to score your submission


### Exercise (2 points)



* 2 points, a reasonable attempt was made at completing the exercise, a solid attempt was made at completing all TODOs.
* 1 point, an attempt was made, but was incomplete or had missing or empty parts, not all TODOs were completed, minimal work.
* 0 points, empty or no submission.