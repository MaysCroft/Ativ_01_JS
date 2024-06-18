// Atividade 01 Exercício 07

const ler = require('readline-sync');

console.log("---------- Supermercado Le Brioche ----------");
let prod = ler.question("- Digite o Produto: ");
let preco = ler.questionFloat("- Digite o Preco: R$ ");
let pag = ler.questionInt("- Digite Forma de Pagamento: \n 1 - A Vista Dinheiro ou Cheque \n 2 - A Vista Cartao de Credito \n 3 - 2x s/ Juros \n 4 - 2x c/ Juros \n Digite o Codigo: ");
console.log("---------------------------------------------");

if (pag == 1) {
    let pagfinal = preco - ((preco * 10) / 100);
    console.log("Produto com Desconto no Dinheiro ou Cheque: R$ " + pagfinal);
} else if (pag == 2) {
    let pagfinal = preco - ((preco * 15) / 100);
    console.log("Produto com Desconto no Cartao de Credito: R$ " + pagfinal);
} else if (pag == 3) {
    console.log("Preço Final 2x s/ Juros: R$ " + preco);
} else {
    let pagfinal = preco + ((preco * 10) / 100);
    console.log("Preço Final 2x c/ Juros: R$ " + pagfinal);
}