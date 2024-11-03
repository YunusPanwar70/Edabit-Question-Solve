// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {
    let regEx = /(edabit)/gi;
    return str.match(regEx) ? str : str.split(' ').slice(0, 2).concat('not', str.split(' ').slice(2)).join(' ');
}
console.log(amazingEdabit("edabit is amazing."));
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Infinity is amazing."));

//  ➞ "edabit is amazing."
//  ➞ "Mubashir is not amazing."
//  ➞ "Infinity is not amazing."

// Notes
// Edabit is amazing :)