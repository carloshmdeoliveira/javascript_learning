function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

// usual
console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
// nao usual
console.log(soma(3, 6)) // 9
console.log(soma(777, 5550)) // 6327
console.log(soma('a', 'b', 'c')) // 0abc
console.log(soma(1.1, 2.2, "Teste")) // 3.3000000000000003Teste