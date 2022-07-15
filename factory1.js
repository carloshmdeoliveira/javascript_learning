// Factory simples
// Factory retorna uma função de um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // { nome: 'Ana', sobrenome: 'Silva' }