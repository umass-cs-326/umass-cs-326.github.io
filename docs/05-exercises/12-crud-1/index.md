# Ex12: CRUD #1


---


## Overview

The goal of this exercise is to implement a basic CRUD server in two parts. You will understand the basic logic to manage state as a JavaScript object. Your job is to save and restore that state from a file.


## Starter Kit

[Download the Starter Kit!](https://drive.google.com/drive/folders/1SWrQrI2MuhuB_aXacpwvA__osP4t0zpl?usp=sharing)


## CRUD Server Walk Through

You will notice a `package.json` file in the starter template. This is necessary to use ES6 module syntax (imports) in a Node.js environment. It is also used for a variety of other things including tracking library dependencies. We will see this at a later point. In addition, you will see `memcrud.js`, this is the code that you will extend. This is a completely worked out example for managing a non-persistent counter with CRUD. You can run this code as is with from a command prompt using the following command inside the starter kit folder:



```js
node memcrud.js
```


With the server running, you can test it by entering the following URLs into your browser:


```js
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

If you interrupt your server and then restart it, you should see that the counter values are all gone:


```js
localhost:8080/read?name=counter1
// the counter doesn't exist because as far as the server is concerned, it was never created!
```

## TODO #1: Saving State on the File System

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