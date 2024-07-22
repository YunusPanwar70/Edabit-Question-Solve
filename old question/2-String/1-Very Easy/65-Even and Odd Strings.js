// Given a one word lowercase string txt, return another string such that even - indexed and odd - indexed characters are grouped and groups are space - separated.

function evenOddString(str) {
    let even = "";
    let odd = "";
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (str[i] % 2 === 0) {
            even += str[i]
        } else if (str[i] % 2 !== 0) {
            odd += str[i]
        }
    }
    return even, odd
}
console.log(evenOddString("mubashir"));
console.log(evenOddString("edabit"));
console.log(evenOddString("airforce"));
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space
// ➞ "mbsi uahr"
// ➞ "eai dbt"
// ➞ "aroc ifre"