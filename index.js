let canva = document.getElementById("canvas");
let menos = document.querySelector("#menos");
let maior= document.querySelector("#mais")
let corEl = document.querySelector("#cor")
let tamanhoEl = document.querySelector("#tamanho")
let largura = 800;
let altura = 600;
let pincel = 1;

canva.setAttribute("width", largura);
canva.setAttribute("height", altura);

let ctx = canva.getContext("2d");

let pressionado = false;
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

canva.addEventListener("mousedown", function (e) {
  ctx.moveTo(e.clientX, e.clientY);
  pressionado = true;
});

canva.addEventListener("mouseup", function () {
  pressionado = false;
});

canva.addEventListener("mousemove", function (e) {
  if (pressionado) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
});


maior.addEventListener("click", function(){
    ctx.lineWidth++;
    pincel++
    tamanhoEl.innerHTML = pincel
})

menos.addEventListener("click", function(){
    ctx.lineWidth--;
    pincel--;
    tamanhoEl.innerHTML = pincel
})
corEl.addEventListener("change", 
    function(){
        ctx.strokeStyle = corEl.value;
    }
);