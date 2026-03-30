let opcao = ['pedra', 'tesoura', 'papel']
let buttons = document.querySelectorAll('button')
let pc = document.querySelector('.pc')
let pontuacao = document.querySelector('.pontuacao')
let resultado = document.querySelector('.resultado')
let vitoria = 0
let derrota = 0

buttons.forEach(item => {
    item.addEventListener('click', function () {
        let minhaescolha = item.id
        let escolhapc = jogadaPC()
        pc.innerHTML = `O PC escolheu ${escolhapc}`
        if (minhaescolha == escolhapc) {
            resultado.innerHTML = 'Empate'
        }
        else if (minhaescolha == 'pedra' && escolhapc == 'tesoura' || minhaescolha == 'tesoura' && escolhapc == 'papel' || minhaescolha == 'papel' && escolhapc == 'pedra') {
            resultado.innerHTML = 'Você venceu!'
            vitoria++
        }
        else {
            resultado.innerHTML = 'Você perdeu!'
            derrota++
        }
        pontuacao.innerHTML = `Vitórias:${vitoria}|Derrotas:${derrota}`
    })
})

function jogadaPC() {
    let jogada = Math.floor(Math.random() * 3)
    return opcao[jogada]
}

