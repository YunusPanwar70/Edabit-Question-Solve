// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".
function findNemo(arr) {

}
console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
// ➞ "I found Nemo at 4!"
// ➞ "I found Nemo at 1!"
// ➞ "I found Nemo at 2!"


// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return the first one.