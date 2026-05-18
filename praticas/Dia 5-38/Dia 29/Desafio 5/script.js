let input = document.querySelector('input')
let p = document.querySelector('p')

document.addEventListener('DOMContentLoaded', function () {
    p.innerHTML = 'ESCREVE ALGO AI MEU TRUTA'
})// isso aqui eu pesquisei. esse tal de DOMContentLoaded

input.addEventListener('input', function () {
    if (input.value == '') {
        p.innerHTML = 'ESCREVE ALGO AI MEU TRUTA'
    }
    else {
        let guardar = input.value
        p.innerHTML = guardar

    }
})