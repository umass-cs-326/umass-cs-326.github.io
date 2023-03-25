# Ex10: Install Node.js and Run Server

## Overview

This exercise is straight forward! You are only required to install Node.js (node) and run the node server that was discussed in the lesson. You will be using node for the rest of the semester, so it is important that you get it installed and running on your local computer.

## Starter Kit

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

You are provided a single file: **server.js**. This JS file contains a rudimentary example of how an HTTP server is written using the core HTTP library that the node environment provides. It is a highly efficient HTTP server designed to write server-side web applications in JavaScript.

## Submission

You must submit the following to complete this exercise:

1. The associated assignment survey on Moodle.

You must ensure that you have completed this exercise and committed your work to your GitHub repository before submitting the assignment survey on Moodle. You are required to submit a link to the commit that you are self reviewing and that we may use to review your work.

Your submission time/date is based on the time/date of the assignment survey submission available from Moodle. You are responsible for ensuring that your submission is complete and accurate.

If your survey submission is late, tokens will be automatically deducted from your token count. You will be notified of the number of tokens deducted from your token count as part of your score report in an email.

## 😎 Meeting Standards 😎

**Meeting Standards is considered B-quality work**.

This level of work meets the requirements of the assignment. It is expected that you will be able to complete this level of work with minimal assistance and complete it by the assigned due date with a correct solution. By completing this level of work, you will be able to demonstrate that you have met the learning objectives of the assignment and of the course and are prepared to be successful in future assignments and subsequent courses that have this course as a prerequisite.

### TODO #1: Install Node.js

You can install Node.js by [visiting their website](https://nodejs.org/en/download/). There are several different ways to get node on your local computer. Determine which way is the best for you. After you install node, bring up a terminal and type in this command:

```bash
node --version
```

Take a screenshot of your terminal. Please add this screenshot to your GitHub repository and add an image link to it in the README.md file.

### TODO #2: Run the HTTP server.

Run the HTTP server like so:

```bash
node server.js
```

Take a screenshot of your terminal. Please add this screenshot to your GitHub repository and add an image link to it in the README.md file.

### TODO #3: Visit the server in your browser.

Visit the server in your browser by going to this URL: [http://localhost:3000](http://localhost:3000). Take a screenshot of your browser. Please add this screenshot to your GitHub repository and add an image link to it in the README.md file.

## 🚀 Exceeding Standards 🚀

**Exceeding Standards is considered A-quality work**.

If you have satisfied the Meeting Standards level of this assignment and you want to go above and beyond, you can try to do one or all of the following:

- Add a new route to the server that responds to a GET request to the path `/hello`. The response should be a JSON object with a key of `message` and a value of `Hello World!`.
- Add a new route to the server that responds to a POST request to the path `/hello`. The response should be a JSON object with a key of `message` and a value of `Hello World!`.
- Add a new route to the server that responds to a GET request to the path `/hello/:name`. The response should be a JSON object with a key of `message` and a value of `Hello <name>!`, where `<name>` is the value of the `name` parameter in the URL.
- Add a new route to the server that responds to a POST request to the path `/hello/:name`. The response should be a JSON object with a key of `message` and a value of `Hello <name>!`, where `<name>` is the value of the `name` parameter in the URL.

You are always welcome to try something else that is not listed here. The sky is the limit! Just make sure you document what you did in the associated submission form.

**You will only receive credit for the Exceeding Standards level of work if you have completed the Meeting Standards level of work. Do not attempt to complete the Exceeding Standards level of work until you have completed the Meeting Standards level of work as it will be ignored.**

## 🕊️ Approaching Standards 🕊️

**Approaching Standards is considered C-quality work**.

This level of work indicates that you are not quite meeting the standards for the assignment, but you are making progress. You should be able to complete the assignment with some guidance and/or additional work. You have demonstrated some understanding of the concepts, but you haven't completely showed that you understand the concepts entirely. You are likely to struggle on future assignments and/or subsequent courses that have this course as a prerequisite.

If you struggled with this assignment, but you understand the concepts and have some understanding of how to solve it, but your application of that understanding is not quite there, incomplete, or incorrect, then your score is at the Approaching Standards level.

You should consider seeking help from another student in the class, a TA/UCA, or the instructor.

## 🛟 Below Standards 🛟

**Below Standards is considered D-quality work**.

This level of work indicates that you are not meeting the standards for the assignment. You do not understand the concepts and/or you have not demonstrated any understanding of the concepts. You have not made any significant progress on the assignment. You are likely to significantly struggle on future assignments and/or s

If you struggled with this assignment and you do not understand how to solve it, do not understand where to start, or even entirely understand the code provided or the code you wrote, your score is at the Below Standards level.

You should consider seeking help from another student in the class, a TA/UCA, or the instructor.
