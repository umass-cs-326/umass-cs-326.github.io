# Ex10: Install Node.js and Run Server

## Overview

This exercise is super simple! You are only required to install Node.js (node) and run the node server that was discussed in the lesson. You will be using node for the rest of the semester, so it is important that you get it installed and running on your local computer.

## Starter Kit

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

You are provided a single file: **server.js**. This JS file contains a rudimentary example of how an HTTP server is written using the core HTTP library that the node environment provides. It is a highly efficient HTTP server designed to write server-side web applications in JavaScript.

### 😎 Meeting Standards 😎

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

If you want to go above and beyond, you can try to do one or all of the following:

- Add a new route to the server that responds to a GET request to the path `/hello`. The response should be a JSON object with a key of `message` and a value of `Hello World!`.
- Add a new route to the server that responds to a POST request to the path `/hello`. The response should be a JSON object with a key of `message` and a value of `Hello World!`.
- Add a new route to the server that responds to a GET request to the path `/hello/:name`. The response should be a JSON object with a key of `message` and a value of `Hello <name>!`, where `<name>` is the value of the `name` parameter in the URL.
- Add a new route to the server that responds to a POST request to the path `/hello/:name`. The response should be a JSON object with a key of `message` and a value of `Hello <name>!`, where `<name>` is the value of the `name` parameter in the URL.

You are always welcome to try something else that is not listed here. The sky is the limit! Just make sure you document what you did in the associated submission form.
