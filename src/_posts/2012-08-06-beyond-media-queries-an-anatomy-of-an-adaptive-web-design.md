---
category: aneventapartdc
date: 2012-08-06T15:16:30-0400
title: 'Beyond Media Queries: An Anatomy of an Adaptive Web Design'
---

Presented by [Brad Frost](http://bradfrostweb.com/).

## Principles of Adaptive Design ##

- [Ubiquity](#ubiquity)
- [Flexibility](#flexibility)
- [Performance](#performance)
- [Enhancement](#enhancement)
- [Future-Friendly](#future-friendly)

### Ubiquity ###

- [Stephanie Rieger](http://stephanierieger.com/diversity-is-not-a-bug/): "Diversity is not a bug... it's an opportunity."
- Give people what they want when they access the web.

### Flexibility ###

- Embrace the squishiness!

### Performance ###

- 71% of mobile users expect mobile sites to load as fast if not faster than desktop counterparts.
- 74% of mobile visitors will abandon a site if it takes more than five seconds to load.
- **You have 5 seconds of someone's time.**
- 86% of responsive websites have same page weight for mobile and desktop.
- Performance Is Design. A highly performant website is that much closer to being a solid web experience.
- ["You can't mock up performance in Photoshop"](https://twitter.com/zeldman/status/232560011316977664)

### Enhancement ###

- Responsive Design != One Size Fits All
- There is a difference between support and optimization: The goal is to explain to stakeholders that the goal is to support as many devices as possible, but to optimize for the ones that are in budget/scope/etc.

### Future-Friendly ###

- Acknowledge and embrace unpredictability

## Demo Time ##

- [Demo links](http://twitter.com/brad_frost/status/232552532382187520)
- Scale up images slightly for a boost in apparent quality. Could this be a better solution than doubling all images?
- Social icon loading [is heavy](http://www.zurb.com/article/883/small-painful-buttons-why-social-media-bu).

### [Carousel Best Practices](https://twitter.com/ladanday/status/232563612944834560) ###

Avoid the "Mystery Meat Carousel of Crap!"

- Make sure you actually need one
- Cycle through like items
- Only load what you need
- Be explicit with navigation
	- Dots to indicate pagination on a carousel is ineffective.
	- Next/Previous is better. Also include "x of y" indication.
- Give hints that other content exists
	- Show partial content from next or previous slide.
- Treat touch as an enhancement

### Auxilary Content ###

- Conditional loading: Scott Jehl calls it aggressive enhancement.
- When scrolling on mobile, we're always scrolling through a singular type of content.

Ben Franklin: "When you're finished changing, you're finished."
