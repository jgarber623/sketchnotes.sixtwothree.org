---
categories: aneventapartdc
date: 2012-08-06 16:34:48 -0400
layout: post
title: Rolling Up Our Responsive Sleeves
---

Presented by [Ethan Marcotte](http://ethanmarcotte.com/).

- [Henry Adams](http://en.wikipedia.org/wiki/Henry_Adams): "Chaos was the law of nature; Order was the dream of man."
- [Samuel Johnson](http://en.wikipedia.org/wiki/Samuel_Johnson)
- The Rise of the [Digital Omnivore](http://en.wikipedia.org/wiki/Digital_Omnivore)
- Garret Keizer: "Solve the parts, not the whole problem"

## Layout ##

- Give [The Great Discontent](http://thegreatdiscontent.com/) another look.
- A responsive design has a flexible foundation.
- Small-screen friendly by default. This is the way to go!
- Mobile first prevents broken layouts on devices that don't understand media queries.
- [Bryan and Stephanie Rieger](http://yiibu.com/): "The absence of support for `@media` queries is in fact our first `@media` query."

## Starting Small ##

As available real estate changes, questions about the following come up:

1. Width
2. Heirarchy
3. Interaction
4. Density

- If you're finding content that doesn't fit in the mobile context, ask yourself: "Does this content make sense in any context?"
- "Simplify your content before you supress."
- LukeW's article [RESS: Responsive Design + Server Side Components](http://www.lukew.com/ff/entry.asp?1392)
- [Contents Magazine](http://contentsmagazine.com) uses a similar navigation approach to [Viget](http://www.viget.com): Content-first, then navigation.
- [Grey Goose's website](http://greygoose.com/) has been brought up a couple of times by several speakers.
- Design your source order.
- We've been too focused on columns. Let's refocus on content.
- It's time to move past breakpoints tied to devices that exist _now_. Breakpoints should be tied to _your_ content.
- [Paul Robert Lloyd's personal site](http://paulrobertlloyd.com/) is pretty amazing.
- On the Boston Globe site, responsively promote an ad's position based on available horizontal real estate.
	- `<div data-adname="CENTRAL" class="ad ad-slot-a"></div>`
	- See Ethan's "How It Works" slide for more on the implementation
- See Mark Boulton's [Responsive Advertising post](http://www.markboulton.co.uk/journal/comments/responsive-advertising).
- [http://m.people.com/](http://m.people.com/) served to 7-inch tables and lower.

## Media and Images ##

- [This Is Made By Hand film series](http://thisismadebyhand.com/) uses some JavaScript to pull dimensions of a video on page load. When changing browser size or orientation, the JavaScript resizes based on the original dimensions.
- [Creating Intrinsic Ratios for Video](http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/): Use to create completely ratio-aware videos that resize proportionally without the stuttering introduced by JavaScript.
- Ethan recommends against using [this](https://github.com/filamentgroup/Responsive-Images/). **Avert your eyes!**
- The Responsive Images JavaScript worked great until asset pre-fecthing came into being. Small images would load before the script could fire and feed the user the larger image.
- [Wilto](http://www.w3.org/community/respimg/2012/08/04/picture-in-the-html5-spec/): "`picture` is tentatively slated for inclusion under the HTML5 umbrella, rather than being pushed to HTML.next."