function soma(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw Error("um dos parametros nao é um numero")
    } else {
        var total = num1 + num2
        return total
    } 
}

var n1 = parseInt(prompt("digite um numero: "))
var n2 = parseInt(prompt("digite outro numero: "))
console.log(soma(n1, n2))

