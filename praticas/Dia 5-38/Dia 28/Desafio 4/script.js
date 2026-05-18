let p = document.createElement('p')
let mensagem = document.querySelector('.mensagem')
mensagem.appendChild(p)
function verificador() {
    let senha = document.querySelector( '#senha')
    if (senha.value.length == 0) {
        p.innerHTML = ''
    }
    else if (senha.value.length < 6) {
        p.innerHTML = 'Fraca'
    }
    else if (senha.value.length < 10 && senha.value.length >= 6) {
        p.innerHTML = 'Média'
    }
    else {
        p.innerHTML = 'Forte'
    }
}


