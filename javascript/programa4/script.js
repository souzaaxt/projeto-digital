// console.log("Olá mundo!");

let frutas = ["Maçã", "Banana", "Laranja"];
let numeros = [1, 2, 3, 4, 5];

// Adicionando um elemento no final do array
frutas.push("Manga");

// console.log(frutas);

// Removendo o último elemento do array
frutas.pop();

// console.log(frutas);

// Removendo o primeiro elemento do array
frutas.shift();

// console.log(frutas);

// Adicionando um elemento no início do array
frutas.unshift("Morango");
frutas.unshift("Uva");

// console.log(frutas);

// Slice (Cortar o array)
const frutasCortadas = frutas.slice(2, 3);

// console.log(frutasCortadas);

// Join (Juntar os elementos do array)
const frutasJuntas = numeros.join(" / ");

// console.log(frutasJuntas);

// Reverse (Inverter a ordem dos elementos do array)
const frutasInvertidas = frutas.reverse();

// console.log(frutasInvertidas);

// Concact (Concatenar arrays)
const frutas2 = ["Pera", "Abacaxi"];

// console.log(frutas2);

const frutasConcatenadas = frutas.concat(frutas2);

// console.log(frutasConcatenadas);

// indexOf (Retorna o índice do elemento no array)
const indice = frutasConcatenadas.indexOf("Banana");

// console.log(indice);

// console.log(frutasConcatenadas[indice]);

// Includes (Verifica se o elemento existe no array)
const temBanana = frutasConcatenadas.includes("Banana");

// console.log(temBanana);

// Map (Mapear os elementos do array)

const frutasMap = frutasConcatenadas.map((fruta, indice) => {
    return fruta + " da lista" + indice;
})

const numerosMap = numeros.map((numero) => {
    return numero * 2;
})

// console.log(numerosMap);

// console.log(frutasMap);

// Filter (Filtrar os elementos do array)
// Filtre as frutas que tenham o tamanho acima de 4 caracteres

function filtro(fruta) {
    return fruta.length <= 4;
}

const frutasFiltradas = frutasConcatenadas.filter(filtro);

// console.log(frutasConcatenadas);
// console.log(frutasFiltradas);

// Find (Encontrar um elemento no array)
// Encontre a fruta que comece com a letra "A"

const frutaEncontrada = frutasConcatenadas.find((fruta) => {
    return fruta.length > 4;
})

// console.log(frutaEncontrada);

// Reduce (Reduzir o array a um único valor)
const pagamentos = [4000, 2000, 5000, 1000];

// Some todos os pagamentos
const pagamentoTotal = pagamentos.reduce((acumulador, atual) => {
    return acumulador + atual;
}, 7000);

// console.log(pagamentoTotal);

// Exercicios
// 1. Crie uma lista com 5 nomes dos alunos da turma e adicione um novo aluno no final da lista.
let alunos = ["João", "Maria", "José", "Ana", "Carlos"];

alunos.push("Pedro");

console.log(alunos);




// 2. Remova o último aluno da lista.
alunos.pop();

console.log(alunos);





// 3. Crie uma lista com numeros acima de 10 (filter)
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const numerosFiltrados = numeros2.filter((numero) => {
    return numero > 10;
});

console.log(numerosFiltrados);





// 4. Use o metodo map para dobrar os valores da lista de numeros acima.
const numerosDobrados = numeros2.map((numero) => {
    return numero * 2;
})

console.log(numerosDobrados);