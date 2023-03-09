# B05 `Event` Handling

_There is no submission for this lab_

## Overview
In this lab we will delve into the details of `Event` handling in JavaScript, and apply this knowledge to a few exercises.

## Events

In the context of the web, an **`Event`** is when a user performs some action on a webpage, e.g. clicks a link, refreshes the page, scrolls down, downloads an image, etc. Linking these actions to meaningul functionality is key to creating dynamic webpages This is what separates the current web from the static nature of the the early web. When users interact with a page, they expect to see feedback from the page that guides them through to their goals, e.g. making a purchase, sending a message, playing a game, liking a video, etc.

Linking `Event`s to this functionality and feedback is called **`Event` handling**: The user performs an action on your page, and you want to "handle" that event through a function that provides live feedback to the user. You can handle an event through the `addEventListener` method of the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface.

## The `addEventListener` explained
Understanding the `addEventListener` is sometimes confusing for new web programmers, so read this section carefully to clear up points of confusion. To access the `addEventListener` method, you need an instance of the `EventTarget` interface, which is usuually a HTML `Element` like a `button`. Once you have `EventTarget`, you can "listen" for some `Event` to occur on that `EventTarget`, like a user `click`ing it.