// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function reverse(str) {
    return str.split(' ').map((word) => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
}
console.log(reverse("Reverse"));
console.log(reverse("This is a typical sentence."));
console.log(reverse("The dog is big."));


// ➞ "esreveR"
// ➞ "This is a lacipyt .ecnetnes"
// ➞ "The dog is big."