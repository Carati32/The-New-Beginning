
let input = document.querySelector('#perfil')
let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let img = document.querySelector('img')

async function buscar(){
    try {
    const resposta = await fetch(`https://api.github.com/users/${input.value}`)
    if(resposta.status === 404){
        h1.innerHTML = 'User não encontrado'
    }
    else{
        const dados = await resposta.json()
        let Usuario = {
            nome: dados.name || 'Não tem nome',
            bio: dados.bio || 'Não tem bio',
            foto:dados.avatar_url
        }
        
        h1.innerHTML = Usuario.nome
        p.innerHTML = Usuario.bio
        img.src = Usuario.foto
        img.style.display = 'block'
    }
    } catch (error) {
        h1.innerHTML = `Rede foi de F ${error}`
        console.log('Rede foi de F' + error)
    }
}

button.addEventListener('click', function(){
    if(input.value == ''){
        h1.innerHTML = 'Digite o nome de um perfil'
    }
    else{
        buscar()
    }
})