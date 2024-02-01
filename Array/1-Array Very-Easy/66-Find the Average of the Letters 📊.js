function averageIndex(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const sum = arr.map(letter => alphabet.indexOf(letter) + 1).reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;

    return parseFloat(average.toFixed(2));
}

console.log(averageIndex(["a", "b", "c", "i"]));
console.log(averageIndex(["e", "d", "a", "b", "i", "t"]));
console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]));


// ➞ 3.75
// ➞ 6.83
// ➞ 12.62