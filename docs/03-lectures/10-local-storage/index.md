# L10 Browser Local Storage

The web has come a long way since its inception, and with the advancement of web technologies, it has become possible to store data locally in a user's browser, making it faster and more responsive. This has opened up a whole new world of possibilities for developers to build more interactive and engaging web applications.

In this lecture, we will be covering the following topics:

- Introduction to browser storage
- Types of browser storage
- Working with Local Storage
- Working with Session Storage
- Working with IndexedDB
- Let's dive right in with an introduction to browser storage!

## Introduction to Browser Storage

Browser storage is a way to store data locally in a user's browser. This data can be accessed and manipulated on the client-side, without the need for server-side code or database connectivity. There are several types of browser storage available, each with its own use case.

## Types of Browser Storage

There are three types of browser storage available:

- **Local Storage:** Local storage is a key-value pair storage mechanism that stores data with no expiration date. This data is stored on the user's browser and persists even after the browser is closed. It can be accessed and manipulated by JavaScript code.
- **Session Storage:** Session storage is similar to local storage, but the data is cleared when the browser is closed or the session is ended. It can be accessed and manipulated by JavaScript code.
- **IndexedDB:** IndexedDB is a more powerful storage mechanism that allows developers to store large amounts of structured data. It is an object-oriented database and can be accessed and manipulated by JavaScript code.

## Working with Local Storage

Let's take a look at how to use local storage in JavaScript:

```js
// Store data in local storage
localStorage.setItem("name", "John");

// Retrieve data from local storage
const name = localStorage.getItem("name");

// Remove data from local storage
localStorage.removeItem("name");

// Clear all data from local storage
localStorage.clear();
```

In the above example, we store data in local storage using the `setItem` method, retrieve data using the `getItem` method, remove data using the `removeItem` method, and clear all data using the `clear` method.

## Working with Session Storage

Let's take a look at how to use session storage in JavaScript:

```js
// Store data in session storage
sessionStorage.setItem("name", "John");

// Retrieve data from session storage
const name = sessionStorage.getItem("name");

// Remove data from session storage
sessionStorage.removeItem("name");

// Clear all data from session storage
sessionStorage.clear();
```

In the above example, we store data in session storage using the `setItem` method, retrieve data using the `getItem` method, remove data using the `removeItem` method, and clear all data using the `clear` method.

## Working with IndexedDB

Let's take a look at how to use IndexedDB in JavaScript:



## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRXh7aH1MfXgzXcotHvmISHVaYFS3rvF68nGBdh3nm1WE4Dj6ufebhXJng_mabSq-ebe93XFwn8Khxx/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Exercise

You must complete [Ex9: Persistent Encoder](../../exercises/persistent-encoder) by the assigned due date.

## Code Examples

- [examples/10-persistent-encoder](https://github.com/umass-cs-326/examples/tree/main/10-persistent-encoder)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
- [Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript Cookies](https://www.w3schools.com/js/js_cookies.asp)
- [Browser storage limits and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.