let p = document.querySelector('p')
let input = document.querySelector('input')
let button = document.querySelector('button')

document.addEventListener('DOMContentLoaded', function () {
    let verificador = localStorage.getItem('autorizacao')

    if (verificador == 'sim') {
        document.querySelector('body').style.background = 'green'
        p.innerHTML = 'Bem vindo de volta meu rei'
    }
    else {
        localStorage.removeItem('autorizacao')
    }
})

button.addEventListener('click', function () {
    let idade = Number(input.value)
    if (idade >= 18) {
        document.querySelector('body').style.background = 'green'
        p.innerHTML = 'Pode entrar, chefe!'
        localStorage.setItem('autorizacao', 'sim')
    }
    else {
        document.querySelector('body').style.background = 'red'
        p.innerHTML = 'Volta pro Toddynho!'
        localStorage.removeItem('autorizacao')
    }
})