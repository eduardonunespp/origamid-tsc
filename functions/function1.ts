
function soma(a: number, b:number, c?: number) : number {
    return a + b + (c ? c : 0 )
}
 
soma(3, 6, 9)

const subtrair = (a: number, b: number) =>  a - b

subtrair(10, 5)

// void

type Callback = (event: MouseEvent) => void

function pintarTela(color: string): void{
    document.body.style.backgroundColor = color
}

pintarTela('black')

const btnn = document.querySelector('button')

btnn?.click()

function isString(value: any){
    if(typeof value === 'string'){
        return true
    }
}

console.log(isString('assik'))