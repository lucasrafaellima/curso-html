var arr = [5, 6, 8, 10]

var teste = arr.push(11, "ola mundo", true, false)

console.log(arr)
console.log(teste)

var ultimo = arr.pop()

console.log(ultimo)
console.log(arr)

var primeiro = arr.shift()

console.log(primeiro)
console.log(arr)

var arr2 = arr.slice(3)

console.log(arr2)
console.log(arr)

var arr3 = arr.splice(2, 2, "hello world")

console.log(arr3)
console.log(arr)