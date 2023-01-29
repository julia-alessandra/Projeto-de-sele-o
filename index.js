let canva = document.getElementById('canvas')
let menos = document.querySelector('#menos')
let maior= document.querySelector('#mais')
let corEl = document.querySelector('#cor')
let tamanhoEl = document.querySelector('#tamanho')
let explicacaoEl = document.querySelector('#explica')
let lapisEl = document.querySelector('#lapis')
let largura = 800
let altura = 600
let pincel = 1

//canva
canva.setAttribute('width', largura)
canva.setAttribute('height', altura)

let ctx = canva.getContext('2d')

let pressionado = false
ctx.strokeStyle = 'black'
ctx.lineWidth = 1

canva.addEventListener('mousedown', function (e) {
  ctx.moveTo(e.clientX, e.clientY)
  pressionado = true
  explicacaoEl.classList.add('invisivel')
});

canva.addEventListener('mouseup', function () {
  pressionado = false
});

canva.addEventListener('mousemove', function (e) {

  if (pressionado) {
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
  }
})
//botoes
maior.addEventListener('click', function(){
    ctx.lineWidth++
    pincel++
    tamanhoEl.innerHTML = pincel
    explicacaoEl.innerHTML = 'Aumenta o tamanho do pincel'
    explicacaoEl.classList.remove('invisivel')
})

menos.addEventListener('click', function(){
    ctx.lineWidth--
    pincel--
    tamanhoEl.innerHTML = pincel
    explicacaoEl.innerHTML = 'Diminui o tamanho do pincel'
    explicacaoEl.classList.remove('invisivel')

})
corEl.addEventListener('change', function(){
        ctx.strokeStyle = corEl.value;
    }
)

corEl.addEventListener('click', function(){
  explicacaoEl.innerHTML = 'Muda a cor do pincel'
  explicacaoEl.classList.remove('invisivel')
})

let body = document.querySelector("body")
let main = document.querySelector("main")
let temaMarcadoEl = document.querySelectorAll('#temas')

for(let i =0; i<temaMarcadoEl.length; i++){
  temaMarcadoEl[i].addEventListener("click", function(){
    if(temaMarcadoEl[i].value === 'escuro'){
      body.style.backgroundColor = 'black'
      main.style.backgroundColor = 'black'
      body.style.color = 'white'
      main.style.border = '2px solid white'
      canva.style.border = '2px solid white'
}
else if(temaMarcadoEl[i].value === 'claro'){
  body.style.backgroundColor = 'white'
  main.style.backgroundColor = 'white'
  body.style.color = 'black'
  main.style.border = '2px solid black'
  canva.style.border = '2px solid black'
}
  })
}

