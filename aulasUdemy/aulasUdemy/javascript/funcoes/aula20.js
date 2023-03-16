/*
Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2

*/

function imc(peso, altura) {
    
    if (isNaN(peso) == true || isNaN(altura) == true) {
        throw Error("não é numero")
    } 
    else {
        var resultado = peso / (altura*altura)
        return resultado
    }
    
}

var p = parseFloat(prompt("digite o peso: "))
var a = parseFloat(prompt("digite a altura: "))

console.log(imc(p, a))

function consultaIMC() {

    document.getElementById("output").innerHTML = "resposta no console"

    if (imc(p, a) < 16.9) {
        console.log("Muito abaixo do peso 16 a 16,9 kg/m2")
    } else if (imc(p, a) < 18.4 ) {
        console.log("Abaixo do peso 17 a 18,4 kg/m2")
    } else if (imc(p, a) < 24.9) {
        console.log("Peso normal 18,5 a 24,9 kg/m2")
    } else if(imc(p, a) < 29.9) {
        console.log("Acima do peso 25 a 29,9 kg/m2")
    } else if (imc(p, a) < 34.9) {
        console.log("Obesidade Grau I 30 a 34,9 kg/m2")
    } else if (imc(p, a) < 40) {
        console.log("Obesidade Grau II 35 a 40 kg/m2")
    } else {
        console.log("Obesidade Grau III maior que 40 kg/m2")
    }
}