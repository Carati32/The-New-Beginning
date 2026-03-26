const mochila = [
    {nome: "Espada", dano: 14, tipo: "Uma mão"},
    {nome: "Machado", dano: 11, tipo: "Duas mãos"},
    {nome: "Arco", dano: 172, tipo: "Uma mão"}
]

const armasDoFerreiro = mochila.filter(item => item.tipo === "Uma mão" && item.dano > 12)


armasDoFerreiro.forEach(item => {
    console.log(`A arma ${item.nome} é joia demais. Seu dano é de ${item.dano}`)
    
})
// console.log(`A arma ${armasDoFerreiro.nome} é joia demais. Seu dano é de ${armasDoFerreiro.dano}`) Por que isso nao funciona?