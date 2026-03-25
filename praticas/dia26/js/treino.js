const mochila = [
    { nome: "Espada de ferro", dano: 10, tipo: "Uma mão" },
    { nome: "Machado de Guerra", dano: 15, tipo: "Duas mãos" },
    { nome: "Adaga de Vidro", dano: 15, tipo: "Uma mão" },
    { nome: "Arco Élfico", dano: 20, tipo: "Distância" }
]


mochila.forEach(item => {
    let buff = item.dano * 1.1
    console.log(`${buff}`)
})

const armasPoderosas = mochila.filter(item => item.dano > 15)

armasPoderosas.forEach(item => {
    console.log(`A ${item.nome} é foda, tem ${item.dano} de dano`)
})