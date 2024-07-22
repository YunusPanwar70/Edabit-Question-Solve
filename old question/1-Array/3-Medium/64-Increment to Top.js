// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

function incrementToTop(array) {
    if (array.length === 0) return 0;
    let maxValue = array[0];
    let totalSteps = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            totalSteps += array[i] - maxValue;
            maxValue = array[i];
        } else {
            totalSteps += maxValue - array[i];
        }
    }

    return totalSteps;
}
console.log(incrementToTop([3, 4, 5]));
console.log(incrementToTop([4, 3, 4]));
console.log(incrementToTop([3, 3, 3]));
console.log(incrementToTop([3, 10, 3]));

// ➞ 3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.

// ➞ 1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.
// ➞ 0
// ➞ 14