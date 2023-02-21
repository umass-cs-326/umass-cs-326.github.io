# Git Basics & Workflow Overview

Below is a video going over the basics of Git and GitHub and the typical workflows one might find themselves going through. All the information from the video is contained in this guide as well.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Sb_kD1IHm98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Git works on the concept of local and remote **repositories**, and GitHub is a website that hosts remote repositories.

The most basic aspects of git are those of **commits**. A commit is a _bundle_ of changes to the codebase.

- Each commit has a unique hash to identify it
- Has a time and date stamp
- Has a user associated with it

A commit keeps track of who changed what and when they did it. It's very useful to help fix things when something goes wrong. For example: someone adds a commit and all the code breaks, you can easily narrow it down to specific files and line numbers that were changed in that commit.

## Git Commands

`git init` - Initialize a new local repository

`git clone <repo_url>` - Copies an existing remote repository into a new folder on your machine

`git add .` - Adds all files that were modified to be staged for commiting. You can do `git add <file>` for specific files.

`git commit -m "your message"` - Commit the added changes with a short message describing the changes. If you don't use -m, Git will open up Vim to allow adding a longer message.

`git push origin <branch>` - Pushes the changes to a particular branch. By default, `git push` should push to the main/master branch on the remote, but you can specifiy other branches as well.

`git status` - Shows the state of the modified or added files in the repository.

`git pull` - Grabs changes from the remote repo to your local one.

`git branch` - Lists out all the existing branches on the local repo.

`git checkout -b <branch_name>` - Creates and switches to a new branch. Remove the `-b` if you only want to switch to an existing branch.

`git switch <branch_name>` - Another way to switch branches.

`git merge <branch_name>` - Merges working branch to main/master (do this on **main/master**!). If you can, do this through GitHub so you can view all potential merge conflicts in a clean UI (The VSCode git extension also allows you to do this)

`git log` - Shows a history of commits to the repository.

---

## Scenario 1: Initializing - Local Repository to GitHub

1. In your project folder, open the terminal and run `git init`
2. On GitHub, create a new empty repository and copy the URL
3. On your local folder, add all the files to your repo with `git add .`
4. Stage your changes for committing with `git commit -m "your_message"`
5. Run `git branch -M main`
6. Run `git remote add origin <github_repo_url>`
7. Run `git push -u origin main`

You should now see all your commited files from the local repo on the GitHub repo.

---

## Scenario 2: Initializing - Cloning From GitHub

1. Open the terminal in a folder that will store the repository
2. Copy the URL of your GitHub repository
3. In the terminal, run `git clone <github_repo_url>`

_Note to students: Watch out for which folder your terminal is open in when running these commands. Make sure you are not cloning repositories inside other repositories, keep your assignments in their own folders! The video walks through this more carefully._

---

## Scenario 3: Working with Branches

1. Create a new branch with `git checkout -b <branch_name>`. This will create and switch you over to this new branch.
2. Make some changes to your project.
3. Run `git add .` and `git commit -m "your_message"`
4. Run `git push origin <branch_name>`
5. Run `git switch main` (or master, depending on your git)
6. Run `git merge <branch_name>`. If there are no merge conflicts, this should happen smoothly, otherwise you will be alerted to the conflicts and can fix them in VSCode, or create a pull request on GitHub and resolve the issues there.

---

## Important Links and Extras

### Launching VSCode with `code .`

- [MacOS](https://code.visualstudio.com/docs/setup/mac)
- [Windows](https://code.visualstudio.com/docs/editor/command-line)

### Renaming default git branch to main:

`git config --global init.defaultBranch main`
