function verificarCupom(codigo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (codigo == 'PROMO15') {
                resolve("Desconto de 15% aplicado!")
            }
            else {
                reject("Cupom inválido.")
            }
        }, 2000)


    });
}

async function processar() {
     try {
         let status = await verificarCupom('PROMO15')
         console.log(status)
     } catch (error) {
        console.error('Erro detectado: ', error)
     }
}

processar()