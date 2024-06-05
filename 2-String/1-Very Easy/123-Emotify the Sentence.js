// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
function emotify(str) {
    const obj = {
        "smile": ":D",
        "grin": ":)",
        "sad": ":(",
        "mad": ":P"
    }
    const words = str.split(' ');
    const result = words.map(word => obj[word] || word).join(' ');
    return result;
}
console.log(emotify("Make me smile"));
console.log(emotify("Make me grin"));
console.log(emotify("Make me sad"));
// ➞ "Make me :D"
// ➞ "Make me :)"
// ➞ "Make me :("