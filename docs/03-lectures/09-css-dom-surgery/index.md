# L09 CSS and DOM Surgery

In JavaScript, we can manipulate the Document Object Model (DOM) of a web page to add, remove, or modify HTML elements dynamically. One of the most common DOM manipulation tasks is adding and removing HTML nodes from the DOM.

## Accessing HTML nodes in the DOM

To manipulate an HTML node in the DOM using JavaScript, we first need to access it. There are several methods we can use to do this.

### `document.getElementById()`

The `getElementById()` method returns the HTML element with the specified ID.

Here's an example of using `getElementById()` to get a reference to a paragraph element with the ID "myParagraph":

```js
var myParagraph = document.getElementById("myParagraph");
```

### `document.getElementsByTagName()`

The `getElementsByTagName()` method returns a collection of HTML elements with the specified tag name.

Here's an example of using `getElementsByTagName()` to get a collection of all the paragraph elements in a document:

```js
var paragraphs = document.getElementsByTagName("p");
```

### `document.getElementsByClassName()`

The `getElementsByClassName()` method returns a collection of HTML elements with the specified class name.

Here's an example of using `getElementsByClassName()` to get a collection of all the elements in a document with the class name "myClass":

```js
var myElements = document.getElementsByClassName("myClass");
```

Once we have a reference to an HTML element, we can manipulate it using the various properties and methods of the `Element` object.

By combining these access methods with the various DOM manipulation methods we discussed earlier, we can create dynamic and interactive web pages that respond to user actions and events.

## Adding HTML nodes to the DOM

To add an HTML node to the DOM using JavaScript, we can use the `appendChild()` method. This method adds a new child node to an existing parent node.

Here's an example of adding a new paragraph element to the body of a web page:

```js
// create a new paragraph element
var newParagraph = document.createElement("p");

// add some text to the paragraph
var paragraphText = document.createTextNode("This is a new paragraph.");
newParagraph.appendChild(paragraphText);

// get the body element
var body = document.getElementsByTagName("body")[0];

// append the paragraph to the body
body.appendChild(newParagraph);
```

In this example, we first create a new paragraph element using the `createElement()` method. We then add some text to the paragraph using the `createTextNode()` method and append the text to the paragraph using the `appendChild()` method.

Finally, we get the body element of the web page using the `getElementsByTagName()` method and append the new paragraph to the body using the `appendChild()` method.

## Removing HTML nodes from the DOM

To remove an HTML node from the DOM using JavaScript, we can use the `removeChild()` method. This method removes a child node from an existing parent node.

Here's an example of removing a paragraph element from the body of a web page:

```js
// get the paragraph element to remove
var paragraphToRemove = document.getElementById("myParagraph");

// get the parent element of the paragraph
var parentElement = paragraphToRemove.parentNode;

// remove the paragraph from the parent element
parentElement.removeChild(paragraphToRemove);
```

In this example, we first get the paragraph element we want to remove using the `getElementById()` method. We then get the parent element of the paragraph using the `parentNode` property.

Finally, we remove the paragraph from the parent element using the `removeChild()` method.

These are just a few examples of the many ways we can manipulate the DOM using JavaScript. By combining DOM manipulation with CSS, we can create dynamic and interactive web pages that respond to user actions and events.

## Modifying HTML nodes in the DOM

In addition to adding and removing HTML nodes from the DOM, we can also modify existing nodes. One common way to do this is by changing the text or HTML content of an element.

Here's an example of modifying the text content of a paragraph element:

```js
// get the paragraph element to modify
var paragraphToModify = document.getElementById("myParagraph");

// change the text content of the paragraph
paragraphToModify.textContent = "This is some modified text.";
```

In this example, we first get the paragraph element we want to modify using the `getElementById()` method. We then change the text content of the paragraph using the `textContent` property.

We can also modify the HTML content of an element using the `innerHTML` property. However, we should be careful when using this property, as it can introduce security vulnerabilities if we allow user-generated content to be inserted into the HTML.

## Modifying HTML nodes in the DOM with innerText and innerHTML

The `innerText` property sets or returns the text content of the specified node, but unlike `textContent`, it includes only visible text. For example, if an element contains text that is hidden using CSS, that text will not be included in the `innerText` property.

Here's an example of modifying the text content of a paragraph element using the `innerText` property:

```js
// get the paragraph element to modify
var paragraphToModify = document.getElementById("myParagraph");

// change the text content of the paragraph
paragraphToModify.innerText = "This is some modified text.";
```

The `innerHTML` property sets or returns the HTML content of the specified node. Unlike `textContent` and `innerText`, the `innerHTML` property can be used to modify HTML content as well as text content.

Here's an example of modifying the HTML content of a paragraph element using the `innerHTML` property:

```js
// get the paragraph element to modify
var paragraphToModify = document.getElementById("myParagraph");

// change the HTML content of the paragraph
paragraphToModify.innerHTML = "<em>This is some modified HTML content.</em>";
```

We should be careful when using the `innerHTML` property, as it can introduce security vulnerabilities if we allow user-generated content to be inserted into the HTML. In particular, we should avoid inserting unescaped user input into the HTML, as this can allow attackers to inject arbitrary code into our web page.

In addition, since the `innerHTML` property allows us to modify the HTML content of an element, we can use it to create new HTML elements and insert them into the DOM. This can be useful when we want to dynamically create and insert new content into our web page.

Here's an example of creating a new div element using the `innerHTML` property and inserting it into the body of a web page:

```js
// get the body element
var body = document.getElementsByTagName("body")[0];

// create a new div element
var newDiv = document.createElement("div");

// set the HTML content of the new div element
newDiv.innerHTML = "<p>This is a new div.</p>";

// append the new div to the body
body.appendChild(newDiv);
```

In this example, we first get the body element of the web page using the `getElementsByTagName()` method. We then create a new div element using the `createElement()` method and set its HTML content using the `innerHTML` property.

Finally, we append the new div to the body using the `appendChild()` method.

By combining DOM manipulation with CSS, we can create dynamic and interactive web pages that respond to user actions and events. The `innerText` and `innerHTML` properties are powerful tools that allow us to modify the content of HTML elements in the DOM and create new elements dynamically.

## Conclusion

We explored some of the basic JavaScript DOM functions for accessing HTML nodes in the DOM. In addition, we explored some of the basic JavaScript DOM functions for adding, removing, and modifying HTML nodes in the DOM. By mastering these functions, we can create dynamic and interactive web pages that respond to user actions and events.

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTpQIiO8RP41O9fe1Vf0lzgZiuA7kObVNltdkaIk5yWiMB_UEDk9Yu_FN6lnhusnEHAHMD_z-04K-RW/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1eHIrCWPLq7D6F57J2UCbT7-i5lO0kL-VjPDhWJaurkg/edit#slide=id.p1).

## Exercise

You must complete [Ex8: Chessboard](../../exercises/chessboard) by the assigned due date.

## Code Examples

- [examples/09-css-dom-surgery](https://github.com/umass-cs-326/examples/tree/main/09-css-dom-surgery)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [DOM Objects](https://www.w3schools.com/jsref/dom_obj_document.asp)
- [DOM Tree](https://javascript.info/dom-nodes)

### Other

- [The difference between span and div](https://www.geeksforgeeks.org/difference-between-div-and-span-tag-in-html/)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.