// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

function cardHide(str) {
    const hiddenPart = '*'.repeat(str.length - 4);
    const lastFour = str.slice(-4);
    return hiddenPart + lastFour;
}
console.log(cardHide("1234123456785678"));
console.log(cardHide("8754456321113213"));
console.log(cardHide("35123413355523"));
// ➞ "************5678"
// ➞ "************3213"
// ➞ "**********5523"