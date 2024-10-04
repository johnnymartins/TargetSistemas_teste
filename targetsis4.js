const dadosFat = [
    { 'uf': 'SP', 'valor': 67836.43 },
    { 'uf': 'RJ', 'valor': 36678.66 },
    { 'uf': 'MG', 'valor': 29229.88 },
    { 'uf': 'ES', 'valor': 27165.48 },
    { 'uf': 'Outros', 'valor': 19849.53 },
]

let valorTotal = 0;
let uf = dadosFat.uf;

dadosFat.forEach(dado => {
    valorTotal += dado.valor;
})
console.log(valorTotal);

dadosFat.forEach(dado => {
    console.log(`O percentual de representação de ${dado.uf} foi ${(dado.valor/valorTotal*100).toFixed(2)}%`)
})