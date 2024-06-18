// Atividade 01 Exercício 06

const ler = require('readline-sync');

let peso = ler.questionFloat("Digite seu Peso: ");
let altura= ler. questionFloat("Digite sua Altura: ");

let imc = peso / (altura * 2);

if (imc < 18.5) {
    console.log("Você está ABAIXO DO PESO IDEAL PARA UM ADULTO! Seu IMC: " + imc);
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com PESO NORMAL PARA UM ADULTO! Seu IMC: " + imc);
} else if (imc >= 25 && imc <=30) {
    console.log("Você está ACIMA DO PESO IDEAL PARA UM ADULTO! Seu IMC: " + imc);
} else {
    console.log("Você está OBESO! Procure um médico! Seu IMC: " + imc);
}