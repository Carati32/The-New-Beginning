async function buscarUsuarios () {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        const title =  data.slice(0, 5).map(item => item.title)
        console.log(title)
    } catch (error) {
        console.error("Erro ao buscar usuários ", error)
    }
}

buscarUsuarios()