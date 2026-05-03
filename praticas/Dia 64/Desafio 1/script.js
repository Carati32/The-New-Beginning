
function verificarStatusServidor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("online"), 2000);
    });
}

async function processarEntrada() {
    let status = await verificarStatusServidor()
    if(status == 'online'){
        console.log('Deu bom')
    }
    else{
        console.log('Deu ruim')
    }
}

processarEntrada()