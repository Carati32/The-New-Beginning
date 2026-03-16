function reajustar(){
    let nome = prompt("Qual é o nome do funcionário?")
    let salario = Number.parseFloat(prompt(`Qual é o salário de ${nome}`).replace(',' , '.'))
    let reajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let ganho = salario * (reajuste / 100)
    let resultado = salario + ganho
    let p = document.querySelector('p')
    p.innerHTML = ''
    let h2 = document.createElement('h2')
    h2.innerHTML =  `${nome} recebeu um aumento salarial!`
    let res = document.querySelector('.res')
    res.innerHTML = ''
    document.querySelector('.res').appendChild(h2)
    let salario2 = salario.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    let ganho2 = ganho.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    let resultado2 = resultado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    res.innerHTML += `<br>O salário atual era R$ ${salario2}.`
    res.innerHTML += `<br>Com um aumento de ${reajuste}%, o salário vai aumentar R$${ganho2} no próximo mês.`
    res.innerHTML += `<br>E a partir daí, ${nome} vai passar a ganhar R$ ${resultado2}.`
}