function soma() {
    console.log(arguments)
    let total =0
    for (var i =0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(soma(1, 4, 7))