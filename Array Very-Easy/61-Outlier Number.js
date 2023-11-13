function outlierNumber(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    const oddNumbers = arr.filter(num => num % 2 !== 0);

    if (evenNumbers.length === 1) {
        return evenNumbers[0];
    } else {
        return oddNumbers[0];
    }

}

console.log(outlierNumber([2, 3, 4]));
console.log(outlierNumber([1, 2, 3]));
console.log(outlierNumber([4, 1, 3, 5, 9]));



// ➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.
// ➞ 2
// ➞ 4