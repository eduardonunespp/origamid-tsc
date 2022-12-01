"use strict";
// function normalizarTexto(texto: any){
//     return texto.trim().toLowerCase()
// }
// console.log(normalizarTexto(200))
const cursos = [{ nome: 'TypeScript', horas: 200 }];
function mostrarCursoss(curse) {
    curse.forEach(curso => {
        document.body.innerHTML += `
        <div>
            <h2>${curso.horas}</h2>
        </div>
    `;
    });
}
mostrarCursoss(cursos);
const aee = {
    frase1: 'aeeeee',
    frase2: 'paffocan',
};
//Tentar ao máximo não usar o any
function retornaAee(aeeie) {
    return aeeie.frase2;
}
console.log(retornaAee(aee));
//# sourceMappingURL=any.js.map