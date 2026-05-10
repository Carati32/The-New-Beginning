const carrinho = [
  { nome: "Mouse Gamer", preco: 12500 },
  { nome: "Teclado Mecânico", preco: 35000 },
  { nome: "Headset", preco: 21000 }
];

const preçosEmReais = carrinho.map(item => {
  return item.preco / 100
});

