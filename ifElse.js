const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else { // CURIOSIDADE: O que acontece se else; ?
        console.log('Reprovado!')
    }
}

imprimirResultado(10) // Aprovado!
imprimirResultado(4) // Reprovado!!
imprimirResultado('Epa!') // Reprovado!! ~ Deveria ser um erro - Linguagem fracamente tipada