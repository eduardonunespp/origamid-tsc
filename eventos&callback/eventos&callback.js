"use strict";
// function handleClick(event: PointerEvent){
//     console.log(event)
// }
// botao?.addEventListener('pointerdown', handleClick)
// function handleScroll(event: Event){
//     console.log(event)
// }
// window.addEventListener('scroll', handleScroll)
// //document.body.style.height = "1000px"
// function ativarMenu(event: Event){
//     console.log(event)
//     if(event instanceof MouseEvent){
//         console.log(event.pageX)
//     }
//     if(event instanceof TouchEvent){
//         console.log(event.touches[0].pageX)
//     }
// }
// document.documentElement.addEventListener("mousedown", ativarMenu)
// document.documentElement.addEventListener("touchstart", ativarMenu)
// window.addEventListener("keydown", ativarMenu)
// const botao = document.querySelector('button')
//     function handleClick(this: HTMLButtonElement, event: MouseEvent){
//         console.log(this)
//     }
// botao?.addEventListener('click', handleClick)
const botao = document.querySelector('button');
//     function handleClick(event: MouseEvent){
//         const elemento = event.currentTarget;
//         if(elemento instanceof HTMLElement){
//             console.log(elemento.innerText)
//         }
//     }
// botao?.addEventListener('click', handleClick)
//atividade
function handleTeste(target) {
    console.dir(target.target);
}
botao.addEventListener('pointerdown', handleTeste);
//# sourceMappingURL=eventos&callback.js.map