
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

var sun = document.getElementById("sun");
var sobreSection = document.getElementById("About");
var aboutPic = document.querySelector(".about-pic");

//Modo light
sun.onclick = function() {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    sun.src = "./Assets/Icones/moon.png";
    sobreSection.style.backgroundImage = 'url("./Assets/Wallpapers/Bg-White.png")';
    document.getElementById("logo-footer").innerHTML = '<img src="./Assets/Logos/Logo-Black.png" />';
    aboutPic.src = "./Assets/Images/Me-Blue.png"; 
  } else {
    sun.src = "./Assets/Icones/sun.png";
    sobreSection.style.backgroundImage = 'url("./Assets/Wallpapers/Bg-black.png")';
    document.getElementById("logo-footer").innerHTML = '<img src="./Assets/Logos/Logo-White.png" />';
    aboutPic.src = "./Assets/Images/Me-Purple.png";
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
