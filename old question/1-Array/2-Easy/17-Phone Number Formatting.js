// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
function formatPhoneNumber(arr) {
    let one = arr.slice(0, 3).join('');
    let two = arr.slice(3, 6).join('');
    let three = arr.slice(6).join('')
    return `"(${one}) ${two}-${three}"`
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
// ➞ "(123) 456-7890"
// ➞ "(519) 555-4468"
// ➞ "(345) 501-2527"