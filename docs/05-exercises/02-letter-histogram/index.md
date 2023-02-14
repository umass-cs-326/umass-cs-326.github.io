---
author: richards
tags:
  - exercise
  - assignment
---
# Ex2: Letter Histogram

## Information

- Visit Moodle and follow the GitHub Classroom assignment link.
- See the [calendar](/docs/information/schedule/#exercises) for due
  dates.

## Submission

You must submit the following to complete this assignment:

- Push all changes to your GitHub repository before the due date. You
  do not need to submit anything to Moodle. We will take your last
  commit before the deadline as your submission.
- Complete the Grade Reflection survey associated with this assignment
  on Moodle.

See the [course syllabus](/docs/information/syllabus/#exercises) for
additional information on exercise assignments.

## Overview

The following exercises will give you some practice with various
aspects of the JavaScript programming language. You should write your
solutions in VSCode (or an editor of your choice).

## Starter Repository

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

You are provided a single HTML file named `exercise-02.html`. Although
we haven’t discussed HTML files yet, you will write your JavaScript
code between the `<script>` tags inside of that HTML file. You may
only use the
[console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
function to print values to the browser’s console and
[console.assert](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
to test the functions that you write. You are encouraged to test your
code to make sure it works as intended.

## TODO #1: Letter Histogram

Write a function called `letterHistogram` that counts the number of
times each character appears in a string and returns an object mapping
characters to their frequencies. You will be creating an object (`{}`)
to track the count of each letter. Instead of accessing each character
by indexing an array, use `str.split(‘’).forEach`.

Here is the signature of the `letterHistogram` function:

```js
function letterHistogram(str)
```

Here is an example of calling this function:

```js
letterHistogram('this is a test');
// evaluates to { t: 3, h: 1, i: 2, s: 3, ' ': 3, a: 1, e: 1 }
```

You will find `TODO #1` in the `exercise-02.html` file.

## TODO #2: Write Tests

To ensure that the letterHistogram function you wrote in TODO #1 is working properly, it is good software development/engineering and web programming practice to write tests. For this TODO, you must write 3 tests to test your letterHistogram function. You must use the console.assert function to write your tests. Hint: To compare objects, it is easiest to convert both objects into a string and then perform a string comparison. This will be helpful when you test the return value of your letterHistogram function:

```js
console.assert(JSON.stringify(letterHistogram("xxx")) === 
	           JSON.stringify({x : 3}));
```

You will find `TODO #2` in the `exercise-02.html` file.
