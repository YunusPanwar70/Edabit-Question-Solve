// function findIndex(arr,char) {
//     return arr.indexOf(char)
// }
// function findIndex(arr,char) {
//     return arr.lastIndexOf(char)
// }
function findIndex(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
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