function sumFive(arr) {
    return arr.filter((num) => num > 5).reduce((num1, sum) => num1 + sum, 0)

    // return arr.reduce((sum, num) => num > 5 ? sum + num : sum, 0);

    // let sum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 5) {
    //         sum += (arr[i])
    //     }
    // }
    // return sum

}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));


// ➞ 77
//  ➞ 0
// ➞ 252