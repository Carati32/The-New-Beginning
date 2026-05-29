const formulario = document.querySelector('form');
const nome = document.querySelector('#nome')
const profissao = document.querySelector('#profissao')
let cor = document.querySelector('#cor')
const p = document.querySelector('#preencha')
const card = document.querySelector('.card')
const button = document.querySelector('button')
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let nomeUser = nome.value
    let profissaoUser = profissao.value
    let corescolhida = cor.value
    if (nomeUser === '' || profissaoUser === '') {
        p.style.display = 'block'
    }
    else {
        let avatarCard = document.createElement('p')
        let nomeCard = document.createElement('p')
        nomeCard.textContent = nomeUser
        function separar(tex, quanti) {
            return tex.split(' ').map(palavra => palavra.slice(0, quanti)).join('')
        }
        avatarCard.textContent = separar(nomeUser,2)

    }
});
