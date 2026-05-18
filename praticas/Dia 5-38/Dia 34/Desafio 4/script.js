const hp = document.querySelector('#hp-bar-fill')
const Numberhp = document.querySelector('#hp-text')
const button = document.querySelector('#btn-atacar')


let hpAtual = 100
button.addEventListener('click', function(){
    let dano = Math.floor(Math.random() * 16) + 10
    hpAtual -= dano
    if(hpAtual < 0){
        hpAtual = 0
    }
    if(hpAtual <= 30){
        hp.style.background = 'var(--cor-dano)'
    }
    if(hpAtual == 0){
       button.innerHTML = 'BOSS DERROTADO!' 
       button.disabled = true
       document.querySelector('#boss-name').style.textDecoration = 'line-through'
    }
    Numberhp.innerHTML = `${hpAtual}/100`
    hp.style.width = hpAtual + "%"
})