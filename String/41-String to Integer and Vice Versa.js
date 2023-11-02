function toInt(str) {
    return Number(str);
};

function toStr(str) {
    return str.toString();
};

console.log(toInt("77"));
console.log(toInt("532"));
console.log(toStr(77));
console.log(toStr(532));


// ➞ 77
// ➞ 532
// ➞ "77"
// ➞ "532"