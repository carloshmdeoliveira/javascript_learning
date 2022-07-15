// EXEMPLO!!!
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log (`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('João')
// p1.falar()

// DESAFIO!!!: Transformar classe pessoa em uma função construtora segundo EXEMPLO

// Minha solução 
// function Pessoa(nome){
//     this.nome = nome
// }

// const nome1 = new Pessoa('Carlos')

// console.log(nome1) // Pessoa { nome: 'Carlos' }


// Solução professor
function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() // Meu nome é João