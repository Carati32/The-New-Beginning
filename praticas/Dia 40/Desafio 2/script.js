const mochila = [
  { item: "Espada", peso: 5 },
  { item: "Escudo", peso: 10 },
  { item: "Poção", peso: 0.5 }
];

let novo1 =mochila.map(item => item.item)
let novo2 = mochila.reduce((total, p) => total + p.peso,0)
console.log(novo1)
console.log(novo2)