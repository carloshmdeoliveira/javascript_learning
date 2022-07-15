// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade) // Ana 5

const { nome: n, idade: i } = pessoa // {} define destructuring, extrair de um objeto
console.log(n, i) // Ana 5

const { sobrenome, bemHumorada = true } = pessoa //sobrenome não tem objeto, por isso, undefined. Se não vier nada, o valor será padrão, ou seja, true
console.log(sobrenome, bemHumorada) // undefined true

const { endereco: {logradouro, numero, cep } } = pessoa //neste caso, será criado variaveis, com exemplo de undefined
console.log(logradouro, numero, cep) // Rua ABC 1000 undefined