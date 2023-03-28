# L12 Asynchrony, Event Model

Asynchrony is a programming paradigm where multiple tasks or processes can be executed simultaneously, without blocking the main thread or interrupting the flow of the program. This is particularly useful for handling I/O operations, such as fetching data from a server or reading a file, which may take some time to complete. In this post, we'll take a closer look at asynchrony in JavaScript and the event model that makes it possible.

The JavaScript Event Model

In JavaScript, the event model is based on a queue of events that are processed one by one. When an event is triggered, such as a button click or a key press, an event object is created and added to the event queue. The event loop continuously checks the queue for new events and processes them in the order they were added.

Asynchronous JavaScript

Asynchronous JavaScript allows us to execute tasks in the background, without blocking the main thread. This is done using callbacks, promises, or async/await syntax.

**Callbacks:**

Callbacks are functions that are passed as arguments to another function and are executed once that function completes its task. Callbacks can be used to handle asynchronous operations, such as making an HTTP request, and once the request is complete, the callback is executed with the response data.

Example:

```javascript
function fetchData(callback) {
  // simulate a server request
  setTimeout(() => {
    const data = { name: 'John', age: 30 }
    callback(data)
  }, 2000)
}

fetchData((data) => {
  console.log(data)
})
```

**Promises:**

Promises are objects that represent the eventual completion or failure of an asynchronous operation and allow us to handle asynchronous code in a more readable and maintainable way. Promises have three states: pending, fulfilled, and rejected. Once a promise is fulfilled or rejected, the associated callback functions are called.

Example:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // simulate a server request
    setTimeout(() => {
      const data = { name: 'John', age: 30 }
      resolve(data)
    }, 2000)
  })
}

fetchData().then((data) => {
  console.log(data)
})
```

**Async/Await:**

Async/await is a syntax that allows us to write asynchronous code in a synchronous way. Async/await uses the same promise-based approach as callbacks and promises, but with a more readable syntax. The async keyword is used to mark a function as asynchronous, and the await keyword is used to wait for a promise to be resolved before continuing the execution.

Example:

```javascript
async function fetchData() {
  // simulate a server request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'John', age: 30 }
      resolve(data)
    }, 2000)
  })
}

async function displayData() {
  const data = await fetchData()
  console.log(data)
}

displayData()
```

Asynchrony and the event model are essential concepts in JavaScript for handling I/O operations and building efficient and responsive applications. By understanding how callbacks, promises, and async/await work, you can write asynchronous code that is more readable, maintainable, and scalable.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRFFbBs5OQDdNQeTXk11grNBCnH1M3r_SfAOF3Jc7GNhIODjLOuF3KpUFI6kXnCsxMq25-RbwTSTFh1/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/13sFSjwn_mN-a5GbIbyCT9eicjxyX9994fYWCPKzhqc8/edit?usp=sharing).

## Exercise

No exercise for this lecture.

## Code Examples

- [examples/12-async-event-model](https://github.com/umass-cs-326/examples/tree/main/12-async-event-model)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [Concurrency Model and the Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop), MDN
- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be), Philip Roberts JSConf
- [How does JavaScript and JavaScript Engine work in the browser and Node?](https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f)
- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises), MDN
- [What Happens if You Don’t Resolve or Reject A Promise](https://medium.com/@kirichuk/what-happens-if-you-dont-resolve-or-reject-a-promise-d0f68b96de0f)
- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), MDN
- [await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await), MDN
- [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [Callback Hell](http://callbackhell.com/)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.