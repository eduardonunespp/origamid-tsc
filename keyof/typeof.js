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
