let itens = document.querySelectorAll('.item-inventario')

let display = document.querySelector('#display-item')



itens.forEach(item =>{
    item.addEventListener('click', function(){
        itens.forEach(itemSelecionado => {
                itemSelecionado.classList.remove('selecionado')
            
                
            });
            item.classList.add('selecionado')
            display.innerHTML = item.innerHTML


    })

})
