function converter() {
    let metros = Number(prompt("Digite uma distância em metros(m)"))
    if (metros == "") {
        alert("Digite algum metro")
    }
    else {
        const km = metros / 1000
        const hm = metros / 100
        const dam = metros / 10
        const dm = metros * 10
        const cm = metros * 100
        const mm = metros * 1000
        let h2 = document.createElement('h2')
        let p = document.querySelector('p')
        let res = document.querySelector('#res')
        p.innerHTML = ''
        res.innerHTML = ''
        document.querySelector('#res').appendChild(h2)
        h2.innerHTML = (`<strong>A distãncia de ${metros} metros, corresponde a...</strong>`)
        res.innerHTML += `<br>${km} quilômetros(Km)`
        res.innerHTML += `<br>${hm} hectômetros(Hm)`
        res.innerHTML += `<br>${dam} decâmetros(Dam)`
        res.innerHTML += `<br>${dm} decímetros(dm)`
        res.innerHTML += `<br>${cm} centímetros(cm)`
        res.innerHTML += `<br>${mm} milímetros(mm)`
        
    }
}