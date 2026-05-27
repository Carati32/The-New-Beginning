const vendas = [
  { produto: "Teclado", categoria: "Eletronicos", preco: 200 },
  { produto: "Camiseta", categoria: "Vestuario", preco: 80 },
  { produto: "Mouse", categoria: "Eletronicos", preco: 120 },
  { produto: "Calça", categoria: "Vestuario", preco: 150 },
  { produto: "Livro JS", categoria: "Livros", preco: 50 }
];


const produtos = vendas.reduce((acc, valor) =>{
    acc[valor.categoria] = (acc[valor.categoria] || 0) + valor.preco
  return acc
}, {})

console.log(produtos)