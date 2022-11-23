
class Product {

    nome: string;
    
    constructor(nome: string){
        this.nome = nome;
    }
    // precoReal(){
    //     return `R$ ${this.preco}`
    // }
}

const book = new Product("Coda fofo")

console.log(book.nome)

// console.log(book.precoReal())

class Livro extends Product{
    autor: string
    constructor(nome: string, autor: string){
        super(nome)
        this.autor = autor;
    }
}

class Jogo extends Product {
    jogadores: number;
    constructor(nome: string, jogadores: number){
        super(nome)
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca: string){
    if(busca === "O Hobbit"){
        return new Livro("Aeeié", "Paffocan")
    }
    if(busca === "Dark Souls"){
        return new Jogo("Dark Souls", 1)
    }
    return null;
}

const produto1 = buscarProduto("O Hobbit")

if(produto1 instanceof Livro){
    console.log(produto1.autor)
}

if(produto1 instanceof Jogo){
    console.log(produto1.nome)
}

if(produto1 instanceof Product){
    console.log(produto1.nome)
}

interface car {
    nome: string,
}

const automovel: car = {
    nome: "Volvo"
}

console.log(automovel.nome) 

