const inventario = [
  { nome: "Espada de Ferro", dano: 10, tempo: 2000 },
  { nome: "Espada de dima", dano: 20, tempo: 1000 },
  { nome: "Escudo de Madeira", defesa: 5, tempo: 3000 }
];

function realizarUpgrade(){
    inventario.forEach(item => {
        setTimeout(() => {
            console.log(item)
        }, item.tempo);
    })
}
realizarUpgrade()