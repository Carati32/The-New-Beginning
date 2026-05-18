function seguir() {
    let novo = document.querySelector('button')
    if (novo.innerHTML == 'Seguindo ✓') {
        novo.innerHTML = 'Seguir'
        novo.style.background = 'black'
        novo.style.color = 'white'
    }
    else {
        novo.innerHTML = 'Seguindo ✓'
        novo.style.background = 'red'
        novo.style.color = 'blue'
    }

}