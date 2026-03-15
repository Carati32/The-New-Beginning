window.onload = function(){
    valor =Number.parseFloat(prompt("Antes de mais nada. Quanto está a cotação do dólar agora?").replace(',', '.'))
    
}
let valor 

function converter(){
    let saldo = Number.parseFloat(prompt("Quantos R$ você tem na carteira?"))
    if(saldo == 0){
        alert("digite seu saldo!")
    }
    else{
        let res = document.querySelector('.res')
        let resultado = Number(saldo / valor).toFixed(2)
        let h2 = document.createElement('h2')
        let p = document.querySelector('p')
        res.innerHTML = ''
        h2.innerHTML = `Seu saldo é ${saldo}. Você pode comprar...`
        p.innerHTML = ''
        document.querySelector('.res').appendChild(h2)
        res.innerHTML += `Dólares US$${resultado}`
    }
}