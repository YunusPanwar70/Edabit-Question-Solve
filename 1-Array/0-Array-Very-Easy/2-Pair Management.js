// Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
    // return [num1, num2];
    let pair = [];
    pair.push(num1, num2);
    return pair
};
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

// ➞ [1, 2]
// ➞ [51, 21]
// ➞ [512124, 215]