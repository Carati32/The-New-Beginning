function verificar() {
    let antpreco = Number.parseFloat(prompt("Qual era o preço anterior do produto?").replace(',', '.'))
    let dpspreco = Number.parseFloat(prompt("Qual é o preço atual do produto?").replace(',', '.'))
    let p = document.querySelector('p')
    p.innerHTML = ''
    let preco1 = antpreco - dpspreco
    let preco2 = dpspreco - antpreco
    let res = document.querySelector('.res')
    let h2 = document.createElement('h2')
    res.innerHTML = ''
    document.querySelector('.res').appendChild(h2)
    h2.innerHTML = 'Analisando os valores informados'
    if (antpreco < dpspreco) {
        let variacao = (preco2 / antpreco) * 100
        let preco3 = preco2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        let variacao2 = variacao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        let antpreco2 = antpreco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        let dpspreco2 = dpspreco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        res.innerHTML += `<br>O produto custava R$ ${antpreco2} e agora custa R$ ${dpspreco2}.`
        res.innerHTML += `<br>Hoje o produto está mais caro.`
        res.innerHTML += `<br>O preço subiu R$ ${preco3} em relação ao preço anterior.`
        res.innerHTML += `<br>Uma variação de ${variacao2}% pra cima`
    }
    else {
        let variacao = (preco1 / dpspreco) * 100
        let variacao2 = variacao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        let antpreco2 = antpreco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        let dpspreco2 = dpspreco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        let preco3 = preco1.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        res.innerHTML += `<br>O produto custava R$ ${antpreco2} e agora custa R$ ${dpspreco2}.`
        res.innerHTML += `<br>Hoje o produto está mais barato.`
        res.innerHTML += `<br>O preço caiu R$ ${preco3} em relação ao preço anterior.`
        res.innerHTML += `<br>Uma variação de ${variacao2} pra baixo.`
    }
}