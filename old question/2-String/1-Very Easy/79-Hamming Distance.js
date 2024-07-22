// Hamming distance is the number of characters that differ between two strings.
// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

// function hammingDistance(a, b) {
//     let distance = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//             distance++;
//         }
//     }
//     return distance;
// }

function hammingDistance(a, b) {
    let distance = 0;
    let i = 0;
    while (i < a.length) {
        if (a[i] !== b[i]) {
            distance++
        }
        i++
    }
    return distance
}
console.log(hammingDistance("abcde", "bcdef"));
console.log(hammingDistance("abcde", "abcde"));
console.log(hammingDistance("strong", "strung"));
// ➞ 5
// ➞ 0
// ➞ 1