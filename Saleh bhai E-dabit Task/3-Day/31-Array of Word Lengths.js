function wordLengths(arr) {
    return arr.map((item) => item.length);
}
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));
// ➞ [5, 5]
// ➞ [9, 12, 9]
// ➞ [3, 5, 9, 4, 2, 3, 8]