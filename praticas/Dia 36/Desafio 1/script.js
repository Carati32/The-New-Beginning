let button = document.querySelectorAll('button')


document.body.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        const classe = event.target.dataset.classe
        const vida = event.target.dataset.hp
        const corFundo = event.target.dataset.cor;
        const especial = event.target.dataset.ataqueEspecial
        document.body.style.background = corFundo
        setTimeout(() => {
            alert(`Você escolheu a classe ${classe} que tem ${vida} de vida. Seu ataque especial é ${especial}`)
        }, 1);
        }
})


// button.forEach(item => {
//     item.addEventListener('click', function(event){
//         const classe = event.target.dataset.classe;
//         const vida = event.target.dataset.hp
//         const corFundo = event.target.dataset.cor;
//         document.body.style.background = corFundo
//         setTimeout(() =>{
//             alert(`Você escolheu a classe ${classe} que tem ${vida} de vida`)

//         }, 1)
//     })
// });