// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
    return str.split('').reverse().join('')
}
console.log(reverse("Hello World"));
console.log(reverse("The quick brown fox."));
console.log(reverse("Edabit is really helpful!"));
// ➞ "dlroW olleH"
// ➞ ".xof nworb kciuq ehT"
// ➞ "!lufpleh yllaer si tibadE"