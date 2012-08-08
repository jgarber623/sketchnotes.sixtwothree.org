---
layout: application
title: "Responsive Web Design Workshop"
date: 2012-08-08 09:02:24 -0400
categories: aneventapartdc
---

Presented by [Ethan Marcotte](http://ethanmarcotte.com/).

## Introduction ##

- [suck.com](http://www.suck.com/): one of the earliest ad-supported content sites. More on [Wikipedia](http://en.wikipedia.org/wiki/Suck.com).
- Access to content is one of the fundamental design principles of the Web.
- Seminal article: [To Hell with Bad Browsers](http://www.alistapart.com/articles/tohell/)
- Seminal article: [A Dao of Web Design](http://www.alistapart.com/articles/dao/)

> We must accept the ebb and flow of things.

- [Interactive Architecture](http://www.interactive-architecture.com/) by Michael Fox & Miles Kemp
- Examples: [Designing Monsters](http://designingmonsters.com/), [Andersson-Wise Architects](http://www.anderssonwise.com/), and [AIDS.gov](http://aids.gov/), the first American government site to launch with a respnosive web design.
- [BBC's responsive news experiments](http://responsivenews.co.uk/news)
- On People Magazine's new [mobile-specific site](http://m.people.com/): The decision was made to spend more up-front time/money/effort on building a responsive site as it would save time/money/effort in the long term. The end goal is to slowly roll this design out to more and more devices.
- **Do not define breakpoints upfront.** Instead, start with content and content heirarchy.
- When designing responsively, get out of Photoshop as early as you feel you can.
- Kevin Hoffman: "Sketch mobile first, then adapt from there."
- Brad Frost's [Test on real mobile devices without breaking the bank](http://bradfrostweb.com/blog/mobile/test-on-real-mobile-devices-without-breaking-the-bank/)
- Mobile Portland's [Device Lab](http://mobileportland.com/content/device-lab-update-creating-non-profit-setting-board-and-moving-forward)
- Mobile first **and** Content first: ensure that each piece of content has the right to be on the page.

## The Flexible Grid ##

- [Media Queries](http://mediaqueri.es/): not all sites are _strictly speaking_ responsive, but they use some manner of technology to ensure that their content is accessible across devices.
- Responsive design is a subset of adaptive design.
- Adaptive examples: [Focus](http://mikedidthis-focus.tumblr.com/) and [FEMA](http://www.fema.gov/).
- [Jan Tschicold's](http://en.wikipedia.org/wiki/Jan_Tschichold) _Die Neue Typographie_

Mark Boulton, [A New Canon](http://vimeo.com/35719862):

> Think "content out," not "canvas in."

- The Formula: `target ÷ context = result`
- The focus here is on proportions, not pixels.
- [Sass' `percentage()` function](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#percentage-instance_method): `percentage( 200px / 800px )`

### Margins & Padding ###

- Check out [The Great Discontent](http://thegreatdiscontent.com/)'s buildout
- The Formula is not just for widths: it can be used for any horizontal measurements.
- For margin and padding, the context is the same as the context of the element to which you're applying the margin and padding. Look for the first established width above the element.
- **You can't calculate borders in percentages**.
- Possibly use `em`s for vertical measurements. Avoid fixed heights: Use `min-height` and set them in `em`s whenever possible.

### Learning to Love/Survive Rounding ###

- John Resig's 2008 blog post [Sub-Pixel Problems in CSS](http://ejohn.org/blog/sub-pixel-problems-in-css/)
- Generous gutters help.
- Floating the last column/module in the opposite direction can help.
	- See: OOCSS' `.lastUnit` class in the [Lines & Grids section](http://oocss.org/grids_docs.html) of the documentation.
- `display: table-cell` can help.
- Examples of responsive frameworks: [Golden Grid System](http://goldengridsystem.com/) and [Foundation](http://foundation.zurb.com/)
- Frameworks are great for prototyping, but can incur substantial maintenance debt. Most are desktop-centric.

### Design your Content Heirarchy ###

- This is effectively designing your source order.
- 

## Images & Media ##


## Media Queries ##


## Advanced Layout Trickery ##


## Process, Patterns, and Q&A ##


