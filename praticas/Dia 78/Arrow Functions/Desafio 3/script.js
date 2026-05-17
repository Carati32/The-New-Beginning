const calcularIMC = (peso, altura) => {
    return peso / (altura * altura)
}

console.log(calcularIMC(123, 10))