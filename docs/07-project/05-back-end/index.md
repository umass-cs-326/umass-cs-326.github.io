# Pr5: Back-End

## Objective

In this part of the project you will implement a back-end server for your application that your front-end from Pr4 will send requests to. Your back-end will provide both a RESTful API for sending and receiving data, statically serve the front-end code (browser HTML, CSS, and JavaScript), support all CRUD operations, store data in a database, and optionally include authentication. This is the last coding component for the project. Please read the [Project Requirements](https://umass-cs-326.github.io/docs/project/) for further elaboration.

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

### Task #1: Preliminaries

All good software originates from a good organization of source files and other assets. Your project must include two new directories with the following requirements:

- `client`: all client/front-end related code such as HTML, CSS, and JavaScript
- `server`: all server related code such as JavaScript

Your project must also include the following new files at the root level:

- `package.json`: this is where npm dependencies are stored and the `type=”module"` configuration is specified
- `.gitignore`: this will ignore certain files. This file must (at a minimum) include the following:

- `node_modules`
- `.env`

This will ignore the `node_modules` directory in your GitHub repository. You should never commit and push the `node_modules` directory. It will also ignore the `.env` file where you will store your environment variables. You should never commit and push the `.env` file.

You can choose how to organize other files and folders that are required for your project. We will specifically be looking for the above. If your project doesn’t include any of the above folders/files it will not be accepted.

### Task #2: Back-End HTTP Server API

There are two important parts of a web application: the front-end and the back-end. You have completed the front-end of your application in Pr4. In this milestone, you must implement a back-end server that is capable of serving the front-end code and providing an API for that front-end code to send/receive data. The following is a list of requirements for the back-end:

- **REQ #1**: The HTTP server uses the [ExpressJS](https://expressjs.com/) library.
- **REQ #2**: The HTTP server uses HTTP for communication (not web sockets).
- **REQ #3**: The HTTP server statically serves the front-end HTML, CSS, and JavaScript code.
- **REQ #4**: The HTTP server provides API endpoints (routes) for at least one of each CRUD operation.
- **REQ #5**: There must be at least one route that receives JSON from the front-end browser
- **REQ #6**: There must be at least one route that responds with JSON to the front-end browser

### Task #3: Front-End Fetch and Render

A back-end API is more interesting when it is used by the front-end. To complete this task you need to implement a component in your front-end JavaScript code that uses the fetch web API to call your back-end API endpoints. You should implement this code in a separate file and import it into the rest of your application. Your front-end must call each of the API endpoints that you implemented in Task #2. The following is a list of requirements for the front-end:

- **REQ #7**: A separate JavaScript file exists and contains code that calls fetch
- **REQ #8**: Each API endpoint in the back-end server is called by the front-end
- **REQ #9**: There must be at least one fetch that sends JSON to the back-end server
- **REQ #10**: There must be at least one fetch that receives JSON from the server
- **REQ #11**: At least one fetch uses data provided as input from the user (e.g., textbox)
- **REQ #12**: At least one fetch receives data from the server and changes data in the client that is re-rendered to the user interface (e.g., scoreboard, todo list, calculator results)

### Task #4: Back-End Database

An important part of a full-stack web application is persistence. You must use a database in your application. Your database should hold data that is used by the web application. In addition, you must demonstrate that your back-end server communicates with the database and performs all CRUD operations. You may use either PostgreSQL or MongDB as the database management system (DBMS). Your database can either be installed locally or exist in the cloud using ElephantSQL or Atlas. The following is a list of requirements for the database:

- **REQ #13**: The back-end includes code that connects to a database
- **REQ #14**: The back-end includes code that performs CRUD operations on the database
- **REQ #15**: The back-end receives data from the front-end and stores it in the database
- **REQ #16**: The back-end gets data from the database and sends it back to the front-end

### Task #5: Authentication (Optional)

Most web applications provide user login/authentication in some form or another. This allows multiple users to use the application and often share data. Although a full implementation of an authentication system along with an application that supports public/private data and views and other complex sharing scenarios is outside the scope of this project, basic authentication and login functionality is important. This part allows you an opportunity to integrate authentication into your application. The following is a list of requirements for authentication:

- **REQ #17**: The application uses the [Passport](https://www.passportjs.org/) library for login functionality
- **REQ #18**: The application demonstrates a route that is only authorized if the user is logged in

## General Requirements

We expect that you will submit high-quality code that is well written and well documented. This includes the following:

- **REQ #19**: All code is written by you and your team. You may not use code from other projects or from the Internet unless it is properly attributed to the original author.
- **REQ #20**: All code is well documented with comments that describe the purpose of each function, class, and major block of code.
- **REQ #21**: All code is written in a consistent style. This includes consistent indentation, consistent naming conventions, consistent spacing, consistent capitalization of names, etc.
- **REQ #22**: All code is written in “good form”. This includes avoiding code that is overly complex, avoiding code that is overly long, avoiding code that is overly redundant, etc.
- **REQ #23**: All code is written in a way that is easy to read and understand. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #24**: All code is written in a way that is easy to maintain. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #25**: All code is written in a way that is easy to reuse. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #26**: All code is written in a way that is easy to test. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #27**: All code is written in a way that is easy to debug. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #28**: All code is written in a way that is easy to extend. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #29**: All code is written in a way that is easy to integrate. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #30**: All code is written in a way that is easy to scale. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.
- **REQ #31**: All code is written in a way that is easy to secure. This includes avoiding overly complex code, avoiding overly long code, avoiding overly redundant code, etc.

In short...

Deliver code that you would be proud to show to a potential employer. Deliver code that you would be proud to show to your parents. Deliver code that you would be proud to show to your friends. Deliver code that you would be proud to show to your peers. Deliver code that you would be proud to show to your instructor.

Do **not** deliver code that you would be embarrassed to show to a potential employer. Do not deliver code that you would be embarrassed to show to your parents. Do not deliver code that you would be embarrassed to show to your friends. Do not deliver code that you would be embarrassed to show to your peers. Do not deliver code that you would be embarrassed to show to your instructor.

Please submit beautiful code. If it is not, we will not hesitate to tell you.

## Version Control

Each team member is required to have at least 10 commits for this project assignment. Your commits should be useful and sensible and provide quality commit messages. There are many ways in which to write good Git commit messages. Here is a good approach to doing it:

- [How to Write Better Git Commit Messages – A Step-By-Step Guide](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
