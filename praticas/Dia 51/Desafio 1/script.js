const produtos = [
  { nome: "Teclado", categoria: "Eletrônicos", preco: 150 },
  { nome: "Cadeira", categoria: "Móveis", preco: 500 },
  { nome: "Mouse", categoria: "Eletrônicos", preco: 80 },
  { nome: "Mesa", categoria: "Móveis", preco: 400 }
];

const resultado = produtos.reduce((acumulador, produto) => {
    let categoria = produto.categoria;

    if (!acumulador[categoria]) {
        acumulador[categoria] = []; 
    }

  acumulador[categoria].push(produto.nome)
    
    return acumulador 
}, {});

console.log(resultado);