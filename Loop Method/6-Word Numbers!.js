function word(str) {
    let value = {
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
    for (const i in value) {
        if (value.hasOwnProperty(i) && i === str) {
            return value[i]
        }
    }
    return -1
}

console.log(word("one"));
console.log(word("two"));
console.log(word("nine"));


// ➞ 1
// ➞ 2
//  ➞ 9