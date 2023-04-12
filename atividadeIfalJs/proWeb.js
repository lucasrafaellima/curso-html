let firstName = ""
let surname = ""
let cpf = ""
let phoneNumber = ""
let datBirth = ""
let Address = ""

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function capturar() {
    firstName = document.getElementById('firstName').value
    surname = document.getElementById('surname').value
    cpf = document.getElementById('cpf').value
    phoneNumber = document.getElementById('phoneNumber').value
    dateBirth = document.getElementById('dateBirth').value
    Address = document.getElementById('Address').value


    if (firstName != "" && surname != "" && cpf != "" && phoneNumber != "" && dateBirth != "" && Address != "") {
        document.getElementById('show').innerHTML = `tudo ok`
    }
}