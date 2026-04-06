let entrada = {
    senhaCorreta:'picanha123',
    idadeMinima: 18
}

let senha = document.querySelector('#senha')
let idade = document.querySelector('#idade')
let button = document.querySelector('button')


button.addEventListener('click', function(){
    let valoridade = Number(idade.value)
    if(senha.value == entrada.senhaCorreta && entrada.idadeMinima <= valoridade){
        alert('Pode entrar, o churrasco tá liberado!')
    }
    else{
        alert('Barrado!')
    }
})