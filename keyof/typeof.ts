
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






