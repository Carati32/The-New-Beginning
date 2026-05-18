const precosOuro = [100, 250, 400];
let precosPrata = precosOuro.map(p => p * 10)
let novo =precosOuro.reduce((total, p) => total + p, 0)

console.log(precosPrata)
console.log(novo)