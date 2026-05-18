const produtos = [
  { nome: "Teclado Mecânico", preco: 150.50 },
  { nome: "Mouse Gamer", preco: 89.90 },
  { nome: "Monitor 144hz", preco: 1200.00 }
];

const vitrine = produtos.map(item => {
  return {
    nome: item.nome,
    precoFormatado: item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
}
)

console.log(vitrine);