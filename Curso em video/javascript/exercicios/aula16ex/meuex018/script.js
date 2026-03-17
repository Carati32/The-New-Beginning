let numeros = []


function adicionar() {
    let number = document.querySelector('#number')
    let number1 = Number(number.value)
    if (number.value.length == 0 || numeros.indexOf(number1) !== -1 || number1 > 100 || number1 < 0 ) {
        alert("Valor inválido ou ja encontrado na lista")
        return
    }
    /*

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == number1) {
            alert("Esse valor ja está na lista")
            return
        }
    }
    Em vez de usar um for só para ver se o número existe, você pode usar o método .indexOf() ou .includes()
    if (numeros.includes(number1)) {
        alert("Já tem esse número na lista!");
        return;
    }
    */


    else {
        let num = document.querySelector('#number')
        let option = document.createElement('option')
        option.innerHTML = `Valor ${number1} adicionado`
        document.querySelector('#selectnumber').appendChild(option)
        numeros.push(number1)
        let res = document.querySelector('.res')
        res.innerHTML = ''
        num.focus()
    }

}
function finalizar() {
    let res = document.querySelector('.res')
    res.innerHTML = ''
    let tamanho = numeros.length
    if (tamanho === 0) {
        alert('Adicione valores antes de finalizar!')
        return
    }
    else if (tamanho === 1) {
        alert('Adicione mais um valor')
        return
    }
    else {

        let p = document.createElement('p')
        document.querySelector('.res').appendChild(p)
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        for (let i = 0; i < numeros.length; i++) {
            if (maior <= numeros[i]) {
                maior = numeros[i]
            }
        }
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i]
            }
        }
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i]
        }
        let media = soma / numeros.length
        p.innerHTML += `Ao todo, temos ${tamanho} números cadastrados.<br>`
        p.innerHTML += `O maior valor informado foi ${maior}.<br>`
        p.innerHTML += `O menor valor informado foi ${menor}.<br>`
        p.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        p.innerHTML += `A média dos valores digitados é ${media}.`
    }
}