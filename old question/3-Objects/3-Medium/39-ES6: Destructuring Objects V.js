const user = {
    first: 'James',
    last: 'Baker',
    bestFriend: {
        first: 'Scott',
        last: 'Parkman'
    }
}

function welcomeMsg(user) {
    console.log("Welcome " + user.first + " " + user.last)
}

welcomeMsg(user)
// outputs Welcome James Baker
// With ES6 object destructuring you make this less terse by destructuring the function parameters which reduces duplication when scaling:

function welcomeMsg({ first, last }) {
    console.log("Welcome " + first + " " + last)
}
// Challenge
// Use ES6 object destructuring to unpack the object inside of the function parameters. You will need to assign user.bestFriend.first to the variable name best. Don't remove the parameters { first, last } and don't change the return statement.

// Example
// bio(user) ➞ "Hi, my name is James Baker. Scott is my best friend."
// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.