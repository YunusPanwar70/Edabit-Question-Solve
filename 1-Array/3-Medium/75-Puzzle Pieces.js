// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.


function puzzlePieces(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const sum = arr1[0] + arr2[0];

    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] + arr2[i] === sum) {
            return true;
        }
    }
    return false;
}
// ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]
// ➞ true
// ➞ false
// ➞ false

// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.