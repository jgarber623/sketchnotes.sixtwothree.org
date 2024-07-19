---
title: "Strong Layout Systems"
date: 2013-08-06T08:46:17-0400
tags: "aneventapartdc"
---

Presented by [Eric Meyer](http://meyerweb.com/).

> The Web prioritizes ubiquity over consistency.

## History

- Using tables for layout was a hack to work around the limitations of the existing markup of the time.
- CSS 1 was not a layout system. It was meant to be used to change the appearance of content.
- Floats were never intended to be used for layout. Meant to replace the `align` attribute of `img` elements.
- Positioning was originally intended to be a layout system, but the implementation was less-than-perfect. Positioned elements couldn't clear other elements. Floats could, which is how we ended up using floats for layout instead of positioning.

> It is critical for us to see beyond the assumptions rooted in technical limitations that we've been making for years.


## Layout

- [CSS viewport units](http://dev.opera.com/articles/view/css-viewport-units/)

### Flexbox

- `justify-content: space-between;` (also `space-around`)
- [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- `display: flex;` should be applied to the _containing_ element. Child elements have a `flex` property with values such as `auto` and `none`.
- `last-child` and other pseudo-elements care about markup order, not display order.
- Alignment options: `stretch`, `flex-start`, `flex-end`, `center`, and `baseline`

#### Related Tweets

- [Flexbox 'justify-content'](https://twitter.com/meyerweb/status/364759525842104320)
- [Flexbox 'flex-wrap'](https://twitter.com/meyerweb/status/364760268904992768)
- [Defining flexbox containers](https://twitter.com/meyerweb/status/364762179808927745)
- [Altering the layout order of flexible boxes](https://twitter.com/meyerweb/status/364762287413805057)
- [Flexbox 'align-items'](https://twitter.com/meyerweb/status/364762802507890688)
- [Flexbox 'align-self'](https://twitter.com/meyerweb/status/364763035732164608)
- [How to determine the direction of flexbox flow](https://twitter.com/meyerweb/status/364763243102736384)

### Grids

- [W3C CSS Grid Layout module](http://www.w3.org/TR/css3-grid-layout/)
