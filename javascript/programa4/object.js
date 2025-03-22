const carro = {
    marca: "Ferrari",
    modelo: "F8",
    cor: "Vermelho",
    ano: 2025,
    preco: 3000000,
    placa: "ABC-1234",
    proprietario: {
        nome: "Gabriel",
        idade: 25,
    },
    ligar: () => {
        alert("Ligando o carro...");
    }
}

const mensagem = `Bom dia ${carro.proprietario.nome}, seu carro: ${carro.marca}, ${carro.modelo} está pronto para ser retirado.`;

console.log(mensagem);
console.log(carro.marca, carro["marca"]);

// carro.ligar();

const livro = {
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    pages: 1000,
    emprestar: () => {
        alert("Livro emprestado!");
    }
}

livro.emprestar();