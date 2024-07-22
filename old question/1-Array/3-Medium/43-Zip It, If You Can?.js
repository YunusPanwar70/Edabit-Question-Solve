// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
function zipIt(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push([arr1, arr2])
    }
    return result
}
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));

// ➞ [["Elise", "John"], ["Mary", "Rick"]]
// ➞ "sizes don't match"
// ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]