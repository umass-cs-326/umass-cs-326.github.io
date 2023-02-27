# L07 DOM Events

## Understanding the JavaScript DOM, DOM Events, and Event Handlers

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. With the DOM, developers can create and modify HTML and XML documents, and also add interactivity to web pages with JavaScript.

## The JavaScript DOM

In JavaScript, the DOM is represented as a tree-like structure, with the document object at the root. Each node in the tree represents an element, attribute, or text content of the document. Developers can use JavaScript to access, modify, and create elements in the DOM tree.

For example, to access an HTML element with a given id using JavaScript, we can use the `getElementById()` method:

```javascript
const element = document.getElementById('my-element');
```

Once we have a reference to an element in the DOM, we can modify its properties, such as its text content or style, using JavaScript:

```javascript
element.textContent = 'Hello, World!';
element.style.color = 'red';
```

## DOM Events

DOM events are actions or occurrences that happen in the browser (or server), such as a user clicking a button or a page finishing loading. JavaScript can listen for these events and perform actions in response, such as updating the page content or submitting a form.

To listen for an event in JavaScript, we can use the `addEventListener()` method:

```javascript
const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

This code adds a click event listener to a button element with the id `my-button`. When the button is clicked, the anonymous function passed as the second argument will be executed, logging a message to the console.

## Event Handlers

Event handlers are functions that are called in response to a specific event, such as a button click. In JavaScript, event handlers are often used with DOM events to add interactivity to web pages.

For example, we can define an event handler function that updates the text content of an element:

```javascript
function handleClick() {
  const element = document.getElementById('my-element');
  element.textContent = 'Button clicked!';
}

const button = document.getElementById('my-button');
button.addEventListener('click', handleClick);
```

This code defines a `handleClick()` function that updates the text content of an element with the id my-element. It then adds an event listener to a button element with the id my-button, calling the `handleClick()` function when the button is clicked.

Overall, the JavaScript DOM, DOM events, and event handlers provide a powerful set of tools for creating dynamic and interactive web pages. By using JavaScript to manipulate the DOM and respond to user events, developers can create web applications that are engaging and responsive to user input.

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./07-dom-events.pptx').default} />

## Code Examples

- [examples/07-dom-events](https://github.com/umass-cs-326/examples/tree/main/07-dom-events)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Event Interface](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [EventTarget Interface](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [What are event listeners in JavaScript?](https://youtu.be/jqU3uaRgQyQ), mmtuts (video)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.