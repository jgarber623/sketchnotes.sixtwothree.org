---
title: "Practical Ways to Make Your Website Accessible"
date: 2013-09-19T19:00:07-0400
tags: "RefreshDC"
speakers:
  - name: "John F. Croston III"
    url: "http://jfciii.com/"
---

John organizes [Accessibility Camp DC](http://accessibilitycampdc.org/).


## Standards and Tools

- Web Content Accessibility Guidelines (WCAG) 2.0: international standard for accessibility on the Web.
- [WAVE](http://wave.webaim.org/) is an easy-to-use tool for displaying accessibility problems on your website.
- [Functional Accessibility Evaluator](http://fae.cita.uiuc.edu/) generates detailed reports on the accessibility of your website.


## Skip Navigation Links

- "Skip to content" is a poor choice because some screen readers will read "content" with the emphasis on the second syllable.
- John's website shows the skip navigation links when you tab around the page.


## Text and Font Size

- The more vertical rhythm and letter spacing a page has, the easier it is to read.
- Size, color, leading, kerning, and measure (the number of characters per line) all factor in to the accessibility and readability of your content.


## Color Contrast

- The range for color brightness difference is 125. The range for color difference is 500.
- Snook's [Colour Contrast Checker](http://snook.ca/technical/colour_contrast/colour.html)


## Links

- A lot of developers don't use `:focus` and `:active` pseudo-classes. These pseudo-classes are incredibly useful for non-mouse interactions.
- StackOverflow discussion about [the difference between `:active` and `:focus` pseudo-classes](http://stackoverflow.com/questions/1677990/what-is-the-difference-between-focus-and-active) (via [Russell Heimlich](https://twitter.com/kingkool68/status/380834790150115328)).
- "Click here" and "Read more" aren't useful link text. Screen readers can read through all links on a page out of context, meaning that these links become meaningless.
- On [army.mil's website](http://www.army.mil/), they use "Read more" links, but include additional text that is hidden to sighted users but available to screen readers.

![Source code from army.mil](http://f.cl.ly/items/1T2p2O2S3H3t0m3B3U3b/Image%202013.09.19%207%3A26%3A38%20PM.png)


## Headings

- [HTML5 and the Document Outline Algorithm](http://coding.smashingmagazine.com/2011/08/16/html5-and-the-document-outlining-algorithm/)
- There's still some debate amongst developers over how to most-accessibily mark up your document with regards to heading levels.


## Tables

- The `headers` attribute on elements matches a cell (`<td>`) with its relevant header (`<th>`).


## Forms

- Use `<fieldset>`, `<legend>`, and `<label>`s!
- **Don't be cute with your labels.** Avoid marketing speak or industry jargon when labeling your form fields.
- Where should `<label>`s go? [LukeW](http://www.lukew.com/) wrote [a great article about positioning form labels](http://www.lukew.com/ff/entry.asp?504).
- Consider internationalization when positioning your form field labels. The German language is looooooooong compared to English.
- Colons are largely unnecessary on form field labels. Screen readers read them and users don't need to hear them.
- Use `<fieldset>` and `<legend>` to describe a set of radio buttons or checkboxes.
- Should form fields be marked up in an ordered or unordered list? Either is a good choice since most forms are a list of questions anyway.


## Search

- Add a fragment identifier in the `action` attribute of a `<form>` element to jump a user (and a screen reader) down to the search results. This way the user won't have to use the skip navigation links.
- `aria-required="true"` on a required `<input>` element.

```
<label for="first-name"><em aria-hidde="true">(Required)</em> First Name</label>
<input type="text" id="first-name" aria-required="true">
```


## ARIA Landmark Roles

- Roles: `application`, `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`
- Semicolon used to be the key to use to navigate through landmark roles. May have changed recently, though.
- Paciello Group's post [Using WAI-ARIA Landmarks](http://blog.paciellogroup.com/2013/02/using-wai-aria-landmarks-2013/) covers in depth all of the ARIA landmark roles.


## Screen Readers and Voice Recognition

- Screen Readers: [NVDA](http://www.nvaccess.org/), [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/‎), [JAWS](http://www.freedomscientific.com/products/fs/jaws-product-page.asp), [Window-Eyes](http://www.gwmicro.com/Window-Eyes/)
- Voice Recognition: [Dragon Naturally Speaking](http://www.nuance.com/dragon/index.htm)
- These tools are fairly expensive (hundreds of dollars) but are indespensible for their users.


John's amazingly detailed and link-filled slides are available at [jfciii.com/presentations/wasp/accessibility.html](http://jfciii.com/presentations/wasp/accessibility.html).
