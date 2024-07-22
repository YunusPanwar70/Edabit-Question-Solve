function factory(divisor) {
    // The outer function takes a number and returns an inner function
    return function (arr) {
        // The inner function takes an array and returns a new array with each element divided by the divisor
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] / divisor);
        }
        return result;
    };
}

// Example usage:
const first = factory(15);
console.log(first([30, 45, 60])); // ➞ [2, 3, 4]

const second = factory(2);
console.log(second([2, 4, 6])); // ➞ [1, 2, 3]