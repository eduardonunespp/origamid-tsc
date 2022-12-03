"use strict";
const preco = 1000;
const str = "String";
const boolean = true;
console.log(typeof str);
if (typeof str === "string") {
    str.toUpperCase();
    console.log('É uma string');
}
else {
    console.log('Não é uma string');
}
const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";
console.log(typeof frase3.toLocaleLowerCase());
//# sourceMappingURL=typeof.js.map