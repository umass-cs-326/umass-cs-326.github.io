# Ex11: REST and Fetch

## Overview

The goal of this exercise is to implement a web app that takes a GitHub repository and name (e.g., plasma-umass/scalene) and then fetches the number of “stars" which the repository has (displayed on the upper-right hand side of GitHub repositories).

![image](image1.png)

This is what the app will look like when you run it:


![animated image](image2.gif)


## Starter Kit

[Download the Starter Kit!](https://drive.google.com/drive/folders/1xF0Lku4hjZPksRFGczVAV3F9rfdr-AGA?usp=sharing)

You only need to edit the file `starbuddy.js`, but you will need to consult `starbuddy.html`.


## TODO #1: Add Event Listener

First, you will implement the code (one line) in the function `initialize` to add an event listener to the button (consult `starbuddy.html`).

You will find **TODO #1** in the `starbuddy.js` file.


## TODO #2: Fetch the Stars

Second, implement the function `getStars` that uses the fetch API. You will need to `await fetch` first to get the response from the server, and then `await response.json()` to get the JSON out of the response.

Your function should then update the `<div>` that will contain the star count (returned from the GitHub API in a JSON object as the property `stargazers_count`). Recall that the API endpoints for GitHub look like this: `https://api.github.com/repos/jvilk/browserfs` (in other words, you can't just use the "repo" `<div>`  element as the URL!).

If the request fails (`response.ok` is false or `response.status === 404`), your app should report "an error has occurred." Although not typically advisable, use `.innerHTML` to set the contents of the `<div>` in `starbuddy.html` to make things a little easier. In total, your function should be pretty short: around 10 lines of code.

You will find **TODO #2** in the `starbuddy.js` file.


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