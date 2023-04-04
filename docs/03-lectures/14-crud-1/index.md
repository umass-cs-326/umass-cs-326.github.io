# L14 CRUD #1

CRUD (Create, Read, Update, Delete) and REST (Representational State Transfer) are two important concepts in web development that are often used together. They are essential for building scalable and efficient web applications.

CRUD operations are used for managing data in a database. These operations allow you to create new records, read existing records, update existing records, and delete records from the database. These operations are essential for building applications that store and manage data.

REST is a set of principles for designing web services that are scalable, flexible, and easy to maintain. RESTful web services are based on the HTTP protocol and use standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.

When building a RESTful web service, the resources are typically modeled as objects in the database. Each resource is identified by a unique URI (Uniform Resource Identifier) and can be accessed using the HTTP methods. For example, to retrieve a list of all the resources, you would use the GET method on the URI for the resource.

The advantage of using RESTful web services is that they are language-agnostic and can be used with any programming language. This makes it easy to integrate different systems and applications.

Another advantage of using RESTful web services is that they are stateless. This means that each request to the web service contains all the information needed to process the request. The server does not need to maintain any state information between requests. This makes it easier to scale the web service and handle large volumes of traffic.

CRUD and REST are two essential concepts in web development. CRUD operations are used for managing data in a database, while RESTful web services are used for accessing and manipulating resources over the web. By using these concepts together, you can build scalable, flexible, and easy-to-maintain web applications that can handle large volumes of traffic.

Here's an example of how to perform CRUD operations using JavaScript and a simple array as a data store:

```js
// Create an empty array to store data
let data = [];

// Create function to add new data to the array
function create(newData) {
  data.push(newData);
}

// Read function to retrieve data from the array
function read() {
  return data;
}

// Update function to modify existing data in the array
function update(index, updatedData) {
  data[index] = updatedData;
}

// Delete function to remove data from the array
function remove(index) {
  data.splice(index, 1);
}

// Example usage
create({ name: 'John', age: 25 });
create({ name: 'Jane', age: 30 });
console.log(read()); // Output: [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }]

update(0, { name: 'Jack', age: 28 });
console.log(read()); // Output: [{ name: 'Jack', age: 28 }, { name: 'Jane', age: 30 }]

remove(1);
console.log(read()); // Output: [{ name: 'Jack', age: 28 }]
```

In this example, we create an empty array to store data. Then we define four functions to perform CRUD operations on the array. The `create` function takes a new data object as input and pushes it to the end of the array. The `read` function simply returns the entire array. The `update` function takes an index and updated data as input, and updates the corresponding element in the array. The `remove` function takes an index as input and removes the corresponding element from the array using the splice method.

Finally, we demonstrate how to use these functions by adding two data objects to the array using `create`, updating the first object using `update`, and removing the second object using `remove`.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQRVEaFlVoCPztrePFCBC0TUavwwR_5NbdRLFOhXZBgRMP0F_XpqGU5LSJGxnQjj2wS52m_YGg2Ei69/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1gj0h4hPc0dEIm1ukTAdy3DH26tps3ykJsY_iRGDjV2c/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/
1DDkllAITF2miUp3UO0a9b11Fm2f96aFDJN-YQuXzo7I/edit?usp=sharing).

## Code Examples

- [examples/14-crud-1](https://github.com/umass-cs-326/examples/tree/main/14-crud-1)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

You must complete [Ex12: CRUD 1](../../exercises/crud-1) by the assigned due date.

## Resources

- [Create, Read, Update, and Delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete), Wikipedia
- [REST vs CRUD Explained with Use Cases in 5 Minutes](https://youtu.be/Pz1IcBjOxj8), Your IT Class
- [Node.js](https://nodejs.org/en/)
  - [http](https://nodejs.org/api/http.html#http)
  - [http.createServer()](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
  - [fs](https://nodejs.org/api/fs.html)
  - [fs/promises](https://nodejs.org/api/fs.html#promises-api)
  - [readline](https://nodejs.org/api/readline.html)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
