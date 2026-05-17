const desconto = (preco, vip) => vip  ? preco * 0.8 : preco

console.log(desconto(10, true))