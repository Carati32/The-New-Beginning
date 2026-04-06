let numeros = [1, 2, 4, 5, 7, 9, 2]
let number = 0

for (let i = 0; i < numeros.length; i++) {
    if (number < numeros[i]) {
        number = numeros[i]
    }
}

console.log(number)


let d1 = 1
if (d1 % 2 == 0) {
    console.log('é par')
}
else {
    console.log('é ímpar')
    
}


for(let i = 0; i <= 100; i++){
    console.log(i)
}

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

let d5 = 1

for(let i = 1; i <= 10; i++){
    let mul = d5 * i
    console.log(`${d5} x ${i} = ${mul}`)
}

let d6 = [1,2,3,4,5,6,7,8,9,10]
let d6b = 0

for(let i = 0; i < d6.length; i++){
    d6b += d6[i]
}
console.log(d6b)

let d7 = [1,5,6,32,4,23,65,62,12,12]
let d7b = 0

for(let i = 0; i < d7.length; i++){
    if(d7b < d7[i]){
        d7b = d7[i]
    }
}