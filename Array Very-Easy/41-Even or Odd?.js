function evenOrOdd(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0)
    if (sum % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));



// ➞ "even"
// ➞ "odd"
// ➞ "even"
// ➞ "even"