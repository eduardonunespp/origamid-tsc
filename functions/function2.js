"use strict";
// function erro(mensagem: string): never{
//     throw new Error(mensagem)
// }
function calcular(forma) {
    return forma.perimetro(4);
}
function normalizarText(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(item => item.trim().toLowerCase());
    }
}
console.log(normalizarText('Paffo ca'));
console.log(normalizarText(['wie', 'Q suue']));
function elemento1(seletor) {
    return document.querySelector(seletor);
}
elemento1('a');
elemento1('video');
function aredondaNumber(num) {
    if (typeof num === 'number') {
        return Math.ceil(num);
    }
    else {
        return Math.ceil(Number(num)).toString();
    }
}
console.log(aredondaNumber(10.2));
