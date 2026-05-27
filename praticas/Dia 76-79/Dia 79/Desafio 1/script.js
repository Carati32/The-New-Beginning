const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

function somaMatriz() {
    return matriz.map((linhaAtual, indice) => {
        return linhaAtual.map((numeroAtual, j) => {
            return numeroAtual += matriz2[indice][j]
        })
    })

}

console.log(somaMatriz())