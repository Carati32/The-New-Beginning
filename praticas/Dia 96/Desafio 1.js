const produtos = [
    { nome: "Mouse", preco: 80, emEstoque: true, promocao: true },
    { nome: "Teclado", preco: 150, emEstoque: false, promocao: false },
    { nome: "Monitor", preco: 900, emEstoque: true, promocao: false },
    { nome: "Headset", preco: 200, emEstoque: true, promocao: true },
];

let produtosDisponiveis = produtos.filter(produto => produto.emEstoque === true)

let nomesEmPromocao = produtos.filter(produto => produto.promocao === true).map(produto => {
    return produto.nome
})

let valorTotalEstoque = produtos.reduce((acc, itemAtual) => {
    if (itemAtual.emEstoque === true) {
        acc += itemAtual.preco
    }
    return acc
}, 0)


console.log(produtosDisponiveis)
console.log(nomesEmPromocao)
console.log(valorTotalEstoque)