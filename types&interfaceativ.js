"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log(data);
}
fetchProduct();
// function showProduct(data: Products){
//     document.body.innerHTML = `
//         <div>
//             <h2>${data.nome}</h2>
//             <p>${data.preco}</p>
//         </div>
//     `
// }
// showProduct()
