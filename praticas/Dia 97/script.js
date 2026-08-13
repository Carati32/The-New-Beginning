
let task = []
const ul = document.querySelector('#lista-tarefas')
const button = document.querySelector('#adicionar')
const input = document.querySelector('#nova-tarefa')
let tarefasPendentes = document.querySelector('#pendente')
let tarefasConcluidas = document.querySelector('#concluida')
async function buscarTarefas() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}: tarefa não encontrada`);
        }
        const dados = await resposta.json()
        task = dados
        renderizarTarefas(dados)
    } catch (erro) {
        console.error('Deu ruim:' + erro)
    }
}

function renderizarTarefas(tarefas) {
    ul.innerHTML = ''
    tarefas.forEach((item) => {
        const li = document.createElement('li')
        const excluir = document.createElement('button')
        excluir.classList.add('botao-excluir')
        excluir.textContent = 'X'
        excluir.addEventListener('click', () =>{
            task = task.filter(tarefa => tarefa.id !== item.id)
            renderizarTarefas(task)
        })
        li.textContent = item.title
        li.appendChild(excluir)
        if (item.completed) {
            li.classList.add('concluida')
        }
        ul.appendChild(li)
    })

    const pendentes = tarefas.filter(tarefa => tarefa.completed === false)
    tarefasPendentes.innerHTML = `Pendentes: ${pendentes.length}`
    const concluidas = tarefas.filter(tarefa => tarefa.completed === true)
    tarefasConcluidas.innerHTML = `Concluidas: ${concluidas.length}`
}



function adicionarTarefa() {
    const valor = input.value
    if (valor === '') {
        alert('CAMPO VAZIO')
        return
    }
    const novaTarefa = {
        id: Date.now(),
        title: valor,
        completed: false
    }
    task.push(novaTarefa)
    input.value = ''
    renderizarTarefas(task)
}

input.addEventListener('keydown', (evento) =>{
    if(evento.key === 'Enter'){
        adicionarTarefa()
    }
})

button.addEventListener('click', () => {
    adicionarTarefa()
})

buscarTarefas()
