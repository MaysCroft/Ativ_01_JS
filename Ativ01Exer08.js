// Atividade 01 Exercício 08

const ler = require('readline-sync');

let num1 = ler.questionInt("Digite Primeiro Numero: ");
let num2 = ler.questionInt("Digite Segundo Numero: ");

let soma = num1 + num2;

if (soma > 20) {
    let result = soma + 8;
    console.log("Resultado Final: " + result);
} else {
    let result = soma - 5;
    console.log("Resultado Final: " + result);
}