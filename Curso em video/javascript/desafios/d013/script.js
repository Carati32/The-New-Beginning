function notas() {
    let nome = prompt("Qual é o nome do aluno?")
    let nota1 = Number.parseFloat(prompt(`Primeira nota de ${nome}`).replace(',', '.'))
    let nota2 = Number.parseFloat(prompt(`Segunda nota de ${nome}`).replace(',', '.'))
    let media = (nota1 + nota2) / 2
    let res = document.querySelector('.res')
    let p = document.querySelector("p")
    p.innerHTML = ''
    let h2 = document.createElement("h2")
    res.innerHTML = ''
    document.querySelector('.res').appendChild(h2)
    h2.innerHTML = `Analisando a situação de ${nome}`
    let media1 = media.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 })
    let nota1a = nota1.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 })
    let nota2a = nota2.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 })
    if (media > 6) {

        res.innerHTML += `<br>Com as notas ${nota1a} e ${nota2a} a méida é ${media1}`
        res.innerHTML += `<br>Com média acima de 6,0 o aluno está <strong><mark style="background-color: green;">APROVADO</mark></strong>`
    }
    else if (media < 3) {
 

        res.innerHTML += `<br>Com as notas ${nota1a} e ${nota2a} a méida é ${media1}`
        res.innerHTML += `<br>Com média abaixo de 3,0 o aluno está <strong><mark style="background-color: red;">REPROVADO</mark></strong>`
    }
    else {


        res.innerHTML += `<br>Com as notas ${nota1a} e ${nota2a} a méida é ${media1}`
        res.innerHTML += `<br>Com média entre 3,0 e 6,0 o aluno está em <strong><mark style="background-color: yellow;">RECUPERAÇÃO</mark></strong>`
    }
}