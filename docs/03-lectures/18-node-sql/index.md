# L18 Node and SQL

## Overview

If you're looking to build a web application with Node.js, using the Express framework and a PostgreSQL database, the pg module is an excellent choice for managing your database interactions. In this post, we'll go over how to use the pg module with Express to create, read, update, and delete data from a PostgreSQL database.

First, we need to install the pg module using npm:

```bash
npm install pg
```

Next, we'll create a new Express application and set up a connection to our PostgreSQL database. In this example, we'll assume that you have already created a database named `myapp` and a table named `users`.

```javascript
const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'myapp',
  password: 'password',
  port: 5432,
});

app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving users from database');
  }
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.send(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding user to database');
  }
});

app.put('/users/:id', async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      'UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *',
      [name, email, id]
    );
    res.send(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating user in database');
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [
      id,
    ]);
    res.send(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting user from database');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

In this example, we're using the `Pool` object provided by the `pg` module to manage our database connections. The `Pool` object automatically manages a pool of connections to our PostgreSQL database, making it easy to reuse connections and avoid creating new ones for each request.

We then define our routes for retrieving, creating, updating, and deleting users from our database. Each route uses the `pool.query()` method to execute an SQL query on our database. The `pool.query()` method returns a `Promise` that resolves to an object containing the results of the query, including the rows returned by the query.

Note that we're using async/await syntax to handle asynchronous operations in a more readable way. We're also using error handling to catch any errors that may occur when querying the database and returning an appropriate error response to the client.

## The `env` Package

If you're building a Node.js application, you might need to use environment variables to store configuration values that should not be hardcoded into your code. The env package in npm makes it easy to manage environment variables in your Node.js applications.

To get started, you can install the `env` package using npm:

```bash
npm install env
```

Once installed, you can use the `env` package to load environment variables from a `.env` file in the root of your project. The `.env` file should contain key-value pairs of your environment variables in the format `KEY=VALUE`. For example:

```bash
DATABASE_URL=postgres://user:password@localhost:5432/myapp
API_KEY=1234567890
```

To load these environment variables into your application, you can use the `env.config()` method provided by the `env` package. For example:

```javascript
const env = require('env');

env.config();

console.log(process.env.DATABASE_URL);
console.log(process.env.API_KEY);
```

In this example, we're calling the `env.config()` method to load environment variables from our `.env` file. We can then access these environment variables using the `process.env` object.

If you need to set environment variables programmatically, you can use the `env.set()` method provided by the env package. For example:

```javascript
const env = require('env');

env.set('DATABASE_URL', 'postgres://user:password@localhost:5432/myapp');
env.set('API_KEY', '1234567890');

console.log(process.env.DATABASE_URL);
console.log(process.env.API_KEY);
```

In this example, we're using the `env.set()` method to set environment variables `DATABASE_URL` and `API_KEY` programmatically. We can then access these environment variables using the `process.env` object.

Using the `env` package in your Node.js applications makes it easy to manage environment variables and keep your configuration values separate from your code. It's a simple and effective way to keep your code clean and maintainable.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSyFiSVG3-PmRtmnbw9P5ZDFknNDxGgoLxpEtC0_AL46fCU23sZNbV-hZlctdo87ZoHmdehzhIYQ1DO/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/15X2qp1-ld1YTNaUmdARqOycOhjNju2TdtCOu5AfAQ2I/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1VAzX3N0mxiZ7ICyrouMqAB7o9M35MECcEmCMlrWXsr8/edit?usp=share_link).

## Code Examples

- [examples/18-node-sql](https://github.com/umass-cs-326/examples/tree/main/17-acid-and-sql)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Exercise

**NO EXERCISE**, but you should really practice this stuff!

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
- [PostgreSQL](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres), an extension that allows you to connect to a PostgreSQL database and run queries.
