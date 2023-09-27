function length(str) {
    // return str.length
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
};


console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));


// ➞ 11
// ➞ 6
// ➞ 16