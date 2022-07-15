// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function imprimir (dividendo, divisor, divisao, resto) {
        divisao = dividendo / divisor
        resto = dividendo % divisor
        console.log(`Resultado da divisão é: ${divisao}, e o resto será ${resto}` )
}

imprimir(9, 2)