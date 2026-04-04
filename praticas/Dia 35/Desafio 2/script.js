let button = document.querySelector('button')
let input = document.querySelector('input')
let level = document.querySelector('#level')
let xp = document.querySelector('#xp')
let xpBarra = document.querySelector('.xp-barra')
let lista = document.querySelector('ul')
let levelAtual = 1
xpAtual = 0
let savelevel =localStorage.getItem('level_play')
let savexp = localStorage.getItem('xp_player')
if(savelevel != null && savexp != null){
    levelAtual = Number(savelevel)
    xpAtual = Number(savexp)
}
button.addEventListener('click', function () {
    let item = document.createElement('li')
    if (input.value == '') {
        alert('Escreva algo')
    }
    else {
        item.innerHTML = input.value
        input.value = ''
        lista.appendChild(item)
    }
    item.addEventListener('click', function () {
        item.style.textDecoration = 'line-through'
        xpAtual += 50
        if (xpAtual >= 100) {
            xpAtual -= 100
            levelAtual++
        }
        localStorage.setItem('level_play', levelAtual)
        localStorage.setItem('xp_player', xpAtual)
        atualizarInterface()
    }, { once: true })
})

function atualizarInterface() {
    xp.innerHTML = `${xpAtual}/100`
    xpBarra.style.width = `${xpAtual}%`
    level.innerHTML = `${levelAtual}`
}

atualizarInterface()