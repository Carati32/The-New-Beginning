const biblioteca = [
    { titulo: "O Senhor dos Anéis", autor: "Tolkien", categoria: "Fantasia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", categoria: "Distopia", disponivel: false },
    { titulo: "O Hobbit", autor: "Tolkien", categoria: "Fantasia", disponivel: true },
    { titulo: "Neuromancer", autor: "William Gibson", categoria: "Sci-Fi", disponivel: true },
    { titulo: "Fundação", autor: "Isaac Asimov", categoria: "Sci-Fi", disponivel: false }
];


const novo = biblioteca.filter(item => item.disponivel == true).filter(item => item.categoria == 'Fantasia').map(item => item.titulo)

console.log(novo)