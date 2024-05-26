// Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// function sumFive(arr) {
//     return arr.reduce((item, val) => val > 5 ? item + val : item, 0)
// }
function sumFive(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>5) {
            result+=arr[i]
        }
    }
    return result
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));
// ➞ 77
// ➞ 0
// ➞ 252