// Atividade 01 Exercício 10

const ler = require('readline-sync');

console.log("-------------------- Prefeitura de Nova Lima --------------------");
console.log("----- Verifique aqui se voce tem direito a linha de Credito! ----");
let nome = ler.question("- Digite o Nome do Funcionario: ");
let salbruto = ler.questionFloat("- Digite o Salario Bruto: R$ ");
let prest = ler.questionFloat("- Digite o Valor da Prestacao: R$ ");
console.log("-----------------------------------------------------------------");

let valmax = (salbruto * 25) / 100;

if (prest > valmax) {
    console.log("Infelizmente, o(a) Funcionario(a) " + nome + " não tem direito a Linha de Credito!");
} else {
    console.log("Funcionario(a) " + nome + " você tem direito a Linha de Credito!");
}