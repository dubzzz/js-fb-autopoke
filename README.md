#js-fb-autopoke

Auto-poke script for Facebook written in JavaScript. You need to be on the webpage https://www.facebook.com/pokes/?notif_t=poke in order to launch this script.

## How to use it?

### Occasional use

On *Firefox*, *Google Chrome*:
- **right click** on the webpage
- select **Inspect element**
- select **Console**
- paste the code: `src/autopoke.js`
- press enter

### Frequent use

Download the module `Greasemonkey` and create a new script. `Greasemonkey` will automatically run the script each time you go on poke webpage.

The source code should be:
```JavaScript
// ==UserScript==
// @name        poke
// @namespace   fb
// @description poke
// @include     https://www.facebook.com/pokes/?notif_t=poke
// @version     1
// @grant       none
// ==/UserScript==
```
followed by `src/autopoke.js` or `src/autopoke.min.js`.
