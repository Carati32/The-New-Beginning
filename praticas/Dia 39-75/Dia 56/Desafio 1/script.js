async function buscarPokemon(nome) {
   const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
   const poke = await resposta.json()
   console.log(poke.weight)
}

buscarPokemon('pikachu')