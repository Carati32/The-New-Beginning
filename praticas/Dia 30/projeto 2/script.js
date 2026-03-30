let jogos = ['Skyrim', 'Final Fantasy VII Remake', 'Absolver','Dauntles', 'Journey']

let proximo = document.querySelector('#proximo')
let anterior = document.querySelector('#anterior')
let i = 0
let h1 = document.querySelector('h1')
document.addEventListener('DOMContentLoaded', function(){
    h1.innerHTML = jogos[i]
})


proximo.addEventListener('click', function(){
    if(i < jogos.length - 1){
        i ++
        h1.innerHTML = jogos[i]
    }
    else{
        alert('chegou ao final')
    }
})

anterior.addEventListener('click', function(){
    if(i > 0){
        i --
        h1.innerHTML = jogos[i]
    }
    else{
        alert('chegou ao início')
    }
})