# L19 NoSQL

## Overview

NoSQL databases have gained popularity in recent years as an alternative to traditional relational databases for handling large volumes of unstructured data. Document-oriented databases are a popular category of NoSQL databases, which store data as collections of documents rather than in tables with fixed schemas. Two widely used document-oriented databases are MongoDB and CouchDB.

MongoDB is a highly scalable NoSQL database that uses a document-oriented data model. Here are some examples of how to query a MongoDB database:

- Find all documents in a collection:

```jsx
db.mycollection.find()
```

- Find documents that match a specific condition:

```jsx
db.mycollection.find({ age: { $gt: 25 } })
```

- Update a document that matches a specific condition:

```jsx
db.mycollection.updateOne(
  { name: "John Doe" },
  { $set: { age: 35 } }
)
```

CouchDB is another popular document-oriented database that uses a JSON-based data model. Here are some examples of how to query a CouchDB database:

- Find all documents in a database:

```
GET /mydb/_all_docs
```

- Find documents that match a specific condition:

```
POST /mydb/_find
{
  "selector": { "age": { "$gt": 25 } }
}
```

- Update a document that matches a specific condition:

```
PUT /mydb/document-id
{
  "_rev": "1-abcdef123456",
  "name": "John Doe",
  "age": 35,
  "city": "New York"
}
```

In addition to MongoDB and CouchDB, there are many other document-oriented databases available, such as RavenDB, Apache Cassandra, and Amazon DynamoDB. Each database has its own unique features and strengths, so it's important to carefully evaluate your requirements before choosing a database for your application.

NoSQL databases, especially document-oriented databases like MongoDB and CouchDB, have become increasingly popular choices for handling large volumes of unstructured data. With their flexible data models and powerful query capabilities, these databases offer a scalable and efficient approach to data management for modern data-driven applications.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQOWT412u6hfR0jzd7F5qdmcfk36YqgbkZ5RDkBO472_TTmD1XiLwdlRngqoHLaLEUvdH5A9fYW1gfv/embed?start=false&loop=false&delayms=3000" frameborder="0" width="680" height="449" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1vgKVxb1A4-5qajZCBI2KYEJ6nvMprkORa2tAy2zDhFY/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1moiqRpFAyHs4f0X5vkdpvX4RW5nUlPLwexnwD3I9Ids/edit?usp=share_link).

## Code Examples

- [examples/19-no-sql](https://github.com/umass-cs-326/examples/tree/main/19-no-sql)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

**NO EXERCISE**, but you should really practice this stuff!

## Reference

### Tutorials

- [MongoB Atlas Tutorial](atlas-tut)
- [Node and MongoDB Tutorial](node-mongo-tut)

### Node.js

- The [Node MongoDB Driver](https://mongodb.github.io/node-mongodb-native/) is the official MongoDB driver for Node.js. It provides a high-level API for interacting with MongoDB databases from Node.js applications.

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
- [PostgreSQL](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres), an extension that allows you to connect to a PostgreSQL database and run queries.
- [MongoDB for VSCode](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode), an extension that allows you to connect to a MongoDB database and run queries.
