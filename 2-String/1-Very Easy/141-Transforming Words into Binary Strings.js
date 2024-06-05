// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

function convertBinary(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'm') {
            result += '0';
        } else if (char >= 'n' && char <= 'z') {
            result += '1';
        } else {
            result += str[i];
        }
    }
    return result;
}
console.log(convertBinary("house"));
console.log(convertBinary("excLAIM"));
console.log(convertBinary("moon"));
// ➞ "01110"
// ➞ "0100000"
// ➞ "0111"