function cor() {
    let body = document.querySelector('body')
    let h1 = document.querySelector('h1')
    let button = document.querySelector('button')
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let media = (red + blue + green) / 3
    let rgb = `rgb(${red},${blue},${green})`
    if(media > 128){
        h1.style.color = 'black'
        button.style.color = 'black'
        button.style.background = 'white'
    }
    else{
        h1.style.color = 'white'
        button.style.color = 'white'
        button.style.background = 'black'
    }
    h1.innerHTML = ''
    h1.innerHTML = rgb
    body.style.background = rgb
}