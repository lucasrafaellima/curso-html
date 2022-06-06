function ORDEM(a, b, c) {
    if (a < b && a < c && b < c) {
        return a+' | '+b+ ' | '+c;
    } else {
        if (a < b && a < c && c < b) {
            return a+' | '+c+' | '+b;
        } else {
            if (b < a && b < c && a < c) {
                return b+' | '+a+' | '+c;
            } else {
                if (b < a && b < c && c < a) {
                    return b+' | '+c+' | '+a;
                } else {
                    if (c < a && c < b && a < b) {
                        return c+' | '+a+' | '+b;
                    } else {
                        return c+' | '+b+' | '+a;
                    }
                }
            }
        }
    }
}

var num1 = parseInt(prompt('digite o valor de a: '));
var num2 = parseInt(prompt('digite o valor de b: '));
var num3 = parseInt(prompt('digite o valor de c: '));

var resultado = ORDEM(num1, num2, num3);

document.write('Ordem dos numeros: '+resultado);