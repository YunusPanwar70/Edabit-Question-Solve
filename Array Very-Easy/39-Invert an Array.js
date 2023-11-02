function invertArray(arr) {
    return arr.map((num) => -num)
        // let sum = [];
        // for (let i = 0; i < arr.length; i++) {
        //     sum.push(-arr[i])
        // }
        // return sum
}

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));


// ➞ [-1, -2, -3, -4, -5]
// ➞ [-1, 2, -3, 4, -5]
// ➞ []