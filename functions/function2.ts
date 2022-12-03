
// function erro(mensagem: string): never{
//     throw new Error(mensagem)
// }

// erro('Ocorreu um erro')
// console.log('tente novamente')

interface Quadrado {
    lado: number,
    perimetro(lado: number) : number
}

function calcular(forma: Quadrado){
    return forma.perimetro(4)
}

    function normalizarText(valor: string[]): string[];
    function normalizarText(valor: string): string;
    function normalizarText(valor: string | string[]): string | string[]{
        if(typeof valor === 'string'){
            return valor.trim().toLowerCase()
        }
        else{
            return valor.map(item => item.trim().toLowerCase())
        }
    }

    console.log(normalizarText('Paffo ca'))
    console.log(normalizarText(['wie', 'Q suue']))


    function elemento1(seletor: 'video'): HTMLVideoElement
    function elemento1(seletor: 'a'): HTMLAnchorElement
    function elemento1( seletor: string): Element
    function elemento1(seletor: string): Element | null{
        return document.querySelector(seletor)
    }

    elemento1('a');
    elemento1('video');

    //Atividade 

    function aredondaNumber(num: string): string
    function aredondaNumber(num: number): number
    function aredondaNumber(num: number | string): number | string {
        if(typeof num === 'number'){
            return Math.ceil(num)
        }else{
            return Math.ceil(Number(num)).toString()
        }
        
    }

    console.log(aredondaNumber(10.2))




