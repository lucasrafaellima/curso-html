function soma(num1, num2) {
    if (isNaN(num1) != false || isNaN(num2) != false) {
        alert("um dos parametros nao é numero")
    } else {
        var total = num1 + num2
        return total
    }
}

function input() {
    var n1 = parseInt(prompt("digite um numero: "))
    var n2 = parseInt(prompt("digite um segundo numero: "))

    document.getElementById("output").innerHTML = soma(n1, n2)


}