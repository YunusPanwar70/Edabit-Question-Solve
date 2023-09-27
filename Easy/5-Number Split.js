function numberSplit(num) {
    const num1 = Math.floor(num / 2);
    const num2 = Math.ceil(num / 2);
    return [num1, num2]
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));



// ➞ [2, 2]
//  ➞ [5, 5]
//  ➞ [5, 6]
//  ➞ [-5, -4]