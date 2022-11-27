"use strict";
const videoassertion = document.querySelector('#video');
videoassertion.volume;
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
    console.log(produto.nome);
}
handleProduto();
