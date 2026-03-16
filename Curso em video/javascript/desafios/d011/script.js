function verificar(){
    let ano = Number(prompt("Qual é o ano que você quer verificar?"))
    let res = document.querySelector('.res')
    let p = document.querySelector('p')
    p.innerHTML = ''
    res.innerHTML = ''
    let h2 = document.createElement('h2')
    h2.innerHTML = `Analisando o ano de ${ano}...`
    document.querySelector('.res').appendChild(h2)
    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ){
        res.innerHTML += `O ano de ${ano} <strong style="color: green">É BISSEXTO</strong>`
    }
    else{
        res.innerHTML += `O ano de ${ano} <strong style="color: red">NÃO É BISSEXTO</strong>`
    }
}