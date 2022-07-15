var a = 3;
let b = 4; // usualmente em JavaScript é utilizado let

var a = 30; // var permite valores sobrepostos em outros, diferente de let
b = 40;

console.log(a, b) // 30 40

a = 300
b = 400

console.log(a, b) // 300 400

const c = 5
// c = 50
console.log(c) // 5