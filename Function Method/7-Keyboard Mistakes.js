// function keyboardMistakes(srr) {
//     const keyboardMap = {
//         '1': 'I',
//         '4': 'A',
//         '5': 'S',
//         '0': 'O'
//     };

//     let correctedStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         correctedStr += keyboardMap[char] || char;
//     }

//     return correctedStr;

// }
// console.log(keyboardMistakes("MUB45H1R"));
// console.log(keyboardMistakes("DUBL1N"));
// console.log(keyboardMistakes("51NG4P0RE"));

// // ➞ "MUBASHIR"
// ➞ "DUBLIN"
// ➞ "SINGAPORE"

function keyboardMistakes(str) {
    const keyboardMap = { '1': 'I', '4': 'A', '5': 'S', '0': 'O' };
    return str.split('').map(char => keyboardMap[char] || char).join('');
}

console.log(keyboardMistakes("MUB45H1R")); // Output: "MUBASHIR"
console.log(keyboardMistakes("DUBL1N")); // Output: "DUBLIN"
console.log(keyboardMistakes("51NG4P0RE")); // Output: "SINGAPORE"