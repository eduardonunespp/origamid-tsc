
const {body}: {body: HTMLElement} = document

function handleDate({nome, preco}: {nome: string, preco: number}){
    nome.includes('book')
    preco.toFixed
}



function handleClick({currentTarget, pageX}: {currentTarget: EventTarget | null; pageX: number}){
    if(currentTarget instanceof HTMLElement){
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`
        console.log(currentTarget)
    }
   
} 


document.documentElement.addEventListener('click', handleClick)


function comparar(tipo: 'menor' | 'maior', ...numeros: number[]){
    if(tipo === 'menor'){
        return console.log(Math.min(...numeros))
    }if(tipo === 'maior'){
        return console.log(Math.max(...numeros))
    }
}

comparar('menor', 1,2,3,4,56,8,9,78,6)