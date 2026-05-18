const produtos = [
  { nome: "Teclado Mecânico", preco: 150, emEstoque: true },
  { nome: "Mouse Gamer", preco: 80, emEstoque: false },
  { nome: "Monitor 144hz", preco: 900, emEstoque: true },
  { nome: "Cabo HDMI", preco: 25, emEstoque: true }
];


function nova(){
   let array = produtos.filter((item)=>{
       return item.emEstoque == true
   }).map((item) =>{
    return item.nome
   })
   console.log(array)
}

nova()  