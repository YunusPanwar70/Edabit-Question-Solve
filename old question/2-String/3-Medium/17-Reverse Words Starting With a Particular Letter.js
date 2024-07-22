// Write a function that reverses all the words in a sentence that start with a particular letter.

function specialReverse(str, char) {
    return str.split(' ').map((item) => item.includes(char) ? item.split('').reverse().join('') : item).join(' ')
}
console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));
// ➞ "word sehcraes are repus fun"
// ➞ "first nam to walk on the noom"
// ➞ "retep repip dekcip delkcip sreppep"