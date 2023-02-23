# L06 Modules, HTML, DOM

## Using JavaScript in HTML

JavaScript is a powerful programming language used to add interactivity and dynamic behavior to web pages. It is widely used in conjunction with HTML and CSS to create engaging and responsive websites.

JavaScript is typically included in HTML pages using the `<script>` tag. This tag is placed in the `<head>` or `<body>` section of the HTML document, and it can either reference an external JavaScript file or include the code directly in the HTML document.

Here's an example of including an external JavaScript file in an HTML document:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <script src="script.js"></script>
</head>
<body>
  <!-- HTML content goes here -->
</body>
</html>
```

In this example, the `script.js` file contains the JavaScript code that will be executed on the page. This file is referenced using the src attribute of the `<script>` tag.

One common use of JavaScript in HTML is to handle user input through forms. JavaScript can be used to validate form data, manipulate the DOM based on user input, and submit form data to a server.

Here's an example of using a form to call a JavaScript function:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Form</title>
    <script>
      function submitForm() {
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        // Do something with the form data
        console.log('Name: ' + name);
        console.log('Email: ' + email);

        // Prevent form from submitting
        return false;
      }
    </script>
  </head>
  <body>
    <form onsubmit="submitForm()">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" /><br />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

In this example, the `submitForm()` function is called when the form is submitted. The function retrieves the form data using `getElementById()`, logs it to the console, and returns *false* to prevent the form from actually submitting.

The `onsubmit` attribute of the `<form>` tag is used to call the `submitForm()` function when the form is submitted. This attribute is set to return `submitForm()`, which means that the function will be called and its return value (in this case, false) will be used to determine whether or not the form should be submitted.

In conclusion, JavaScript is a powerful language that can be used to add interactivity and dynamic behavior to HTML pages. By including JavaScript code in an HTML document and using it to handle user input through forms, you can create engaging and responsive web pages that provide a great user experience.

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./06-modules-html-dom.pptx').default} />

## Exercise

You must complete [Ex5: Decoder Ring Class](../../exercises/decoder-ring-class) by the next class meeting.

## Code Examples

- [examples/06-modules-html-dom](https://github.com/umass-cs-326/examples/tree/main/06-modules-html-dom)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) (you can find everything here!)
- `<script>`: [The Script Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- `<form>` - [The Form Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- `<label>` - [The Label Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- `<input>`: [The Input Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- `<input type="button">` - [The type Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)
- [Using the W3C DOM Level 1 Core](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)
- [JavaScript beginner tutorial 27 - forms](https://www.youtube.com/watch?v=4QnKFlhjSZw) (video)

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.
