async function buscarUsuario() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await res.json()
        console.log(data.name)
    } catch (error) {
        console.error("Erro ao buscar usuário ", error)
    }

}

buscarUsuario() 