let comparaComThis = function (param) {
    console.log(this=== param)
}

comparaComThis(global) // true ~ escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // true ~ this apontará para obj
comparaComThis(global) // false ~ não compara ao global
comparaComThis(obj) // true ~ comportamento binding

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false ~ this não compara pro global ~ confusão
comparaComThisArrow(module.exports) // true ~ this não é um this ~ module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false ~ this aponta para objeto
comparaComThisArrow(module.exports) // true ~ contexto original ~ this não é um this = conceito importante?