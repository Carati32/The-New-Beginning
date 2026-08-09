async function buscarUsuario() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1123')

        if(!resposta.ok){
            throw new Error(`Erro ${resposta.status}: usuário não encontrado`);
        }

        const dados = await resposta.json()
        console.log(dados.name)
    } catch (erro) {
        console.error("Deu erro:", erro)
    }

}

buscarUsuario()