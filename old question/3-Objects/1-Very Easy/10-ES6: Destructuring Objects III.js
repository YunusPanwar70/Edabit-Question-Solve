const obj = { two: 2 }
var { one = 1, two } = obj
console.log(one)
console.log(two)
// outputs undefined

// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).