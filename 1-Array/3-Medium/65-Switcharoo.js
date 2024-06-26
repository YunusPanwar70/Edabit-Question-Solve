// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

function flipEndChars(input) {
    if (typeof input !== 'string') {
        return "Incompatible.";
    }

    // Check if length is less than 2
    if (input.length < 2) {
        return "Incompatible.";
    }

    // Check if first and last characters are the same
    if (input[0] === input[input.length - 1]) {
        return "Two's a pair.";
    }

    // Swap first and last characters
    const firstChar = input[0];
    const lastChar = input[input.length - 1];
    const middleChars = input.substring(1, input.length - 1);

    return lastChar + middleChars + firstChar;

}
console.log(flipEndChars("Cat, dog, and mouse."));
console.log(flipEndChars("ada"));
console.log(flipEndChars("Ada"));
console.log(flipEndChars("z"));
console.log(flipEndChars([1, 2, 3]));
// ➞ ".at, dog, and mouseC"
// ➞ "Two's a pair."
// ➞ "adA"
// ➞ "Incompatible."
// ➞ "Incompatible."