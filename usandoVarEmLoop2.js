const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i) // valor de i será 10 porque a variavel não tem escopo de bloco, seria diferente usando let, respeitando as condições
    })
}

funcs [2]() // 10
funcs [8]() // 10