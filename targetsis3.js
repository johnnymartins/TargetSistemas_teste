const fs = require('fs');

const jsonData = fs.readFileSync('dadosTargetSis.json', 'utf-8')

const dados = JSON.parse(jsonData);

let i = 0;
let somaValor = 0;
let menorValor = dados[0].valor;
let maiorValor = dados[0].valor;
let diaMenor = dados[0].dia;
let diaMaior = dados[0].dia;
let diasFatur = 0

dados.forEach(dado => {

    //dia com menor faturamento
    if (dado.valor !== 0 && dado.valor < menorValor) {
        menorValor = dado.valor;
        diaMenor = dado.dia;
    }

    //dia com maior faturamento
    if (dado.valor !== 0 && dado.valor > maiorValor) {
        maiorValor = dado.valor;
        diaMaior = dado.dia;
    }

    //quantos dias o valor de faturamento diário foi maior do que a média mensal
    if (dado.valor !== 0) {
        somaValor += dado.valor;
        diasFatur += 1;
        
    }
})
console.log(`O menor valor de faturamento foi ${menorValor.toFixed(2)} no dia ${diaMenor}.`);
console.log(`O maior valor de faturamento foi ${maiorValor.toFixed(2)} no dia ${diaMaior}.`);

const mediaFatur = somaValor / diasFatur;

console.log(`A média de faturamento mensal é: ${mediaFatur.toFixed(2)}`)

let diasAcimaMedia = 0;

dados.forEach(dado => {
    if (dado.valor !== 0 && dado.valor > mediaFatur) {
        diasAcimaMedia += 1;
    }
})
console.log(`A quantidade de dias em que o faturamento foi superior à média mensal é ${diasAcimaMedia}.`)

