function converter(){
    let temperatura = Number.parseFloat(prompt("Digite uma temperatura em °C (Celsius)"))
    if(temperatura == ''){
        alert("Digite uma temperatura!")
    }
    else{
        let kelvin = temperatura + 273.15
        let fahrenheit = temperatura * 9 / 5 + 32
        let p = document.querySelector('p')
        let h2 = document.createElement('h2')
        let res = document.querySelector('#tempe')
        res.innerHTML = ''
        document.querySelector('#tempe').appendChild(h2)
        h2.innerHTML =  `<strong>A temperatura de ${temperatura}, corresponde a...</strong>`
        p.innerHTML = ''
        res.innerHTML += `<br>${kelvin}°K (Kelvin)`
        res.innerHTML += `<br>${fahrenheit}°F (Fahrenheit)`
    }
}