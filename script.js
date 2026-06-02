const cart = [
  { name: "Camiseta", price: 49.90, qty: 2 },
  { name: "Tênis", price: 199.90, qty: 1 },
  { name: "Meia", price: 12.50, qty: 3 },
]

function getCartSummary(){
  const totalItems = cart.reduce((acc, valor) => {
    return acc += valor.qty
  },0)
  
  const totalPrice = cart.reduce((acc, valor) =>{
    return acc += valor.price * valor.qty
  }, 0)
  
  const mostExpensive = cart.reduce((acc, valor) =>{
    return acc.price > valor.price ? acc : valor
  }, cart[0])

  return {
  totalItems: totalItems,
  totalPrice: totalPrice.toFixed(2),
  mostExpensive: mostExpensive.name
}
}

console.log(getCartSummary())