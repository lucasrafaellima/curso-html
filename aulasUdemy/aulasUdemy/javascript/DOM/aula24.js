const condition = document.getElementById("cadastro")
condition.disabled = true


function enableOrDisableButton() {
    var result = document.getElementById("contrato")
    var check = result.checked

    if (check) {
        condition.disabled = false
    } else {
        condition.disabled = true
    }

}