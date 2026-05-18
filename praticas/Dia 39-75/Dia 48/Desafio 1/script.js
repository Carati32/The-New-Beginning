const produtos = [
  { nome: "Mouse", preco: 20 },
  { nome: "Teclado", preco: 50 },
  { nome: "Monitor", preco: 150 }
];

const taxaCambio = 5.00; 

const novo = produtos.map(item => `O ${item.nome} custa R$${item.preco * taxaCambio}` )

console.log(novo)