const meusInvestimentos = [
  { nome: "MXRF11", valor: 10.50 },
  { nome: "HGLG11", valor: 165.00 },
  { nome: "XPLG11", valor: 94.20 },
  { nome: "BCFF11", valor: 9.15 }
];


const listaFormatada = meusInvestimentos.map(item => `Ativo: ${item.nome} - R$${item.valor}`)

console.log(listaFormatada)