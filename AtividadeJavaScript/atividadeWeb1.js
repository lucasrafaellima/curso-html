function VOGAL(c) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return '1';
    } else {
        return '0';
    }
}

var caractere = String(prompt('digite uma letra: '));
var resultado = VOGAL(caractere);

document.write('valor é: '+resultado);