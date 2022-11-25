"use strict";
const btn = document.querySelector('button');
const nav = document.getElementById('nav');
const area = document.querySelector('[aria-expanded]');
const get = area?.getAttribute("aria-expanded");
function handleClickEvent(event) {
    const element = event.currentTarget;
    if (element instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav?.classList.remove('active');
            element.setAttribute('aria-expanded', 'false');
            element.setAttribute('aria-la bel', 'Abrir Menu');
        }
        else {
            nav?.classList.add('active');
            element.setAttribute('aria-expanded', 'true');
            element.setAttribute('aria-label', 'Fechar Menu');
        }
    }
    //nav?.classList.toggle('active')
}
btn?.addEventListener('pointerdown', handleClickEvent);
