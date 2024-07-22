// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

function asciiCapitalize(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let ascii = char.charCodeAt(0);
        if (ascii % 2 === 0) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}
console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));
// ➞ "To Be oR NoT To Be!"
// ➞ "THe LiTTLe meRmaiD"
// ➞ "oH wHaT a BeauTiFuL moRNiNg."