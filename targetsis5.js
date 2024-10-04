function inverteCaract(caracteres) {
    let palavraInvert = '';

    for (let i = caracteres.length - 1; i >= 0; i--) {
        palavraInvert += caracteres[i];
    }
    console.log(palavraInvert)
}

inverteCaract('alemão')