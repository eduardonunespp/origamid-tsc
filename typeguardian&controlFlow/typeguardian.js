"use strict";
function typeGuard(value) {
    if (typeof value === 'number') {
        return value.toFixed;
    }
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard(10);
typeGuard('TeSte ');
typeGuard(document.body);
const obj = {
    nome: "Origamid",
};
if ("nome" in obj) {
    console.log('Sim');
}
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    //handleProduto(json)
}
// interface Produtoo{
//     nome:  string,
//     preco: number,
// }
// function handleProduto(dado: Produtoo){
//     console.log(dado)
//     if('preco' in dado){
//     document.body.innerHTML += `
//         <p>${dado.nome}</p>
//         <p>${dado.preco}</p> 
//     `
//     }
// }
fetchProduto();
// interface Produtoo{
//     nome:  string,
//     preco: number,
// }
// function isProdutoo(value: unknown): value is Produtoo{
//     if(value && typeof value == 'object' && 'nome' in value && 'preco' in value){
//         return true
//     }else{
//         return false
//     }
// }
// function handleProduto(data: unknown){
//     if(isProdutoo(data)){
//         if(typeof data.preco === 'number'){
//             console.log(data.preco.toFixed())
//         }
//         if(typeof data.nome === 'string'){
//             console.log(data.nome.toLowerCase())
//         }
//     }
// }
async function puxarAPI() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    console.log(json);
    handleproductt(json);
}
puxarAPI();
function isProdutoo(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleproductt(date) {
    if (isProdutoo(date)) {
        document.body.innerHTML = `
                    <h3>${date.nome}</h3>
                    <p>${date.horas}</p>
                    <p>${date.tags}</p>

                `;
    }
}
//# sourceMappingURL=typeguardian.js.map