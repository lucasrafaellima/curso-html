
function digitar() {
    var l = parseInt(prompt("digite a quantidade de linhas: "))    
    var c = parseInt(prompt("digite a quantidade de colunas: "))
    var vet = []
    var msg = "";
    
    for (var i =0; i < l; i++) {
        vet[i] = []
        for (var j =0; j < c; j++) {
            vet[i][j] = ""        
        }
    }

    for (var i =0; i < l; i++) {
        for (var j =0; j < c; j++) {
            vet[i][j] = prompt(`digite o valor vet[${i}][${j}]: `)        
            msg += `${vet[i][j]} `
        }
        msg += `<br>`
    }

    document.getElementById("output").innerHTML = msg

}

function apagar() {
    document.getElementById("output").innerHTML = ""
}