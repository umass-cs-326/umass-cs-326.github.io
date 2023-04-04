# Ex12: CRUD #1

## Overview

The goal of this exercise is to implement a basic CRUD server in two parts. You will understand the basic logic to manage state as a JavaScript object. Your job is to save and restore that state from a file.

## Starter Kit

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

## Submission

You must submit the following to complete this exercise:

1. The associated assignment survey on Moodle.

You must ensure that you have completed this exercise and committed your work to your GitHub repository before submitting the assignment survey on Moodle. You are required to submit a link to the commit that you are self reviewing and that we may use to review your work.

Your submission time/date is based on the time/date of the assignment survey submission available from Moodle. You are responsible for ensuring that your submission is complete and accurate.

If your survey submission is late, tokens will be automatically deducted from your token count. You will be notified of the number of tokens deducted from your token count as part of your score report in an email.

## CRUD Server Walk Through

You will notice a `package.json` file in the starter template. This is necessary to use ES6 module syntax (imports) in a Node.js environment. It is also used for a variety of other things including tracking library dependencies. We will see this at a later point. In addition, you will see `memcrud.js`, this is the code that you will extend. This is a completely worked out example for managing a non-persistent counter with CRUD. You can run this code as is with from a command prompt using the following command inside the starter kit folder:

```js
node memcrud.js
```

With the server running, you can test it by entering the following URLs into your browser:

```text
localhost:8080/create?name=counter1   // counter1 should now be 0 (counter[counter1] = 0)
localhost:8080/create?name=counter2   // counter2 should now be 0
localhost:8080/update?name=counter3   // should produce an error since there's no counter3
localhost:8080/update?name=counter1   // counter1 should now be 1
localhost:8080/update?name=counter1   // counter1 should now be 2
localhost:8080/read?name=counter2     // should be 0
localhost:8080/delete?name=counter2   // now it should be deleted
localhost:8080/read?name=counter2     // this time it should fail
localhost:8080/read?name=counter1     // should output 2
```

If you interrupt your server (`C-c`) and then restart it, you should see that the counter values are all gone:

```text
localhost:8080/read?name=counter1
// the counter doesn't exist because as far as the server is concerned, it was never created!
```

## 😎 Meeting Standards 😎

**Meeting Standards is considered B to A- quality work**.

This level of work meets the requirements of the assignment. It is expected that you will be able to complete this level of work with minimal assistance and complete it by the assigned due date with a correct solution. By completing this level of work, you will be able to demonstrate that you have met the learning objectives of the assignment and of the course and are prepared to be successful in future assignments and subsequent courses that have this course as a prerequisite.

### TODO #1: Saving State on the File System

Now, you are going to extend the template code to provide persistence. You are probably familiar with the usual way one makes things in memory persistent: you write them to disk. That's what we're going to do for this TODO.

First, we will save the file in a JSON file called `counter.json`. Put this near the top of the `memcrud.js` file.

```js
const JSONfile = 'counter.json';
```

As this shows, what we are going to do is have a file in JSON format that stores the counter object. To make this server really persistent (so it never loses any updates even if it dies), every time we read the counter, we need to reload it from disk, and every time we update it, we need to write it to disk first.

To read a file from disk, use the functions we covered in class. This will return a JSON string, which you then need to "parse" to get the actual object out. You can do this with `JSON.parse(str)`, where `str` is the string you get back from reading the file. Implement this all in the function called `reload`.

To write the data out, you want to convert the counter into a string; to do that, use `JSON.stringify(counter)`.

The reload function requires very little code, and you will only need to add a small amount of code to your server, either writing the counter to disk or reloading it.

Test it by running the tests above, then kill the server and try the last test:

[http://localhost:8080/read?name=counter1](http://localhost:8080/read?name=counter1)

Your server should report that the counter still exists and has the value 2.

Go ahead and terminate your server, and open the file `counter.json`. You should see the counter values.

You will find **TODO #1** in the `memcrud.js` file.

## 🚀 Exceeding Standards 🚀

**Exceeding Standards is considered A-quality work**.

If you have satisfied the Meeting Standards level of this assignment and you want to go above and beyond, you can try to do one or all of the following:

- Create a second version of the `memcrud.js` called `pouchcrud.js`. Replace the home grown JSON file with a [PouchDB](https://pouchdb.com/download.html#npm) database. Note, you will need to [install](https://pouchdb.com/api.html) the PouchDB library using `npm install --save pouchdb` and then import it into your code using `import PouchDB from 'pouchdb';`. You will also need to create a new database instance using `const db = new PouchDB('counter');`.

You are always welcome to try something else that is not listed here. The sky is the limit! Just make sure you document what you did in the associated submission form.

**You will only receive credit for the Exceeding Standards level of work if you have completed the Meeting Standards level of work. Do not attempt to complete the Exceeding Standards level of work until you have completed the Meeting Standards level of work as it will be ignored.**