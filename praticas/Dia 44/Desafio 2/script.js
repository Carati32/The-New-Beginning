const personagens = [
  { nome: "Link", level: 10 },
  { nome: "Zelda", level: 15 },
  { nome: "Ganon", level: 11 }
];

const personagensUpados = personagens.map(item => {
    return {nome: item.nome, level: item.level + 1, podeEvoluir: item.level + 1 >= 12}
})

console.log(personagensUpados)

