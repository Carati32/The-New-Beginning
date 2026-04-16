function soma(x){
    return function(y){
       if(y != undefined){
           return soma(x+y)  
    }
    else{
        return x
    }
    
    }
}

console.log(soma(5)(5)(10)(12)(11)(1)())