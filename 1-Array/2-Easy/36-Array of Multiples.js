// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num, length) {
    let result = []
    for (let i = 1; i <= length; i++) {
        result.push(num * i)
    }
    return result
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
// ➞ [7, 14, 21, 28, 35]
// ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// ➞ [17, 34, 51, 68, 85, 102]