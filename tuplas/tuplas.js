"use strict";
const product1 = ["Notebook", 2500];
const product2 = ["Notebook", 2500];
if (typeof product1[0] === "string") {
    console.log(product1[0].toLocaleLowerCase());
}
const [nome, precoo] = product2;
// nome;
// preco;
function getText(seletor) {
    const el = document.querySelector(seletor);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const buttonnn = getText('button');
if (buttonnn) {
    buttonnn[1];
}
console.log(buttonnn);
//Atividade
async function apiVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    console.log(json[0]);
    typesArray(json);
}
apiVendas();
function typesArray(vendas) {
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total: ${total1}</p>`;
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total: ${total2}</p>`;
}
//# sourceMappingURL=tuplas.js.map