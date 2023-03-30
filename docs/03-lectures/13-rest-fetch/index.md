# L13 REST and Fetch

REST, which stands for Representational State Transfer, is an architectural style that defines a set of constraints for creating web services. It has become the standard for building web APIs, which enable communication between different applications and systems over the internet.

In order to consume data from a RESTful API, developers can use the Fetch API in JavaScript. The Fetch API is a modern alternative to XMLHttpRequest (XHR), and provides a more flexible and powerful interface for making HTTP requests.

Let's take a look at some examples of how to use the Fetch API to consume data from a RESTful API.

**Example 1: GET Request**

The following code makes a GET request to the JSONPlaceholder API, which provides fake data for testing and prototyping.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```mdx-code-block
<Tabs>
  <TabItem value="Promises" label="Promises" default>
```

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, we first call the `fetch` method and pass in the URL of the API endpoint. The `fetch` method returns a `Promise` that resolves to the `Response` object representing the response to the request.

We then chain a call to the `json` method on the `Response` object, which returns a `Promise` that resolves to the parsed JSON data. We log the data to the console using console.log.

Finally, we chain a call to the `catch` method to handle any errors that may occur during the request.

```mdx-code-block
  </TabItem>
  <TabItem value="Async" label="Async">
```

```js
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

In this example, we define an asynchronous function `fetchData` using the `async` keyword. Inside the function, we use the `await` keyword to wait for the response from the API before continuing with the execution of the function.

We first call the `fetch` method with the URL of the API endpoint and use `await` to wait for the response object. We then call the `json` method on the response object to parse the response data and assign it to the data variable using `await`.

Finally, we log the data to the console using `console.log`, and use a `try`...`catch` block to handle any errors that may occur during the request.

```mdx-code-block
  </TabItem>
</Tabs>
```

**Example 2: POST Request**

The following code makes a POST request to the same API endpoint, sending JSON data in the request body.

```mdx-code-block
<Tabs>
  <TabItem value="Promises" label="Promises" default>
```

```js
const data = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, we first define an object `data` containing the data we want to send in the request body.

We then call the `fetch` method with the URL of the API endpoint and an options object containing the HTTP method (POST), headers specifying the content type (`application/json`), and the JSON-encoded data in the request body.

We then chain a call to the `json` method on the `Response` object to parse the response data, and log it to the console.

Finally, we chain a call to the `catch` method to handle any errors that may occur during the request.

```mdx-code-block
  </TabItem>
  <TabItem value="Async" label="Async">
```

```js
async function postData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}

postData();
```

In this example, we define another asynchronous function `postData` using the `async` keyword. Inside the function, we use `await` to wait for the response from the API before continuing with the execution of the function.

We first define an object `data` containing the data we want to send in the request body. We then call the `fetch` method with the URL of the API endpoint and an options object containing the HTTP method (POST), headers specifying the content type (`application/json`), and the JSON-encoded data in the request body.

We use `await` to wait for the response object, and then call the `json` method on the response object to parse the response data and assign it to the `responseData` variable using `await`.

Finally, we log the data to the console using `console.log`, and use a `try`...`catch` block to handle any errors that may occur during the request.

```mdx-code-block
  </TabItem>
</Tabs>
```

The Fetch API provides a powerful and flexible interface for making HTTP requests in JavaScript. With the help of RESTful APIs, developers can easily consume and manipulate data from different sources, opening up a world of possibilities for building web applications.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQAFGs3qX4Hc67OIjAabelUL47LSd9CMbmFzpNpLHfttdFeVdtGlgvO-kpm1tFwdSu8xWGNEWovMIGH/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1thfcQakp4H_WITU19V4WwCUg1a5RHtbrDTYEQw-NHAE/edit?usp=sharing).

## Exercise

You must complete [Ex11: Rest and Fetch](../../exercises/rest-and-fetch) by the assigned due date.

## Resources

### MDN Web Docs

- [What is REST?](https://www.codecademy.com/article/what-is-rest), Codecademy
- [What is a REST API?](https://youtu.be/lsMQRaeKNDk), IBM Technology
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), MDN
- [Fetch](https://javascript.info/fetch), JavaScript.info

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
