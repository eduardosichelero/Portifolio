


function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=> {
        setTimeout (()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}
const titulo = document.querySelector('.digitando')
ativaLetra(titulo);

// Rolagem

window.addEventListener("scroll", function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem-head',window.scrollY > 500)
})



const hamburguer = document.querySelector("hamburguer");
const nav = document.querySelector(".navbar");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"))