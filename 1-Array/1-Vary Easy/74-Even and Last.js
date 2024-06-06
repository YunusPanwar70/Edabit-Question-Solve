// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

function evenLast(arr) {
    let sum = 0;
    const lastElement = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i] * lastElement
        }
    }
    return sum
}
console.log(evenLast([2, 3, 4, 5]));
console.log(evenLast([1, 3, 3, 1, 10]));
console.log(evenLast([]));
// ➞ 30
// ➞ 140
// ➞ 0