let valor // não inicializada
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString())  // Erro!

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // {}

produto.preco = 3.50
console.log(produto) // { prec: 3.5 }

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // false , !! = boolean, ou seja, 0 ou 1, verdadeiro ou falso
// delete produto.preco
console.log(produto) // { preco: undefined }

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto) // { preco: null }