"use strict";
const buttonn = document.querySelector('button');
const config = localStorage.getItem('config');
if (buttonn !== null) {
    buttonn.click();
}
console.log(Boolean(buttonn));
let teste;
console.log(teste);
function test() { }
console.log(test());
if (teste) {
    console.log('Total foi definido');
}
else {
    console.log('Total não foi definido');
}
const jogo = {
    nome: "Ragnarok"
};
const livro = {};
if (jogo.nome) {
    jogo.nome.toLocaleLowerCase();
}
livro.nome?.toLocaleLowerCase();
