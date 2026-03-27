let display = document.querySelector('.h1')
let segundos = 0
let intervalo = null
function iniciar() {
    clearInterval(intervalo)

    intervalo = setInterval(function () {
        segundos += 1
        display.innerHTML = segundos
    }, 1000)
}


function pausar() {
    clearInterval(intervalo)
}
function zerar() {
    segundos = 0
    display.innerHTML = '0'
    clearInterval(intervalo)
}