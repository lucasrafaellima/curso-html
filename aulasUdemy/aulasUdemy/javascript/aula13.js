function input() {
    var pessoas = [{

    nome: 'Lucas', idade: 18},{

    nome: 'Alana', idade: 22},{

    nome: 'Natanael', idade: 16}]

    console.log(pessoas)

    for (var i =0; i < pessoas.length; i++) {
        console.log(`estudante ${pessoas[i].nome}, possui ${pessoas[i].idade} anos`)
    }

}