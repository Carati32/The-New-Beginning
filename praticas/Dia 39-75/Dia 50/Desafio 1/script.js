const inventario = [
    { nome: 'Espada de Ferro', preco: 50 },
    { nome: 'Escudo de Madeira', preco: 20 },
    { nome: 'Poção de Cura', preco: 10 }
];

const nomes = inventario.map(item => item.nome.toUpperCase())

console.log(nomes)

const inflacao = inventario.map(item => {
    return {
        nome: item.nome,
        preco: parseFloat((item.preco * 1.15).toFixed(2))
    }
})

console.log(inflacao)