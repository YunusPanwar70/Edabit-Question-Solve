// Create a function that counts how many D's are in a sentence.

// function countDs(str) {
//     let lowerValue = str.toLowerCase()
//     let coundD = lowerValue.includes("d")
//     return coundD
// } Wrong

function countDs(str) {
    let matches = str.toLowerCase().match(/d/g);
    if (!matches) {
        return 0
    }
    return matches.length
}
console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));
// ➞ 4
// ➞ 3
// ➞ 3