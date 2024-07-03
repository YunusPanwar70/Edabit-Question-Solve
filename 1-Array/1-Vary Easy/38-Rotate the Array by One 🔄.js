// function rotateByOne(arr) {
//     const one = arr.pop();
//     arr.unshift(one)
//     return arr
// }

function rotateByOne(arr) {
    let one = arr[4];
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i])
    }
    let joinVal = one.concat(result)
    return joinVal
}
console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4]));
// ➞[5, 1, 2, 3, 4]
// ➞[7, 6, 5, 8, 9]
// ➞[4, 20, 15, 26, 8]