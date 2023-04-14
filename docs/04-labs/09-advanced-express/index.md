---
author: Ashir Imran
tags:
  - lab
  - assignment
---

# B09 Advanced Express

## Information

- Please accept the [GitHub Classroom Assignment](https://classroom.github.com/a/Er1drV6U) for this lab

## Submission

_There is no submission necessary for this lab._ We will not be reviewing commits for this assignment.

---

## Introduction

In this lab, we will be exploring a more advanced express-based application compared to the previous in class exercises and lecture examples. The goal is to introduce you to concepts and techniques that will be useful, and in some cases, required in your projects as you begin to develop a backend and link everything together.

There is no submission required for this assignment, but it is **highly recommended** you at least look through the code and ask questions, since these topics will more than likely come up during project development.

## A useful package: nodemon

By now you've probably become tired of having to restart your express server everytime a change is made. Luckily, there's a popular NPM package called **nodemon**, which will restart the express server everytime a change is made to any JavaScript (changes to HTML still requires a manual restart). To use nodemon, simply run `nodemon <file>`. However, in our `package.json` file, we have a script call `start` which runs nodemon for us.

## Exploring the code

Run `npm run start` to start the express server found in `src/server.js` through nodemon.

The application before you is a simple blogging website. We can create a post by giving it a title, and then the content of the post, and hit create. This will display it on our feed of posts on the home page via the post titles. Clicking on one of these titles will take us to a dedicated page for that post, as denoted by the content being displayed, and the URL in the browser. We also have a delete posts button on the home page to start from scratch (this is slightly bugged due to PouchDB, so you might have to reload the page to actually see the feed empty in front of you).

First, go ahead and explore the structure of the code. Read the comments and understand how everything is working together. How are the HTML pages being displayed? How is data being accessed? How does the URL work to take us to blog post pages? Why are there so many files for such a simple application?

### Behind the scenes

There are several things at play here. Namely,

- Serving our static client files to the web browser using `express.static()` middleware
- Splitting off all API routes related to `/posts` in a separate "router" file
- Using a PouchDB database for persistence
- Serving the post page when the URL includes `/post` followed by a unique ID

## Your (optional) task(s)

- You'll notice, out of all the CRUD operations, we are missing the "U", or "Update". There is space in `postsRouter.js` to add a _PUT_ request. This could be whatever functionality you want to add to the posts. Update the title, perhaps? Add more content? Add a like/dislike system? These are all potential types of interactions you might find in your project, so get creative and try something out!
- Having just the title of the posts appear on the home feed is boring. Let's also save the time the posts were created and display that too! Then sort the feed based on newest posts first.
- Add another data type that would get it's own router. This could have it's own page that you need to serve in `src/server.js`, similar to how we handle posts.
