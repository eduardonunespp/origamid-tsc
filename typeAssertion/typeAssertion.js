"use strict";
const videoassertion = document.querySelector('#video');
videoassertion.volume;
async function fetchProdutoo() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json(); //as Promise<Product>
}
async function handleProduto() {
    const produto = await fetchProduto();
    //(produto as Productt).nome
    //console.log(produto.nome)
}
handleProduto();
//Não recomendavel usar !
const videooo = document.querySelector('video');
videooo.volume;
document.querySelector("a").href = "https://www.origamid.com";
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
video4.volume;
