
// function normalizarTexto(texto: any){
//     return texto.trim().toLowerCase()
// }

// console.log(normalizarTexto(200))

const cursos = [{nome: 'TypeScript', horas: 200}]

interface curse {
    nome: string,
    horas: number
}



function mostrarCursoss(curse : curse[]){
    curse.forEach(curso => {
        document.body.innerHTML += `
        <div>
            <h2>${curso.horas}</h2>
        </div>
    `
    })
  
}

mostrarCursoss(cursos)

const aee = {
    frase1: 'aeeeee',
    frase2: 'paffocan',
}

interface NDS {
    frase1: string,
    frase2: string,
}

//Tentar ao máximo não usar o any

function retornaAee(aeeie : NDS){
    return aeeie.frase2
}

console.log(retornaAee(aee))