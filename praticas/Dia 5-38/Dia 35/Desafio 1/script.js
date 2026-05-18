let evoluir = document.querySelector('#evoluir')
let reset = document.querySelector('#infinito')
let hp = document.querySelector('.hp')
let dano = document.querySelector('#dano')
let hpatual = 55
let salvo = localStorage.getItem('HPatual')
if(salvo != null){
    hpatual = Number(salvo)
}
const pocao = new Audio('assets/sounds/potion.mp3')
const damage = new Audio('assets/sounds/damage.mp3')
const morri = new Audio('assets/sounds/morrih.mp3')



evoluir.addEventListener('click', function () {
    hpatual = Math.min(hpatual + 10, 100)
    pocao.currentTime = 0
    pocao.play()

    atualizarBarra()
    setTimeout(function () {
        if (hpatual === 100) {
            alert('HP CHEIO')
        }

    }, 10)
})
reset.addEventListener('click', function () {
    hpatual = 100
    atualizarBarra()

})

dano.addEventListener('click', function () {
    hpatual = Math.max(hpatual - 10, 0)
    damage.currentTime = 0
    damage.play()

    atualizarBarra()
    setTimeout(function () {
        if (hpatual == 0) {
            damage.pause()
            damage.currentTime = 0
            morri.currentTime = 0
            morri.play()
            alert('Você tomou na jabiraca')
        }
    }, 10)
})

function atualizarBarra() {
    hp.style.width = `${hpatual}%`
    if (hpatual >= 30) {
        hp.style.background = 'red'
    }
    else {
        hp.style.background = 'yellow'
    }
    localStorage.setItem('HPatual', hpatual)
}
atualizarBarra()