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
const arraylinks = Array.from(links);
const archolinks = arraylinks.filter((filtro) => filtro instanceof HTMLAnchorElement);
console.log(archolinks);
