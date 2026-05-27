const produtos = [
  { nome: "Caneta", preco: 2 },
  { nome: "Mochila", preco: 80 },
  { nome: "Caderno", preco: 25 },
  { nome: "Monitor", preco: 900 }
]

const baratos = produtos.filter(item => item.preco < 50)

console.log(baratos)