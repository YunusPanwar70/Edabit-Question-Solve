// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(s1, s2) {
    
}
console.log(isStrangePair("ratio", "orator"));
console.log(isStrangePair("sparkling", "groups"));
console.log(isStrangePair("bush", "hubris"));
console.log(isStrangePair("", ""));
// ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".
// ➞ true
// ➞ false
// ➞ true