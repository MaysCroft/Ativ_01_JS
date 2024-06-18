// Atividade 01 Exercício 17

const ler = require('readline-sync');

let h1 = ler.questionInt("Digite Idade do Homem 1: ");
let h2 = ler.questionInt("Digite Idade do Homem 2: ");

let m1 = ler.questionInt("Digite Idade da Mulher 1: ");
let m2 = ler.questionInt("Digite Idade da Mulher 2: ");

if (h1 > h2) {
    if (m1 > m2) {
        let soma1 = h1 + m2;
        let soma2 = h2 + m1;
        console.log("A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
        console.log("A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
    } else {
        let soma1 = h1 + m1;
        let soma2 = h2 + m2;
        console.log("A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
        console.log("A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
    }
} else {
    if (m1 > m2) {
        let soma1 = h2 + m2;
        let soma2 = h1 + m1;
        console.log("A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
        console.log("A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
    } else {
        let soma1 = h2 + m1;
        let soma2 = h1 + m2;
        console.log("A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
        console.log("A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
    }
}