// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.
function transform(arr) {
    return arr.map(num => num % 2 === 0 ? num - 1 : num + 1);
}
console.log(transform([1, 2, 3, 4, 5]));
console.log(transform([3, 3, 4, 3]));
console.log(transform([2, 2, 0, 8, 10]));

// ➞ [2, 1, 4, 3, 6]
// ➞ [4, 4, 3, 4]
// ➞ [1, 1, -1, 7, 9]