// Google's logo can be stretched depending on how many pages it lets you skip forward to.
// Image of Goooooooooogle
// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

function googlify(n) {
    if (n <= 0) {
        return "invalid";
    } else {
        let repeatValue = 'o'.repeat(n);
        return `G${repeatValue}gle`;
    }
}
console.log(googlify(10));
console.log(googlify(23));
console.log(googlify(2));
console.log(googlify(-2));
// ➞ "Goooooooooogle"
// ➞ "Gooooooooooooooooooooooogle"
// ➞ "Google"
// ➞ "invalid"