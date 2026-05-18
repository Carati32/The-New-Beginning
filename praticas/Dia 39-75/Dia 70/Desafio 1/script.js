const itensMagicos = [
    { nome: "Espada de Ferro Enferrujada", raridade: "comum" },
    { nome: "Poção de Vida Menor", raridade: "comum" },
    { nome: "Escudo de Ébano", raridade: "raro" },
    { nome: "Anel de Invisibilidade de Winterhold", raridade: "raro" },
    { nome: "Amuleto de Articulação", raridade: "lendário" },
    { nome: "Wabbajack", raridade: "lendário" }
];

const esperar = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

async function abrirBau() {
    console.log('Abrindo baú...')
    await esperar()
    let sorteio = Math.floor(Math.random() * itensMagicos.length)
    let item = itensMagicos[sorteio]
    console.log(`Baú aberto! item encontrado ${item.nome} e sua raridade é ${item.raridade}`)
}


abrirBau() 
