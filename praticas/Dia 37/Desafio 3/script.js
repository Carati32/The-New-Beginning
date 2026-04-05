    let nome = document.querySelector('#nome-pokemon')
    let img = document.querySelector('#sprite-pokemon')
    let tipo = document.querySelector('#tipo')
    let altura = document.querySelector('#altura')
    let peso = document.querySelector('#peso')
    let moves = document.querySelector('#qtn-moves')
    let button = document.querySelector('button')
    let input = document.querySelector('input')
    async function pokemon() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
            if(!response.ok){
                return nome.innerHTML = 'Erro: 404', img.src = '', tipo.innerHTML = '',  altura.innerHTML = '', peso.innerHTML = ''
            }
            const data = await response.json()
            nome.innerHTML = data.name.toUpperCase()
            tipo.innerHTML = data.types[0].type.name.toUpperCase()
            altura.innerHTML = data.height / 10
            peso.innerHTML = data.weight / 10
            moves.innerHTML = data.moves.length
            if(!data.sprites.versions['generation-v']['black-white'].animated.front_default){
                img.src = data.sprites.front_default
            }
            else{
            img.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
            }
        } catch (error) {
            console.log(error)
        }
    }
    button.addEventListener('click', function(){
        pokemon()

    })

    input.addEventListener('keydown', function(e) {
        if(e.key === 'Enter'){
            pokemon()
        }
    })