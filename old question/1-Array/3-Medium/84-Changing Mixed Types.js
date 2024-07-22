// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.

function changeTypes(arr) {
    return arr.map((element) => {
        if (typeof element === 'number') {
            if (element % 2 === 0) {
                return element++;
            } else {
                return element
            }
        } else if (typeof element === 'string') {
            return element.charAt(0).toUpperCase() + element.slice(1) + '!';
        } else if (typeof element === "boolean") {
            return !element
        } else {
            element
        }
    })
}
console.log(changeTypes(["a", 12, true]));
console.log(changeTypes([13, "13", "12", "twelve"]));
console.log(changeTypes([false, "false", "true"]));

// ➞ ["A!", 13, false]
// ➞ [13, "13!", "12!", "Twelve!"]
// ➞ [true, "False!", "True!"]

// Notes
// There won't be any float values.
// You won't get strings with both numbers and letters in them.
// Although the task may be easy, try keeping your code as clean and as readable as possible!