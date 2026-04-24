async function buscarLoot(){
    return new Promise((item) =>{
        setTimeout(() => item("Você encontrou uma Espada de Ferro!"), 2000)
    })
}

async function executarBusca() {
    const resultado = await buscarLoot()
    console.log(resultado)
}


executarBusca()

