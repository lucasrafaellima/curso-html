let firstName = ""

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function capturar() {
    firstName = document.getElementById('firstName').value
    document.getElementById('show').innerHTML = firstName
}