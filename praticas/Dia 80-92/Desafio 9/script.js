const formulario = document.querySelector('form')
const nome = document.querySelector('#nome')
const preco = document.querySelector('#preco')
const produtos = carregarProdutos()
const estoque = document.querySelector('.estoque')
function carregarProdutos() {
    const salvo = localStorage.getItem('produtos')
    return salvo ? JSON.parse(salvo) : []
}

function renderizarProdutos() {
    estoque.innerHTML = ''
    const contador = document.createElement('p')
    contador.style.color = 'white'
    estoque.appendChild(contador)
    contador.textContent = `Produtos em estoque: ${produtos.length}`
    produtos.forEach((produto, index) => {
        const card = document.createElement('div')
        const produtoNome = document.createElement('p')
        const produtoPreco = document.createElement('p')
        const remove = document.createElement('button')
        remove.textContent = 'Remover'

        produtoNome.textContent = produto.nome
        produtoPreco.textContent = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        card.appendChild(produtoNome)
        const infosDireita = document.createElement('div')
        infosDireita.appendChild(produtoPreco)
        infosDireita.appendChild(remove)

        infosDireita.classList.add('infosDireita')

        card.appendChild(infosDireita)

        estoque.appendChild(card)

        remove.addEventListener('click', () => {
            produtos.splice(index, 1)
            localStorage.setItem('produtos', JSON.stringify(produtos))
            renderizarProdutos()
        })

    });
}


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const infos = { nome: nome.value, preco: Number(preco.value) }
    if (nome.value === '' || preco.value === '') {
        return
    }
    produtos.push(infos)
    localStorage.setItem('produtos', JSON.stringify(produtos))
    renderizarProdutos()
    nome.value = ''
    preco.value = ''
})

renderizarProdutos()