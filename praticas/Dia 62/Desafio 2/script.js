const inventario = [
  { nome: "poção de vida", preco: 50, quantidade: 3 },
  { nome: "espada de ferro", preco: 200, quantidade: 1 },
  { nome: "escudo de madeira", preco: 150, quantidade: 2 }
];


const resumoInventario = inventario.map(item => {
    const nomeFormatado = item.nome[0].toUpperCase() + item.nome.slice(1)

    const total = item.preco * item.quantidade

    return{
        nome: nomeFormatado,
    valorTotalEstoque: total
    }
})

console.log(resumoInventario)