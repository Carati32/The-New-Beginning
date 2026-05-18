function aplicarDesconto(desconto){
    const preco = (n) =>{
       return n * (1 - desconto)
    }
    return preco
}
const dezPorCento = aplicarDesconto(0.1);
console.log(dezPorCento(100));  