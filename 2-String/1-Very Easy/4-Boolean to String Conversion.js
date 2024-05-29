// Create a function that takes a boolean variable flag and returns it as a string.
// function boolToString(flag) {
//     return flag.toString()
// }
function boolToString(flag) {
    if (typeof(flag) === "boolean") {
        return String(flag)
    }
}
console.log(boolToString(true));
console.log(boolToString(false));
// ➞ "true"
// ➞ "false"