// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

function checkTitle(title) {
    const words = title.split(' ');
    for (let word of words) {
        if (word[0] !== word[0].toUpperCase()) {
            return false;
        }
    }
    return true;
}
console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("A Simple Java Script Program!"));
console.log(checkTitle("Water is transparent"));
// ➞ true
// ➞ true
// ➞ false