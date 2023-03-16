const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('username');
const senha = document.getElementById('username');
const confirmacao = document.getElementById('username');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.Value;
    const emailValue = email.Value;
    const senhaValue = senha.Value;
    const confirmacaoValue = confirmacao.Value;

    if (usernameValue == '') {
        setErrorFor(username, "O nome de usuario é obrigatório.");
    } else {
        setSuccessFor(username);
    }
}

function setErrorFor(input, mensagem) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //mensagem de erro adicionada
    small.innerText = mensagem;

    //classe de erro adicionada
    formControl.className = "divisoes error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //classe de sucesso adicionada
    formControl.className = "divisoes success";
}

