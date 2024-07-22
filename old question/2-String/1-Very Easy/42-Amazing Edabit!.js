// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {
    if (str.includes("edabit")) {
        return str
    }
    return str.replace("amazing", "not amazing")
}
console.log(amazingEdabit("edabit is amazing."));
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Infinity is amazing."));
// ➞ "edabit is amazing."
// ➞ "Mubashir is not amazing." 
// ➞ "Infinity is not amazing."