// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 | Local físico do código

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Obetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }, 
    getEndereco:function(){
        return this.endereco.logradouro + ' ' + this.endereco.numero
    }
}

console.log(cliente.getEndereco())
console.log(saudacao) // Opa
console.log(exec()) // Falaaa
console.log(cliente)    // { nome: 'Pedro',
                        //   idade: 32,
                        //   peso: 90,
                        //   endereco: { logradouro: 'Rua Muito Legal', numero: 123 } }