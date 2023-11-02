function getSumOfItems(arr) {
    return arr.reduce((num, sum) => num + sum)
        // let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     sum += (arr[i])
    // }
    // return sum

}

console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));


// ➞ 13
// ➞ 48
// ➞ 105