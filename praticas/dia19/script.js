const button_todos = document.querySelector('.button_todos')
const button_acao = document.querySelector('.button_acao')
const button_rpg = document.querySelector('.button_rpg')
const button_aventura = document.querySelector('.button_aventura')

const genero_acao = document.querySelectorAll('.genero_acao')
const genero_aventura = document.querySelectorAll('.genero_aventura')
const genero_rpg = document.querySelectorAll('.genero_rpg')
button_todos.addEventListener('click', () => {
     genero_acao.forEach(card => {
        card.style.display = 'block'
    })
    genero_aventura.forEach(card => {
        card.style.display = 'block'
    })
    genero_rpg.forEach(card => {
        card.style.display = 'block'
    })


})

button_acao.addEventListener('click', () => {
    genero_acao.forEach(card => {
        card.style.display = 'block'
    })
    genero_aventura.forEach(card => {
        card.style.display = 'none'
    })
    genero_rpg.forEach(card => {
        card.style.display = 'none'
    })

})

button_rpg.addEventListener('click', () => {
    genero_rpg.forEach(card => {
        card.style.display = 'block'
    })
     genero_acao.forEach(card => {
        card.style.display = 'none'
    })
    genero_aventura.forEach(card => {
        card.style.display = 'none'
    })


})

button_aventura.addEventListener('click', () => {
    genero_aventura.forEach(card => {
        card.style.display = 'block'
    })
     genero_acao.forEach(card => {
        card.style.display = 'none'
    })
    genero_rpg.forEach(card => {
        card.style.display = 'none'
    })


})
