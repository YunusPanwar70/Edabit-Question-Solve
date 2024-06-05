// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

function showdown(str1, str2) {
    let a = str1.indexOf("Bang!")
    let b = str2.indexOf("Bang!")
    // if(a<b)
    //     return "p1";
    // else if(a>b)
    //     return "p2"
    // else
    //     return "tie"
    switch (true) {
        case a < b:
            return "p1"
        case a > b:
            return "p2"
        default:
            return "tie"
    }
}
console.log(showdown("   Bang!        ", "        Bang!   "));
console.log(showdown("               Bang! ", "             Bang!   "));
console.log(showdown("     Bang!   ", "     Bang!   "));
// p1 draws his gun sooner than p2
// ➞ "p1"
// ➞ "p2"
// ➞ "tie"