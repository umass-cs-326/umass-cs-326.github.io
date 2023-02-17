# B02 Git Commands

## Overview

In this lab, we will continue learning about and practicing Git and GitHub.

---

## A Recap

Git is a tool for managing the development of your software. It helps manage versions of code and allows you to rollback, and helps teams collaborate. For an oversimplified comparison, it's like Google Drive for code.

Git works on the concept of local and remote **repositories**, and GitHub is a website that hosts remote repositories.

---

## Git Basics

The most basic concepts in git are those of **commits**. A commit is a _bundle_ of changes to the codebase.

- Each commit has a unique hash to identify it
- Has a time and date stamp
- Has a user associated with it

A commit keeps track of who changed what and when they did it. It's very useful to help fix things when something goes wrong. For example: someone adds a commit and all the code breaks, you can easily narrow it down to specific files and line numbers that were changed in that commit.

### Git Commands

`git init` - Initialize a new local repository

`git clone <repo_url>` - Copies an existing remote repository into a new folder on your machine

`git add .` - Adds all files that were modified to be staged for commiting. You can do `git add <file>` for specific files.

`git commit -m "your message"` - Commit the added changes with a short message describing the changes. If you don't use -m, Git will open up Vim to allow adding a longer message.

`git push origin <branch>` - Pushes the changes to a particular branch. By default, `git push` should push to the main/master branch on the remote, but you can specifiy other branches as well.

`git pull` - Grabs changes from the remote repo to your local one.

`git branch` - Lists out all the existing branches on the local repo.

`git checkout -b <branch_name>` - Creates and switches to a new branch. Remove the `-b` if you only want to switch to an existing branch.

`git switch <branch_name>` - Another way to switch branches.

`git merge <branch_name>` - Merges working branch to main/master (do this on **main**!). If you can, do this through GitHub so you can view all potential merge conflicts first.

### Linking local git projects to GitHub

1. Create an empty repository on GitHub. Unless the repo will contain sensitive material, keep this public
2. Initialize a new local git repository with `git init`
3. Go to the local copy of the repo that you want to store in GitHub
4. Use the following command to set the upload source origin, or **remote** as the GitHub repo you just created

   `git remote add origin <repo link>`

5. Check that your remote is set correctly

   `git remote -v`

6. Commit and push your changes.

---

## GitHub lab activity

Please accept the following GitHub assigment and submit your activity. 

[GitHub_Classroom_Link](https://www.GitHub.com/)

### TODO

1. Create a local copy of the lab activity
2. Open the repository locally on VS Code
4. Create a branch `my-branch` to edit README.md
5. Switch to `my-branch`
6. Edit the contents of README.md in `my-branch`
7. Add and commit changes to `my-branch`
8. Switch back to main
9. Merge contents of `my-branch` into main/master
10. Push changes to origin main
12. That's it!
