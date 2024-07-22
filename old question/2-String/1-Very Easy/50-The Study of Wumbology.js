// Create a function that flips M's to W's (all uppercase).

function wumbo(str) {
    return str.replace(/M/g, 'W')
}
console.log(wumbo("I LOVE MAKING CHALLENGES"));
console.log(wumbo("MEET ME IN WARSAW"));
console.log(wumbo("WUMBOLOGY"));
// ➞ "I LOVE WAKING CHALLENGES"
// ➞ "WEET WE IN WARSAW"
// ➞ "WUWBOLOGY"