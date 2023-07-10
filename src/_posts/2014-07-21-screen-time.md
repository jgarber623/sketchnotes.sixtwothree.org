---
category: "aneventapartdc"
date: 2014-07-21T13:59:58-0400
title: "Screen Time"
---

Presented by [Luke Wroblewski](http://lukew.com/).

- In 1952, Don Stookey [experimented on photosensitive glass](http://www.wired.com/2012/09/ff-corning-gorilla-glass/all/) at the Corning Institute. This was the first synthetic glass ceramic.
- Corning's Gorilla Glass is the same previously-shelved 0317 experimental product. It's now in 1.5 billion devices.

> We care about [the display] because we know that's the window to the software. — Tim Cook, Apple CEO

- Online time is screen time. We need an intimate understanding of the screen.


## Know Your Screen

- James Pearce's article, [First, understand your screen](http://tripleodeon.com/2011/12/first-understand-your-screen/)
- Flurry's [Size Matters for Connected Devices. Phablets Don't](http://www.flurry.com/bid/95652/Size-Matters-for-Connected-Devices-Phablets-Don-t)
- There's only a few full-sized tablets out there, but there are a lot of people using them.
- Medium-sized smartphones (3"-5" displays) are very heavily used.
- In the coming years, all the people on the planet will be interconnected and getting information from smartphones and other small, portable devices.


## Output

- Typical desktop computers ~100 pixels per inch
- First generation smartphones ~200 pixels per inch
- Apple's Retina dipslay = 326 pixels per inch
- Samsung's 441 pixels per inch
- LG Optimus Quad HD's 538 pixels per inch (2560×1440 is the same resolution as a 27" desktop display)

> Mo' pixels, mo' problems — Dave Rupert

- Dave Rupert's [The year we all go 4K](http://daverupert.com/2014/01/4K-RWD/)

> Maybe we shouldn't be so gung-ho about these fullbleed images.

- `min-device-pixel-ratio` resolution media query
- In the US, 50% of downstream traffic is from YouTube and Netflix. Device manufacturers know this and are adapting their devices to match users' consumption patterns.
- All of the top 5 selling smartphones last year are widescreen aspect ratio devices.
- Trent Walton's [Vertical Media Queries & Wide Sites](http://trentwalton.com/2012/01/11/vertical-media-queries-wide-sites/)
- [The Statamacist](http://statamicist.com/) uses vertical media queries.
- Vertical media queries can be used to curtail The Myth of The Fold.

1. Trend toward high resolution.
2. Trend toward widescreen aspect ratios.
3. Media queries know about more than width.


## Input

> Any piece of glass you can't touch and interact with will feel broken. – [Steven Sinofsky](https://twitter.com/stevesi/status/419132089976365056)

- We're living in a multi-input world.
- [Polar](http://polarb.com/) optimizes for touch and keyboard interactions.

> Screen size is a poor proxy for input, but it's all we've got right now.

- Media Queries Level 4 include `pointer` (with values of `none`, `coarse`, `fine`), a `hover` pseudo-class check
- New media query properties will auto-update (for instance, if a keyboard is removed from the device)

1. Support **all** the inputs
2. Communicate what's possible (tell the user what they can do with different input types)
3. Screen size is a poor proxy but it's all we've got


## Posture

- "Posture" in this sense is how people interact with output and input.
- 83% of people view Netflix with a 10-foot viewing experience. 44% with a 2-foot viewing experience.
- Roughly 1/2" per foot increase in box art size on Netflix's various interfaces (phone, tablet, PC, and television)
- Google Glass' screen is equivalent to a 25" HD screen viewed from 8 feet away.
- Ergonomics play into design and layout of navigation and control elements on touch screens (based on how users typically hold devices).
- Media Queries Level 4 includes `light-level`

1. Design to human scale
2. And environments
3. Not to screen width

- [Corning's Will Glass](http://www.corning.com/news_center/news_releases/2014/2014020701.aspx): Flexible glass that is thinner than a dollar bill.
