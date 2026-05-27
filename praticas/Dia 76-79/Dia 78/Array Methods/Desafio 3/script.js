const nums = [1, 2, 3, 4, 5]

// find → acha o primeiro que bate
nums.find(n => n > 3) // 4

// some → retorna true/false
nums.some(n => n > 4) // true


const usuarios = [
  { nome: "Ana", idade: 25, admin: false },
  { nome: "Bruno", idade: 17, admin: false },
  { nome: "Carati", idade: 18, admin: true }
]

const adm = usuarios.find(n => n.admin)
const menor = usuarios.some(n => n.idade < 18)

console.log(adm)
console.log(menor)