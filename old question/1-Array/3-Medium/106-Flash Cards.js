// Flash Cards
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

function flash(arr) {
    let [num1, operator, num2] = arr;
    switch (operator) {
        case '+': return num1 + num2
        case '*': return num1 * num2
        case '-': return num1 - num2
        case '/': return num1 / num2
        default: undefined;
    }
}
console.log(flash([3, "*", 7]));
console.log(flash([5, "+", 7]));
console.log(flash([10, "-", 9]));
console.log(flash([10, "/", 0]));
console.log(flash([10, "/", 3]));
// ➞ 21
// ➞ 12
// ➞ 1
// ➞ undefined
// ➞ 3.33

// Notes
// Flash cards contain only zero or positive numbers.