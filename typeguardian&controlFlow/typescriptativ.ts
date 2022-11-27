
  async function puxaAPI(){
    const response = await fetch('https://api.origamid.dev/json/cursos.json')
    const json = await response.json()
    
    handleproduct(json)
}

puxaAPI()

interface origcomp {
    nome: string,
    aula: number, 
    gratuito: boolean,
    horas: number,
    idAulas: number[],
    nivel: "iniciante" | "avancado"
    tags: string[]
}

function isProduto(value: unknown): value is origcomp{
    if(value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value){
        return true
    }
    else{
        return false
    } 
}

function handleproduct(date: unknown){
    if(Array.isArray(date)){
        date.filter(item => {
            date.filter(isProduto).forEach(item => {
                document.body.innerHTML += `
                    <h2>${item.nome}</h2>
                    <p>${item.horas}</p>
                    <p>${item.tags.join(", ")}</p>
      
                `
            })
        })
    }
    // if(isProduto(date)){
    //     document.body.innerHTML = `
    //         <h3>${date.nome}</h3>
    //         <p>${date.horas}</p>
    //         <p>${date.tags}</p>

    //     `
    //     console.log('isnji')
    // }else{
    //     console.log('Erro')
    // }
}