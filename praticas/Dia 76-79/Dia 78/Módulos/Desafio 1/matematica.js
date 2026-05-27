export function somar(...nums) {
    return nums.reduce((acc, valor) => acc += valor, 0)
}

export function subtrair(n1,n2) {
   return n1 - n2
}

export function multiplicar(n1, n2) {
    return n1 * n2
}
export function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i)
    }
}
