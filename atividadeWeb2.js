function LIMITES(li, ls) {
    var soma = 0;
    for (var i = li; i <= ls; i++) {
        if (i % 2 == 0) {
            soma += i;   
        } 
    }
    return soma;
}

var num1 = parseInt(prompt('digite o valor do limite inferior: '));
var num2 = parseInt(prompt('digite o valor do limite superior: '));

var resultado = LIMITES(num1, num2);

document.write('a soma dos numeros pares é: ' + resultado);