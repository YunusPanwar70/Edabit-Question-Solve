function arrBetween(num1, num2, arr) {
    // return arr.filter((item) => item > num1 && item < num2)

    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > num1 && arr[i] < num2) {
    //         result.push(arr[i])
    //     }
    // }
    // return result
};
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));
// ➞ [5, 4, 7]
// ➞ [8, 6]
// ➞ []