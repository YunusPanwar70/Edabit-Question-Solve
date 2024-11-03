// Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

function averageIndex(arr) {
    return arr.charCodeAt();
}
console.log(averageIndex(["a", "b", "c", "i"]));
console.log(averageIndex(["e", "d", "a", "b", "i", "t"]));
console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]));
// ➞ 3.75
// ➞ 6.83
// ➞ 12.62

// Notes
// Letters given will always be lowercase.