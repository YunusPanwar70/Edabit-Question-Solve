// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).

function error(n) {
    const obj = {
        1: 'Check the fan: e1',
        2: 'Emergency stop: e2',
        3: 'Pump Error: e3'
    }
    return obj[n]
}
console.log(error(1));
console.log(error(2));
console.log(error(3));
// ➞ "Check the fan: e1"
// ➞ "Emergency stop: e2"
// ➞ "Pump Error: e3"