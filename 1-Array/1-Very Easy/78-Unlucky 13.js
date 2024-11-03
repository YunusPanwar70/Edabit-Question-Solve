// Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky13(arr) {
    let findVal = arr.filter((item) => item % 13 === 0)
    let [one, two] = findVal;
    if (undefined === findVal) {
        return 'No numbers in the array are divisible by 13.'
    }
    return `${one} and ${two} are divisble by 13.`
}
console.log(unlucky13([53, 182, 435, 591, 637]));
console.log(unlucky13([24, 316, 393, 458, 1279]));
console.log(unlucky13([104, 351, 455, 806, 871]));

// ➞[53, 435, 591]
// 182 and 637 are divisible by 13.
// ➞[24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
// ➞[]
// All numbers in the array are divisible by 13.

// Notes
// N/A