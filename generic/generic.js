"use strict";
function retorno(a) {
    return a;
}
console.log(retorno('Aié').toLocaleLowerCase());
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];
function firstFiveElements(lista) {
    return lista.slice(0, 5);
}
console.log(firstFiveElements(numbers));
function notNull(arg) {
    if (arg !== null) {
        return arg;
    }
    else {
        return null;
    }
}
console.log(notNull(10)?.toFixed(2));
function tipoDado(date) {
    const resultado = {
        dado: date,
        tipo: typeof date,
    };
    console.log(resultado);
    return resultado;
}
console.log(tipoDado('Teste'));
const carros = {
    name: 'Volvo',
    preco: 20000,
};
function returnCar(result) {
    console.log(result.name);
}
function extractText(el) {
    return {
        texto: el.innerText,
        el,
    };
}
const linksa = document.querySelector('a');
if (linksa) {
    console.log(extractText(linksa).el.href);
}
function $(selector) {
    return document.querySelector(selector);
}
const linkss = $('a')?.href;
const linkteste = document.querySelector(".link");
linkteste?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleDataa() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
handleDataa();
function returnTypeofDado(dados) {
    const conteudo = {
        tipo: typeof dados,
        content: dados,
    };
    return conteudo;
}
console.log(returnTypeofDado(30).content);
//# sourceMappingURL=generic.js.map