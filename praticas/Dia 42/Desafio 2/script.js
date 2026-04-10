let itens = [
    { nome: 'Arroz', preco: 12 },
    { nome: 'Kinder ovo', preco: 20000 },
    { nome: 'Café', preco: 15000 }
]

// function precototal() {
//     let total = itens.reduce((total, item) => {
//         return total + item.preco 
//     }, 0)
//     console.log(total)
// }

function SoUm(e){
    let um = itens.filter(item => item.nome != e)
    console.log(um)
    itens = um
}

SoUm('Arroz')
SoUm('Café')
