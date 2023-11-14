
//menu-burguer
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icone");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//letras
function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  arrTexto.forEach((letra, i)=> {
      setTimeout (()=>{
          elemento.innerHTML += letra;
      }, 150 * i)
  })
}

const titulo = document.querySelector('.digitando')
ativaLetra(titulo);


//Light-mode
var sun = document.getElementById("sun");
var sobreSection = document.getElementById("About");

sun.onclick = function() {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    sun.src = "./Icones/icon/moon.png";
    sobreSection.style.backgroundImage = 'url("./assets/8.png")';
    document.getElementById("logo-footer").innerHTML = '<img src="./assets/Logos/Logoblack.png" />';
  } else {
    sun.src = "./Icones/icon/sun.png";
    sobreSection.style.backgroundImage = 'url("./assets/6.png")';
    document.getElementById("logo-footer").innerHTML = '<img src="./assets/Logos/LogoSemFundo.png" />';
  }
}


//Rolagem barra
window.addEventListener("scroll", function() {
  let header = document.querySelector('#desktop-nav');
  let logo = document.querySelector('#desktop-nav .logo');

  if (window.scrollY > 500) {
    header.classList.add('rolagem-barra');
    logo.textContent = "ES";
  } else {
    header.classList.remove('rolagem-barra');
    logo.textContent = "Eduardo Sichelero";
  }
});


//Black elements
var elements = document.querySelectorAll(".details-cont-black, .article-container-skills,article, black-text, .icon-black");

elements.forEach(function(element) {
    element.style.backgroundColor = "black";
});
