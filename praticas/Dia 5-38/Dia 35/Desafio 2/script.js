let button = document.querySelector('button')
let listaDeMissoes = []
let input = document.querySelector('input')
let level = document.querySelector('#level')
let xp = document.querySelector('#xp')
let xpBarra = document.querySelector('.xp-barra')
let lista = document.querySelector('ul')
let levelAtual = 1
xpAtual = 0
let savelevel = localStorage.getItem('level_play')
let savexp = localStorage.getItem('xp_player')
let savelista = localStorage.getItem('minhas_missoes')
let somxp = new Audio('orb.mp3')
if(savelista != null){
    listaDeMissoes = JSON.parse(savelista)
    listaDeMissoes.forEach(item =>{
        adicionarMissaoNatTela(item.nome, item.xp)
    })
}
if (savelevel != null && savexp != null) {
    levelAtual = Number(savelevel)
    xpAtual = Number(savexp)
}
button.addEventListener('click', function () {
    let valorDificuldade = document.querySelector('#dificuldade').value
    let xpganho = 0
    if (input.value == '') {
        alert('Escreva algo')
    }
    else {
        if (valorDificuldade == 'facil') xpganho = 10
        else if (valorDificuldade == 'media') xpganho = 30
        else xpganho = 60

        let missao = {
            nome: input.value,
            xp: xpganho
        }
        listaDeMissoes.push(missao)
        localStorage.setItem('minhas_missoes', JSON.stringify(listaDeMissoes))
        
        adicionarMissaoNatTela(input.value, xpganho)
        input.value = ''
    }
})

function atualizarInterface() {
    xp.innerHTML = `${xpAtual}/100`
    xpBarra.style.width = `${xpAtual}%`
    level.innerHTML = `${levelAtual}`
}

function adicionarMissaoNatTela(nome, recompensa) {
    let item = document.createElement('li')
    item.innerHTML = nome
    item.dataset.xp = recompensa

    if (recompensa == 10) item.style.borderLeft = '5px solid green'
    else if (recompensa == 30) item.style.borderLeft = '5px solid yellow'
    else item.style.borderLeft = '5px solid red'

    item.addEventListener('click', function () {
        item.style.textDecoration = 'line-through'
        xpAtual += Number(item.dataset.xp)
        if (xpAtual >= 100) {
            xpAtual -= 100
            levelAtual++
            somxp.currentTime = 0
            somxp.play()
        }
        localStorage.setItem('level_play', levelAtual)
        localStorage.setItem('xp_player', xpAtual)
        atualizarInterface()
    }, { once: true })
    lista.appendChild(item)
}

atualizarInterface()