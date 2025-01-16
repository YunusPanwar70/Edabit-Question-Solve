// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

function toScottishScreaming(str) {
    return str.replace(/aeiou/gi, 'e').toUpperCase();
}
console.log(toScottishScreaming("hello world"));
console.log(toScottishScreaming("Mr. Fox was very naughty"));
console.log(toScottishScreaming("Butterflies are beautiful!"));

// ➞ "HELLE WERLD"
// ➞ "MR. FEX WES VERY NEEGHTY"
// ➞ "BETTERFLEES ERE BEEETEFEL!"

// Notes
// Make sure to include all punctuation that is in the original string.
// You don't need any more namespaces than are already given.