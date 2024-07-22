// Create a function that moves all capital letters to the front of a word.

function capToFront(str) {
    const upper = str.split('').filter((item) => item === item.toUpperCase()).join('')
    const lower = str.split('').filter((item) => item === item.toUpperCase()).join('')
    return upper + lower
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
// ➞ "APhpy"
// ➞ "MENTmove"
// ➞ "OCAKEshrt"