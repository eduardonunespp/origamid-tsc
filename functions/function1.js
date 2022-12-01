"use strict";
function soma(a, b, c) {
    return a + b + (c ? c : 0);
}
soma(3, 6, 9);
const subtrair = (a, b) => a - b;
subtrair(10, 5);
function pintarTela(color) {
    document.body.style.backgroundColor = color;
}
pintarTela('black');
const btnn = document.querySelector('button');
btnn?.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('assik'));
//# sourceMappingURL=function1.js.map