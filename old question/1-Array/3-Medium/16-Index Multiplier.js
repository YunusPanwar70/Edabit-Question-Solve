// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// function indexMultiplier(arr) {
//     return arr.reduce((acc, val, index) => acc + val * index, 0)
// }

function indexMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * i;
    };
    return sum
}
console.log(indexMultiplier([1, 2, 3, 4, 5]));  //➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
console.log(indexMultiplier([-3, 0, 8, -6]));   //➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)