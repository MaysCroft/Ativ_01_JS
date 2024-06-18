// Atividade 01 Exercício 09

const ler = require('readline-sync');

let num = ler.questionInt("Digite um Numero: ");

if (num % 3 == 0) {
    console.log("Esse Número é Multiplo de 3");
} else {
    console.log("Esse Número não é Multiplo de 3");
}