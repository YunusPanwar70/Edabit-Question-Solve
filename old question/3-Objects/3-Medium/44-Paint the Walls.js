// Given a predetermined rate from an object, write the function that will return the time it takes for a certain amount of people to paint a certain amount of walls. Return the minutes as an integer.

// The "rate" object shows how many minutes it takes "people" people to paint "walls" walls. At that same rate, how long should it take based on the new variables. Return the minutes as an integer. No rounding is necessary.

// It takes 22 minutes for 10 people to paint 10 walls.
// How many minutes does it take 14 people to paint 14 walls?

let rate = {
    people: 10,
    walls: 10,
    minutes: 22
}

function time(obj) {
    let valueOfObject = Object.values(obj);
    return Math.max(...valueOfObject)
}
console.log(time(rate));
//  ➞ 22

// Notes
// Check the Resources tab if you get stuck.