// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough
function mdFormat(s1, s2) {
    if (s2 === "b") {
        return `**${s1}**`
    } else if (s2 === "i") {
        return `_${s1}_`
    } else if (s2 === "c") {
        return `'${s1}'`
    } else if (s2 === "s") {
        return `~~${s1}~~`
    }
}
console.log(mdFormat("Bold", "b"));
console.log(mdFormat("leaning text", "i"));
console.log(mdFormat("Edabit", "c"));
console.log(mdFormat("That's a strike!", "s"));
// ➞ "**Bold**"
// ➞ "_leaning text_"
// ➞ "`Edabit`"
// ➞ "~~That's a strike!~~"