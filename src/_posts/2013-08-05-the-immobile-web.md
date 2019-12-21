---
category: aneventapartdc
date: 2013-08-05T15:04:33-0400
title: The Immobile Web
---

Presented by [Jason Grigsby](http://userfirstweb.com/).

> 88% of tablet owners and 86% of smartphone owners use their device while watching TV.

> Xbox 360 \[…\] is used more for watching movies and TV shows \[…\] than playing video games online. — LA Times, March 2012

- [Xbox SmartGlass](http://www.xbox.com/en-US/smartglass) is a digital companion to television content (e.g. a Game of Thrones map to follow along with the onscreen action).
- 2013 model televisions compare incredibly well to an iPhone 4S running iOS6 in the [HTML5 Test](http://html5test.com/).
- Apple’s Remote app makes interacting with controls on a television tolerable, but not perfect.


## Designing for the 10-foot UI

- Make up, down, left, and right directions very clear
- Designs tend to be more grid-based.
- [Tweaking spatial navigation for TV browsing](http://dev.opera.com/articles/view/tweaking-spatial-navigation-for-tv-browsing/) from Opera.
- [Google TV jQuery UI Lib Reference](https://developers.google.com/tv/web/lib/jquery/) — doesn’t work very well on many televisions and recommends replacing anchor elements with `<div>`. Chrome on Google TV was previously owned by a different business unit but has recently been taken over by the Chrome core team.
- TV browsers send d-pad controls as arrow key events (can be hooked in to with JavaScript).
- At the moment, device detection is the best method for attempting to detect a television-based browsers. Admittedly, this sucks, but there are no other options until television manufacturers provide a more interoperable experience.
- Xbox One [can switch instantaneously](http://www.youtube.com/watch?v=sWWZaERtgto) between live TV, games, movies, music, and other apps.
- [You Can’t Detect a Touch Screen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/)

> Input methods are dynamic and transient.

- Boris Smus’ [Interactive Touch Laptop Experiments](http://smus.com/touch-laptop-experiments/)

> Every desktop UI should be designed for touch now. — Josh Clark

- Progressive enhancement was built around the notion that better browsers get a better experience. But, who are we to judge who has the better input? Is a virtual keyboard inherently better or worse than a physical keyboard? What role does context or current circumstance play in this? We need to learn to adapt!
- TVs may suck right now, but it’d be dangerous to dismiss them.

> We can’t predict future behavior from current experiences that suck.