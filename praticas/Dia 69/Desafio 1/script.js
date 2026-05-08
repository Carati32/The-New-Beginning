const inventario = [
    { nome: "Espada de Ferro", tipo: 'arma', peso: 5.5 },
    { nome: "Poção de Cura Maior", tipo:'pocao', peso: 0.5 },
    { nome: "Escudo do Dragão", tipo:'armadura', peso: 12.0 },
    { nome: "Adaga Envenenada", tipo:'arma', peso: 2.1 },
    { nome: "Elmo de Couro", tipo:'armadura', peso: 3.0 }
];

function armas(lista){
    return lista.filter(item => item.tipo == 'arma')
}

function pesototal(lista){
    return lista.reduce((acumulador, valorAtual) => {
      return  acumulador + valorAtual.peso
    }, 0)
}


inventario.forEach(item => {
    console.log(`O item ${item.nome} é do tipo ${item.tipo}`)
});