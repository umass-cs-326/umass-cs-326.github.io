---
author: Rajasi-Desai
tags:
  - exercise
  - assignment
---

# Ex4: Decoder Ring Class

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

The following exercises will give you some practice with various aspects of the JavaScript programming language. You should write your solutions in VSCode (or an editor of your choice). 

## Starter Kit

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

You are provided two files in the starter kit. You are provided an HTML file named `decoderRingClass.html` and a JavaScript file named `decoderRingClass.js`. You will not need to modify the `decoderRingClass.html` file, however, it will be used to run your JavaScript code by loading that JavaScript file into the browser by loading the HTML file into your browser. You may only use the `console.log` function to print values to the browser’s console and `console.assert` to test the functions that you write. You are encouraged to test your code to make sure it works as intended.

You can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode extension to run this simple web application by right-clicking on the `decoderRingClass.html` file in VSCode and open it in “Live Server”. This will automatically open a browser window. Once your app is loaded into the browser, you can open the browser’s developer tools and the console to see any output that is generated.

![image](https://user-images.githubusercontent.com/60818982/219100357-d583d5dc-e8ab-4509-9f94-9358ca9d0b7b.png)

## TODO #1: Decoder Class

In a previous exercise, we made a decoder ring that could work with a certain number of rotations. Now, we are going to generalize decoders so we can implement different kinds of decoders easily.

You will write a `decoder` class whose constructor takes as input an argument which is a string of characters corresponding to the "cipher". For example, to implement a Caesar cipher that shifts everything two to the right, you do this:

```js
let d = new decoder('cdefghijklmnopqrstuvwxyzab');
d.encode('hello world'); // evaluates to 'jgnnq yqtnf';
d.decode('jgnnq yqtnf'); // evaluates to 'hello world';
```

Your decoder class will provide a similar interface as we saw in a previous exercise. For example, it includes `encodeMap` and `decodeMap` objects that are used for the cipher mapping, and it will contain two functions, `encode` and `decode` for encoding a string and decoding a string respectively. In this case, the `encodeMap` will map 'a' → 'c' (the first character in the string), then 'b' → 'd', and so on. Note, that we are no longer restricted by rotations - the cipher could be the lower-case alphabet in any order.

In addition, you are going to implement a _getter_ and a _setter_ method that changes the cipher. When the cipher changes, you must rebuild the `encodeMap` and `decodeMap`! 

We provide you the start of the decoder class in the `decoderRingClass.js` file. Your job is to complete this class. In particular:

1. Implement the cipher setter method
2. Complete the implementation of the _rebuildMaps method
3. Implement the encode method
4. Implement the decode method

You will find `TODO #1` in the `decoderRingClass.js` file.

## TODO #2: Extend the decoder class

Now, you are going to make a `decoderRing` subclass that implements the Caesar cipher like last time. The constructor will take a rotation argument, and then it will generate the cipher alphabet to pass to the `decoder` superclass. Here is an example of its use:

```js
let dr = new decoderRing(2);
dr.encode('hello world'); // evaluates to 'jgnnq yqtnf';
dr.decode('jgnnq yqtnf'); // evaluates to 'hello world';
```

We provide you the start of the `decoderRing` class in the `decoderRingClass.js` file. Your job is to complete this class. In particular:

1. The constructor

To ensure that the `decoderRing` class that you wrote is working properly, it is good software development/engineering and web programming practice to write tests. For this TODO, you must also **write 3 tests to test your code**. You must use the `console.assert` function to write your tests.

You will find `TODO #2` in the `decoderRingClass.js` file.
