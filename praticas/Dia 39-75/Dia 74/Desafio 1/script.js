const vendas = [
  { produto: "Teclado Mechanical", preco: 150 },
  { produto: "Mouse Gamer", preco: 80 },
  { produto: "Monitor 144hz", preco: 900 },
  { produto: "Pad RGB", preco: 40 }
];


// const precototal = vendas.map(item => item.preco).reduce((acumulador, valor) => {
//   return acumulador + valor
// },0)
// OU

const precototal = vendas.reduce((acumulador, valor) =>{
  return acumulador + valor.preco
},0)
console.log(precototal)