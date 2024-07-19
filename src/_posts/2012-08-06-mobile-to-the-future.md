---
title: "Mobile to the Future"
date: 2012-08-06T13:59:47-0400
tags: "aneventapartdc"
---

Presented by [Luke Wroblewski](http://www.lukew.com/).

- Mobile may be the [seventh form of mass media](http://en.wikipedia.org/wiki/Seven_mass_media) after print, recorded sound, motion pictures, radio, television, and the Internet. Theory posited by [Tomi Ahonen](http://mobile7th.futuretext.com/).
- There are more iPhones sold every day than there are babies being born (378,000 vs. 371,000).
- Android and iOS are taking a huge bite out of personal computing market share.
- By the end of 2012, there will be more mobile devices connecting to the Internet than there are people on Earth.
- Mobile is not the desktop, just like desktop is not print.

## The Login Dance ##

- 82% of users have forgotten a site password.
- 5-10% of all sessions led to someone forgetting a password and needing to recover it.
- Steven Hoober: "Mobile must not be a dumbed-down, limited experience."
- Use `<input type="email" autocapitalize="off" autocomplete="off">` for email address form fields.
- [Box](https://www.box.com/) gave a "Show password" option on their login form. Why not flip that around with a "Hide password" button instead?
- Input Masks: `example@me.com` (Twitter does this on their mobile login with the `@` symbol already filled in.)
- Quora: "Let me login wihtout a password on this browser" is selected by default. To login later, you simploy tap on a picture of your user (or login as another user, à la Google).
- [Bagcheck](https://bagcheck.com/): Type your name or email address, auto-complete, then list out possible login approaches that that user has used.
- _The_ login screen for mobile:
	- Don't remove critical features
	- Use input types & attributes
	- Show password by default
	- If possible, save passwords
	- Be flexible in what you accept (name, email address, etc.)
- There's no reason we can't do all of the above on desktop, too.

### New Capabilities open up New Possibilities ###

1. SMS authentication
2. Touch gestures
3. Facial recognition
4. Finger identification

- [Windows 8 picture passwords](http://blogs.msdn.com/b/b8/archive/2011/12/16/signing-in-with-a-picture-password.aspx) are a humane way to handle login. Allows for exponentially more permutations than traditional alphanumeric passwords/PINs/etc.
- Security and usability are not natural enemies.
- `<input type="file" accept="image/*" capture="camera">`
- [Galaxy Nexus facial unlock](http://www.youtube.com/watch?v=5l4D2tn_-kQ)

## The Checkout Process ##

- 75% abandonment rate in 2011 on online shopping carts. That's worse than in years prior.
- Expedia removed the optional "Company" field from their checkout process and upped profits by $12 million overnight.
- Remove optional fields in mobile. Hide irrelevent controls.
- Phone number input mask: `(___) ___-____`
- Ask for ZIP code, then show a list of potential city and state combinations.
- `<input type="text" pattern="[0-9]">`
- Look at how [Square](https://squareup.com/) handles entering credit card information for some pretty awesome input masks.
- Amazon Prime users buy 130% more than non-Prime users thanks to reduced effort (1-Click purchasing, 2-day shipping, etc.).

### Mobile-First Checkout Approach ###

- Autofill through the Contacts API
- Local Purchases: Apple's [Apple Store app](http://itunes.apple.com/us/app/apple-store/id375380948?mt=8) that geolocates stores near you, purchase online, walk into store, someone presents you with the product you bought without you asking.
- [QR-code based grocery shopping in Korea](http://www.springwise.com/retail/homeplus/): subway stations have walls of what appear to be shelves of groceries that customers can scan and have groceries delivered to them at home.
- Self Checkout at the Apple Store with the [Apple Store app](http://itunes.apple.com/us/app/apple-store/id375380948?mt=8).
