# makerlist.io

- **Submit URL:** https://makerlist.io/submit
- **Login:** Google OAuth
- **Captcha / bot protection:** none
- **Price:** free; paid "Skip the line for $29" option not used
- **Link type:** unknown
- **Form fields:** Website Name → product Name; Website Url → product URL; Tags → autocomplete field, type text + Enter to add a chip (e.g. video, ai); Description → one-liner/short description.
- **Logo & limits:** strictly `.png`, up to 256kb. A `.jpg` logo needs converting to PNG first (e.g. `sips -s format png`); the form validates file type/size/dimensions with three checkmarks.
- **Email confirmation:** none
- **Moderation:** free queue, shows a position count (e.g. "29 listings ahead") with an estimated auto-publish date.
- **Pitfalls:** clicking a tag from the sidebar "Popular Tags" block navigates away to a filter page and resets the form — add tags by typing into the tag input field directly and pressing Enter, not by clicking the sidebar. Also, use `bsk fill` on the tag input by its element ref, not by a CSS selector captured before the first render (the DOM re-renders and the selector goes stale).
- **Last checked:** 2026-09-27 — Listed; submission accepted ("Listing submitted successfully"), pending free-queue publish.
