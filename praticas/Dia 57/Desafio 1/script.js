const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrar(lista, regra) {
  let resultado = []; 

  for (const item of lista) {
    if (regra(item)) { 
      resultado.push(item);
    }
  }

  return resultado; 
}

console.log(filtrar(numeros,(n) => n > 5))

