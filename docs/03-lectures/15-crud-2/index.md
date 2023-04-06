# L15 CRUD #2

CRUD (Create, Read, Update, Delete) and REST (Representational State Transfer) are two important concepts in web development that are often used together. They are essential for building scalable and efficient web applications.

CRUD operations are used for managing data in a database. These operations allow you to create new records, read existing records, update existing records, and delete records from the database. These operations are essential for building applications that store and manage data.

REST is a set of principles for designing web services that are scalable, flexible, and easy to maintain. RESTful web services are based on the HTTP protocol and use standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.

When building a RESTful web service, the resources are typically modeled as objects in the database. Each resource is identified by a unique URI (Uniform Resource Identifier) and can be accessed using the HTTP methods. For example, to retrieve a list of all the resources, you would use the GET method on the URI for the resource.

The advantage of using RESTful web services is that they are language-agnostic and can be used with any programming language. This makes it easy to integrate different systems and applications.

Another advantage of using RESTful web services is that they are stateless. This means that each request to the web service contains all the information needed to process the request. The server does not need to maintain any state information between requests. This makes it easier to scale the web service and handle large volumes of traffic.

CRUD and REST are two essential concepts in web development. CRUD operations are used for managing data in a database, while RESTful web services are used for accessing and manipulating resources over the web. By using these concepts together, you can build scalable, flexible, and easy-to-maintain web applications that can handle large volumes of traffic.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTit-9aVv28ee45DNP9Hn3M5fCQuiq8I0KeUvyXZ07mveosXQabxBpHv-uBNFdoFaDvtDxn-4tXMJOm/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1ug_3fp-71NYVovnIyaJW2RaemyA_TY4xY_tR3oPra3A/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1HYAmtvFX8YzAEDpBwhTYZr0qHNihqombFHSV0Jqoe1o/edit?usp=sharing).

## Code Examples

- [examples/15-crud-2](https://github.com/umass-cs-326/examples/tree/main/15-crud-2)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

You must complete [Ex13: CRUD 2](../../exercises/crud-2) by the assigned due date.

## Resources

- [Create, Read, Update, and Delete](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete), Wikipedia
- [REST vs CRUD Explained with Use Cases in 5 Minutes](https://youtu.be/Pz1IcBjOxj8), Your IT Class
- [Node.js](https://nodejs.org/en/)
  - [http](https://nodejs.org/api/http.html#http)
  - [http.createServer()](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
  - [fs](https://nodejs.org/api/fs.html)
  - [fs/promises](https://nodejs.org/api/fs.html#promises-api)
  - [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), MDN
  - [Postman](https://www.postman.com/)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
