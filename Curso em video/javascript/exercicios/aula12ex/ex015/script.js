function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/bebe_masculino.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem_homem.png')

            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/homem_adulto.png')

            }
            else {
                // idoso
                img.setAttribute('src', 'images/homem_idoso.png')
            }

        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/bebe_feminino.png')
            }
            else if (idade < 21) {
                //jovem
                
                img.setAttribute('src', 'images/jovem_mulher.png')

            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/mulher_adulta.png')

            }
            else {
                // idoso
                img.setAttribute('src', 'images/mulher_idosa.png')

            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}