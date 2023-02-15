---
author: Rajasi-Desai
tags:
  - exercise
  - assignment
---

# Ex5: Decoder Web Page

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

For this exercise you will make a web interface to the `decoder` class you built in the previous exercise. You can use your solution from the previous exercise or our solution. Note, that for this exercise you are not allowed to use modules. So, if you used modules in the last exercise you can simply comment out any import/export statements in your `decoder.js` file. If you do use your own solution, make sure you copy your JS file into the same folder as the HTML document you are about to complete. You should write your solutions in VSCode (or an editor of your choice). The web page you will create should look and work roughly like this:

![How to do](exercise5.gif)

The application works as follows:
- Enter a key, consisting of 26 letters (for now, no validation or error-checking is required).
- Optionally, enter text to encode or decode
- When you click the “Go” button, it should encode the text entered in the “Text to encode” box, printing it in the “Encoded” box, and the same for “Text to decode” and “Decoded”.

## Starter Kit

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

You are provided the `decoderRingClass.js` solution from the last exercise. This file contains the class definition for the `decoder` and `decoderRing` classes. You will use `decoder` in this exercise to encode/decode text the user enters into the interface. You will not need to make any modifications to that file. We also provide a file named `index.html` which doesn’t have much. You will need to update this file to build the user interface for our simple encoder/decoder application.

## TODO #1: User Interface

For this TODO, you need to use HTML tags to design and implement the user interface you see above for the encoder/decoder application. This will require you to use several different tags. Here are the tags that we used to implement the interface:
- `<h1>` - header
- `<center>` - this tag is actually deprecated, but is fine to use for now. We will see how to do this properly when we introduce CSS
- `<br>` - this is used for formatting
- `<img>` - this is used for the image, the image can be found at https://github.com/emeryberger/web-programming/raw/master/decoder-ring.jpg
  * Example: `<img src=”URL” alt=”description for the blind”>`
- `<form>` - for the form itself

You want to nest the labels and other form elements inside of the `<form>` tag:
1. `<label>` - for accessibility 
    - `<label for=”some_id”>explanation</label>`
2. `<input>` - for input UI components
    - `<input type=”text” id=”some_id”>`
    - Use the following IDs:
        * key
        * encode, encoded
        * decode, decoded
        
Examples:
```js
<input type="button" onClick="doIt()" value="Go">
<label for="encode">Text to encode:</LABEL>
<input type="text" ID="encode" />
```
You can read up on these tags on the MDN Web Docs.

You will find `TODO #1` in the `index.html` file.

## TODO #2: Application Behavior

Now that you have completed `TODO #1`, you have an interface. Let us make this more interesting by adding some behavior to this application. That is, we want to be able to perform the encode/decode operations when we click on the `Go` button. To do this you will need to implement a function called `doIt` inside of the `<script>` tag in the `index.html` file. This function needs to create a new `decoder` object and encode and decode the values from the text boxes in the user interface. Remember, you can get/set the values from the user interface like we do in this example:

```js
encodeStr = document.getElementById('encode').value;
document.getElementById('encoded').value = c.encode(encodeStr);
```

Make sure that the `Go` button calls the `doIt` function when the `Go` button is clicked.

You will find `TODO #2` in the `index.html` file.

That's it! You should now have a working decoder web application! Use VSCode’s Liver Server extension to run your encoder/decoder web application!

