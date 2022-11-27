

type Produtot = {
    preco: number
}

type Carrot = {
    rodas: number,
    portas: number,
}

type Livrot = {
    paginas: number,
}

function handleProdutot(dados: Produtot & Carrot){
    dados.rodas
    dados.portas
    dados.preco
}

handleProdutot({rodas: 4, portas: 5, preco: 300000})

type TipoCarro = {
    nome: string
    preco: number,
}

type TipoCarroComPreco = TipoCarro & {
    rodas: number
}

interface interfaceCarro {
    nome: string,
    bancos: number,
}

interface interfaceCarro {
    preco: number
}

function nsinsu(dados: interfaceCarro){
    dados.bancos
}

interface Window {
    userId: number
}

window.userId = 200
window.$