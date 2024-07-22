// Write a function that reverses a string. Make your function recursive.

function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("hello"));
console.log(reverse("world"));
console.log(reverse("a"));
console.log(reverse(""));
// ➞ "olleh"
// ➞ "dlrow"
// ➞ "a"
// ➞ ""