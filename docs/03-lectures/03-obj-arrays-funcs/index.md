# L03 Objects, Arrays, Functions

## Overview

JavaScript is a powerful and versatile programming language that is widely used for web development. One of its core strengths lies in its ability to handle data structures like arrays, objects, and functions. In this post, we'll take a closer look at each of these data structures and how they can be used in JavaScript.

### Arrays:

Arrays in JavaScript are ordered collections of values. They can contain any type of data, including numbers, strings, objects, and even other arrays. Arrays are declared using square brackets, and each value is separated by a comma. For example:

```js
var myArray = [1, 2, 3, 'Hello', [4, 5]];
```

Arrays in JavaScript have a number of useful built-in methods that allow you to manipulate the data within them. For example, you can use the `.push()` method to add an element to the end of an array, or the `.pop()` method to remove the last element. You can also use the `.sort()` method to sort the elements in an array, and the `.slice()` method to extract a portion of the array.

### Objects:

Objects in JavaScript are unordered collections of key-value pairs. They are used to represent complex data structures and can contain any type of data, including arrays and other objects. Objects are declared using curly braces, and each key-value pair is separated by a comma. For example:

```js
var myObject = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'hiking']
};
```

Objects in JavaScript are very versatile, and you can use them to represent anything from simple data structures to complex data models. They also have a number of useful built-in methods, such as `.hasOwnProperty()`, which allows you to check if an object has a specific property, and `.keys()`, which returns an array of the object's keys.

### Functions:

Functions in JavaScript are blocks of code that can be executed when they are called. They can take any number of arguments, and can return a value if desired. Functions are declared using the function keyword, followed by the function name, and a set of parentheses that define the arguments. For example:

```js
function addNumbers(a, b) {
  return a + b;
}
```

Functions are a crucial part of JavaScript, and they allow you to write modular and reusable code. They can also be used to create complex algorithms and data structures, and can be used in conjunction with arrays and objects to achieve powerful results.

In conclusion, arrays, objects, and functions are the building blocks of JavaScript and are used to represent and manipulate data in a variety of ways. Understanding how to use these data structures effectively is an important part of being a JavaScript developer, and mastering them can open up a world of possibilities for your projects.

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./03-obj-arrays-funcs.pptx').default} />

## Resources

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
