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

## Images & Media ##

- `img { max-width: 100% }` shrink-wraps images to the width of their containers.
- Size images slightly _higher_ than your reference design (~125%).
- It may be more appropriate to serve different images at different sizes.
- Screen size does **not** correlate to bandwidth.

### Responsive Images ###

- Regarding the usage of [Filament's Responsive Images](https://github.com/filamentgroup/Responsive-Images/) on the Boston Globe's site: [Preloaders, cookies, and race conditions](http://blog.yoav.ws/2011/09/Preloaders-cookies-and-race-conditions).
- [Adaptive Images](http://adaptive-images.com/)
	- Works with a mobile-first approach
	- Could poetntially show the small `src` from the `img` element and not enhance
- [Responsive images with the `<noscript>` element](http://www.headlondon.com/our-thoughts/technology/posts/creating-responsive-images-using-the-noscript-tag/): a really ugly technique, but interesting nonetheless.
- Content negotiation via third-party service [sencha.io](http://www.sencha.com/).
- Brett Jankford's [Categorizr](http://www.brettjankord.com/2012/01/16/categorizr-a-modern-device-detection-script/)
- Scott Jehl's [picturefill](https://github.com/scottjehl/picturefill/) brings the proposed `<picture>` element to current browsers.

### Backgrounds ###

- `background-size: contain;` preserves original image's proportions and aspect ratio.
- `background-size: cover;` preserves proportions and aspect ratio, but will be as large as possible to cover its container.

### Video ###

- Embedded video doesn't have intrinsic dimensions.
- [Creating Intrinsic Ratios for Video](http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/)
- Size `<object>` element to a reasonable size for small screens (say, 300px).
- [FitVidsJS](http://fitvidsjs.com/): jQuery plugin for fluid width video embeds.
- Craig Mod's A List Apart article, [A Simpler Page](http://www.alistapart.com/articles/a-simpler-page/). Demo: [craigmod.com/bibliotype/demo/](http://craigmod.com/bibliotype/demo/)
- Filament Group's picturefill has optional HD/SD preferences.

## Media Queries ##

- Historically, we've had media types in CSS for quite a long time: `<link rel="stylesheet" media="screen">`.
- Media Queries = media type + query (feature and value): `@media screen and ( min-width: 800px )`
- From the spec, these terms come up frequently:
	- Display area: think of the browser's viewport.
	- Rendering surface: think of the entire display/screen.
- Shared properties: `@media screen and (max-device-width: 480px ), screen and min-width: 480px )`
- Negating a query: `@media not screen and ( min-device-width: 480px )`
- Chaining: `@media screen and ( min-device-width: 480px ) and ( orientation: landscape )`
- CSS pixel vs device pixel: CSS pixels are an abstraction for designers.
- Viewport `meta` element allows us to control/override the layout viewport.
	- `target-densitydpi=high` implemented by Android.
- [CSS Device Adaptation](http://dev.w3.org/csswg/css-device-adapt/): introduces `@viewport` to replace `meta` element.
- Ethan's approach to the viewport `meta` element: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **Simplify your design before you suppress information.**

> If this doesn't have value to our mobile users, then what value does it have to any of our users?

- Multiple backgrounds were used with a single-pixel GIF to do borders between days in the weather module on The Boston Globe site.

### Mobile-first Queries ###

- Starting with mobile styles and building up from there is an additive process.
- One way of developing a mobile-first approach:
	- Start with building out the desktop view.
	- Go to the top of the CSS and quarantine rules inline with `@media`.
	- Consolidate queries at the bottom of the stylesheet.
- Scoped queries: `@media screen and ( min-width: 480px ) and ( max-width: 600px )`
- `em`-based Media Queries: Values are all based on the font size on the `html` element (Default is generally 16px).
- There is no ideal set of breakpoints; hardware is evolving way too fast.
- It's time to refocus on _content_ instead of _columns_. Move past breakpoints tied to specific devices and move to breakpoints that work for the content.
- [The Goldilocks Approach](http://goldilocksapproach.com/) to Responsive Web Design

## Advanced Layout Trickery ##

### Margins ###

- Examples: [The Great Discontent](http://thegreatdiscontent.com/) and [Strange Native](http://www.strangenative.com/) (proportional margins on paragraphs in a content container).
- The Boston Globe pulls ads outside of the containing element/article text.
- Proportional Negative Margins: uses The Formula, measured against the context that the ad sits in.

### CSS3 Features ###

- Multiple Backgrounds: For say, styling blockquotes. Treat these as enhancements and provide fallbacks for older browsers.
- Flexbox: [The specification](http://www.w3.org/TR/css3-flexbox/) is nearly complete.
	- Flexible items by default have an `order` of 0. Setting `order` on flex items will place them in order _after_ the elements grouped as 0.
- [Template Layout Module](http://www.w3.org/TR/css3-layout/) is some kind of witchcraft. This is movement toward **source independence**.

## Process, Patterns, and Q&A ##


