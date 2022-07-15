const [a] = [10]
console.log(a) // 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // espaços vazios não assumem posição. n5 está fora do array
console.log(n1, n3, n5, n6) // 10 9 undefined 0

const [, [, nota]] =  [[, 8, 8], [9, 6, 8]] // ignorar array | caso demonstrativo
console.log(nota) // 6