/**
* Algoritmo aula 09
*/
let imprimir = (mensagem) => console.log(mensagem)

var mesmoNome = (nome1,nome2) => nome1.toLowerCase() == nome2.toLowerCase()

var maiorDeIdade = (idade) => idade>=18

var valorComJuros = (valor) => valor*1.1

let mediaAritmetica = (array) => {
    let sum = 0
    let arrayLength = array.length
    for(i=0; i<arrayLength;i++){
        sum += array[i]
    }
    return sum/arrayLength
}

margemBruta = (receitaLiquida,custoProdutos) => {
    let lucroBruto = receitaLiquida - custoProdutos
    return (lucroBruto/receitaLiquida)*100
}

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]
