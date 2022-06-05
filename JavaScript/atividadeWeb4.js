function POSITIVO_NEGATIVO(x) {
    if (x > 0) {
        return true;
    } else {
        return false;
    }
}

var num = parseInt(prompt('digite um valor: '));
var resultado = POSITIVO_NEGATIVO(num);

document.write('valor é: '+ resultado);