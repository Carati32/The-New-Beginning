let h1  = document.querySelector('h1')
let button = document.querySelectorAll('.cor')


button.forEach(item =>{
    item.addEventListener('click', function(){
        if(item.innerHTML == 'Vermelho'){
            h1.style.color = 'red'
        }
        else if (item.innerHTML == 'Verde'){
            h1.style.color = 'green'
        }
        else if (item.innerHTML == 'Azul'){
            h1.style.color = 'blue'
        }
        else{
            let red = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let rgb = `rgb(${red},${blue},${green})`
            h1.style.color = rgb
        }
    })
})