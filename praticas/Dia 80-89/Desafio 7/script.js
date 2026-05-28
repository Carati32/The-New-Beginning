const cartas = document.querySelectorAll('.carta')
const tentativas = document.querySelector('p')
let contTentativas = 0
let trava = false
let virada = null 

cartas.forEach(item => {
    item.addEventListener('click', () =>{
        if(trava === true){
            return
        }
        if(item === virada){
            return
        }
        item.textContent = item.dataset.emoji
        if(virada === null){
            virada = item
        }
        else{
        tentativas.textContent = `tentativas: ${++contTentativas }`
            if(item.dataset.emoji === virada.dataset.emoji){
                virada = null
            }
            else{
                trava = true
                setTimeout(() =>{
                    item.textContent = ''
                    virada.textContent = ''
                    virada = null
                    trava = false
                }, 1000)
            }
        }
    })
})