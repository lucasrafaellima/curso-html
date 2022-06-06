function PAR_IMPAR(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        if (x % 2 == 1) {
            return false;
        }
    }
}

var num = parseInt(prompt('digite um valor: '));
var resultado = PAR_IMPAR(num);

document.write('como tem resto '+(num%2)+' seu valor é: '+resultado);