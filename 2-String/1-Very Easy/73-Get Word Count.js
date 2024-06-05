// Create a function that takes a string and returns the word count. The string will be a sentence.
// function countWords(str) {
// return str.split(" ").length;
// }
function countWords(str) {
    let result = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result++
        }
    }
    return result
}
console.log(countWords("Just an example here move along"));
console.log(countWords("This is a test"));
console.log(countWords("What an easy task, right"));
// ➞ 6
// ➞ 4
// ➞ 5