document.querySelectorAll('.pergunta').forEach(item => {
    item.addEventListener("click", function () {
        let aberto = item.nextElementSibling.style.display == 'block'
   
            document.querySelectorAll('.resposta').forEach(item => {
                    item.style.display = 'none'
                
    
            })
         
        

            
            const resposta = item.nextElementSibling
            if (aberto == true) {
                resposta.style.display = 'none'
            }
            else {
                resposta.style.display = 'block'
            }
            

    })
})  