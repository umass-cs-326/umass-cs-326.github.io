# B05 Event Handling

_There is no submission for this lab_

## Overview
In this lab we will delve into the details of event handling in JavaScript, and apply this knowledge to a few exercises.

## Events

In the context of the web, an **event** is when a user performs some action on a webpage, e.g. clicks a link, refreshes the page, scrolls down, downloads an image, etc. Linking these actions to meaningul functionality is key to creating a dynamic website. This is what separates the current web from the static nature of the the early web. When users interact with a page, they expect to see feedback from the page that guides them through to their goals, e.g. making a purchase, sending a message, playing a game, liking a video, etc.

Linking events to thisfunctionality and feedback is called **event handling**: The user performs an action on your page, and you want to handle that event in some way, usually through a function. You can handle an event through JavaScript's `eventListener`, a method of the `EventTarget` interface. The `eventHandler`