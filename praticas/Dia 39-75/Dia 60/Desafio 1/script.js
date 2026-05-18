function numero(n) {
  // if (n % 5 === 0 && n % 3 === 0) {
  //   console.log('FizzBuzz')
  // }
  // else if (n % 3 === 0) {
  //   console.log('Fizz')
  // }
  // else if (n % 5 === 0) {
  //   console.log('Buzz')
  // }
  // else {
  //   console.log('Número paia')
  // }
  // return n

  // OU

  if (n % 15 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
}

console.log(numero(15))