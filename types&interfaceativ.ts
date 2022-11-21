
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
}

fetchProduct()

// function showProduct(data: Products){
//     document.body.innerHTML = `
//         <div>
//             <h2>${data.nome}</h2>
//             <p>${data.preco}</p>
//         </div>
//     `
// }

// showProduct()



