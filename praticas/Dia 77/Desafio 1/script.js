const alunos = [
  { nome: "Ana", turma: "A", notas: [8, 7, 9] },
  { nome: "Bruno", turma: "B", notas: [5, 4, 6] },
  { nome: "Carlos", turma: "A", notas: [6, 6, 7] },
  { nome: "Diego", turma: "B", notas: [9, 10, 9] }
];


const sistema = alunos.map(item => {
  return {
    nome: item.nome,
    media: Math.round(item.notas.reduce((acumulador, nota) => {
      return acumulador += nota
    }, 0) / 3)
  }
})

const avaliacao = sistema.filter(item => {
  return item.media >= 7
})

console.log(avaliacao)