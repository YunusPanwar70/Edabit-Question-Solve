// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

function isPrefix(word, prefix) {
    return word.startsWith(prefix);
}
function isSuffix(word, suffix) {
    return word.endsWith(suffix);
}
console.log(isPrefix("automation", "auto"));    
console.log(isSuffix("arachnophobia", "phobia")); 
console.log(isPrefix("retrospect", "sub"));     
console.log(isSuffix("vocation", "logy"));      
// ➞ true
// ➞ true
// ➞ false
// ➞ false