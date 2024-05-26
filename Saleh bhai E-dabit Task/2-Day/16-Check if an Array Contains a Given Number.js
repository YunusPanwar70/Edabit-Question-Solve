function check(arr, num) {
    // indexOf, findIndex, includes, at, some

    // return arr.indexOf(num) !== -1;

    // return arr.findIndex((elem) => elem === num) !== -1;

    // return arr.includes(num); //webPage 

    // return arr.some((elem) => elem === num);

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === num) {
    //         return true
    //     }
    // }
    // return false
}
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));
// ➞ true
// ➞ false
// ➞ true
// ➞ false