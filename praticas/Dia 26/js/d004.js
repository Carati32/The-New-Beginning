const loja = [
    { nome: "Escudo de Madeira", preco: 50, categoria: "Defesa" },
    { nome: "Espada de Aço", preco: 150, categoria: "Ataque" },
    { nome: "Poção de Vida", preco: 20, categoria: "Consumível" },
    { nome: "Capacete de Ferro", preco: 100, categoria: "Defesa" }
];


const defense = loja.filter(item => item.categoria === "Defesa")

const preco = defense.reduce(
    (total, item) => total + item.preco,0
)


console.log(preco)