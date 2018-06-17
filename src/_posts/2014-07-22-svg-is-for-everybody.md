---
categories: aneventapartdc
date: 2014-07-22 13:59:00 -0400
layout: post
title: SVG is for Everybody
---

Presented by [Chris Coyier](http://chriscoyier.net/).

- SVG is flexible, sharp, small, and accessible.

> You might say that SVG is responsive and responsible.

- Using SVGs can be as easy as `<img src="horse.svg">`.
- SVG matters now because support for it ruuuuuuules!
- SVG is a syntax that you can learn, unlike other image formats (One doesn't _learn_ JPG).
- Not a replacement for bitmap or raster graphics, though.


## How do you get SVGs for your website?

1. You could learn the SVG syntax and write some by hand. This is madness.
2. You could make some in a vector editing program like Adobe Illustrator or [Sketch](http://bohemiancoding.com/sketch/).
3. You could also go snag some vector stuff off the Internet (like everyone else!).

- [Export SVG for the web with Illustrator CC](http://creativedroplets.com/export-svg-for-the-web-with-illustrator-cc/)
- The `<g>` element in an SVG represents a grouping and is largely redundant in an SVG for the web.


## How do you use SVGs on your website?

- SVG-as-img: `<img src="clover.svg" alt="clover">`
	- Your server _might_ be serving SVGs with the wrong content type. They should be `image/svg+xml`.
- SVG as background-image: `background-image: url("clover.svg");`
- Inline SVG: You can put `<svg>` in your markup.

### Advantages of Inline SVG

- Shapes are in the DOM and can be controlled with CSS and JavaScript.
- No additional HTTP requests are made.
- You can define an SVG once and use it in multiple places.

SVGs have an intrinsic width and height in the form of a `viewBox`. An SVG also has a viewport which is the size of the element.

- `preserveAspectRatio` ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio)) can be used to position an SVG within its viewBox.
- Combine CSS' `background-size: cover;` with an SVG background image to fill an element with the vector background.


## SVG Templating

Using SVG as a design system (see: [GitHub](https://github.com/)'s interface icons).

	<svg>
		<defs>
			<g id="shape-icon-1">
				...
			</g>

			<g id="shape-icon-2">
				...
			</g>
		</defs>
	</svg>

- The `<defs>` element tells the browser not to render the enclosed paths to the browser.
- Drop `<use xlink:href="#shape-icon-1"></use>` within an `<svg>` element to use a defined path.
- For external files: `<use xlink:href="defs.svg#shape-icon-1"></use>`
- [svg4everybody](https://github.com/jonathantneal/svg4everybody) polyfill for adding external SVG spritemaps to non-supporting browsers.
- The `<symbol>` element ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)) can be used with `<desc>` ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc)) to add notes to an SVG spritemap.
- [Responsive Icons](http://responsiveicons.co.uk/) demo illustrates media queries and SVGs.


## Build Tools

- [IcoMoon](http://icomoon.io/) can help you build an icon font with just the necessary characters. Recently added SVG sprite output.
- [svgo](https://github.com/svg/svgo) can be used to trim out the unnecessary meta data from Illustrator-saved SVGs.


## SVG vs. Icon Fonts

- Any advantage an icon font has, an SVG also has.
- SVG has accessibility built right in with `<title>` and `<desc>`.
- The only thing icon fonts do better than SVGs are support for older versions of IE.


## Dealing with Fallbacks

> Remember, one kind of fallback is nothing. (Like if you're using an icon to enhance a word.)

- [SVGeezy](http://benhowdle.im/svgeezy/) will replace `.svg` with `.png` in `src` attributes.
- Paul Giner's [invisible gradient technique](http://pauginer.tumblr.com/post/36614680636/invisible-gradient-technique) for cross-browser support using CSS.


## SVG Accessibility

- Léonie Watson's [Tips for Creating Accessible SVG](http://www.sitepoint.com/tips-accessible-svg/)
- You can use text (including `@font-face` fonts) in SVGs. The content is accessible and can be sized up or down just like normal text.


## SVG Filters and Blend Modes

- [Microsoft's Hands On: SVG Filter Effects](http://ie.microsoft.com/testdrive/graphics/hands-on-css3/hands-on_svg-filter-effects.htm)


## Animating SVGs

- With `<animate>`
- With CSS `@keyframes`
- With JavaScript (with tools like [snap.svg](http://snapsvg.io/)).

And lastly, [A Compendium of SVG Information](http://css-tricks.com/mega-list-svg-information/).