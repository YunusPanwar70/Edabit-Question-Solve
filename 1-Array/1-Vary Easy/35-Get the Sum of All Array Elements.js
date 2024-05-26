function getSumOfItems(arr) {
    // return arr.reduce((item, acc) => item + acc)
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}
console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));
// ➞ 13
// ➞ 48
// ➞ 105