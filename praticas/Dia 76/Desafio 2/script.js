for (let i = 100; i >= 1; i--) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz, o número é ' + i)
  }
  else if (i % 3 === 0) {
    console.log('Fizz, o número é ' + i)

  }
  else if (i % 5 === 0) {
    console.log('Buzz, o número é ' + i)

  }
  else{
    console.log(`O número ${i} não é divisivel por 5 ou 3`)
  }
}