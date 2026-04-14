const fizzBuzz = (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz'
    }
    else if (n % 3 === 0) {
        return 'Fizz'
    }
    else if(n % 5 === 0){
    return 'Buzz'
}
else{
    return n
}
};

console.log(fizzBuzz(15)); // Deve retornar "FizzBuzz"
console.log(fizzBuzz(9));  // Deve retornar "Fizz"
console.log(fizzBuzz(10)); // Deve retornar "Buzz"
console.log(fizzBuzz(7));  // Deve retornar 7
