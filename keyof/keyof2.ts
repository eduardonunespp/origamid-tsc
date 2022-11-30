

async function fetchData<T>(url: string): Promise<T>{
    const base = 'https://api.origamid.dev/json'
    const response = await fetch(base + url)
    return await response.json()
}


interface Livro {
    nome: string,
    ano: number,
    autor: string,
    paginas: number,
}

interface Jogo {
    nome: string,
    ano: number,
    desenvolvedora: string,
    plataformas: string[] 
    
}

function checkInterface<Interface>(obj: unknown, key: keyof Interface):obj is Interface{
    if(obj && typeof obj === 'object' && key in obj){
        return true
    }else{
        return false
    }
}

async function handleData(){
    const jogo = await fetchData<Jogo>("/jogo.json")
    if(checkInterface<Jogo>(jogo, 'desenvolvedora')){
        console.log(jogo.desenvolvedora.toLowerCase())
        console.log(jogo.plataformas)
        console.log(jogo.nome)
    }
    const livro = await fetchData<Livro>("/livro.json")
    if(checkInterface<Livro>(livro, 'autor'))
    console.log(livro.autor)
    console.log(livro.paginas)
}

handleData()


interface testein {
    nome: 'hnsgdt',
    age: 20,
}

let testei: keyof testein

testei = 'age'



