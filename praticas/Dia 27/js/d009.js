let palavra = "GATO"
let vogais = ["A","E","I","O","U"]
let contador = 0
for(let i = 0; i < palavra.length; i++ ){
    if(vogais.includes(palavra[i])){
        contador ++
    }
    
    
}
console.log(`${palavra} tem ${contador} vogais `)




