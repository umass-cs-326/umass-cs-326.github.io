---
author: Rajasi-Desai
tags:
  - exercise
  - assignment
---

# Ex3: Decoder Ring

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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="starter-kit" label="GitHub Classroom Starter Kit" default>

:::note

Follow the GitHub Classroom assignment link on Moodle first.

:::

You are provided a single HTML file named `exercise-03.html`. Although we haven’t discussed HTML files yet, you will write your JavaScript code between the `<script>` tags inside of that HTML file. You may only use the `console.log` function to print values to the browser’s console and `console.assert` to test the functions that you write. You are encouraged to test your code to make sure it works as intended.
</TabItem>

<TabItem value="manual" label="🔥 GitHub Classroom Not Working 🔥">

:::danger

If the GitHub Classroom invite link is not working. You should create a <strong>private</strong> github repository in your personal account. If you are working with others, you should [add them as collaborators](https://bityl.co/HCR9) to the GitHub repository you created. You should then add a new file called exercise-03.html with the [starter html content](pathname:///exercises/exercise-03.txt) and continue with the exercise.

:::

</TabItem>
</Tabs>

![image](https://user-images.githubusercontent.com/60818982/219066123-35124be6-b6b1-46b5-8305-6e8bc6e48e3a.png)

## TODO #1: Decoder Ring (“Caesar cipher”)

This is an exercise in implementing a basic encryption technique known as a Caesar cipher. The basic approach is to match each letter in the alphabet to a letter in an alphabet that is shifted by a certain amount. For example:

**Original:**

**ABCDEFGHIJKLMNOPQRSTUVWXYZ**

**Shifted 2 to the right:**

**CDEFGHIJKLMNOPQRSTUVWXYZAB**

To encode, you match the original letter to the shifted version, so A → C, B → D, and so on. To decode a message, you just do the same thing in reverse, so C → A, and D → B.

--------------------------------------------------------------

**From Wikipedia:**

The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):


_Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ_

_Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW_


When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line.


_Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG_

_Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD_


Deciphering is done in reverse, with a right shift of 3.

The encryption can also be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A → 0, B → 1, ..., Z → 25. Encryption of a letter x by a shift n can be described mathematically as,

$$E_n(x)=(x+n) \text{ mod } 26$$

Decryption is performed similarly,

$$D_n(x)=(x - n)  \text{ mod } 26$$

--------------------------------------------------------------

You are to write a function called `decoderRing` that takes a rotation (a number from 0 to 25) as a parameter and returns an object with the following properties:

### Property 1:
An `encodeMap` object that contains an entry for every lower-case letter and its corresponding encoded version, shifted forward by the rotation. For example, if the rotation is 2, `encodeMap` will look like this, where the result for every letter is 2 letters after it in the alphabet, wrapping around to the beginning (notice the wrap-around at the end!):

```js
const dr = decoderRing(2); // rotation of 2
// verify that the encodeMap is correct
// notice that "y" and "z" wrap around to "a" and "b"!
console.assert(JSON.stringify(dr.encodeMap) === JSON.stringify({"a":"c","b":"d","c":"e","d":"f","e":"g","f":"h","g":"i","h":"j","i":"k","j":"l","k":"m","l":"n","m":"o","n":"p","o":"q","p":"r","q":"s","r":"t","s":"u","t":"v","u":"w","v":"x","w":"y","x":"z","y":"a","z":"b"}));
```

You might find these functions/operations useful:

1. `str.charCodeAt(ind)`: Returns the ASCII value of the character at index `ind` 

Example:
```js
‘a’.charCodeAt(0) // evaluates to 97
```

2. `String.fromCharCode(asc)`: Returns the character corresponding to the ASCII value asc

Example:
```js
String.fromCharCode(98) // evaluates to ‘b’
```

3. `x % k`: x modulo k is the remainder after dividing x by k

Example:
```js
30 % 26 === 4
```

### Property 2:
A `decodeMap` object that is the inverse of `encodeMap`

```js
dr.decodeMap; // evaluates to { “c”:”a”, “d”:”b”, … }
```

### Property 3:
A function `encode(str)` that takes a string and returns the encoded version – **if there is no encoding, return the original letter.**

```js
dr.encode(‘hello world’); // evaluates to ‘jgnnq yqtnf’
```

#### Hints and Tips:

- Use `let xs = str.split('').map((ch) => { … return something })` to iterate through each character in a string and returns a list of everything that has been mapped.

Example:

```js
let str = ‘hey’;
let upper = str.split(‘’).map(ch => ch.toUpperCase());
console.assert(JSON.stringify(upper) === 
    JSON.stringify([‘H’, ‘E’, ‘Y’]));
```

- Use `xs.join(‘’)` to convert a list xs back to a string, which is what you will return from the `encode` function.

Example:

```js
[‘H’, ‘E’, ‘Y’].join(‘’); // evaluates to ‘HEY’
```

### Property 4:
A function `decode(str)` that does the reverse.

```js
dr.decode(‘jgnnq yqtnf’); // evaluates to ‘hello world’
```

You will find `TODO #1` in the `exercise-03.html` file.

## TODO #2: Write Tests

To ensure that the `decoderRing` function and the object it returns that you wrote in `TODO #1` is working properly, it is good software development/engineering and web programming practice to write tests. For this TODO, you must **write 3 tests to test your code**. You must use the `console.assert` function to write your tests.

You will find `TODO #2` in the `exercise-03.html` file.
