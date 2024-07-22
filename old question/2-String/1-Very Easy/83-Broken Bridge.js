// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

// function isSafeBridge(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             return false
//         }
//     }
//     return true
// }

function isSafeBridge(str) {
    if (str.includes(" ")) {
        return false
    } else {
        return true
    }
}
console.log(isSafeBridge("####"));
console.log(isSafeBridge("## ####"));
console.log(isSafeBridge("#"));
// ➞ true
// ➞ false
// ➞ true