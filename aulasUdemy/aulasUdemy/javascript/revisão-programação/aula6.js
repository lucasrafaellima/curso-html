var diaSemana = parseInt(prompt("digite  qual o dia da semana: "));
var dia;

switch(diaSemana) {
    case 0:
        dia = "segunda";
        break
    case 1:
        dia = "terca";
        break
    case 2:
        dia = "quarta";
        break
    case 3:
        dia = "quinta";
        break
    case 4:
        dia = "sexta";
}

alert(`o dia selecionado foi: ${dia}`);