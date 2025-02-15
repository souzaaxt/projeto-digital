// console.log("Olá mundo")

// function saudacao() {
//     console.log("Bom dia!")
// }

// saudacao()

// function exibirNome(nome) {
//     console.log("Bom dia,", nome)
// }

// exibirNome("Gabriel");
// exibirNome("Rodrigo");
// exibirNome("Daniel");

// function soma(numero1, numero2) {
//     const numero1Int = Number(numero1);
//     const numero2Int = Number(numero2);

//     return numero1Int + numero2Int;

//     console.log("Isso não será exibido");
// }

// const valor1 = prompt("Digite o primeiro valor");
// // const valor2 = prompt("Digite o segundo valor");

// const resultadoSoma = soma(valor1);

// function multiplicacao(numero1, numero2) {
//     const numero1Int = Number(numero1);
//     const numero2Int = Number(numero2);

//     return numero1Int * numero2Int;
// }

// const resultadoMultiplicacao = multiplicacao(resultadoSoma, 2);

// console.log("O resultado da soma é", resultadoSoma);
// console.log("O resultado da multiplicação é", resultadoMultiplicacao);


// // Funcao para verificar se o número é ímpar ou par

// function verificaParOuImpar(numero) {
//     const num = Number(numero);

//     console.log("num 1 ::", num);
//     if(num % 2 === 0) {
//         return "O número é par"
//     } else {
//         return "O número é ímpar"
//     }
// }

// console.log(verificaParOuImpar(valor1))
// console.log("num 2 :: ", num);





// function hello() {
//     const globalVar = "Olá mundo";

//     console.log(globalVar);
// }

// hello();

// console.log(globalVar);


let titulo = document.getElementById("titulo");
const nomeUsuario = document.getElementById("nome");

// console.log(nomeUsuario);
function alterarTitulo() {
    const nome = nomeUsuario.value;

    if (nome === "") {
        alert("Digite o seu nome");
        return;
    }
    titulo.innerHTML = "Bom dia, " + nome;
}