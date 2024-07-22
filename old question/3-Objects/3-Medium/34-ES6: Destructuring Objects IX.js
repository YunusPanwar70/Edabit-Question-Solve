// Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:

let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]

let thirdUser = users.filter((e, i) => i === 2)[0].name
console.log(thirdUser)  // "Jeremy"
// However, you can combine array and Object destructuring to extract it more declaratively. Use array and object destructuring to extract the name from the third object in the users array and assign it to the variable thirdUser. Provide the solution inside the brackets only. Ignore the .toString() function (used for validation).