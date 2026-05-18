let modoEscuro = false

function alternar() {
    let pagina = document.querySelector('body')
    let button = document.querySelector('button')
    let h1 = document.querySelector('h1')
    let p = document.querySelector('p')
    modoEscuro = !modoEscuro
    if (modoEscuro != false) {
        pagina.style.background = 'black'
        button.style.color = 'white'
        button.style.background = 'black'
        h1.style.color = 'white'
        p.style.color = 'white'
        button.innerHTML = 'Modo Claro'
    }
    else {
        pagina.style.background = 'antiquewhite'
        button.style.color = 'black'
        button.style.background = 'rgb(148, 146, 146)'
        h1.style.color = 'black'
        p.style.color = 'black'
        button.innerHTML = 'Modo Escuro'
    }
}