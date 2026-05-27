let minimo = 1
let maximo = 100
let acerto = false

while (acerto === false) {
  let chute = Math.floor((minimo + maximo) / 2)

  let resposta = prompt(`O seu número é ${chute}? digite: maior, menor ou acertou`)

  if (resposta === 'acertou') {
    alert(`Ganhei! O número era ${chute}`)
    acerto = true
  }
  else if (resposta === 'maior') {
   minimo = chute + 1
  }
  else{
    maximo = chute - 1
  }
} 