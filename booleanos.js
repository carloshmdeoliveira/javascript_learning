let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true

isAtivo = 1
console.log(!!isAtivo) // true

isAtivo = 1
console.log(!isAtivo) // false

console.log('os verdadeiros...') // os verdadeiros...
console.log(!!3) // true
console.log(!!-1) // true
console.log(!!' ') // true
console.log(!!'texto') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(isAtivo = true)) // true

console.log('os falsos...') // os falsos...
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!NaN) // false
console.log(!!undefined) // false
console.log(!!(isAtivo = false)) // false

console.log('pra finalizar...') // pra finalizar...
console.log(!!('' || null || 0 || 'epa' || 123 )) // true

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // Lucas