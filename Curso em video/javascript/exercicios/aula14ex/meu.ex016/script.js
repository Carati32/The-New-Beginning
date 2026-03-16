function contar() {
    let inicio = document.querySelector('#inicio')
    let iniciovalue = inicio.value
    let numero1 = Number(iniciovalue)

    let fim = document.querySelector('#fim')
    let fimvalue = fim.value
    let numero2 = Number(fimvalue)

    let passo = document.querySelector('#passo')
    let passovalue = passo.value
    let numero3 = Number(passovalue)


    let res = document.querySelector('.res')
    if (iniciovalue == '' || fimvalue == '' || passovalue == '') {
        res.innerHTML = "Impossível contar!"
        return
    }
    res.innerHTML = ''
    if (numero3 <= 0) {
        alert("PASSO INVÁLIDO, CONSIDERANDO PASSO 1")
        numero3 = 1
    }
    if (numero2 == numero1) {
        res.innerHTML = ("O INÍCIO NÂO PODE SER IGUAL AO FIM!")
        return
    }
    if (numero1 < numero2) {
        for (let i = numero1; i <= numero2; i += numero3) {
            res.innerHTML += `${i}`
            if (i + numero3 > numero2) {
                res.innerHTML += '🏁'
            }
            else {
                res.innerHTML += '👉'
            }
        }

    }
    else {
        for (let i = numero1; i >= numero2; i -= numero3) {
            res.innerHTML += `${i}`
            if (i - numero3 < numero2) {
                res.innerHTML += '🏁'
            }
            else {
                res.innerHTML += '👉'
            }
        }
    }
}