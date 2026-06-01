const formulario = document.querySelector('form')
const nome = document.querySelector('#nome')
const profissao = document.querySelector('#profissao')
let cor = document.querySelector('#cor')
const p = document.querySelector('#preencha')
const card = document.querySelector('.card')

function separar(tex, quanti) {
    return tex.split(' ').slice(0, 2).map(palavra => palavra.slice(0, quanti)).join('')
}
formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    if (nome.value === '' || profissao.value === '') {
        p.style.display = 'block'
    }
    else {
        card.innerHTML = ''
        let avatarCard = document.createElement('p')
        let nomeCard = document.createElement('p')
        let profissaoCard = document.createElement('p')
        let barra = document.createElement('div')
        
        nomeCard.textContent = nome.value
        profissaoCard.textContent = profissao.value
        avatarCard.textContent = separar(nome.value, 1)

        avatarCard.classList.add('avatar')

        avatarCard.style.border = `1px solid ${cor.value}`
        avatarCard.style.background = cor.value
        card.style.display = 'flex'
        card.style.border = ` 1px solid ${cor.value}`
        card.style.background = `rgb(241, 239, 232)`
        barra.style.width = '70%'
        barra.style.borderRadius = '10px'
        barra.style.height = '6px'
        barra.style.background = cor.value


        card.appendChild(avatarCard)
        card.appendChild(nomeCard)
        card.appendChild(profissaoCard)
        card.appendChild(barra)

    }
});