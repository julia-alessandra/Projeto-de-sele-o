const bombo = new Audio("sons/bombo.mp3")

let tambor = document.querySelector("#bombo")

tambor.addEventListener("click", function(){
    bombo.play()
})

let play = document.querySelector("#play")
let imagem = document.querySelector("#imgDaisy")
const honeycomb = new Audio("sons/HONEYCOMB.mp3")
play.addEventListener("click", function(){
    honeycomb.play()
    imagem.style.animation = 'girando 15s linear infinite alternate'
})