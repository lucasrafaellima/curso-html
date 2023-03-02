
function mostrarTabuada() {
    var num = parseInt(prompt("antes digite um numero: "));

    if (isNaN(num)) {
        var msg = "o numero nao foi digitado";

        document.getElementById("output").innerHTML = msg;

    } else {
        var msg = "";
        
        for (var i =0; i < 1000; i++) {
            msg += `${num} x ${i} = ${num*i} <br>`;
        }

        document.getElementById("output").innerHTML = msg;

    }
}

function limparTabuada() {
    document.getElementById("output").innerHTML = "";
}