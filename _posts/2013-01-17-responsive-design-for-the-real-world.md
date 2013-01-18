---
layout: application
title: "Responsive Design for the Real World"
date: 2013-01-17 19:00:00 -0500
categories: refreshdc
---

Presented by [Clarrisa Peterson](http://www.clarissapeterson.com/).

## Frameworks

### Foundation

- [Foundation](http://foundation.zurb.com): made by Zurb
- Responsive grids are based on flexible columns. Foundation is based on a 12-column grid.
- [ZURB Soapbox](http://www.zurb.com/soapbox): example site based on Foundation
- Inculdes class names that can be used to show or hide content for particular media queries (e.g. show-for-xlarge, show-for-portrait).

### Prototyping

- Designer/Developer virtuous cycle/feedback loop is key to the responsive design workflow. Prototyping in the browser serves as a moving wireframe. Frameworks make prototyping really easy.
- Make sure all clients/stakeholders understand what's happening in a responsive design.

### Other Frameworks

- [Bootstrap](http://twitter.github.com/bootstrap): made by Twitter
- [Skeleton](http://getskeleton.com)
- [320 and Up](http://stuffandnonsense.co.uk/projects/320andup): Andy Clarke's "small-screen first" framework
- [HTML5 Boilerplate](http://html5boilerplate.com)

### Questions

- **Should the UX Designer learn the framework to build their own prototypes?** Sure! For most frameworks, a basic understanding of HTML is all that's necessary.
- **Is hiding elements in a responsive design a good idea for a production site?** Frameworks are great for prototyping, but include too much for production sites.


## Navigation Patterns

- Brad Frost's [Responsive Patterns](http://bradfrost.github.com/this-is-responsive/patterns.html)
- Example: [Gravitate](http://www.gravitatedesign.com)
- Example: [Temple University](http://www.temple.edu): On mobile, all you can see is navigation

### Toggle Navigation

- Example: [Starbucks](http://starbucks.com): Ye olde Hamburger Icon
- Toggle `max-height` between 0 and some value to show/hide navigation by swapping `class` names.

### Left Nav Flyout

- Example: [Emeril's Restaurants](http://www.emerilsrestaurants.com): this is Ye Olde Hamburger and Basements example.

### Questions

- **Media Queries using `em`s vs. `px`s?** We've started using `em`s instead of `px`s because a pixel isn't *really* a pixel anymore. `em`s can be more consistent across devices as pixel density changes.
- **Using different navigation patterns for different devices?** Make two different navigations in the markup and show/hide based on media query/screen size. This isn't advisable since it's duplicative markup. The ideal is to have one piece of HTML and use CSS to make the navigation look and behave differently.


## Preprocessors

- [Sass](http://sass-lang.com)/[Compass](http://compass-style.org) and [Less](http://lesscss.org)
- They add awesome features like Nesting, Mixins, and Variables
- See [Trevor Davis' presentation on Sass and Compass](https://speakerdeck.com/trevor_davis/sass-and-compass-never-write-regular-css-again) from [July's Refresh DC](http://refreshdc-july2012.eventbrite.com)

	.navbar {
		border-bottom: {
			color: $main-color;
			style: solid;
		}
	}

- `@media` Bubbling: Embed media queries in selectors 


## Responsive Images

- The biggest problem facing responsive design is bandwidth-wasting images.
- `max-width: 100%` on `img`, `object`, and `video`
- The `<picture>` element proposal is akin to `audio` and `video` in structure.
- [Otter Surfboards](http://www.ottersurfboards.co.uk) uses different crops of the same picture for mobile vs. large screen. Uses media queries to do art direction (slightly controversial).
- [Picturefill](https://github.com/scottjehl/picturefill) uses `<divs>` and `data-*` attributes and conditional comments to supply images to various browsers.
- [Adaptive Images](http://adaptive-images.com) is a server-side technique using Apache and PHP. Stores screen size in a cookie and passes that back and forth between the browser and the server.

### Questions

- Adaptive Images is limited in that it fixes you with a particular browser size. Not much of an issue though since web developers are the only people who resize browsers.
- **Responsive background images or sprites?** It can be done! No good solution for background images, though.


## Responsive Data Tables

- [Zurb's Responsive Tables](http://www.zurb.com/playground/responsive-tables): Easy to implement using a single CSS file and a JavaScript file.
- [CSS Tricks' Responsive Table](http://css-tricks.com/examples/ResponsiveTables/responsive.php): Pretty complicated, setting a `table` to `display: block` and do some other heinous things.


## Polyfills

- Code that is added to replicate behavior that doesn't work in all browsers.
- [Modernizr](http://modernizr.com) detects HTML5 and CSS3 features and adds classes to the `html` element.
- Customized Modernizr builds are the way to go. Add only the tests you need!
- HTML5 Cross-Browser Polyfills
- [Respond.js](https://github.com/scottjehl/Respond)


## Questions

- **If you were a browser maker, what would you do to make responsive technology better?** Support for older browsers is a real problem. Browser makers, Microsoft in particular, could do a better job of encouraging users to upgrade. Consistent support across browsers would be super helpful, too!