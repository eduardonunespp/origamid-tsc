"use strict";
class Product {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const book = new Product("Coda fofo");
console.log(book.nome);
// console.log(book.precoReal())
class Livro extends Product {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Product {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("Aeeié", "Paffocan");
    }
    if (busca === "Dark Souls") {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
const produto1 = buscarProduto("O Hobbit");
if (produto1 instanceof Livro) {
    console.log(produto1.autor);
}
if (produto1 instanceof Jogo) {
    console.log(produto1.nome);
}
if (produto1 instanceof Product) {
    console.log(produto1.nome);
}
const automovel = {
    nome: "Volvo"
};
console.log(automovel.nome);
