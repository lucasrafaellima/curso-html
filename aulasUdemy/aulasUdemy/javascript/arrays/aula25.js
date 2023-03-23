const arr = [1, 5, 21, "ola", true]

let onlyNums = arr.some(function (el) {
    return typeof el === "number" && el > 20
})

console.log(onlyNums)

const arr1 = arr.filter(function(el, i, _arr) {
    return typeof el === "number"
})

arr.forEach(function (el, i, _arr) {
    console.log(i, " : ", el) 
})

var arr2 = []

arr2 = arr1.map(function(el, i, _arr) {
    return el * el
})

console.log(arr)
console.log(arr1)
console.log(arr2)