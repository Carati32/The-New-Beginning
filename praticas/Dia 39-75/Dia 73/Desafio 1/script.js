const pedidos = [
  { id: 1, produtos: [{ nome: 'Camisa', cat: 'Moda', preco: 50 }, { nome: 'Tênis', cat: 'Moda', preco: 150 }] },
  { id: 2, produtos: [{ nome: 'Mouse', cat: 'Tech', preco: 100 }] },
  { id: 3, produtos: [{ nome: 'Monitor', cat: 'Tech', preco: 900 }, { nome: 'Livro', cat: 'Lazer', preco: 40 }] }
];


const produtosUnificados = pedidos.map(item => item.produtos).flat().reduce((acumulador, produto) => {
  const { cat, preco } = produto
  if (!acumulador[cat]) {
    acumulador[cat] = 0
  }
  acumulador[cat] += preco
  return acumulador
}, {})

console.log(produtosUnificados)