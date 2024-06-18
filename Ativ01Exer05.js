// Atividade 01 Exercício 05

const ler = require('readline-sync');

let num1 = ler.questionInt("Digite Primeiro Numero: ");
let num2 = ler.questionInt("Digite Segundo Numero: ");
let num3 = ler.questionInt("Digite Terceiro Numero: ");

if (Number(num1) > Number(num2)) {
    if (Number(num2) > Number(num3)) {
        console.log("A Ordem Decrescente é: " + num1 + num2 + num3);
    } else if (Number(num1) > Number(num3)){
        console.log("A Ordem Decrescente é: " + num1 + num3 + num2);
    } else {
        console.log("A Ordem Decrescente é: " + num3 + num1 + num2);
    }
} else if (Number(num2) > Number(num1)) {
    if (Number(num1) > Number(num3)){
        console.log("A Ordem Decrescente é: " + num2 + num1 + num3);
    } else if (Number(num2) > Number(num3)){
        console.log("A Ordem Decrescente é: " + num2 + num3 + num1);
    } else {
        console.log("A Ordem Decrescente é: " + num3 + num2 + num1);
    }
}