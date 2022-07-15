function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // random entre 40 e 50
console.log(rand([992])) // random entre 992 e 1000
console.log(rand([, 10])) // random até 10
console.log(rand([])) // random até 1000