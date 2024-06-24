// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
function evenOrOdd(str) {
    return str.split(' ').map(Number)
}
console.log(evenOrOdd("22471"));
console.log(evenOrOdd("213613"));
console.log(evenOrOdd("23456"));

// ➞ "Even and Odd are the same"
// ➞ "Even and Odd are the same"
// ➞ "Even is greater than Odd"