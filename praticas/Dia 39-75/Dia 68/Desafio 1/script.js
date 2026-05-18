const inventario = [
    { nome: "Espada de Ferro", raro: false, peso: 5.5 },
    { nome: "Poção de Cura Maior", raro: true, peso: 0.5 },
    { nome: "Escudo do Dragão", raro: true, peso: 12.0 },
    { nome: "Adaga Envenenada", raro: true, peso: 2.1 },
    { nome: "Elmo de Couro", raro: false, peso: 3.0 }
];


function filtrarEOrdenarItens(lista) {
   return lista.filter(item => item.raro == true).sort((primeiro, segundo) => primeiro.peso - segundo.peso)  

}

const itens = filtrarEOrdenarItens(inventario)
console.log(itens)