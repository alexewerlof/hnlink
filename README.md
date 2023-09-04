# Intro

[This](https://hnlink.alexewerlof.com/)
is a tiny web application that takes a URL and
title to generate a link that will directly take you to the Hacker News submit page.

The link can be copied in plain text or rich text format.

▶️ [Try it!](https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fhnlink.alexewerlof.com%2F&t=Hacker%20News%20Link%20Generator)

## Use case

Putting a link in your pages (e.g. blog posts
or newsletters) to make it easier for your
readers to share it on Hackernews.

If a post has already been submitted, a resubmit counts as an upvote.

## How does it work?

Hacker News has at least two endpoints for submitting links:

1. `submit`: The submit page which is used when clicking on the "Submit" (in the header) once you are logged in: https://news.ycombinator.com/submit
2. `submitlink`: The submit link page which is used by the official bookmarklet that's linked from the page above: https://news.ycombinator.com/submitlink

This simple app takes the following two parameters from the form:
* `u`: The link URL
* `t`: The link title

It then uses `encodeURIComponent` to append them to the `submitlink` endpoint above:

For your privacy, there's no tracking code in this app (as you can see in the code).
The entire app runs in your browser and there's no backend or storage.

## Inspiration

The idea comes from reverse engineering the official
[Hacker News](https://news.ycombinator.com/)
[bookmarklet](https://news.ycombinator.com/bookmarklet.html)
that is advertised on its
[submit page](https://news.ycombinator.com/submitlink).

# Tech

The code is in plain JavaScript and the only lib used is
[Vue@3](https://vuejs.org/) loaded via CDN as ESM.

## Tests

None! It's too small and my need doesn't justify spending too much time on this toy project. Use it as-is.
If you want to contribute tests, you're welcome to make a PR.

## AI

Part of this code was developed using Github Copilot.
It also saved me some time using the chat feature which
is in beta as of Aug 2023.

---

🇸🇪 Made in Sweden by [Alex Ewerlöf](https://alexewerlof.com)