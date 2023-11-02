function word(str) {
    let a = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0,
    }
    return a[str]
}

console.log(word("one"));
console.log(word("two"));
console.log(word("nine"));


// ➞ 1
// ➞ 2
// ➞ 9