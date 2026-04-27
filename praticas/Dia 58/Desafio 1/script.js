const produtos = [
  { nome: 'Teclado', preco: 100, categoria: 'Eletrônicos' },
  { nome: 'Mouse', preco: 50, categoria: 'Eletrônicos' },
  { nome: 'Camiseta', preco: 30, categoria: 'Vestuário' },
  { nome: 'Monitor', preco: 500, categoria: 'Eletrônicos' }
];



const desconto = produtos.filter(item => item.categoria === 'Eletrônicos').map(item => ({
  nome: item.nome,
  preco: item.preco * 0.90
}))

console.log(desconto)