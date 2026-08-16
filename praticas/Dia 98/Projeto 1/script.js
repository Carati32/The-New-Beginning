let input = document.querySelector('input')
const button = document.querySelector('button')
const container = document.querySelector('.container')

async function buscarCoordenadas(cidade) {
    try {
        const resposta = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidade}`)

        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}: cidade não encontrada `);
        }

        const dados = await resposta.json()
        return dados.results[0]
    } catch (erro) {
        console.error('Deu ruim:' + erro)
    }
}


async function buscarPrevisao(latitude, longitude) {
    try {
        const resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}: coordenadas não encontradas`);
        }
        const dados = await resposta.json()
        return dados.daily
    } catch (erro) {
        console.error('Deu ruim:' + erro)
    }
}

async function buscarClima() {
    let valor = input.value
    let cidade = await buscarCoordenadas(valor)
    let previsao = await buscarPrevisao(cidade.latitude, cidade.longitude)
    container.textContent = ''
    previsao.time.forEach((data, indice) => {
        let card = document.createElement('div')
        let dia = document.createElement('p')
        let minTem = document.createElement('p')
        let maxTem = document.createElement('p')
        const dataObj = new Date(data + 'T00:00:00')
        const dataFormatada = dataObj.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' })
        if(indice === previsao.time.length - 1 && previsao.time.length % 3 === 1){
            card.classList.add('ultimo-impar')
        }
        card.classList.add('card-tempo')
        dia.classList.add('dia')
        minTem.classList.add('minTem')
        maxTem.classList.add('maxTem')

        dia.textContent = dataFormatada
        minTem.textContent = previsao.temperature_2m_min[indice]
        maxTem.textContent = previsao.temperature_2m_max[indice]


        card.appendChild(dia)
        card.appendChild(minTem)
        card.appendChild(maxTem)
        container.appendChild(card)
    });
}

button.addEventListener('click', () => {
    buscarClima()
})

input.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        buscarClima()
    }
})