function sumArray(arr) {
    // let result = 0;
    // arr.map(elem => result += elem);
    // return result
    return arr.reduce((elem,acc) => elem + acc);
    // let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i]
    // }
    // return result
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));
// ➞ 15
// ➞ 0
// ➞ 24