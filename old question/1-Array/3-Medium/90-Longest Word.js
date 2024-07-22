// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

function longestWord(str) {
    let words = str.split(' ');
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]
        }
    }
    return longest
}
console.log(longestWord("Hello darkness my old friend")); //➞ "darkness"
console.log(longestWord("Hello there mate")); //➞ "Hello"
console.log(longestWord("Kayla's toy is plastic")); //➞ "Kayla's"