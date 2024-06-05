// Create a function to return the amount of potatoes there are in a string.

function potatoes(str) {
    str = str.toLowerCase();
    let count = 0;
    let index = 0;
    while (true) {
        index = str.indexOf("potato", index)
        if (index === -1) {
            break
        }
        count++
        index++
    }
    return count
}
console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));
// ➞ 1
// ➞ 2
// ➞ 1