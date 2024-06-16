// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str) {
    let volwels = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };
    return str.split('').map((item) => volwels[item] || item).join('')
}
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
// ➞ "j4v45cr1pt 15 c00l"
// ➞ "pr0gr4mm1ng 15 fun"
// ➞ "b3c0m3 4 c0d3r"