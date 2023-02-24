---
author: Ashir Imran
tags:
  - lab
  - assignment
---

# B03 Advanced Git

_There is a submission for this lab._

## Overview

As the last of the labs focused on Git, we will be looking at merging branches and dealing with merge conflicts, something that you will most certainly run into when working in teams. We'll also go over the general Git/GitHub workflow again, as well as pull requests.

## Pull Requests

So far, we've been practicing manually merging branches via the command line. While this is fine on a small scale, creating a pull request on GitHub is what you'll be doing more often. Pull Requests are a way to "propose" your changes in a branch, allowing others to review the modified files before merging back to main/master. GitHub will check to see if there are any merge conflicts. If there aren't any, then the incoming changes can be merged. If there are conflicts however, GitHub will let you compare the conflicting files and edit them to ensure the right lines of code remain in main.

If you run into a merge conflict when merging locally and you're using VSCode, you'll be prompted to resolve the issues right in the editor, which can also be handy.

## Merge Conflicts

When working in another branch, you might not have all the up to date contents from main in it. For example, while you branched off to work on a new feature, another team member might have already branched off and merged back into main. If they touched the same files as you, this will result in a **merge conflict** when trying to merge your own branch to main. Git/GitHub will require you to resolve these issues and decide which changes are kept in the final merge, and this can be done in the two ways mentioned above.

## Submission

Please accept the [GitHub Classroom Repository](https://) for this lab. There are two parts to this assignment: the first is practicing some basic git procedures, and the second is creating and resolving a merge conflict.

You must submit the following to complete this assignment:

- The assignment contains a `README.md` file that contains instructions on what to do for each of the two parts. Complete each of the steps in order.
- Push all changes to your GitHub repository by **2/23 11:59PM**. You
  do not need to submit anything to Moodle. We will take your last
  commit before the deadline as your submission.

Please be sure to ask the staff for help if you get stuck or have any questions.
