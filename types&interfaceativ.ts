
async function fetchProduct(){
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    const data = await response.json()

    console.log(data)

    interface empresaFabricante {
        nome: string,
        fundacao: number,
        pais: string,
    }


    interface empresaMontadora {
        nome: string,
        fundacao: number,
        pais: string,
    }

    interface Products {
        nome: string,
        preco: number,
        descricao: string,
        garantia: number,
        seguroAcidentes: boolean,
        empresaFabricante: empresaFabricante,
        empresaMontadora: empresaMontadora,

    }

    function showProduct(data: Products){
        document.body.innerHTML = `
            <div>
                <h2>${data.nome}</h2>
                <p>${data.descricao}</p>
                <p>${data.preco}</p>
                <p>${data.garantia}</p>
                <p>${data.empresaFabricante.nome}</p>
                <p>${data.empresaFabricante.fundacao}</p>
                <p>seguro acidente: ${data.seguroAcidentes ? "há seguro": "não há seguro"}</p>
            </div>
        `
    }
   
    showProduct(data)
   
}

fetchProduct()




