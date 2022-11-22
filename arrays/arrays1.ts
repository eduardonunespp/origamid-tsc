//Arrays 

const numeros = [10, 20, 30, 40, 50, 3]
const valores = [10, 30, "paffocan", 60, "aié"]

function maiorQue10(data: number[]){  //Modo alternativo: Array<number>
    return data.filter((n) => n > 10)
}


function filtrarValores(data: (string | number)[]){
    return data.filter((n) => typeof n === 'string')
}

console.log(maiorQue10(numeros))

console.log(filtrarValores(valores))