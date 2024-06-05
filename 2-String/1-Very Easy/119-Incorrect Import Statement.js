// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

function fixImport(str) {
    let words = str.split(' ');
    let temp = words[1];
    words[1] = words[3];
    words[3] = temp;
    return words.join(' ');
}
console.log(fixImport("import object from module_name"));
console.log(fixImport("import randint from random"));
console.log(fixImport("import pi from math"));

// ➞ "from module_name import object"
// ➞ "from random import randint"
// ➞ "from math import pi"