const bombo = new Audio("sons/bombo.mp3")

let tambor = document.querySelector("#circulo")

tambor.addEventListener("click", function(){
    bombo.play()
})