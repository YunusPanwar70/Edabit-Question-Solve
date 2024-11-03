// Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//     return arr.flat(0)
// }

function removeEmptyArrays(arr) {
    return arr.filter(item => !(Array.isArray(item) && item.length === 0));
}
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// What I want:
console.log(removeEmptyArrays(["a", "b", []]));
console.log(removeEmptyArrays([1, 2, [], 4]));
// ➞ ["a", "b"]
// ➞ [1, 2, 4]

// What I am getting:
console.log(removeEmptyArrays(["a", "b", []]));
console.log(removeEmptyArrays([1, 2, [], 4]));
// ➞["a", "b", []]
// ➞[1, 2, [], 4]

// Notes
// N/A