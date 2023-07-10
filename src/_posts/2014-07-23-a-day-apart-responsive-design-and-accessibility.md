---
category: "aneventapartdc"
date: 2014-07-23T09:40:26-0400
title: "A Day Apart: Responsive Design and Accessibility"
---

Presented by [Derek Featherstone](http://simplyaccessible.com/).

> Responsive does not mean accessible.

- Parallax motion can cause physical pain to people with cognitive disabilities. These kinds of animations need to be able to be turned off by users.
- You wouldn't ever design a system that only accepts voice input. Always have a fallback! Example given here is Chrome's speech-enabled text boxes. The fallback is the text box.
- iOS' Guided Access let's a user lock down parts of the screen. GIves the user control over the screen and other device controls.


## Needs and Wants

- People with visual impairment need both hardware and software assistance.
- Biggest complaint from attendees at a mobile developer conference was, "Where's the dial tone?" Users who couldn't see the screen wanted the audible feedback, some indication that the phone is ready to be dialed.
- How do we design for people with mobility issues, dexterity issues, etc.?
- Predictive text/autocorrect was originally designed for people with disabilities.
- Some touch screens don't respond to prosthetics (capacitive screens like on the iPhone, for instance).
- Try using your finger, your knuckle, or your elbow to interact with touch screens. How would you change your design based on your experience?
- For users with hearing disabilities (deafness in one ear, for instance), consider sending audio as mono instead of stereo.
- A flashlight icon is a better indicator of search than a magnifying glass. To a user with cognitive disabilities, a magnifying glass could be interpreted as an interface to make the UI larger. A flashlight may more immediately be recognized as searching ("finding something in the dark").
- [Global Accessibility Reporting Initiative](http://mobileaccessibility.info/)
- What if the mobile view of your website had dockable navigation?


## Using VoiceOver

- [Apple's Accessibility Resources](http://www.apple.com/accessibility/resources/)
- `alt=""` will hide images from screen readers. Useful for images not critical to understanding the content.
- Build error messages into form field `<label>`s or programmatically connect it with `aria-describedby`.


## Designing for Low Vision

### Challenges

- Limited view = difficult to maintain context
- Distinguishing between two similar items is tricky for someone with low vision.
- Multiple columns
- Placement of calls to action
- Eye strain/fatigue

> Consider proximity and pattern of use for low-vision.

- Use "The Straw Test" to test wireframes, buildout, designs, etc. It's a low-level simulation of what a low-vision person may experience. It's a great starting point.

> When you project accessibility needs on a design problem, you end up making the design better for everybody.


## Designing for Mobility/Dexterity Issues

### Challenges

- Clicking/tapping small targets
- Controls too close together
- Scrolling through interfaces (e.g. tall forms)
- Fine vs. coarse movements, complex vs. simple actions (e.g. drag and drop vs. taps/clicks)

> You can't scale everything in a responsive design. It does not work.

- How much space should be between elements in a design? Test it with real users!
- Allow for multiple methods to achieve the same goal. Example shown used sliders with an accompanying text input to enter dollar amounts.


## Challenging Responsive Design Patterns

### Hiding

> Emulation does not cut it. You need to test on the real device.

#### Lost Focus Syndrome

- Try [this pattern](http://codepen.io/bradfrost/full/sjiCv) with VoiceOver and notice the problem with focusing elements that are off-screen.

> We want to avoid content that's off-screen taking focus.

- After moving content off-screen, use `display: none` so that it can't take focus. Change display property when the content is ready to be moved back on-screen.

### Sliding

- Try [this site](http://mmenu.frebsite.nl/) with VoiceOver and navigate the slide-out menu.
- New content slides in and overlays existing content but focus gets retained on _old_ content, creating confusion.

> If you change the layout for something, you need to consider a change in interaction, `role`, source order, `alt` text, state, or other property.


## Building Accessible Responsive Components

> Viewport size is not a proxy for anything other than viewport size.

### Forms

- 19-point ([or 16 pixel?](http://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone)) text in a form field will prevent iOS from auto zooming on focused form fields.

### Images

> Some images shouldn't be responsive.

- Images that have content in them (e.g. screenshots) can be rendered illegible if made responsive.

### Tables

- Most current methods kill accessibility.
- Best responsive table solution right now lets users filter out columns.