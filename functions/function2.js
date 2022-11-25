"use strict";
function erro(mensagem) {
    throw new Error(mensagem);
}
erro('Ocorreu um erro');
console.log('tente novamente');
