const mochila = [
    {nome: "Espada", dano: 14, tipo: "Uma mão"},
    {nome: "Machado", dano: 11, tipo: "Duas mãos"},
    {nome: "Arco", dano: 12, tipo: "Uma mão"}
]


const totaldano = mochila.reduce((total,item) => {
     return total + item.dano;
    },0)
    
    console.log(totaldano)