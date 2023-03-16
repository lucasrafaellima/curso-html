var numero = prompt('digite um numero: ');
numero = parseFloat(numero);

var indice = 0;
var resultado = 0;

while(indice < 1000) {
    resultado = numero * indice;
    document.write(numero + " x "+ indice+ " = " +resultado + "<br>");
    indice += 1;
}

