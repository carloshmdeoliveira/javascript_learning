// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
 
function jurosSimples(capital, taxa, tempo){
    const juros = capital * taxa * tempo
    return `Valor taxa de Juros Simples: ${capital + juros}`
}

console.log(jurosSimples(2000, 0.01, 12))

function jurosCompostos(capital, taxa, tempo){
    const juros = capital * ((1 + taxa) **tempo)
    return (`Valor taxa de Juros Compostos: ${juros}`)
}

console.log(jurosCompostos(2000, 0.01, 12))