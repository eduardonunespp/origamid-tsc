"use strict";
//let chave: keyof keyProduct
//let chave: 'nome' | 'idade' | 'altura'
//chave = 'nome'
function cordenas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return {
        x,
        y,
    };
};
function selecionar(seletor) {
    return document.querySelector(seletor);
}
console.log(selecionar('a')?.href);
console.log(selecionar('video')?.volume);
let key1;
key1 = 'teste3';
const ref = document.querySelector('a');
if (ref instanceof HTMLAnchorElement) {
    ref.href;
}
