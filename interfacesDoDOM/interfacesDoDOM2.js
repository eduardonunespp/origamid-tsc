"use strict";
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
    else {
        console.log(typeof link);
    }
});
