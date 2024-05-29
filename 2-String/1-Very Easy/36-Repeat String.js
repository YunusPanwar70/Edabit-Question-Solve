// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(str, num) {
    if (typeof (str) === 'number') {
        return 'Not a String !!'
    } else {
        return str.repeat(num)
    }
}
console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));
// ➞ "MubashirMubashir"
// ➞ "MattMattMatt"
// ➞ "Not A String !!"