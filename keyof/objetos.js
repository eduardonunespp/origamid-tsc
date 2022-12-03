"use strict";
const produtoobj1 = {
    nome: 'Notebook',
    quantidade: 20,
    cor: 'azul',
};
const servico1 = {
    nome: 'instalação'
};
function returnproduct(data) {
    return data.quantidade;
}
function returnproductPartial(data) {
    if (data.quantidade) {
        return data.quantidade + 20;
    }
}
returnproduct(produtoobj1);
console.log(returnproductPartial(produtoobj1));
console.log(returnproductPartial(servico1));
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ['HTML', 'CSS', 'JS'],
    autor: 'Eduardo',
};
if (typeof artigo.titulo === 'string') {
    const arr = artigo.titulo.toLowerCase();
    console.log(arr);
}
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: 'Aee',
    preco: 30
});
function doiei(data) {
    return data.nome;
}
const jsk = {
    nome: 'Eduardo',
    idade: 18
};
console.log(doiei(jsk));
function returndado(dado) {
    return dado;
}
console.log(returndado('DadoNsk').trim().toLowerCase());
function constructorODS(obj) {
    return obj.age;
}
const objt = {
    nome: 'Eduardo',
    age: 18,
    alt: 1.80,
};
constructorODS(objt);
