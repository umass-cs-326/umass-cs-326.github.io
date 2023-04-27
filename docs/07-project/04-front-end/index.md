# Pr4: Front-End

## Objective

The goal of this part of the project is to take your user interface design from Pr3 and design and implement front-end logic in JavaScript to provide user interaction and prepare your front-end for the eventual communication to a back-end server. This will require your team to identify points in your front-end where you require data and information from the back-end and design and develop components (e.g., functions, classes) that can be used to eventually retrieve that implementation.

## Information

See the calendar for due dates.

## Submission

You must submit the following to complete this assignment:

1. **Team Submission** Push all changes to your GitHub repository before the due date. You do not need to submit anything to Moodle. We will take your last commit before the deadline as your submission. All team members must add commit, and push to the repository. We will ask you about your contributions in the Grade Reflection survey, so be prepared to provide evidence of your contributions. See the [Version Control](#version-control) section below for additional information and requirements.
2. **Individual Submission:** Complete the Grade Reflection survey associated with this assignment on Moodle. You will be asked to reflect on your team's performance and your individual contributions to the project. Everyone on the team must complete the survey. You will be asked to provide evidence of your contributions to the project. **We will not review your project until you have completed the Grade Reflection survey.**

Helpful Links:

- [Project information in the syllabus](https://umass-cs-326.github.io/docs/information/syllabus/#team-project)
- [Project requirements](https://umass-cs-326.github.io/docs/project/)

## Starter Kit

There is no starter kit. Use your project repository from the previous project assignment.

## Tasks

### Task #1: Layer 1 - Browser Data Interface

In this part of the project you need to implement an interface to your applications data in the browser. In particular, you will need to define an interface (functions/methods/classes) that can perform all CRUD operations on the data needed by your application. For example, if you are creating a recipe application that needs to maintain data about recipes, you will need to add a CRUD operation for each recipe. You must be able to create a recipe, read a recipe, update a recipe, and delete a recipe. You should implement this in files that use an appropriate name to identify their intended use.

In addition, you are to use PouchDB to implement your data storage for your application. All your data must be stored and retrieved from PouchDB and calls to PouchDB can only be made inside of the module containing your CRUD operations. You are welcome to have different files for each part of your data model, but each file must only contain CRUD operations and access to a PouchDB database.

:::note

**In the next project assignment you will be required to replace this functionality with calls to the back-end HTTP server. We will hold off on this for now so we can more fully complete the front-end UI part of your application.**

:::

**At the completion of this task, your implementation must include:**

- A JavaScript file(s) that implement functions, classes, methods that interact with PouchDB
- Functions, classes, methods that implement the CRUD operations to that data
- Comments

### Task #2: Layer 2 - Implement Front-End Functionality

The completion of this task depends on your application. However, your application must demonstrate many of the aspects we have covered in our exploration of the front-end Browser/UI part of this course. You are required to create a fully functional front-end that is (1) rendered into the browser, and (2) allows you to interact with the application as if it were connected to a remote HTTP server. In particular, you are to further develop out your front-end UI and add functionality to support the UI functions you provide to the user. For example, for a recipe application I would want my UI to be able to **create** a new recipe, **read** an existing recipe, **update** an existing recipe, and **delete** an existing recipe. That is, I want to be able to create, modify, and remove recipes as well as display them to the user.

:::note

This part of the implementation must make calls to the functions, methods, and/or classes you implemented in Task #1 if it involves data. Note, you should not implement anything in this layer that directly talks to the PouchDB database.

:::

**At the completion of this task, your implementation must include:**

- An HTML file or set of files that contain HTML
- A CSS file(s) that provide styling rules
- A CSS rule(s) using IDs
- A CSS rule(s) using classes
- A JavaScript file(s) that implement the behavior of the program
- HTML files must use `<link>` and `<script>` tags to pull in CSS and JavaScript files
- DOM methods such as `getElementById` or `getElementsByClass`
- User interactivity using `addEventListener`
- Functionality to update the DOM after data has changed in your application
- Iteration (e.g., for, while)
- Branching (e.g., if/else)
- One or all of the following: functions, classes, objects
- Comments

### Task #3: Mock Data

This task is not so much about implementation as it is about testing. You are required to add mock (fake) data into your application to make it look real in your implementation. We recognize that not everything will work yet as we still have a number of weeks to go into the semester, however, providing mock data into your application will allow you to test your application manually and give it a look and feel of a real application.

:::note

This part of the implementation is used by the calls to the functions, methods, and/or classes you implemented in Task #1. A good way to do this is to implement an initialization function that loads this data into the PouchDB database if the database doesn’t already exist.

:::

**Here are some websites your might want to check out to help with this:**

- [Mockaroo](https://www.mockaroo.com/), Random Data Generator and Mocking Tool
  - We recommend generating JSON and using that in a JavaScript file
- [Lorem Ipsum](https://www.lipsum.com/), Generating dummy text
- [Lorem Picsum](https://picsum.photos/), The Lorem Ipsum for photos
- [Generative Placeholders](https://generative-placeholders.glitch.me/), Use generative art as your image placeholders

## Version Control

Each team member is required to have at least 10 commits for this project assignment. Your commits should be useful and sensible and provide quality commit messages. There are many ways in which to write good Git commit messages. Here is a good approach to doing it:

- [How to Write Better Git Commit Messages – A Step-By-Step Guide](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)