let n = 0
let numero = document.querySelector('p')
let soma = document.querySelector('#soma')
let menos = document.querySelector('#menos')
let reset = document.querySelector('#reset')

soma.addEventListener('click', () =>{
    n < 10 ? n++ : null
    numero.innerText = n
    console.log(n)
})

menos.addEventListener('click', () => {
    n > 0 ? n-- : null
    numero.innerText = n
    console.log(n)
})

reset.addEventListener('click', () =>{
    n = 0
    numero.innerText = n
})