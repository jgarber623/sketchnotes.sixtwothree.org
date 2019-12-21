---
category: aneventapartdc
date: 2013-08-06T08:44:34-0400
title: The Long Web
---

Presented by [Jeremy Keith](http://adactio.com/).

## The Origins of Text

- The development of language is what makes us human. This enabled us as a species to create civiliation.
- The Library of Alexandria: We don't know what the world would look like today if it hadn't burned down.
- Thomas Cahill's [How the Irish Saved Civilization](http://en.wikipedia.org/wiki/How_the_Irish_Saved_Civilization)
- Chicago police chief [Francis O'Neill](http://en.wikipedia.org/wiki/Francis_O%27Neill) wanted to preserve traditional Irish folk music in America during the Potato Famine. Recruited pipers, fiddlers, etc. onto the police force. He collected them in [O'Neill's 1001](http://www.amazon.com/ONeills-1001-Dance-Music-Ireland/dp/0786616032).
- [ABC notation](https://en.wikipedia.org/wiki/ABC_notation): shorthand form of musical notation

## URL-first Design

- URLs are core to the Web, but most importantly, they are core to the Long Web.

> URLs are the one universal syntax of the Web.

- Make URLs guessable and hackable. Let URLs be an interface element; an API.
- [Pattern Primer](https://github.com/adactio/Pattern-Primer)


## Navigation Second

- Content first in the markup, navigation second.
- Use an anchor link in the markup to direct users to the navigation (e.g. `<a href="#nav">...</a>`)


## Input

- On [The Session](http://www.thesession.org/), password fields are shown by default with an optional "Hide password" checkbox.
- Proposed `inputmode` attribute not generally useful yet, but the `pattern` attribute can be used with a `type="number"` field to mimic the proposed attribute.
- [`<datalist>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) as a JavaScript-less search-ahead/autocomplete-style input.


## Progressive Enhancement

- Design trends come and go, but progressive enhancement remains.
- Progressive Enhancement is not about people who switch off JavaScript. It's about expecting the unexpected. The problem with relying on JavaScript is that it's a single point of failure.
- Browser's built-in error handling for HTML and CSS is much better than JavaScript's model. The browser will ignore HTML and CSS it doesn't understand, moving on to the next thing.
- The Session's progressively-enhanced "Sheet Music" buttons use JavaScript to generate an SVG version of the sheet music.
- Jeremy's [Canvas Sparkline](https://github.com/adactio/Canvas-Sparkline) and Tom Ashworth's [sparksvg](https://github.com/phuu/sparksvg)
- You can embed JavaScript in an SVG and pass parameters to the file (e.g. `file.svg?0,1,2,3,4`). You can also have CSS and media queries inside of SVG.
- Use with extreme care and caution: `<link rel="dns-prefetch" href="...">` and `<link rel="prefetch" href="...">` and `<link rel="prerender" "...">`


## The Long Web

- [Future Friendly](http://futurefriend.ly/) acknowledges that the best way to be future friendly is to be backwards compatible.
- [The Long Now Foundation](http://longnow.org/) promotes (incredibly) long-term thinking.