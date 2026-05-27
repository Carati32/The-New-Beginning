const dadosBrutos = [
  { id: 1, nome: "  gerson silva  ", email: "GERSON@EMAIL.COM", ativo: true },
  { id: 2, nome: "maria Oliveira", email: "MARIA@EMAIL.COM", ativo: false },
  { id: 3, nome: "  pedro santos ", email: "PEDRO@EMAIL.COM", ativo: true }
];


const dados = dadosBrutos.filter(item => { return item.ativo == true }).map(item => {
return {
  nome:item.nome.trim(),
  email:item.email.toLowerCase()
}

})

console.log(dados)