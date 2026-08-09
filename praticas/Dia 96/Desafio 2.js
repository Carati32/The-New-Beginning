const carrinho = [
    { nome: "Mouse", preco: 80, quantidade: 2, promocao: true },
    { nome: "Teclado", preco: 150, quantidade: 1, promocao: false },
    { nome: "Monitor", preco: 900, quantidade: 1, promocao: false },
    { nome: "Headset", preco: 200, quantidade: 3, promocao: true },
];

let itensComDesconto = carrinho.map(item => {
    if (item.promocao === true) {
        return {
            ...item,
            preco: item.preco * 0.9
        }
    }
    return item
    //    return{
    //     nome:item.nome,
    //     preco:item.preco * 0.1,
    //     quantidade:item.quantidade,
    //     promocao:item.promocao
    //    }
})

let valorTotalCarrinho = itensComDesconto.reduce((acc, item) => {
    acc += item.preco * item.quantidade
    return acc
}, 0)

let itemMaisCaro = carrinho.reduce((acc, item) => {
    if(acc.preco * acc.quantidade < item.preco * item.quantidade){
        return item
    }
    return acc
},carrinho[0])




localStorage.setItem('meutomate', JSON.stringify(carrinho))

const carrinhosalvo = JSON.parse(localStorage.getItem('meutomate')) || [] // O [] serve para n aparecer o erro "fake"

console.log(carrinhosalvo)