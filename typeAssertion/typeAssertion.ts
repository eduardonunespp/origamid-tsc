
 
 const videoassertion = document.querySelector('#video') as HTMLVideoElement

 videoassertion.volume 

    interface Productt {
        nome: string,
        preco: number,
    }

 async function fetchProdutoo(){
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    return response.json(); //as Promise<Product>

 }

 async function handleProduto() {
    const produto = await fetchProduto();
    //(produto as Productt).nome
   //console.log(produto.nome)
    
 }


 handleProduto()

 //Não recomendavel usar !

 const videooo = document.querySelector('video')!

 videooo.volume

 document.querySelector("a")!.href = "https://www.origamid.com"

 const video1 = document.querySelector('.player') as HTMLVideoElement
 const video2 = <HTMLVideoElement>document.querySelector('.player');
 const video3 = document.querySelector<HTMLVideoElement>('.player');
 const video4 = document.querySelector('.player');

 (video4 as HTMLVideoElement).volume
