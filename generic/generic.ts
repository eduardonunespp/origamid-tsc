

function retorno<variavel>(a: variavel): variavel{
     return a
}

console.log(retorno<string>('Aié').toLocaleLowerCase())


const numbers = [1,2,3,4,5,6,7,8,9]
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"]

function firstFiveElements<TipoLista>(lista: TipoLista[]): TipoLista[] {
    return lista.slice(0, 5)
}

console.log(firstFiveElements(numbers))






function notNull<T>(arg: T){
    if(arg !== null){
        return arg;
    }
    else{
        return null
    }
}


console.log(notNull(10)?.toFixed(2))

function tipoDado<d>(date: d): {dado: d; tipo: string} {
    const resultado = {
        dado: date,
        tipo: typeof date,
    }

    console.log(resultado)
    return resultado; 
}


console.log(tipoDado('Teste'))

interface cars {
    name: 'string',
    preco: number,

}

const carros = {
    name: 'Volvo',
    preco: 20000,
}

function returnCar(result: cars){
    console.log(result.name)

}



function extractText<Tipo extends HTMLElement>(el: Tipo){
    return {
        texto: el.innerText,
        el,
    }
}

const linksa = document.querySelector('a')


if(linksa){
    console.log(extractText(linksa).el.href)
}


function $<Tipo extends Element>(selector: string): Tipo | null{
    return document.querySelector(selector);
}


const linkss = $<HTMLAnchorElement>('a')?.href;

const linkteste = document.querySelector<HTMLAnchorElement>(".link")

linkteste?.href;

async function getData<T>(url: string): Promise<T>{
    const response = await fetch(url)
    return await response.json()
}

interface noteDados {
    nome: string,
    preco: number,
}

async function handleData(){
    const notebook = await getData<noteDados>('https://api.origamid.dev/json/notebook.json')

    console.log(notebook.nome)
}

handleData()

function returnTypeofDado<type>(dados: type){
    const conteudo = {
        tipo: typeof dados,
        content: dados,
    }
    return conteudo
}

console.log(returnTypeofDado(30).content)