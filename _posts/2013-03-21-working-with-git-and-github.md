---
categories: refreshdc
date: 2013-03-21 19:13:45 -0400
layout: application
title: "Working with Git and GitHub"
---

Presented by [Matt Yoho](http://mattyoho.com/).

## Git: Distributed version control

- A repository tracks the history of a project. Generally one project per repository.
- Commits are git's atomics units.
- `git show` displays the content of the most recent commit.
- Stages of a file: changed => staged => committed
- `git show` plus a commit ID will show that commit.
- `git show HEAD` is synonymous with `git show`.
- `git revert` plus a commit ID will rollback changes to the provided commit ID.

### Branching and Merging

- One of the most awesome things about git!
- Branches allow you to try out ideas quickly and cheaply. Keep what works. Throw out what doesn't.
- `master` doesn't have to be the name of the primary timeline for a project. But... You'd be crazy pants to change that.
- `git log --oneline` prints out a nicer-looking log.
- `git diff HEAD master` in a branch will compare `HEAD` of that branch to what's in master.
- [git-media library](https://github.com/schacon/git-media) for storing large assets like PSDs or Illustrator files.

### GitHub

- `git fetch` pulls code down. `git pull` fetches and merges in one step.
- You can use GitHub for almost every action you'd take on a repository from the command line: Adding files, editing files, viewing commits, creating branches, etc.


## Further Learning

- [Git](http://git-scm.com/)
- [GitHub Help](http://help.github.com/)
- [GitHub Training](http://training.github.com/)