function comp(str1, str2) {
    if (str1.length === str2.length) {
        return true
    }
    return false
}

console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));


// ➞ true
// ➞ false
// ➞ false