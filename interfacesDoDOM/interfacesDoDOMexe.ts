
const linkscolor = document.querySelectorAll('.link')


const arraylink = Array.from(linkscolor)

// console.log(arraylink)

// arraylink.forEach(element => {
//     console.dir(element)
//     if(element instanceof HTMLAnchorElement){
//         const style = element.style;
//         style.color = "blue";
//         style.textDecoration = "none"

//     }
//     if(element instanceof HTMLButtonElement){
//         const style = element.style;
//         element.style.backgroundColor = 'blue'
//         element.style.border = "none"
//         element.style.borderRadius = "5px"
//         style.padding = "10px 20px"
//         style.color = "#fff"
        
//     }
    
// })

function ativarElement(elemento: HTMLElement){
    elemento.style.color = "blue"
    elemento.style.border = "2px solid blue"
}

arraylink.forEach((link) => {
    if(link instanceof HTMLElement){
        ativarElement(link)
        
    }
})