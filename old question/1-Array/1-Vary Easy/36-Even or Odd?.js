function evenOrOdd(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum % 2 === 0 ? "even" : "odd";
}
console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));
// ➞ "even"
// ➞ "odd"
// ➞ "even"
// ➞ "even"