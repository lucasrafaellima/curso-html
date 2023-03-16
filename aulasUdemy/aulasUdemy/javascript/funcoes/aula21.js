function calcularIMC(peso, altura, callback) {
    if (isNaN(peso) == true || isNaN(altura) == true) {
        throw Error("não é numero")
    }
    var imc = peso / (altura*altura)

    if (typeof callback === "function") {
        return callback(imc)
    }

    return peso / (altura*altura)

}

function consultaIMC(imc) {

    if (imc(p, a) < 16.9) {
        console.log("Muito abaixo do peso 16 a 16,9 kg/m2")
    } else if (imc < 18.4 ) {
        console.log("Abaixo do peso 17 a 18,4 kg/m2")
    } else if (imc < 24.9) {
        console.log("Peso normal 18,5 a 24,9 kg/m2")
    } else if(imc < 29.9) {
        console.log("Acima do peso 25 a 29,9 kg/m2")
    } else if (imc < 34.9) {
        console.log("Obesidade Grau I 30 a 34,9 kg/m2")
    } else if (imc < 40) {
        console.log("Obesidade Grau II 35 a 40 kg/m2")
    } else {
        console.log("Obesidade Grau III maior que 40 kg/m2")
    }
}

var imc = calcularIMC(60, 1.65)
var imc2 = calcularIMC(60, 1.65, consultaIMC)
console.log(imc)
console.log(imc2)