    let resultado = document.querySelector('.resultado')
    let numero = document.querySelectorAll('.number')
    let operacao = document.querySelectorAll('.operacao')
    let igual = document.querySelector('.igual')
    let reset = document.querySelector('.reset')

    let primeiroNumero = ''
    let operadorEscolhido = ''
    numero.forEach(item => {
        item.addEventListener('click', function () {
            resultado.innerHTML += item.innerHTML
        })
        
    });

    operacao.forEach(item => {
        item.addEventListener('click', function () {
            primeiroNumero = resultado.innerHTML
            operadorEscolhido = item.innerHTML
resultado.innerHTML += item.innerHTML        })
    })

    igual.addEventListener('click',function(){
        let multi =  resultado.innerHTML.replace('X', '*')
        resultado.innerHTML = eval(multi)
    })

    reset.addEventListener('click', function(){
        resultado.innerHTML = ''
    })

