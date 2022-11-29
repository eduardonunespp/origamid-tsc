console.log(document.constructor)



class newProduct {
    readonly tipo = 'produto'
    nome: string;
    protected preco: number | undefined
    constructor(nome: string, preco?: number){
        this.nome = nome;
        this.preco = preco
    }
    getPreco(){
        return newProduct.transformaPreco(this.preco!)
    }

    static transformaPreco(preco: number){
        return `R$ ${preco}`
    }
}

const nlivro = new newProduct('Hobbit', 250)

console.log(nlivro)

//console.log(nlivro.tipo = 'teste')

console.log(nlivro.getPreco())

class Quadrado {
    readonly lados = 4
    medida: number
    constructor(medida: number){
        this.medida = medida
    }
    getPerimetro(){
        return this.medida * this.lados
    }
    getArea(){
        return this.medida * this.medida
    }
}

class Circulo {
    readonly PI = Math.PI;
    raio: number;
    constructor(raio: number){
        this.raio = raio
    }
    getPerimetroCirculo(){
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea(){
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100
    }
}

const nQuadrado = new Quadrado(8)

console.log(nQuadrado.getPerimetro())

if(nQuadrado instanceof Quadrado){
    console.log(nQuadrado.getArea)
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map(n => {
    if(n < 15){
        return new Quadrado(n)
    }else{
        return new Circulo(n)
    }
})

formas.forEach(forma => {
    if(forma instanceof Quadrado){
        console.log(forma.lados)
    }
    if(forma instanceof Circulo){
        console.log(forma.getPerimetroCirculo)
    }
})


