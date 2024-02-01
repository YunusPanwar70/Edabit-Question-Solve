function wordLengths(arr) {
    // return arr.map((word) => word.length);

    let length = [];
    for (let i = 0; i < arr.length; i++) {
        length.push(arr[i].length)
    }
    return length
}

console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));



// ➞ [5, 5]
// ➞ [9, 12, 9]
// ➞ [3, 5, 9, 4, 2, 3, 8]