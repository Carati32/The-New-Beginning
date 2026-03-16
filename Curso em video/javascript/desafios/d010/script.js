function calcular(){
    let a = Number(prompt("Qual é o valor de a?"))
    let b = Number(prompt("Qual é o valor de b?"))
    let c = Number(prompt("Qual é o valor de c?"))
    let delta = b*b - 4*a*c
    let res = document.querySelector('.res')
    let p = document.querySelector('p')
    p.innerHTML = ''
    res.innerHTML = ''
    let h2 = document.createElement('h2')
    document.querySelector('.res').appendChild(h2)
    h2.innerHTML = "<br><strong>Resolvendo Bhaskara</strong>"
    res.innerHTML += `<br>A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0 `
    res.innerHTML +=  `<br>O cálculo realizado será Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}`
    res.innerHTML += `<br>O valor calculado foi <mark>Δ = ${delta}</mark>`
}