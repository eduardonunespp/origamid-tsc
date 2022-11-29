"use strict";
console.log(document.constructor);
class newProduct {
    tipo = 'produto';
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return newProduct.transformaPreco(this.preco);
    }
    static transformaPreco(preco) {
        return `R$ ${preco}`;
    }
}
const nlivro = new newProduct('Hobbit', 250);
console.log(nlivro);
//console.log(nlivro.tipo = 'teste')
console.log(nlivro.getPreco());
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetroCirculo() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const nQuadrado = new Quadrado(8);
console.log(nQuadrado.getPerimetro());
if (nQuadrado instanceof Quadrado) {
    console.log(nQuadrado.getArea);
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map(n => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach(forma => {
    if (forma instanceof Quadrado) {
        console.log(forma.lados);
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetroCirculo);
    }
});
