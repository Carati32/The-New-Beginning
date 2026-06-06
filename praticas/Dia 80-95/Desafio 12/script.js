const button = document.querySelectorAll('button')
const input  = document.querySelector('input')
const cardInferior = document.querySelector('.card-inferior')

function calcular(){
    const valorlimpo = input.value.replace(',', '.')
    const botaoAtivo = document.querySelector('button.active')
    if(input.value === '' || valorlimpo === '0' || isNaN(valorlimpo) || !botaoAtivo){
        cardInferior.classList.remove('show')
    }
    else{
        cardInferior.classList.add('show')
        const porcentagem = parseFloat(botaoAtivo.dataset.tip)

        const conta = parseFloat(valorlimpo)
        const gorjeta = (conta * porcentagem) / 100
        const total = conta + gorjeta


        document.querySelector('.valor-gorjeta').textContent = `R$ ${gorjeta.toFixed(2).replace('.', ',')}`
        document.querySelector('.valor-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`
    }
}


input.addEventListener('input', () => {
    calcular()
})



button.forEach(item => {
    item.addEventListener('click', () =>{
        button.forEach(btns => btns.classList.remove('active'))
        item.classList.add('active')
        calcular()
    })
})