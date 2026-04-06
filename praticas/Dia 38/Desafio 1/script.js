const cartas = [
    { nome:"Charizard", tipo: "fogo"},
    { nome:"Pikachu", tipo: "eletrico"},
    { nome:"Charmeleon", tipo: "fogo"},
    { nome: "Bulbasaur", tipo: "planta"},
    { nome: "Charmander", tipo: "fogo"}
]
let input = document.querySelector("#busca")
let resultados = document.querySelector("#resultados")

function buscarPokemon(nome){
    let nomepoke = nome.toLowerCase()
    return cartas.filter((item) => {
        return item.nome.toLowerCase().includes(nomepoke)
    })

}

function mostrarResultados(){
    let busca = input.value
    let busca1 = buscarPokemon(busca)

    busca1.forEach((item) =>{
        let p = document.createElement('p')
        resultados.appendChild(p)
        p.innerHTML = item.nome
    })
}