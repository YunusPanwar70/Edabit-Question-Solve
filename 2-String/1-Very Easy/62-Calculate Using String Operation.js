// Create a function that takes two numbers and a mathematical operator and returns the result.

// function calculate(num1, num2, op) {
//     const allValue = `${num1} ${op} ${num2}`
//     return eval(allValue)
// }
function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        case '%':
            return num1 % num2
        default:
            'Enter a valid value'
    }
}
console.log(calculate(4, 9, "+"));
console.log(calculate(12, 5, "-"));
console.log(calculate(6, 3, "*"));
console.log(calculate(25, 5, "/"));
console.log(calculate(14, 3, "%"));
// ➞ 13
// ➞ 7
// ➞ 18
// ➞ 5
// ➞ 2