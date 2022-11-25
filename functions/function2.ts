
// function erro(mensagem: string): never{
//     throw new Error(mensagem)
// }

// erro('Ocorreu um erro')
// console.log('tente novamente')

interface Quadrado {
    lado: number,
    perimetro(lado: number) : number
}

function calcular(forma: Quadrado){
    return forma.perimetro(4)
}



