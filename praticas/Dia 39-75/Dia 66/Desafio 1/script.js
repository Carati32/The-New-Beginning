let ex = [12,16,32,21]

function soma(){
    let total = 0
    for(let x = 0; x < ex.length; x++){
        total += ex[x]
    }
    if(total >= 100){
        console.log('Level Up!')
    }
    else{
        console.log('Continue treinando...')
    }
    console.log(`Ganhou ${total} de ex`)
}

soma()