// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr) {
    let mySwithc
}
console.log(flickSwitch(["edabit", "flick", "eda", "bit"]));
console.log(flickSwitch(["flick", 11037, 3.14, 53]));
console.log(flickSwitch([false, false, "flick", "sheep", "flick"]));


// ➞ [true, false, false, false]
// ➞ [false, false, false, false]
// ➞ [true, true, false, false, true]

// Notes
// "flick" will always be given in lowercase.
// An array may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.