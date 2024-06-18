// Atividade 01 Exercício 18

const ler = require('readline-sync');

let time1 = ler.question("Digite Nome do Primeiro Time: ");
let gol1 = ler.questionInt("Digite Quantidade de Gols do Primeiro Time: ");

let time2 = ler.question("Digite Nome do Segundo Time: ");
let gol2 = ler.questionInt("Digite Quantidade de Gols do Segundo Time: ");

if (gol1 > gol2) {
    console.log("Time Vencedor: " + time1);
} else if (gol2 > gol1) {
    console.log("Time Vencedor: " + time2);
} else {
    console.log("EMPATE!!!");
}