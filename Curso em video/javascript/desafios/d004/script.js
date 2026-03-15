function calcular(){
    let produto = prompt("Que produto você está comprando?")
    let valor = prompt(`Quanto custa ${produto} que você está comprando?`)
    let salario = prompt(`Qual foi o valor que você deu para pagar ${produto}`)
    alert(`Você comprou ${produto} que custou R$${valor}.\nDeu R$${salario} em dinheiro e vai receber R$${salario - valor} de troco.\nVolte Sempre!`)
}