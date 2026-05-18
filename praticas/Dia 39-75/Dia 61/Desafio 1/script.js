function verificar(n){
  let status = Number(n)
  let passa = (status >= 18) ? 'Paga inteira' : 'Paga meia'
  return passa
}

console.log(verificar(18))