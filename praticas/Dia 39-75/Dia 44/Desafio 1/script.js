const inventario = [
  { nome: "Espada de Ferro", preco: 50 },
  { nome: "Poção de Cura", preco: 20 },
  { nome: "Escudo de Madeira", preco: 30 }
];

const inventarioInflacionado = inventario.map(item => {
    return {nome:item.nome, preco:item.preco * 2 }
})

console.log(inventarioInflacionado) 