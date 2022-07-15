function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49)) // { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(criarProduto('iPad', 1199.49)) // { nome: 'iPad', preco: 1199.49, desconto: 0.1 }
console.log(criarProduto('PC Simples', 1499.49)) // { nome: 'PC Simples', preco: 1499.49, desconto: 0.1 }
console.log(criarProduto('Celular', 1449,49)) // { nome: 'Celular', preco: 1449, desconto: 0.1 }
console.log(criarProduto('PC Foda', 7499,49)) // { nome: 'PC Foda', preco: 7499, desconto: 0.1 }