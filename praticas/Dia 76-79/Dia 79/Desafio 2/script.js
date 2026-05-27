let cores = [gerarCorAleatoria(), gerarCorAleatoria()]
let camadaCor = document.querySelector('#camada')
let gerar = document.querySelector('#gerar')



camadaCor.addEventListener('click', () => {
    let cor = gerarCorAleatoria()
    cores.push(cor)
})

gerar.addEventListener('click', () => {
    let roberto = cores.join(', ')
    let tex = `linear-gradient(to right, ${roberto})`
    document.body.style.background = tex
    document.querySelector('p').innerText = tex
})

function gerarCorAleatoria() {
    let caracteres = "0123456789ABCDEF"
    let cor = "#"
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        cor += caracteres[indiceAleatorio]
    }
    return cor
}