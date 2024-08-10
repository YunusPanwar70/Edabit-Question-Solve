// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr, str) {
//     return arr.indexOf(str)
// }

// function findIndex(arr, str) {
//     return arr.lastIndexOf(str)
// }

// function findIndex(arr, str) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === str) {
//             return i
//         }
//     }
// }

// function findIndex(arr, str) {
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] === str) {
//             return i
//         }
//         i++
//     }
// }

function findIndex(arr, char) {
    return arr.reduce((acc, currentValue, currentIndex) => {
        return currentValue === char ? currentIndex : acc;
    }, -1);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
// ➞ 2
// ➞ 1
// ➞ 3
// ➞ 0

// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.