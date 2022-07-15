const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  //evitar atributos ccom espaço

console.log(prod1) // { nome: 'Celular Ultra Mega', preco: 4988.9, 'Desconto Legal': 0.4 }

const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2) //{ nome: 'Camisa Polo', preco: 79.9 }