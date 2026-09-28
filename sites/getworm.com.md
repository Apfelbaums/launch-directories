# getworm.com

- **Submit URL:** https://getworm.com/ → "GOT A STARTUP?" → "SUBMIT MY STARTUP"
- **Login:** email/password — an account exists, but the site's own Login button does not work (see pitfalls); never successfully logged in through the browser
- **Captcha / bot protection:** not encountered — never got far enough
- **Price:** uses an "early adopter reward" points model rather than a plain free listing; never evaluated because the form is unreachable
- **Link type:** unknown
- **Form fields:** unreachable
- **Logo & limits:** unreachable
- **Email confirmation:** unknown
- **Moderation:** unknown
- **Pitfalls:** the Login button appears to have no working handler at all — clicking it leaves the form in place with no login effect, even in a fresh browser session with no prior cookies. Submitting the login form via a generic form-submit call falls back to a plain GET navigation (the form has no proper method/action set), which briefly puts the password into the browser's address bar as a query parameter before landing on a login page that still isn't logged in — that transient URL was never recorded anywhere and existed only in local browser navigation history. A network-request hook confirmed the Login click fires zero requests, meaning the handler is either missing or fails before it reaches the network. Looks like a site bug, not a login-flow mistake.
- **Last checked:** 2026-09-27 — Site broken: the login button does not work at all (confirmed twice, including a fresh session); no way to reach the submission form
