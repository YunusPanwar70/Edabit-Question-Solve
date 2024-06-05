// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
    let splitVal = str.split('');
    let sorted = splitVal.sort()
    return sorted.join('')
}
console.log(AlphabetSoup("hello"));
console.log(AlphabetSoup("edabit"));
console.log(AlphabetSoup("hacker"));
console.log(AlphabetSoup("geek"));
console.log(AlphabetSoup("javascript"));
// ➞ "ehllo"
// ➞ "abdeit"
// ➞ "acehkr"
// ➞ "eegk"
// ➞ "aacijprstv"