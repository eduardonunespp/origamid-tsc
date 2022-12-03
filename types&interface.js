"use strict";
let todo = 10;
todo = '200';
function preencherDados(dados) {
    document.body.innerHTML +=
        `<div>
        <h2>${dados.nome}</h2>
            <p>${dados.preco}</p>
            <p>inclui teclado? : ${dados.incluiTeclado ? "sim" : "não"}</p>
    <div>`;
}
preencherDados({
    nome: 'Notebook',
    preco: 100,
    incluiTeclado: true,
});
preencherDados({
    nome: 'SmartPhone',
    preco: 3000,
    incluiTeclado: false,
});
preencherDados({
    nome: 'Placa de video',
    preco: 3500,
    incluiTeclado: true,
});
function pintarCategoria(categoria) {
    if (categoria === "design") {
        console.log("Pintar Vermelho");
    }
    else {
        throw new Error("Entrar com o tipo certo");
    }
}
pintarCategoria('design');
