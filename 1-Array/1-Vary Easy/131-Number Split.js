// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(n) {
    let one = Math.floor(n / 2)
    let two = Math.ceil(n / 2);
    return [one, two]
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
//  ➞ [2, 2]
//  ➞ [5, 5]
//  ➞ [5, 6]
//  ➞ [-5, -4]