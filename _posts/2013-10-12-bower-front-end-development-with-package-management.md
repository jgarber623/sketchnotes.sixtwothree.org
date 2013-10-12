---
categories:
date: 2013-10-12 15:18:17 -0400
layout: post
speakers:
  - name: David DeSandro
    url: http://desandro.com/
title: 'Bower: Front-End Development with Package Management'
---

Presented by [David DeSandro](http://desandro.com/).

## All those dependencies…

- What do you use?
- Where do you put it?
- How do you keep track of it?

We use lots of "stuff" on every project. The problem now is dealing with all of these things. Akin to having a messy desk.


## Package Management

- A solution to the problem of maintaining all of this "stuff" our projects require.


## What is Bower?

- [Bower](http://bower.io/) is a package manager for the web.
- A command line interface that lets you install various packages from the web (e.g. jQuery).


## Using Bower

- `bower install jquery`
- Install a particular version of a package: `bower install jquery#1.x` to install the latest version of jQuery 1.x.
- `bower search normalize`
- `bower init` will help you generate a `bower.json` manifest for your project.
- `bower install boostrap` will install jQuery as Bootstrap has listed jQuery as a dependency.


## Why Use Bower?

- Other package managers and techniques exist: [Volo](http://volojs.org/), [git-submodules](http://git-scm.com/book/en/Git-Tools-Submodules), [Jam](http://jamjs.org/), [Component](https://github.com/component/component), [Browserify](http://browserify.org/), [Ender](http://ender.jit.su/), etc.
- Bower is special in that it is unopinionated: it provides no way to directly consume packages.
- `bower list --paths`


## Who is using Bower?

- [Flight](https://github.com/flightjs/flight): a component-based, event-driven JavaScript development framework from Twitter
- [Yeoman](http://yeoman.io/)
- jQuery


## Working with Dependencies

- Duplicated code can easily be broken out into simple, reusable modules.
- Each dependency gets its own repository that can be included into other projects. Each dependency (as a result) has its own issue tracker, its own tests, etc.

> Empowering developers to make and distribute their own purpose-built components