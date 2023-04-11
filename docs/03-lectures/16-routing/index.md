# L16 Routing

Express.js is a popular web framework for Node.js that makes it easy to build web applications and APIs. It provides a simple, yet powerful set of features that allow developers to create robust and scalable web applications quickly.

Here are some of the basics of Express.js that you should know as a developer:

**Setting up an Express.js project**: To get started with Express.js, you need to create a new Node.js project and install the Express.js library using NPM (Node Package Manager). Once you have installed Express.js, you can create a new Express.js application by creating a new JavaScript file and importing the Express.js library using the require() function.

**Creating routes**: In Express.js, routes are used to map URLs to specific functions that will handle the requests. You can define routes using the Express.js app object and the HTTP methods that you want to handle (GET, POST, PUT, DELETE, etc.). For example, the following code creates a route that handles HTTP GET requests to the '/users' URL:

```js
app.get('/users', (req, res) => {
  // Handle the request here
})
```

**Handling requests and responses**: Express.js provides a set of functions and middleware that allow you to handle requests and responses easily. The most common functions are `req` (request) and `res` (response). The `req` object contains information about the incoming request, such as the URL, headers, and parameters. The `res` object is used to send a response back to the client, such as sending HTML, JSON, or a file.

**Middleware**: Middleware is a set of functions that are executed in sequence for each request. Middleware functions can modify the req and res objects, add new properties, or handle errors. Express.js comes with a set of built-in middleware functions, such as body-parser for parsing request bodies, morgan for logging requests, and cors for handling cross-origin requests.

These are just a few of the basics of Express.js that you should know as a developer. Express.js is a powerful framework that can help you build robust and scalable web applications quickly. With its easy-to-use API and rich set of features, Express.js is a popular choice for building modern web applications and APIs.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR6hT9vH0wfvypr_oTEDNI64HZBr2B3qILuEv-dJ6o-aacu8kXJqGSL4T82_2fuS3NafjfofSxcg59k/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1eJ1Qg9u0UQ-ZAyWZGV_33b0Ip3VH4OHbEiu0rQacBj8/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1k4IDI8D31UixEjEWWdf1i_IJESadRw-IoqQr-DYiPX8/edit?usp=share_link).

## Code Examples

- [examples/16-routing](https://github.com/umass-cs-326/examples/tree/main/16-routing)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

You must complete [Ex13: CRUD 2](../../exercises/crud-2) by the assigned due date.

## Resources

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), MDN
- [RegExr: Learn, Build, & Test RegEx](https://regexr.com/)
- [Node.js](https://nodejs.org/en/)
- [Setting up a Node development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment), MDN
- [An introduction to the npm package manager](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager), Node.js
- [Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), MDN
- [ExpressJS](https://expressjs.com/)
  - [Express Application API](https://expressjs.com/en/4x/api.html#app)
  - [Request](https://expressjs.com/en/4x/api.html#req) and [Response](https://expressjs.com/en/4x/api.html#res) API
  - [Service static files in Express](http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express)
  - [Morgan Middleware](https://expressjs.com/en/resources/middleware/morgan.html)
  - [Using middleware](http://expressjs.com/en/guide/using-middleware.html#using-middleware) (more than you need to know, but perhaps it might interest you)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
