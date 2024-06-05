// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str) {
    const vowels = 'aeiouAEIOU'
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i]
        }
    }
    return result
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
console.log(removeVowels("We're gonna build a wall!"));
console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// ➞ "W'r gnn bld  wll!"
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"