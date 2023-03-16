let n1 = 10;
let n2 = "4";

console.log(n1*n2, typeof n1, typeof n2);
//JavaScript entende a string como um numero 
console.log(n1+n2, typeof n1, typeof n2);
//JavaScript nao entende a string como um numero e apenas concatena

n2 = parseInt(n2);
// converti n2 para inteiro

console.log(n1+n2);