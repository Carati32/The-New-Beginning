function adicionar(){
    let tarefa = document.querySelector('#tarefa')
    let tf2 = tarefa.value
    if(tf2 == ''){
        alert("Digite algo.")
    }
    else{
        let lista = document.querySelector('.lista')
        let li = document.createElement('li')
        let button = document.createElement('button')
        lista.appendChild(li)
        li.innerHTML = tf2
        li.appendChild(button)
        button.innerHTML = "Remove"
        button.onclick = function(){
            li.remove()
        }
        tarefa.value = ''
    }
}