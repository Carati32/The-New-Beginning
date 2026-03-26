let tentativa = 0
let min = 0
let max = 100
let sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
function sortear() {

    sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(sorteio)
}
function chutar() {
    let value = document.querySelector('#palpite').value
    if(value == ''){
        alert("DIGITE UM NUMERO")
    }
    else{

        let res = document.querySelector('.res')
        tentativa += 1
        let p = document.querySelector('#tentativa')
        p.innerHTML = `Tentativas: ${tentativa}`
        if (value == sorteio) {
            res.innerHTML = `Acertou o número, ${sorteio} em ${tentativa} tentativas`
            tentativa = 0
            sortear()
        }
        else {
            res.innerHTML = `errou.`
        }
    }
}
window.addEventListener('load', function () {
    console.log(sorteio)
})


function resetar() {
    let res = document.querySelector('.res')
    let p = document.querySelector('#tentativa')
    p.innerHTML = 'Tentativas: 0'
    res.innerHTML = ''
    tentativa = 0
    document.querySelector('#palpite').value = ''
    sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(sorteio)
 
}