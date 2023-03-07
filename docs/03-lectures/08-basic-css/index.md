# L08 Basic CSS

In this lecture, we will be covering the basics of CSS (Cascading Style Sheets) – a crucial element of web development that controls the look and feel of a web application.

CSS is used to style HTML elements such as text, images, and layout, allowing you to customize the appearance of your web pages. With CSS, you can add colors, fonts, borders, and other design elements to create an aesthetically pleasing and functional website.

So, let's get started with the basics of CSS!

## Syntax

CSS is written in a syntax that includes *selectors*, *properties*, and *values*. Selectors target the HTML elements you want to style, properties define the style you want to apply, and values specify the details of the style. The syntax for CSS is as follows:

```css
selector {
  property: value;
}
```

## Selectors

Selectors are used to target specific HTML elements to apply styling. They can be based on the element type, class, ID, or other attributes. Here are a few examples of selectors:

- **Element selector:** targets all elements of a specific type (e.g. p, `h1`, `div`)
- **Class selector:** targets all elements with a specific class (e.g. `.myclass`)
- **ID selector:** targets a specific element with a unique ID (e.g. `#myid`)
- **Attribute selector:** targets elements with a specific attribute (e.g. `[type="text"]`)

Here is an example of a CSS rule that targets all `<p>` elements:

```css
/* Select all <p> elements */
p {
  color: red;
}
```

Here is an example of a CSS rule that targets all elements with the class `myclass`:

```css
/* Select all elements with the class "myclass" */
.myclass {
  color: red;
}
```

Finally, here is an example of a CSS rule that targets all elements with the ID `myid`:

```css
/* Select the element with the ID "myid" */
#myid {
  color: red;
}
```

## Properties and Values

CSS properties and values determine the style that will be applied to the selected elements. There are numerous properties and values to choose from, including:

- **Color:** defines the text color (e.g. `color: red;`)
- **Font:** defines the font family, size, and weight (e.g. `font-family: Arial, sans-serif; font-size: 16px; font-weight: bold;`)
- **Background:** defines the background color and image (e.g. `background-color: #f2f2f2; background-image: url("image.jpg");`)
- **Border:** defines the border around an element (e.g. `border: 1px solid black;`)
- **Margin:** defines the space around an element (e.g. `margin: 10px;`)
- **Padding:** defines the space between an element's content and border (e.g. `padding: 5px;`)

## CSS Box Model

Understanding the CSS box model is essential for creating well-designed layouts. Every HTML element is made up of content, padding, border, and margin. The content is the actual text or image displayed, padding is the space between the content and border, border is the line around the content, and margin is the space around the border.

## CSS Layout

CSS can also be used to create responsive layouts that adjust to different screen sizes. There are various layout techniques, including:

- **Floats:** allows elements to be positioned next to each other
- **Flexbox:** provides flexible container layout
- **Grid:** allows for a more complex layout structure

### Floats

CSS floats are a powerful layout tool that allow you to position elements in a specific direction within their parent container. By floating elements left or right, you can create interesting and flexible layouts that adjust to different screen sizes.

Here's a quick example of how to use CSS floats:

Let's say you have a simple HTML page with a header, main content area, and sidebar. You want the sidebar to appear on the right side of the content area, but you also want the content area to expand to fill the remaining space in the container. Here's how you could achieve that using CSS floats:

```html
<style>
    /* float the sidebar to the right */
    .sidebar {
        float: right;
    }
    /* expand the content area to fill the remaining space */
    .content {
        overflow: hidden;
    }
</style>

<body>
    <header>
        <!-- header content here -->
    </header>
    <div class="container">
        <div class="content">
            <!-- main content here -->
        </div>
        <div class="sidebar">
            <!-- sidebar content here -->
        </div>
    </div>
</body>
```

In this example, we've set the `float` property of the `.sidebar` element to right. This causes the element to be positioned on the right side of its container, and any elements following it in the HTML flow will appear on the left side. We've also set the `overflow` property of the `.content` element to hidden. This allows the element to expand to fill the remaining space in the container and prevents any content from appearing beside the floated sidebar.

CSS floats are a powerful tool for creating flexible layouts, but they can also be tricky to work with. Be sure to test your layouts on different screen sizes and browsers to ensure they look great for all users.

### Flexbox

CSS Flexbox is a layout system that allows you to create dynamic and flexible layouts with ease. With Flexbox, you can easily align and distribute elements within a container, regardless of their size or content.

Here's an example of how to use CSS Flexbox:

Let's say you have a container with three child elements that you want to display horizontally, with the second element aligned to the right side of the container. Here's how you could achieve that using Flexbox:

```html
<style>
    .container {
        display: flex;
        justify-content: space-between;
    }

    .item-2 {
        margin-left: auto;
    }
</style>

<body>
    <div class="container">
        <div class="item-1">
            <!-- content here -->
        </div>
        <div class="item-2">
            <!-- content here -->
        </div>
        <div class="item-3">
            <!-- content here -->
        </div>
    </div>
</body>
```

In this example, we've set the `display` property of the `.container` element to `flex`. This tells the browser to use the Flexbox layout system for the container and its child elements. We've also set the `justify-content` property of the container to `space-between`. This distributes the child elements evenly within the container, with extra space between each element. Finally, we've added `margin-left: auto` to the `.item-2` element. This pushes the element to the right side of the container, while still allowing the other elements to be distributed evenly.

CSS Flexbox is a powerful tool for creating dynamic and flexible layouts, and it can be used for a wide variety of applications. With a little practice, you'll be able to create beautiful and functional designs that work well on all devices and screen sizes.

### Grid Layout

CSS Grid Layout is a powerful tool for creating complex and responsive layouts. With Grid Layout, you can easily create rows and columns of elements, and control their size, spacing, and alignment.

Here's an example of how to use CSS Grid Layout:

Let's say you have a container with six child elements that you want to display in a 3x2 grid. Here's how you could achieve that using Grid Layout:

```html
<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
    }
    .item {
        background-color: #ccc;
        padding: 20px;
    }
</style>

<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
</body>
```

In this example, we've set the `display` property of the `.container` element to `grid`. This tells the browser to use the Grid Layout system for the container and its child elements. We've also set the `grid-template-columns` property to `repeat(3, 1fr)` and `grid-template-rows` property to `repeat(2, 1fr)`. This creates a 3x2 grid with each cell taking up an equal fraction of the available space. Finally, we've added `gap: 10px` to the `.container` element. This creates a 10 pixel gap between each element in the grid.

CSS Grid Layout is a powerful tool for creating complex and responsive layouts. It can be used for a wide variety of applications, from simple grids to complex multi-column layouts. With a little practice, you'll be able to create beautiful and functional designs that work well on all devices and screen sizes.

## Conclusion

In conclusion, CSS is a powerful tool for designing and styling websites. Understanding the basics of CSS syntax, selectors, properties, and values is essential for creating visually appealing and functional websites. We hope this lecture has provided you with a solid foundation for CSS and we look forward to exploring more advanced CSS concepts with you in future lessons.

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./08-basic-css.pptx').default} />

## Exercise

You must complete [Ex7: Checkerboard](../../exercises/checkerboard) by the assigned due date.

## Code Examples

- [examples/08-basic-css](https://github.com/umass-cs-326/examples/tree/main/08-basic-css)

You can view all of the examples by cloning the [examples repository](https://github.com/umass-cs-326/examples).

## Resources

### MDN Web Docs

- [CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
  - [Learn CSS Grid in 5 Minutes](https://www.freecodecamp.org/news/learn-css-grid-in-5-minutes-f582e87b1228/)
  - [Basic Concepts of Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

### Video

- [CSS Grid in 100 Seconds](https://youtu.be/uuOXPWCh-6o), Fireship

### VSCode

- [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension we will end up using quite a bit for several weeks.