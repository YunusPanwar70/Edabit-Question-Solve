// function trimmedAverages(arr) {
//     if (arr.lenght < 3) {
//         return arr.reduce((a, b) => a + b, 0)
//     }

//     let a = Math.min(...arr);
//     let b = Math.max(...arr);

//     let filteredArr = arr.filter(num => num !== min & num !== max)
//     const sum = filteredArr.reduce((a, b) => a + b, 0);
//     const average = sum / filteredArr.length;

//     return average;
// }

// console.log(trimmedAverages([4, 5, 7, 100]));
// console.log(trimmedAverages([10, 25, 5, 15, 20]));
// console.log(trimmedAverages([1, 1, 1]));



// ➞ 6
// // Average of 5 and 7
// ➞ 15
// // Average of 10, 15 and 20
// ➞ 1
// // 1



function trimmedAverages(arr) {
    if (arr.length < 3) {
        // If there are less than 3 numbers in the array, return the average of the remaining numbers
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    // Find the minimum and maximum values in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Filter out the minimum and maximum values from the array
    const filteredArr = arr.filter(num => num !== min && num !== max);

    // Calculate the average of the remaining numbers
    const sum = filteredArr.reduce((a, b) => a + b, 0);
    const average = sum / filteredArr.length;

    return average;
}

// Test cases
console.log(trimmedAverages([4, 5, 7, 100])); // ➞ 6
console.log(trimmedAverages([10, 25, 5, 15, 20])); // ➞ 15
console.log(trimmedAverages([1, 1, 1])); // ➞ 1