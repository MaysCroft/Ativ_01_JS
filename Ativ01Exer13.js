// Atividade 01 Exercício 13

const ler = require('readline-sync');

var alcool = 4.7;
var gasolina = 5.86;

console.log("---------- Bem Vindo ao Posto Águia Real ----------");
console.log("------------------ Lista de Preços ----------------");
console.log("- ÁLCOOL: R$ 4,70 /LITRO");
console.log("- GASOLINA: R$ 5,86 /LITRO");
console.log("---------------------------------------------------");
let combust = ler.question("- Digite o tipo de combustivel: \n- A - Alcool \n- G - Gasolina \n : ");
let litro = ler.questionFloat("- Digite a Quantidade de Litros: ");

if (combust == "A" && litro <= 25) {
    let preco = (litro * alcool) - ((alcool * 2) / 100);
    preco = preco.toFixed(2);
    console.log("Total a ser pago: R$ " + preco);
} else if ((combust == "A" && litro > 25)) {
    let preco = (litro * alcool) - ((alcool * 4) / 100);
    preco = preco.toFixed(2);
    console.log("Total a ser pago: R$ " + preco);
} else if ((combust == "G" && litro <= 25)) {
    let preco = (litro * gasolina) - ((gasolina * 3) / 100);
    preco = preco.toFixed(2);
    console.log("Total a ser pago: R$ " + preco);
} else if ((combust == "G" && litro > 25)) {
    let preco = (litro * gasolina) - ((gasolina * 5) / 100);
    preco = preco.toFixed(2);
    console.log("Total a ser pago: R$ " + preco);
}

console.log("---------------------------------------------------");