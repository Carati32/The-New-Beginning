const NovaTarefa = document.querySelector('.new')
const tarefa = document.querySelector('#tarefa')
const adicionar = document.querySelector('#adicionar')
const lista = document.querySelector('.lista')


adicionar.addEventListener('click', () =>{
    const card = document.createElement('div')
    const tff = document.createElement('p')
    const concluir = document.createElement('button')
    tff.textContent = tarefa.value
    concluir.textContent = 'Concluir'
    card.classList.add('card')
    concluir.classList.add('concluir')
    card.appendChild(tff)
    card.appendChild(concluir)
    lista.appendChild(card)
    tarefa.value = ''
    concluir.addEventListener('click', () => {
        tff.style.textDecoration = "line-through"
        tff.style.color = '#888888'
        concluir.textContent = 'Concluído'
        concluir.style.background = 'rgb(38, 38, 36)'
        concluir.style.color = 'rgb(194,192,182)'
    })
})
