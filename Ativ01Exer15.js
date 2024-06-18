// Atividade 01 Exercício 15

const ler = require("readline-sync");

var meta = 1000;

let nome = ler.question("Digite o Nome do Funcionario: ");
let venda = ler.questionFloat("Digite o Valor de Vendas: ");

if (venda >= meta) {
    console.log("Funcionário(a) " + nome + ", VOCÊ GANHOU O PRÊMIO!!!");
} else {
    console.log("Funcionário(a) " + nome + ", INFELIZMENTE VOCÊ NÃO GANHOU O PRÊMIO!!!");
    console.log("Meta do Mês: R$ " + meta);
}