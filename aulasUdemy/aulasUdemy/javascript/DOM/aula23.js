(function(doc) {
    var nome = "Lucas"
    var n = document.querySelectorAll("p")[0]
    n.innerHTML += "<b>" + nome + "</b>"
}) (document)

var email

function send() {
    email = document.getElementById("txtEmail").value
    document.getElementById("newsletterFeedback").innerHTML = `o email ${email} foi cadastrado`
}