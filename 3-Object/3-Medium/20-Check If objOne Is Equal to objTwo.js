// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}
console.log(isEqual({
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}, {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}));
console.log(isEqual({
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}, {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
}))
// ➞ false
// ➞ true

// Notes
// If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.