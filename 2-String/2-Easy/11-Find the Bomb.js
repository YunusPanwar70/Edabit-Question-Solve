// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

function bomb(str) {
    return str.includes("bom") ? 'Duck!!!' : 'There is no bomb, relax.'
}
console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you think there is a bomb?"));
console.log(bomb("This goes boom!!!"));
// ➞ "Duck!!!"
// ➞ "Duck!!!"
// ➞ "There is no bomb, relax."