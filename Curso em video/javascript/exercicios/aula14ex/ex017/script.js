function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'images/dia_circulo.png'
        document.body.style.background = '#c6bba9'

    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'images/tarde_circulo.png'
        document.body.style.background = '#ed7564'
    }
    else {
        //BOA NOITE!
        img.src = 'images/noite_circulo.png'
        document.body.style.background = '#5e636f'


    }
}
