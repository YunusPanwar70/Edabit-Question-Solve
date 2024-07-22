function sumFive(arr) {
    return arr.reduce((item, acc) => acc > 5 ? item + acc : item, 0)
    // let result = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 5) {
    //         result += arr[i]
    //     }
    // }
    // return result
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));
// ➞ 77
// ➞ 0
// ➞ 252
