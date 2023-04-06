# Ex13: CRUD #2

## Overview

The goal of this exercise is to extend the basic HTTP server from the last exercise that supported persistence of an object holding data on counters. In particular, we will be doing the following:

1. Use HTTP methods (GET, POST, PUT, DELETE, etc.) on an incoming request object in combination with the path to determine if a route matches a route in the server and invoking the associated operation to handle that request in the server.
2. Add a route in the HTTP server to serve HTML, CSS, and JavaScript files.
3. Add a front-end UI to interact with the CRUD server.

It will be helpful to reference the server code example covered in the associated lesson to provide guidance on the implementation of this exercise. The starter kit we provide also gives you significant direction.

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

## A CRUD Server with a UI

In the last exercise we created a server that provided a RESTful interface and CRUD operations for an HTTP server that managed a “database” of counter variables. We were able to perform several operations on that database by sending the server HTTP requests from the browser and seeing the results in the browser window. In this exercise, we are going to look at a more complete application that will include a front-end interface that will communicate with the back-end REST/CRUD server. In the end, you will end up with an application in the browser that looks like the one below.

![image](image1.png)

## 😎 Meeting Standards 😎

**Meeting Standards is considered B to A- quality work**.

This level of work meets the requirements of the assignment. It is expected that you will be able to complete this level of work with minimal assistance and complete it by the assigned due date with a correct solution. By completing this level of work, you will be able to demonstrate that you have met the learning objectives of the assignment and of the course and are prepared to be successful in future assignments and subsequent courses that have this course as a prerequisite.

### TODO #1: Server Update and Delete

Complete the `updateCounter` and `deleteCounter` CRUD functions in `memcrud.js`. We provide the implementation of the other operations that you can look at for guidance.

:::note

You will find **TODO #1** in the `memcrud.js` file.

:::

### TODO #2: Server Methods and Paths

Update the `basicServer` function to check that the request path/route and HTTP method match to determine if the server functionality should be invoked. You need to complete this for the `/update` and `/delete` route. We provide the others to give you some direction.

:::note

You will find **TODO #2** in the `memcrud.js` file.

:::

### TODO #3: Client Update and Delete Buttons

​​Complete the update and delete button’s click event listener functions in `client/client.js` to call the appropriate CRUD operations in `client/crud.js` and update the user interface. We have implemented the others to give you a reference point.

:::note

You will find **TODO #3** in the `client/client.js` file.

:::

## TODO #4: Client Update and Delete CRUD Functions

Complete the `update` and `delete` CRUD functions in `client/crud.js`. These functions use the `fetch` web API call to make the proper request to the server to update and delete counter data.

:::note

You will find **TODO #4** in the `client/crud.js` file.

:::

## 🚀 Exceeding Standards 🚀

**Exceeding Standards is considered A-quality work**.

If you have satisfied the Meeting Standards level of this assignment and you want to go above and beyond, you can try to do one or all of the following:

- Extend the UI to display the counters in a table with a row for each counter.
- Extend the UI to allow the user to add a new counter with an initial value.
- Use the [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine) feature/property to determine if the browser is online or offline and disable the update and delete buttons if the browser is offline.
- Use the [Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine) feature/property to determine if the browser is online or offline to store the counters in the browser’s local storage using [PouchDB](https://pouchdb.com/api.html) if the browser is offline and then update the counters in the server when the browser is online again.

You are always welcome to try something else that is not listed here. The sky is the limit! Just make sure you document what you did in the associated submission form.

**You will only receive credit for the Exceeding Standards level of work if you have completed the Meeting Standards level of work. Do not attempt to complete the Exceeding Standards level of work until you have completed the Meeting Standards level of work as it will be ignored.**

## 🕊️ Approaching Standards 🕊️

**Approaching Standards is considered C-quality work**.

This level of work indicates that you are not quite meeting the standards for the assignment, but you are making progress. You should be able to complete the assignment with some guidance and/or additional work. You have demonstrated some understanding of the concepts, but you haven't completely showed that you understand the concepts entirely. You are likely to struggle on future assignments and/or subsequent courses that have this course as a prerequisite.

If you struggled with this assignment, but you understand the concepts and have some understanding of how to solve it, but your application of that understanding is not quite there, incomplete, or incorrect, then your score is at the Approaching Standards level.

You should consider seeking help from another student in the class, a TA/UCA, or the instructor.

## 🛟 Below Standards 🛟

**Below Standards is considered D-quality work**.

This level of work indicates that you are not meeting the standards for the assignment. You do not understand the concepts and/or you have not demonstrated any understanding of the concepts. You have not made any significant progress on the assignment. You are likely to significantly struggle on future assignments and/or subsequent courses that have this course as a prerequisite.

If you struggled with this assignment and you do not understand how to solve it, do not understand where to start, or even entirely understand the code provided or the code you wrote, your score is at the Below Standards level.

You should consider seeking help from another student in the class, a TA/UCA, or the instructor.
