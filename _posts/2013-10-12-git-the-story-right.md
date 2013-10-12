---
categories: convergerva
date: 2013-10-12 12:53:18 -0400
layout: post
speakers:
  - name: Jed Schneider
    url: https://twitter.com/jedschneider
title: 'Git: The Story Right'
---

Presented by [Jed Schneider](https://twitter.com/jedschneider).

- Git can be used for deployment, dependency management, dlivery pipelines, and—oh yeah—versioning.
- Commit messages are about telling a good story. Tell your team what your commit is doing.
- `git blame foo.rb` will reveal information about commits in `foo.rb`.
- Reference issue/ticket numbers in commits that resolve or address issues/tickets.
- **Always work in a topic (feature) branch!**
- Rebase and compress work-in-progress commits into a single, meaningful commit when merging into master. Keeps master's history relatively clean with valuable commit messages.
- Use `git rebase -i master` for interactive rebases.


## Resources

- [Git for ages 4 and up](http://blip.tv/open-source-developers-conference/git-for-ages-4-and-up-4460524)
- [Git glog](https://github.com/moshen/Git-Glog)
- [Pro Git](http://git-scm.com/book)
- [Learn to use Git](https://www.codeschool.com/courses/try-git)