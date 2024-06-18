// Atividade 01 Exercício 16

const ler = require('readline-sync');

let nome = ler.question("Digite o Nome do Funcionario: ");
let qtdprod = ler.questionInt("Digite a Quantidade de Produtos Vendidos: ");

var comissao = 5;

if (qtdprod >= 200 && qtdprod <= 449) {
    let comissao = 7.5;
    let final = qtdprod * comissao;
    console.log("Funcionário - " + nome + " - sua Comissão é: R$ " + final);
} else if (qtdprod >= 450) {
    let comissao = 10;
    let final = qtdprod * comissao;
    console.log("Funcionário - " + nome + " - sua Comissão é: R$ " + final);
} else {
    let final = qtdprod * comissao;
    console.log("Funcionário - " + nome + " - sua Comissão é: R$ " + final);
}