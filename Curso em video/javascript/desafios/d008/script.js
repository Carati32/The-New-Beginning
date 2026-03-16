function desconto() {
    let produto = prompt("Qual é o produto que você está comprando?")
    let preco = Number.parseFloat(prompt(`Qual é o preço de ${produto}`).replace(',', '.'))
    let resultado = preco - (preco * (10 / 100))
    let desconto = preco - resultado
    let p = document.querySelector('p')
    p.innerText = ''
    let res = document.querySelector('.res')
    let h2 = document.createElement('h2')
    res.innerHTML = ''
    h2.innerHTML = ''
    document.querySelector('.res').appendChild(h2)
    let preco2 = preco.toFixed(2).replace('.', ',')
    let resultado2 = resultado.toFixed(2).replace('.', ',')
    let desconto2 = desconto.toFixed(2).replace('.', ',')
    h2.innerHTML  =`Calculando desconto de 10% para ${produto}`
    res.innerHTML += `<br>O preço original era R$${preco2}.`
    res.innerHTML += `<br>Você acaba de ganhar R$${desconto2} de desconto (-10%).`
    res.innerHTML += `<br>No fim, você vai pagar R$${resultado2} no produto ${produto}`
}

//795,98
//79,60
//716,38