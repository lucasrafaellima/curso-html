function media() {
    let total =0

    for (var i =0; i < arguments.length; i++) {
        total += arguments[i]
    }

    let total1 = total/arguments.length
    return total1

}

console.log(media(2, 4, 6))