// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr,num) {
//     return arr.indexOf(num)
// }

function findIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
// ➞ 2
// ➞ 1
// ➞ 3
// ➞ 0