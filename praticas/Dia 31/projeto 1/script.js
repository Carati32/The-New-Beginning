    let perguntas = [
        {
            pergunta: 'Quem é o mais forte da era moderna?',
            opcoes: ['Satoru Gojo', 'Bob Esponja', 'Ben 10'],
            correta: 0
        },
        {
            pergunta: 'Quem é o "Preparado" que sola todo mundo com tempo de estudo?',
            opcoes: ['Batman', 'Sid do Era do Gelo', 'Peppa Pig'],
            correta: 0
        },
        {
            pergunta: 'Qual desses protagonistas tem sérios problemas de calvície (mas é invencível)?',
            opcoes: ['Goku', 'Saitama', 'Harry Potter'],
            correta: 1
        },
        {
            pergunta: 'Quem é conhecido como o "Mago mais brabo" que não sabe usar magia?',
            opcoes: ['Dumbledore', 'Mashle', 'Gandalf'],
            correta: 1
        },
        {
            pergunta: 'Se o Sukuna aparecer na Fenda do Biquíni, quem ganha?',
            opcoes: ['Sukuna', 'Lula Molusco com clarinete', 'Bob Esponja (Imortal)'],
            correta: 2
        }
    ]
    let acertos = 0
    let indiceatual = 0
    let buttons = document.querySelector('.buttons')
    let reset = document.querySelector('.reset')
    let h1 = document.querySelector('h1')
    let somacerto = new Audio('tmp61fq4oi1.mp3')
    let somerro = new Audio('risada-do-gato.mp3')
    function carregarpagina() {
        buttons.innerHTML = ''
        if (indiceatual == perguntas.length) {
            reset.style.display = 'block'
            h1.innerHTML = `Você acertou ${acertos} de 5`
            return
        }
        else {

            h1.innerHTML = perguntas[indiceatual].pergunta
            perguntas[indiceatual].opcoes.forEach(item => {
                let opcao = document.createElement('button')
                opcao.innerHTML = item
                buttons.appendChild(opcao)
                opcao.addEventListener('click', function () {
                    if (item == perguntas[indiceatual].opcoes[perguntas[indiceatual].correta]) {
                        acertos++
                        somacerto.play()
                        alert('Acertou miserável')
                        somerro.currentTime = 0
                       
                    }
                    else {
                        somerro.play()
                        alert('Ruim demais kkkkkkk')
                        somerro.currentTime = 0
                        
                    }
                    indiceatual++
                    carregarpagina()

                })
            });
        }

    }

    reset.addEventListener('click', function () {
        acertos = 0
        indiceatual = 0
        reset.style.display = 'none'
        carregarpagina()
    })

    carregarpagina() 
