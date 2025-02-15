// Exercicio 3

// Usar o prompt para perguntar a largura e a altura do retângulo e retornar a área

// let largura = prompt("Digite a largura do retângulo");
// let altura = prompt("Digite a altura do retângulo");

// console.log("largura: " + largura);
// console.log("altura: " + altura);

// const media = largura * altura;

// console.log("A média é de: " + media)



// Calcule o perímetro de um retângulo

const larguraRetangulo = prompt("Digite a largura do retângulo");
const alturaRetangulo = prompt("Digite a altura do retângulo");

const alturaNumero = Number(alturaRetangulo);
const larguraNumero = Number(larguraRetangulo);


console.log("larguraRetangulo: ", larguraRetangulo, typeof larguraRetangulo)
console.log("alturaRetangulo: ", alturaRetangulo, typeof alturaRetangulo)

console.log("alturaNumero: ", alturaNumero, typeof alturaNumero);
console.log("larguraNumero: ", larguraNumero, typeof larguraNumero);
const perimetro = 2 * (Number(larguraRetangulo) + Number(alturaRetangulo))

console.log(perimetro)