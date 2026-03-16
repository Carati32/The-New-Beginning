function gerar(){
    let numero1 = document.querySelector('#numero')
    let numbertex = numero1.value
    let numero = Number(numbertex)
    let tabuada = document.querySelector('#tabuada')
    tabuada.innerHTML = ''
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i
        let option = document.createElement('option')
        option.text = `${numbertex} x ${i} =  ${resultado}`
        tabuada.appendChild(option)
    }
}