

interface objProduto {
    nome: string,
    quantidade: number,
}

const produtoobj1 = {
    nome: 'Notebook',
    quantidade: 20,
    cor: 'azul',
}

const servico1 = {
    nome: 'instalação'
}

function returnproduct(data: objProduto){
    return data.quantidade
}

function returnproductPartial(data: Partial<objProduto>){
    if(data.quantidade){
        return data.quantidade + 20
    }
}

returnproduct(produtoobj1)

console.log(returnproductPartial(produtoobj1)) 

console.log(returnproductPartial(servico1))

interface Post {
    titulo: string,
    visualizacoes: number,
    tags: string[],
    [key: string]: unknown,
}

const artigo: Post = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ['HTML', 'CSS', 'JS'],
    autor: 'Eduardo',
}

if(typeof artigo.titulo === 'string'){
    const arr = artigo.titulo.toLowerCase()
    console.log(arr)
}


interface ObjetoLiteral {
    [key: string]: unknown
}

type ObjetoLiteral2 = Record<string, unknown>


function mostrarTitulo(obj: ObjetoLiteral2){
    if('titulo' in obj){
        console.log(obj.titulo)
    }
    
}

 

mostrarTitulo({
    titulo: 'Aee',
    preco: 30
})


type Obje = Record<string, unknown>

function doiei(data: Obje){
    return data.nome
}

const jsk = {
    nome: 'Eduardo',
    idade: 18
}

console.log(doiei(jsk))



function returndado<T>(dado: T){
    return dado;
}




console.log(returndado('DadoNsk').trim().toLowerCase())


type ODS = Record<string, unknown>


function constructorODS(obj: ODS){
    return obj.age
} 



const objt = {
    nome: 'Eduardo',
    age: 18,
    alt: 1.80,
}


constructorODS(objt)



    




