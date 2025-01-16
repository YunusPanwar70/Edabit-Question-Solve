// Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)

function findBrokenKeys(str1, str2) {
    let result = [];
    for (let i = 0; i < str1.length; i++) {
        // Check if characters mismatch and prevent duplicates
        if (str1[i] !== str2[i] && !result.includes(str1[i])) {
            result.push(str1[i]);
        }
    }
    return result;
}
console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));

// ➞ ["p"]
// ➞ ["y", "n"]
// ➞ ["b", "e", "v", "n"]

// arr.includes(str1[i]);