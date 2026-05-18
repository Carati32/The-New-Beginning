const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 }
];

const produtosFormatados = produtos.map((item) => {
  return {
    nome: item.nome,
    preco: `R$${item.preco}`
  }
})


console.log(produtosFormatados)