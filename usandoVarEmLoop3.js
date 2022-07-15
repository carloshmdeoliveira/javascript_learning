const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i) // valor de i respeitará as condições usando let
    })
}

funcs [2]() // 2
funcs [6]() // 6
funcs [8]() // 8
