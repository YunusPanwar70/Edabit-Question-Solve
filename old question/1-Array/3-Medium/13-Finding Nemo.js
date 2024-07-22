// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'Nemo') {
            return `I found Nemo at ${i + 1}`
        }
    }
    return "I can't find Nemo :(";
}
console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
// ➞ "I found Nemo at 4!"
// ➞ "I found Nemo at 1!"
// ➞ "I found Nemo at 2!"