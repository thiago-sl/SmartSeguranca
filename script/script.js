var hamburguer = document.getElementById("hamburguer")
var hamburguerButton = document.getElementById("hamburguerButton")
var header = document.getElementsByTagName("header")[0]
var fecha = document.getElementById("fecha")

hamburguerButton.addEventListener("click",mostraMenu)
fecha.addEventListener("click",fechaMenu)

function mostraMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "column"
    hamburguer.style.display = "flex"
    hamburguerButton.style.display = "none"
}

function fechaMenu(){
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "row"
    hamburguer.style.display = "none"
    hamburguerButton.style.display = "flex"
}

  
    