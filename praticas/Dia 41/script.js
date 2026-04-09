const missoes = [
  { titulo: "Caçar Lobos", recompensa: 200 },
  { titulo: "Derrotar o Dragão", recompensa: 2000 },
  { titulo: "Limpar o Porão", recompensa: 50 },
  { titulo: "Proteger a Caravana", recompensa: 800 }
];

const aguadar = (ms) =>{
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function processar() {
    console.log('Carregando')



    await aguadar(2000)

    let missoes500 = missoes.filter((item) => item.recompensa > 500).map(item => item.titulo.toUpperCase())

    return missoes500
}

processar().then(resultado =>{
    console.log(resultado)
})