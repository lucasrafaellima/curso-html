function MAIOR_MENOR(a, b, c, d) {
    var maior, menor;

    if (a > b && a > c && a > d) {
        maior = a;
    } else {
        if (b > a && b > c && b > d) {
            maior = b;
        } else {
            if (c > a && c > b && c > d) {
                maior = c;
            } else {
                if (d > a && d > b && d > c) {
                    maior = d;
                }
            }
        }
    }
    if (a < b && a < c && a < d) {
        menor = a;
    } else {
        if (b < a && b < c && b < d) {
            menor = b;
        } else {
            if (c < a && c < b && c < d) {
                menor = c;
            } else {
                if (d < a && d < b && d < c) {
                    menor = d;
                }
            }
        }
    }
    return 'maior: '+maior+ '<br>menor: '+ menor;

}

var num1 = parseInt(prompt('digite o valor 1: '));
var num2 = parseInt(prompt('digite o valor 2: '));
var num3 = parseInt(prompt('digite o valor 3: '));
var num4 = parseInt(prompt('digite o valor 4: '));

var resultado = MAIOR_MENOR(num1,num2,num3,num4);

document.write('valores <br>'+ resultado);