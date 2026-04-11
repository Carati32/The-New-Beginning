const inventario = [
    { nome: "Poção de Cura", tipo: "consumivel", preco: 50 },
    { nome: "Espada de Aço", tipo: "arma", preco: 150 },
    { nome: "Escudo de Ferro", tipo: "armadura", preco: 200 },
    { nome: "Poção de Mana", tipo: "consumivel", preco: 40 }
];

let novo1 = inventario.filter(item => item.tipo == 'consumivel').map(item => item.nome.toUpperCase())

console.log(novo1)

let total = inventario.reduce((total, item) => total + item.preco, 0)

console.log(total)

let desconto = inventario.map(item => {
   return item.tipo == 'arma' ? {...item, preco: item.preco * 0.9} : item
})
console.log(desconto)

let upgrade = inventario.map(item => {
    return item.tipo == 'armadura' ? {...item, nome: item.nome + ' +1'} : item
}
)

console.log(upgrade)