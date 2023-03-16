var idade = parseInt(prompt("digite sua idade: "));
var permissao = String(prompt("tem permissao dos pais[s/n]? "));

if (permissao == "s") {
    var permissaoPais = true;
} else {
    var permissaoPais = false;
}

const PodeViajar = idade >= 18 || permissaoPais; 
alert(`resultado: ${PodeViajar}`);