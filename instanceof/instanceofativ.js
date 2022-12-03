"use strict";
const link = document.getElementById('origamid');
// const href = link?.getAttribute("href")
// const newHref = href?.replace('http', 'https')
if (link instanceof HTMLAnchorElement) {
    console.log(link.href = link.href.replace('http', 'https'));
}
//# sourceMappingURL=instanceofativ.js.map