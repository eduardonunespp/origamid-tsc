"use strict";
//tipagem
let produto = 'livro';
let idade = 10;
idade = 10;
const carro = {
    marca: "Audi",
    portas: 4,
};
carro.marca = "inid";
//Annotation e inference
const barato = 500 < 400 ? true : "produto caro";
function somar(num1, num2) {
    return `${num1 + num2}`;
}
somar(20, 20);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformapreco(produto) {
    nintendo.preco = 'R$ ' + nintendo.preco;
    return nintendo;
}
const produtoNovo = transformapreco(nintendo);
console.log(produtoNovo);
function normalText(text) {
    return text.trim().toLowerCase();
}
console.log(normalText("iwdJIOd"));
function mult(a, b) {
    return a * b;
}
console.log(mult(39, 20));
const carro2 = [{
        cor: 'Blue',
        preco: 450
    }, {
        cor: 'red',
        preco: 200
    }, {
        cor: 'white',
        preco: 600
    }];
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('Amkwdiooi jksdo'));
const entrada = document.querySelector('input');
const total = localStorage.getItem("total");
if (entrada && total) {
    entrada.value = total;
    calcularGanho(Number(entrada.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (entrada) {
        localStorage.setItem("total", entrada.value);
        calcularGanho(Number(entrada.value));
    }
}
if (entrada) {
    entrada.addEventListener('keyup', totalMudou);
}
