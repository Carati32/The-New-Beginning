let display = document.querySelector('.numero')
let contado = 0
function mais() {
    contado += 1
    display.innerHTML = contado
}

function menos() {
    contado -= 1
    display.innerHTML = contado
}

function reset() {
    display.innerHTML = 0
    contado = 0
}