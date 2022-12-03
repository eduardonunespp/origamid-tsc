export default function returnfunctions(){

    const dateP = {
        nome: 'ndjwdb',
        altura: 1.80,
    }
    

    function returndados(dados: teste){
        return console.log(dados.nome, dados.altura)
    }

    returndados(dateP)


    function somee(a: number, b: number){
        return console.log(a + b)
    }

    somee(10, 20)

}

export interface Product {
    nome: 'smarthphone',
    quant: 10,
}










