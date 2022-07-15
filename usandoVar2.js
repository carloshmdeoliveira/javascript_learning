var numero = 1
{
    var numero = 2 // Variáveis dentro do escopo sobrepõe variáveis fora do escopo
    console.log('dentro =', numero) // dentro = 2
}
console.log('fora=', numero) // fora= 2