
 
 const videoassertion = document.querySelector('#video') as HTMLVideoElement

 videoassertion.volume 

    interface Product {
        nome: string,
        preco: number,
    }

 async function fetchProduto(){
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    return response.json() as Promise<Product>

 }

 async function handleProduto() {
    const produto = await fetchProduto()
    console.log(produto.nome)
    
 }

 handleProduto()