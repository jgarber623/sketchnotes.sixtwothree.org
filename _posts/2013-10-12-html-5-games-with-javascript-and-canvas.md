---
categories: convergerva
date: 2013-10-12 11:03:52 -0400
layout: post
speakers:
  - name: Dan Tello
    url: http://viget.com/about/team/dtello
title: HTML 5 Games with JavaScript and Canvas
---

Presented by [Dan Tello](http://viget.com/about/team/dtello).

- During the 2012 Olympics, PUMA had to remove references to Usain Bolt as they weren't an official sponsor of the Olympics.


## Canvas

- `canvas` is frequently compared to Flash. It can be abused, much like Flash.
- Frameworks are starting to appear to aid developers (like [CreateJS](http://www.createjs.com/))
- The `canvas` context: `var ctx = canvas.getContext('2d')`
- You can draw `img` elements, `canvas` elements, and `video` elements to a context.
- You can draw pixel-based and vector-based elements to a `canvas`


## Animation

- Game development is based around a central timing loop.
- When animating, the entire canvas needs to be erased before drawing a new frame. Somewhat counter-intuitive if you're familiar with DOM-based animation.
- **Time-based Animation:** It's an easy mistake to use `setTimeout` (pixels-per-frame). Instead, look for pixels-per-second.
- [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame) performs much better. With `setTimeout` your code is _always_ trying to run at 60 times per second, for example. Using `requestAnimationFrame`, the browser will fire events when it is ready and capable.


## Collision

- Simplest method is to draw boxes around your objects and detect if there is intersection in their coordinates.
- Similarly, detect touch and mouse event coordinates and compare to game element positions.


## Audio

- HTML5 `audio` is easy-to-use. Its only downfall is seamless looping.
- Supply multiply formats based on browser playback capabilities.
- `audio` elements can be created on the fly and appended to your page as needed.
- [Run, PUMA, Run](http://www.puma.com/runpumarun) sound effects were created in GarageBand.


## Putting it all together

- [greypants.github.io/blastEngine/](http://greypants.github.io/blastEngine/)
- When writing your game code:
	- Be as organized as possible!
	- Create, extend, and re-use classes.
	- Always Be Refactoring
	- Get code reviews!
- [Class.js](https://github.com/rauschma/class-js) adds standard object inheritance in JavaScript.