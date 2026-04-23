const buscarDados = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dados do servidor recuperados!"), 2000);
  });
};

async function exibirDados() {
    const resultado = await buscarDados();
    console.log(resultado)
}

exibirDados();

