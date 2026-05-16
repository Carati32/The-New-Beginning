let chat = ["oi", "aventura", "dragão", "sol", "espada"];

for(let i = 0; i < chat.length; i++){
  if(chat[i].length  >= 5){
    chat[i] = 'CENSURADO'
  }
}

console.log(chat)