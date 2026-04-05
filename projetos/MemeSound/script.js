let btns = document.querySelector('.btns')
let input = document.querySelector('input')
let music = [
    { nome: "Deg-deg", arquivo: "assets/sounds/mikejebait-3.mp3" },
    { nome: "Música-elevador", arquivo: "assets/sounds/musica-elevador-short.mp3" },
    { nome: "Mikejebait", arquivo: "assets/sounds/toms-screams.mp3" }
]
music.forEach(item => {
    let button = document.createElement('button')
    let audio = document.createElement('audio')
    button.textContent = item.nome
    button.dataset.nome = item.nome
    audio.src = item.arquivo
    btns.appendChild(button)
    button.addEventListener('click', function () {
        button.classList.add('playing')
        audio.play()
    })
    audio.addEventListener('ended', function () {
        button.classList.remove('playing')
    })
});


input.addEventListener('input', function(){
    let text = input.value
    text = text.toLowerCase()
    document.querySelectorAll('.btns button').forEach(botao =>{
        if(botao.dataset.nome.toLowerCase().includes(text)){
            botao.style.display = 'block'

        }
        else{
            botao.style.display = 'none'
        }
    })
})