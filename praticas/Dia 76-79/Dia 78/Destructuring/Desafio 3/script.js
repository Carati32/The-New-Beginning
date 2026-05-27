// Sem destructuring
const nome = pessoa.nome
const idade = pessoa.idade

// Com destructuring
const { nome, idade } = pessoa

// Em arrays
const [primeiro, segundo] = [10, 20]

function apresentar({nome, idade}) {
  return `${nome} tem ${idade} anos`
}