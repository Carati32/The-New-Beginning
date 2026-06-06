const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const profissao = document.querySelector('#profissao')
const github = document.querySelector('#github')


const cardNome = document.querySelector('#card-nome')
const cardEmail = document.querySelector('#card-email')
const cardProfissao= document.querySelector('#card-profissao')
const cardGithub= document.querySelector('#card-github')

nome.oninput = function(){
    cardNome.innerHTML = nome.value
}

email.oninput = function(){
    cardEmail.innerHTML = email.value
}

profissao.oninput = function(){
    cardProfissao.innerHTML = profissao.value
}

github.oninput = function(){
    cardGithub.innerHTML = github.value
}