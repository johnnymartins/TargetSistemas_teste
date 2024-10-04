
function criarfibonacci(secondNumber) {

    let sequence = [0, secondNumber]; //cria uma lista com o primeiro número predeteminado e o próximo como variável

    for (let i = 2; i < 10; i++) { //a sequência conterá 10 números neste loop
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber); //atualiza a sequencia adicionando o novo número
    }

    return sequence; //retorna a sequência atualizada para entrar novamente no loop
}

let secondNumber = 2 //número determinado pelo usuário para ser o segundo da sequência
console.log(criarfibonacci(secondNumber)); //chamada da função imprimindo a sequência na tela
