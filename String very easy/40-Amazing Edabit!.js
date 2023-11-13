function amazingEdabit(str) {
    if (str.includes("edabit")) {
        return str
    } else {
        return str.replace(/amazing/g, "not amazing")
    }
}

console.log(amazingEdabit("edabit is amazing."));
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Infinity is amazing."));


// ➞ "edabit is amazing."
// ➞ "Mubashir is not amazing."
// ➞ "Infinity is not amazing."