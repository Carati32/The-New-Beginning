async function pegarUsuario() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const dados = await resposta.json();
    console.log(dados.name);
}

pegarUsuario();