let form = document.querySelector('.form')
let dashboard = document.querySelector('.dashboard')
let entrar = document.querySelector('#entrar')
let sair = document.querySelector('#sair')
let input = document.querySelector('#nome')
let corfundo = document.querySelector('#cor')
let h1 = document.querySelector('h1')
document.addEventListener('DOMContentLoaded', function(){
    let verificar = localStorage.getItem('bagulho')
    let nomesalvo = localStorage.getItem('user')
    let cor = localStorage.getItem('tema')
    if(verificar == 'sim'){
        form.style.display = 'none'
        dashboard.style.display = 'block'
        h1.innerHTML = `Salve, ${nomesalvo}`
        document.body.style.background = cor || 'antiquewhite'
    }
    else{
        localStorage.clear()
    }
})


entrar.addEventListener('click', function(){
    let nome = input.value
    if(nome == '' ){
        alert('Escreve algo cabaço!')
    }else{
        localStorage.setItem('bagulho', 'sim')
        localStorage.setItem('user', nome)
        form.style.display = 'none'
        dashboard.style.display = 'block'
        h1.innerHTML = `Salve, ${nome}`
    }

})
corfundo.addEventListener('input', function(){
    document.body.style.background = corfundo.value
    localStorage.setItem('tema',corfundo.value )
})

sair.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
    form.style.display = 'block'
    dashboard.style.display = 'none'
})