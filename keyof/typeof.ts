
interface keyProduct  {
    nome: string,
    preco: number,
    novo: boolean,
}

//let chave: keyof keyProduct

//let chave: 'nome' | 'idade' | 'altura'

//chave = 'nome'


function cordenas(x: number, y: number){
    return {x, y}
}

let coord: typeof cordenas;

coord = (x: number, y: number) => {
    return {
        x,
        y,
    }
}


interface Elementos {
    a: HTMLAnchorElement;
    video: HTMLVideoElement;
    div: HTMLElement;
    body: HTMLBodyElement;
    audio: HTMLAudioElement;
}


function selecionar<Chave extends keyof Elementos>(seletor: Chave): Elementos[Chave] | null{

    return document.querySelector(seletor)

}

console.log(selecionar('a')?.href)
console.log(selecionar('video')?.volume)





interface Teste{
    teste1: string,
    teste2: string,
    teste3: string, 
}


let key1: keyof Teste

key1 = 'teste3'

const ref = document.querySelector('a')

    if(ref instanceof HTMLAnchorElement){
        ref.href
    }





