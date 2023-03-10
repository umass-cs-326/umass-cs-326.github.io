---
author: Isi Bernoff & Ashir Imran
tags:
  - lab
  - assignment
---

# B05 Event Handling

## Information

- Please accept the [GitHub Classroom Assignment](https://classroom.github.com/a/OGbk21J-) for this lab
- See the [calendar](/docs/information/schedule/#labs) for due dates.

## Submission

You must submit the following to complete this assignment:

- Push all changes to your GitHub repository before the due date. You do not need to submit anything to Moodle. We will take your last commit before the deadline as your submission.

---

## Overview

In this lab we will delve into the details of Event handling in JavaScript, and apply this knowledge to a few exercises.

## Events

In the context of the web, an **Event** is when a user performs some action on a webpage, e.g. clicks a link, refreshes the page, scrolls down, downloads an image, etc. Linking these actions to meaningul functionality is key to creating dynamic webpages This is what separates the current web from the static nature of the the early web. When users interact with a page, they expect to see feedback from the page that guides them through to their goals, e.g. making a purchase, sending a message, playing a game, liking a video, etc.

Linking Events to this functionality and feedback is called **Event handling**: The user performs an action on your page, and you want to "handle" that event through a function that provides live feedback to the user. You can handle an event through the `addEventListener()` method of the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface.

## addEventListener()

Understanding the [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) is sometimes confusing for new web programmers, so read this section carefully to clear up points of confusion. To access the `addEventListener()` method, you need an instance of the `EventTarget` interface, which is usually a HTML Element like a button. Once you have an EventTarge`, you can "listen" for some **event** to occur on it, like a user clicking it.

`addEventListener(type, listener)` takes in an _event type_, as well as something to handle the event in the form of a callback function. Here's an example of a few common events, although you can find a full list on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Event) and [W3 Schools](https://www.w3schools.com/tags/ref_eventattributes.asp).

- Since `listener` is a callback function, it is passed in as a reference. For example, the function `foo()` is passed in as `addEventListener(type, foo)`, not `addEventListener(type, foo())`

### Event Types

#### Mouse Events

- **click:** Event when a mouse button is both pressed and released on the target
- **mouseup:** Event when a mouse button is released on the target
- **mousedown:** Event when a mouse button is held down on the target

#### Drag Events

- **drag:** Even when the element is dragged

#### Submit Events

- **submit:** Event when an HTML `<form>` is submitted

#### Keyboard Events

- **keydown:** Event when a key is pressed down while the target is selected
- **keyup:** Event when a key is released while the target is selected
- **keypress:** Event when a user presses and releases a key

### The "event" Parameter

As part of the Event interface, we can access instance properties directly in an event listener function by passing in the "event" parameter. This allows us to control the behavior of the event through instance methods, or read various properties through [`event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

## Example

**HTML:**

```html
<input type="text" id="my-textbox" />

<button type="button" id="my-button">Click here</button>
```

**Javascript:**

```javascript
// First, we grab our DOM elements through their IDs
const textBox = document.getElementById("my-textbox");
const button = document.getElementById("my-button");

// Then, we create a function to handle an event for when we click our button
const buttonHandler = (event) => {
  // Changes the background color of the button to black
  event.target.style.backgroundColor = "black";

  // Changes the text color of the button to white
  event.target.style.color = "white";

  // Changes the button text to what's in the text box
  event.target.textContent = textBox.value;
};
```
