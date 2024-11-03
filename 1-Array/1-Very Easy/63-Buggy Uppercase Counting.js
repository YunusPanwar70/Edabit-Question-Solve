// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// function countUppercase(arr) {
//     let str = arr.join('');
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         let loopVal = str[i];
//         if (str[i] === str[i].toUpperCase()) {
//             sum++
//         }
//     }
//     return sum
// }

function countUppercase(arr) {
    let str = arr.join('');
    return str.split('').filter((item) => item === item.toUpperCase() && item !== item.toLowerCase()).length
}
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]));
console.log(countUppercase(["little", "lower", "down"]));
console.log(countUppercase(["EDAbit", "Educate", "Coding"]));

// ➞ 6
// ➞ 0
// ➞ 5

// Notes
// Check the Resources for some array methods that might be helpful.
// This is originally a loose translation of a Python problem. However, the Pythonic List Comprehension syntax was never really adopted in JavaScript, so I elected to make our Uppercase counter broken in a few other ways.
// A lot of people (including me!) have rewritten the function entirely. I'm gonna make an executive decision and say that's fine here (even though complete rewrites are generally not a good idea!).