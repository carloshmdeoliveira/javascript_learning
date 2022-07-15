var numero = 1 // Se substituir por let não haverá conflito porque este tem o escopo mais abrangente
{
    let numero = 2 // O que tem preferência é o número menor
    console.log('dentro =', numero) // dentro = 2
}
console.log('fora =', numero) // fora = 1
